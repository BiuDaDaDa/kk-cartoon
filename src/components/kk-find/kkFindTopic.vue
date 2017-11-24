<template>
<div @touchstart="changePos1" @touchend="changePos2" class="myTopics">
  <div  ref="listSort" class="listSort" style="top: 0px">
    <span v-for="tag in tags" class="tagSort"
        :class="{activeTagSort:tagId==tag['tag_id']}" @click="changeTagId(tag['tag_id'])">
      <mt-tab-item :id="tagId==tag['tag_id']">{{tag['title']}}</mt-tab-item>
    </span>
  </div>
  <div class="myTopicNav">
    <span class="muLu" :class="{activeMuLu:isShow === 1}" @click="changeType(1)">推荐</span>
    <span class="fenGe">|</span>
    <span class="muLu" :class="{activeMuLu:isShow === 2}" @click="changeType(2)">最火热</span>
    <span class="fenGe">|</span>
    <span class="muLu" :class="{activeMuLu:isShow === 3}" @click="changeType(3)">新上架</span>
  </div>
    <div  v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="100">
      <div v-for="myTopic in topics" class="box">
        <div class="bLeft">
          <img :src="myTopic['cover_image_url']" alt="">
        </div>
        <div class="bRight">
          <p class="title">{{myTopic['title']}}</p>
          <p v-show="false" class="tags">
            <span></span>
          </p>
          <p class="author">{{myTopic['user']['nickname']}}</p>
          <div class="jie" v-show="isShow===1">
            <span class="zan">
              <img src="../../assets/kk-find/kk-find-zan.png" alt="">
              <span>{{myTopic['likes_count']>100000?Math.floor(myTopic['likes_count']/10000)+'万':myTopic['likes_count']}}</span>
            </span>
            <span  class="comment">
              <img src="../../assets/kk-find/kk-find-comment.png" alt="">
              <span>{{myTopic['comments_count']>100000?Math.floor(myTopic['comments_count']/10000)+'万':myTopic['comments_count']}}</span>
            </span>
          </div>
          <div class="jie" v-show="isShow===2">
            <span class="comment">
              <img src="../../assets/kk-find/kk-find-hot.png" alt="">
              <span>{{myTopic['view_count']>100000?myTopic['view_count']>100000000?Math.floor(myTopic['view_count']/100000000)+'亿':Math.floor(myTopic['view_count']/10000)+'万':myTopic['view_count']}}</span>
            </span>
          </div>
          <div class="jie" v-show="isShow===3">
            <span class="comment">
              <span>{{myTopic['latest_comic_title']}}</span>
            </span>
          </div>
        </div>
       </div>
    </div>
</div>
</template>

<script>
  export default {
    name: '',
    props: {
      goShow: {
        type: Boolean
      }
    },
    data () {
      return {
        tags: [],
        topics: [],
        tagId: '0',
        since: '0',
        gender: '1',
        sort: 1,
        diMsg: '',
        loading: false, // 加载状态
        isShow: 1,
        scrollTop1: '',
        scrollTop2: '',
        selected: ''
      }
    },
    methods: {
      changeTagId (evId) {
        this.loading = true
        // 初始化状态
        this.sort = 1
        this.since = '0'
        this.topics = []
        this.tagId = evId
        this.HuoQuListSort()
      },
      changeType (type) {
        this.isShow = type
        this.loading = true
        this.since = '0'
        this.topics = []
        this.sort = type
        this.HuoQuListSort()
      },
      HuoQuListSort () {
        this.$request({
          type: 'get',
          url: 'kuaikanv1/topic_new/lists/get_by_tag',
          header: {
            'X-Device': 'A:eef09de00f4e0b31'
          },
          params: {
            'tag': this.tagId,
            'since': this.since,
            'count': '20',
            'gender': this.gender,
            'sort': this.sort
          },
          success: function (res) {
            // 判断是否有tags
            if (res['data']['data']['tags'] !== undefined) {
              this.tags = res['data']['data']['tags']
            }
            this.since = res['data']['data']['since']
//            console.log(this.since)
//            console.log(res['data']['data'])
            // 加载数据
            this.topics = this.topics.concat(res['data']['data']['topics'])
            // 判断是否全部加载
            if (res['data']['data']['topics'].length < 20) {
              this.diMsg = '全部加载'
              console.log(this.diMsg)
            }
            this.loading = false
          },
          failed: function (err) {
            console.log(err)
          }
        })
      },
      loadMore () {
        if (!this.goShow && !this.loading) {
          this.loading = true
          setTimeout(() => {
            this.HuoQuListSort()
          }, 2000)
        }
      },
      changePos1 () {
        this.scrollTop1 = document.documentElement.scrollTop || document.body.scrollTop || window.pageYflset || 0
      },
      changePos2 () {
        this.scrollTop2 = document.documentElement.scrollTop || document.body.scrollTop || window.pageYflset || 0
        if (this.scrollTop1 !== this.scrollTop2) {
          this.changePos()
        }
      },
      changePos () {
        let myTimer = null
        let _this = this
        // 向下滑动
        if (this.scrollTop1 < this.scrollTop2 && this.$refs.listSort.style.top === 0 + 'px') {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.listSort.style.top = _this.$refs.listSort.offsetTop - 1 + 'px'
            if (_this.$refs.listSort.offsetTop === -40) {
              clearInterval(myTimer)
            }
          }, 10)
        } else if (this.scrollTop1 > this.scrollTop2 && this.$refs.listSort.style.top === -40 + 'px') {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.listSort.style.top = _this.$refs.listSort.offsetTop + 1 + 'px'
            if (_this.$refs.listSort.offsetTop === 0) {
              clearInterval(myTimer)
            }
          }, 10)
        }
      }
    },
    mounted () {
      this.loading = true
      this.HuoQuListSort()
    }
  }
</script>

<style scoped lang=less>
  .listSort{
    position: fixed;
    width: 100%;
    padding-top: 60px;
    z-index: 11;
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }
  .listSort .tagSort{
    display: block;
    font-size: 15px;
    padding: 2.5% 0;
    margin: 0 4%;
    border-bottom: 3px solid #fff;
    text-decoration: none;
  }
  .listSort .activeTagSort{
    border-bottom:3px solid orange;
    color: orange;
  }
  .myTopicNav{
    padding: 2.5% 3%;
  }
  .myTopicNav .muLu{
    font-size: 14px;
  }
  .activeMuLu{
    color: orange;
  }
  .myTopicNav .fenGe{
    font-size: 13px;
    color: #aaa;
    padding: 0 2.5%;
  }
  .box{
    overflow: hidden;
    border-bottom: 1px solid #ccc;
  }
.bLeft{
  width: 45%;
  height: 117px;
  margin-right: 5%;
  float: left;
}
  .bLeft img{
    width: 100%;
    height:100%;
  }
  .bRight{
    width: 50%;
    float: left;
    padding-top: 2%;
  }
  .bRight .title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .bRight .author{
    font-size: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #aaa;
  }
  .bRight .jie{
    margin-top: 17%;
  }
  .bRight .jie img{
    width: 16px;
    height: 16px;
    position: relative;
    top: 3px;
    z-index: 10;
  }
  .bRight .jie span{
    font-size: 13px;
    color: #666;
  }
  .bRight .jie .zan{
    margin-right: 3%;
  }
</style>
