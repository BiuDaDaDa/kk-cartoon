<template>
<div @touchstart="changePos1" @touchend="changePos2" class="myTopics">
  <div  ref="kkFindNav" class="kkFindNav"  style="top: 0px" >
    <div class="Nav" :class="{activeNav:!isShow}">
      <div class="diBg" :class="{actDiBg:!isShow}">
        <div @click="genderChange" v-if="gender===1" class="changeSex" >
          <span class="man">
            <img src="../../assets/kk-find/kk-find-man1.png" alt="男">
          </span>
          <span class="woman">
            <img src="../../assets/kk-find/kk-find-woman1.png" alt="女">
          </span>
        </div>
        <div @click="genderChange" v-if="gender===0" class="changeSex" >
          <span class="man1">
            <img src="../../assets/kk-find/kk-find-man1.png" alt="男">
          </span>
          <span class="woman1">
            <img src="../../assets/kk-find/kk-find-woman1.png" alt="女">
          </span>
        </div>
      </div>
      <div class="btnN">
        <span @click="changeTui" :class="{actBtn:isShow}">推荐</span>
        <span @click="changeFen" :class="{actBtn:!isShow}">分类</span>
      </div>
      <div class="diBg" :class="{actDiBg:!isShow}">
        <img src="../../assets/kk-find/kk-find-search1.png" alt="🔍">
      </div>
    </div>
  </div>
  <div class="follow">
  <div  ref="listSort" class="listSort" style="top: 0px">
    <span v-for="tag in tags" class="tagSort"
        :class="{activeTagSort:tagId==tag['tag_id']}" @click="changeTagId(tag['tag_id'])">
      <mt-tab-item :id="tagId==tag['tag_id']">{{tag['title']}}</mt-tab-item>
    </span>
  </div>
  <div class="myTopicNav">
    <span class="muLu" :class="{activeMuLu:isShow1 === 1}" @click="changeType(1)">推荐</span>
    <span class="fenGe">|</span>
    <span class="muLu" :class="{activeMuLu:isShow1 === 2}" @click="changeType(2)">最火热</span>
    <span class="fenGe">|</span>
    <span class="muLu" :class="{activeMuLu:isShow1 === 3}" @click="changeType(3)">新上架</span>
  </div>
    <div  v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="100">
      <div v-for="myTopic in topics" @touchmove="changeGo1" @touchend="changeGo2(myTopic['id'])" class="box">
        <div class="bLeft">
          <img :src="myTopic['cover_image_url']" alt="">
        </div>
        <div class="bRight">
          <p class="title">{{myTopic['title']}}</p>
          <p v-show="false" class="tags">
            <span></span>
          </p>
          <p class="author">{{myTopic['user']['nickname']}}</p>
          <div class="jie" v-show="isShow1===1">
            <span class="zan">
              <img src="../../assets/kk-find/kk-find-zan.png" alt="">
              <span>{{myTopic['likes_count']>100000?Math.floor(myTopic['likes_count']/10000)+'万':myTopic['likes_count']}}</span>
            </span>
            <span  class="comment">
              <img src="../../assets/kk-find/kk-find-comment.png" alt="">
              <span>{{myTopic['comments_count']>100000?Math.floor(myTopic['comments_count']/10000)+'万':myTopic['comments_count']}}</span>
            </span>
          </div>
          <div class="jie" v-show="isShow1===2">
            <span class="comment">
              <img src="../../assets/kk-find/kk-find-hot.png" alt="">
              <span>{{myTopic['view_count']>100000?myTopic['view_count']>100000000?Math.floor(myTopic['view_count']/100000000)+'亿':Math.floor(myTopic['view_count']/10000)+'万':myTopic['view_count']}}</span>
            </span>
          </div>
          <div class="jie" v-show="isShow1===3">
            <span class="comment">
              <span>{{myTopic['latest_comic_title']}}</span>
            </span>
          </div>
        </div>
       </div>
    </div>
  </div>
  <FooterNav ></FooterNav>
</div>
</template>

