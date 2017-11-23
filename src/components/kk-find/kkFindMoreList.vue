<template>
<div class="kkFindMoreList">
  <div class="topNav">
    <img class="back" src="" alt="<">
    {{title}}
  </div>
  <div class="wrap"  v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="100">
    <div v-for="myTopic in topics" class="box">
      <div class="bLeft">
        <img :src="myTopic['cover_image_url']" alt="">
      </div>
      <div class="bRight">
        <button class="care">+关注</button>
        <p class="title">{{myTopic['title']}}</p>
        <p v-show="true" class="tags">
          <span v-for="tag in myTopic['category']">{{tag}}</span>
        </p>
        <p v-show="false" class="author">{{myTopic['user']['nickname']}}</p>
        <div class="jie">
            <span class="zan">
              <img src="../../assets/kk-find/kk-find-zan.png" alt="">
              <span>{{myTopic['likes_count']>100000?Math.floor(myTopic['likes_count']/10000)+'万':myTopic['likes_count']}}</span>
            </span>
          <span  class="comment">
              <img src="../../assets/kk-find/kk-find-comment.png" alt="">
              <span>{{myTopic['comments_count']>100000?Math.floor(myTopic['comments_count']/10000)+'万':myTopic['comments_count']}}</span>
            </span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import bus from '@/common/js/eventBus'
  export default {
    name: '',
    props: {
      goShow: {
        type: Boolean
      }
    },
    data () {
      return {
        action: '',
        title: '',
        topics: [],
        module_list_id: '262',
        offset: '0',
        diMsg: '',
        loading: false // 加载状态
      }
    },
    methods: {
      HuoQuListSort () {
        this.$request({
          type: 'get',
          // api.kuaikanmanhua.com/v1/topic_new/discovery_module_list/262?offset=20&limit=20&style=3
          url: 'kuaikanv1/topic_new/discovery_module_list/262',
          header: {},
          params: {
            offset: this.offset,
            limit: 20,
            style: 3
          },
          success: function (res) {
            console.log(res['data']['data'])
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
          if (this.diMsg === '') {
            this.offset += 20
            setTimeout(() => {
              this.HuoQuListSort()
            }, 2000)
          }
        }
      }
    },
    mounted () {
      this.loading = true
      this.HuoQuListSort()
      console.log(this.action, this.title)
      bus.$on('chuan', function (act, tle) {
        this.action = act
        console.log(1, act, tle)
        console.log(this.action, this.title)
        this.title = tle
      })
    }
  }
</script>

<style scoped lang=less>
  .topNav{
    text-align: center;
    line-height: 40px;
    font-size: 17px;
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: red;
  }
  .topNav .back{
    position: absolute;
    left: 5%;
  }
  .wrap{
    margin-top: 10%;
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
    position: relative;
  }
  .bRight .care{
    position: absolute;
    top: 10%;
    right: 10%;
    padding: 2%;
    border-radius: 10px;
    background-color: yellow;
    outline: none;
    border: 1px solid #eee;
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
  .bRight .tags span{
    font-size: 13px;
    color: #aaa;
    margin-right: 2%;
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