<script>
  import FooterNav from '../../components/kk-nav/FooterNav'
  export default {
    name: '',
    components: {
      FooterNav
    },
    props: {
      BB: {}
    },
    data () {
      return {
        tags: [],
        topics: [],
        tagId: '0',
        since: '0',
        sort: 1,
        diMsg: '',
        loading: false, // 加载状态
        isShow: false,
        isShow1: 1,
        scrollTop1: '',
        scrollTop2: '',
        isGo: 1
      }
    },
    methods: {
      changeTui () {
        if (!this.isShow) {
          this.isShow = true
          this.$router.push({path: '/kkFind'})
        }
      },
      changeFen () {
        if (this.isShow) {
          this.isShow = false
          this.$router.push({path: '/kkFindFen'})
        }
      },
      changeTagId (evId) {
        this.loading = true
        // 初始化状态
        this.since = '0'
        this.topics = []
        this.tagId = evId
        this.HuoQuListSort()
      },
      changeType (type) {
        this.isShow1 = type
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
        if (!this.loading) {
          this.loading = true
          setTimeout(() => {
            this.HuoQuListSort()
          }, 2000)
        }
      },
      changePos1 () {
        this.scrollTop1 = document.documentElement.scrollTop ||
          document.body.scrollTop || window.pageYflset || 0
      },
      changePos2 () {
        this.scrollTop2 = document.documentElement.scrollTop ||
          document.body.scrollTop || window.pageYflset || 0
        if (this.scrollTop1 !== this.scrollTop2) {
          this.changePos()
        }
      },
      changePos () {
        let myTimer = null
        let myTimer2 = null
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
        if (this.scrollTop1 < this.scrollTop2 && this.$refs.kkFindNav.offsetTop === 0) {
          clearInterval(myTimer2)
          myTimer2 = setInterval(function () {
            _this.$refs.kkFindNav.style.top = _this.$refs.kkFindNav.offsetTop - 1 + 'px'
            if (_this.$refs.kkFindNav.offsetTop === -60) {
              clearInterval(myTimer2)
            }
          }, 10)
        } else if (this.scrollTop1 > this.scrollTop2 && this.$refs.kkFindNav.offsetTop === -60) {
          clearInterval(myTimer2)
          myTimer2 = setInterval(function () {
            _this.$refs.kkFindNav.style.top = _this.$refs.kkFindNav.offsetTop + 1 + 'px'
            if (_this.$refs.kkFindNav.offsetTop === 0) {
              clearInterval(myTimer2)
            }
          }, 10)
        }
      },
      genderChange () {
        this.$store.commit('genderTo')
        this.since = 0
        this.tagId = '0'
        this.topics = []
        this.HuoQuListSort()
      },
      changeGo1 () {
        this.isGo = 0
      },
      changeGo2 (tarId) {
        if (this.isGo === 1) {
          this.cartoonGo(tarId)
        } else {
          this.isGo = 1
        }
      },
      cartoonGo (tarId) {
        this.$router.push({name: 'kkcartoontitle', params: {id: tarId}})
      }
    },
    computed: {
      gender () {
        return this.$store.state.gender
      }
    },
    mounted () {
      this.loading = true
      this.HuoQuListSort()
    }
  }
</script>

<style scoped lang=less>
  .myTopics{
    padding-bottom:15%;
  }
  .kkFindNav{
    padding-top: 20px;
    width: 100%;
    position: fixed;
    z-index: 20;

  }
  .Nav{
    display: flex;
    height: 40px;
    padding:0 5%;
    justify-content: space-between;
    align-items: center;
  }
  .diBg{
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(0,0,0,.6);
  }
  .actDiBg{
    background-color: #fff;
  }
  .changeSex{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .man,.woman,.man1,.woman1{
    display: flex;
    align-items: center;
    width: 9px;
    height: 10px;
    position: absolute;
    padding: 1px;
    border: 1px solid rgba(0,0,0,.6);
    border-radius: 3px;
    background-color: rgb(255,255,255);

  }
  .changeSex .man{
    z-index: 30;
    bottom: 15%;
    right: 15%;
  }
  .changeSex .woman{
    top: 15%;
    left: 15%;
    z-index: 28;
  }
  .changeSex .man1{
    top: 15%;
    left: 15%;
    z-index: 28;
  }
  .changeSex .woman1{
    z-index: 30;
    bottom: 15%;
    right: 15%;
  }
  .changeSex img{
    width: 100%;
    height: 100%;
  }
  .btnN{
    height: 24px;
    width: 28%;
    background-color: rgba(0,0,0,.6);
    border-radius: 12px;
    border:1px solid rgba(0,0,0,.6);
  }
  .btnN span{
    display: inline-block;
    font-size: 14px;
    font-weight: 200;
    text-align: center;
    line-height: 24px;
    color: #fff;
    padding: 0 10%;
    outline: none;
  }
  .btnN .actBtn{
    background-color: #fff;
    color: orange;
    border-radius: 12px;
  }
  .activeNav{
    background-color: #fff;
  }
  .follow{
    padding-top: 38%;
  }
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
  background-image: url(../../assets/kk-find/kk-mhbg.jpg);
  background-repeat:no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
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
