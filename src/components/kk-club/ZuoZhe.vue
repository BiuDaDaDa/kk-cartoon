<template>
  <div>
    <div class="top">
      <div class="top_up">
        <img @click="isback" src="../../assets/hans/houtui.png" alt="">
        <div class="top_up_right">
          <img src="../../assets/hans/jia.png" alt="">
          <span>关注</span>
        </div>
      </div>
      <div class="top_usertx">
        <img class="usertx" :src="zlarray.avatar_url" alt="">
        <p class="username1">{{zlarray.nickname}}</p>
        <p class="fensi" v-text="qq(zlarray.follower_cnt)"></p>
        <p class="renzheng">{{zlarray.u_intro}}</p>
      </div>
    </div>
    <!---->
    <div class="box">
      <span class="tabs" ref="zl" @click="clicked">资料</span>
      <span class="tabs" ref="dt" @click="dianji">动态</span>
    </div>
    <!---->
    <div class="box1_bg">
    <div class="box1" v-for="(dt, i) in dtarray" v-show="isShow">
      <div class="box_up">
        <div class="box_up_left">
          <img class="usertx1" :src="dt.user.avatar_url" alt="">
          <span class="username">{{dt.user.nickname}}</span>
        </div>
      </div>
      <div class="box_content">
        <p v-html="huanhang(dt.content.text)"></p>
      </div>
      <div class="box_img">
        <img :class="'fbtu'+ dt.content.images.length" v-for="(value, index) in dt.content.images" :src="dt.content.image_base + value" alt="">
      </div>
      <div class="box_bottom">
        <div class="box_bottom_left">
          <span v-html="getLocalTime(dt.updated_at)"></span>
        </div>
        <div class="box_bottom_right">
          <div class="dianzang">
            <img src="../../assets/hans/dianzang.png" alt="">&nbsp;
            <span>{{dt.likes_count}}</span>
          </div>
          <div class="pinglun" @click="pinglun(dt.share_url)">
            <img src="../../assets/hans/pinglun.png" alt="">&nbsp;
            <span>{{dt.comments_count}}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="box2" v-show="isSee">
      <p class="p1">简介</p>
      <p class="p1">{{zlarray.intro || '作者辛苦赶稿,都没来的及填写资料哦'}}</p>
      <p class="p1">TA的作品</p>
      <div class="zuoping"  v-for="(topic, i) in topics" @click="jump(topic.id)">
        <img class="zuopingtp" :src="topic.cover_image_url" alt="">
        <div class="zuoping_left">
          <p class="zuopingtitle">{{topic.title}}</p>
          <div class="hidden">
            <span class="zuopingjieshao">{{topic.description}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ZuoZhe',
    data () {
      return {
        zlarray: [],
        dtarray: [],
        topics: [],
        isShow: true,
        isSee: false,
        userid: this.$route.params.userid
      }
    },
    mounted () {
      this.fecthHomeData()
      this.fecthDongTaiData()
      this.$refs.dt.style.borderBottom = '2px solid #f0d63e'
    },
    methods: {
      fecthHomeData () {
        let that = this
        this.$request({
          type: 'get',
          url: '/kuaikanv1/users/' + this.userid,
          headers: {},
          params: {
          },
          success: function (res) {
            that.isloading = true
            that.zlarray = res.data.data
            that.topics = res.data.data.topics
          },
          failed: function () {}
        })
      },
      fecthDongTaiData () {
        let that = this
        this.$request({
          type: 'get',
          url: '/kuaikanv1/feeds/feed_lists',
          headers: {},
          params: {
            uid: this.userid,
            since: '0',
            page_num: '1',
            catalog_type: '3'
          },
          success: function (res) {
            that.isloading = true
            that.dtarray = res.data.data.feeds
//            console.log(that.dtarray)
          },
          failed: function () {}
        })
      },
      huanhang: function (val) {
        if (val.indexOf(/\n/g) === -1) {
          return val.replace(/\n/g, '<br/>')
        }
      },
      getLocalTime: function (nS) {
        if ((new Date(parseInt(nS)).getHours()) < 10) {
          return (new Date(parseInt(nS)).getMonth() + 1) + '-' + (new Date(parseInt(nS)).getDate()) + '&nbsp;' + '0' + (new Date(parseInt(nS)).getHours()) + ':' + (new Date(parseInt(nS)).getMinutes())
        } else if ((new Date(parseInt(nS)).getMinutes()) < 10) {
          return (new Date(parseInt(nS)).getMonth() + 1) + '-' + (new Date(parseInt(nS)).getDate()) + '&nbsp;' + (new Date(parseInt(nS)).getHours()) + ':' + '0' + (new Date(parseInt(nS)).getMinutes())
        } else if ((new Date(parseInt(nS)).getHours()) < 10 && (new Date(parseInt(nS)).getMinutes()) < 10) {
          return (new Date(parseInt(nS)).getMonth() + 1) + '-' + (new Date(parseInt(nS)).getDate()) + '&nbsp;' + '0' + (new Date(parseInt(nS)).getHours()) + ':' + '0' + (new Date(parseInt(nS)).getMinutes())
        } else {
          return (new Date(parseInt(nS)).getMonth() + 1) + '-' + (new Date(parseInt(nS)).getDate()) + '&nbsp;' + (new Date(parseInt(nS)).getHours()) + ':' + (new Date(parseInt(nS)).getMinutes())
        }
      },
      clicked () {
        this.isShow = false
        this.isSee = true
        this.$refs.dt.style.borderBottom = 'none'
        this.$refs.zl.style.borderBottom = '2px solid #f0d63e'
      },
      dianji () {
        this.isSee = false
        this.isShow = true
        this.$refs.zl.style.borderBottom = 'none'
        this.$refs.dt.style.borderBottom = '2px solid #f0d63e'
      },
      isback () {
//        this.$router.go(-1)
        window.history.back()
      },
      qq (val) {
        if (val >= 10000) {
          val = parseInt(val / 10000) + '万粉丝'
        } else if (val <= 10000) {
          val = val + '粉丝'
        }
        return val
      },
      jump (ev) {
        this.dataid = ev
        this.$router.push({name: 'kkcartoontitle', params: {id: this.dataid}})
      },
      pinglun (ev) {
        this.myid = ev.split('feeds/')[1]
        this.$router.push({path: `/kk-daping/${this.myid}`})
      }
    }
  }
</script>

<style scoped lang="less">
  .top{
    width: 100%;
    background-image: url("../../assets/hans/bg.jpg");
    background-repeat: no-repeat;
    background-size:cover;
  }
  .top_up{
    display: flex;
    justify-content: space-between;
    padding: 2.71vh 4.83vw;
  }
  .top_up_right{
    padding: 0.679vh 1.69vw;
    background-color: rgb(240,214,62);
    border-radius: 20px;
  }
  .top_usertx{
    text-align: center;
    padding-bottom: 5.46vh;
    line-height: 4.07vh;
    position: relative;
  }
  .top_usertx:before{
    content: '';
    background: url(../../assets/hans/v.png);
    background-repeat: repeat;
    background-size: 4.83vw 2.71vh;
    position: absolute;
    left: 54.34vw;
    top: 8.15vh;
    z-index: 10;
    width: 4.83vw;
    height: 2.71vh;
  }
  .usertx{
    border: 0.24vw solid #ccc;
    border-radius: 50%;
    width: 19.32vw;
    height:10.86vh;
  }
  .fensi{
    width: 18%;
    background-color: rgba(0,0,0,.5);
    margin: 0 auto;
    padding: 0px 1.2vw;
    border-radius: 50px;
    color: #fde23d;
    font-size: 12px;
    line-height: 2.71vh;
  }
  /**/
  .box{
    border-bottom: 0.24vw solid #ccc;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }
  .tabs{
    color: black;
    box-sizing: border-box;
    padding: 1.35vh 6.03vw;
  }
  /**/
  .box1_bg{
    background: rgb(247,247,247);
  }
  .box1{
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 2.41vw;
    margin-bottom: 0.679vh;
  }
  .box_up{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box_up_left{
    display: flex;
    align-items: center;
    position: relative;
  }
  .box_up_left:before{
    content: '';
    background: url(../../assets/hans/v.png);
    background-repeat: repeat;
    background-size: 4.1vw 2.1vh;
    position: absolute;
    left: 7.97vw;
    bottom: 0;
    z-index: 10;
    width: 4.1vw;
    height: 2.1vh;
  }
  .box_up_right{
    padding: 0.679vh 1.69vw;
    background-color: rgb(240,214,62);
    border-radius: 20px;
  }
  .box_content{
    padding-top: 1.35vh;
    padding-bottom: 4.07vh;
  }
  .box_img{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-left: 2.41vw;
  }
  .box_bottom{
    display: flex;
    justify-content: space-between;
    margin-top: 0.679vh;
  }
  .usertx1{
    width: 12.07vw;
    height: 6.79vh;
    border-radius: 50%;
    border: 0.24vw solid #ccc;
    margin-right: 2.41vw;
  }
  .fbtu1{
    width: 60%;
    height: 32.11vh;
    object-fit: cover;
  }
  .fbtu2,.fbtu3,.fbtu5,.fbtu6,.fbtu7,.fbtu8,.fbtu9{
    width: 30%;
    height: 16.05vh;
    margin-left: 1.2vw;
    margin-bottom: 0.67vh;
    object-fit: cover;
  }
  .fbtu4{
    width: 29%;
    height: 16.05vh;
    margin-left: 1.2vw;
    margin-bottom: 0.67vh;
    object-fit: cover;
  }
  .fbtu4:nth-of-type(2n){
    margin-right: 30%;
  }
  .box_bottom_right{
    display: flex;
    align-items: center;
  }
  .dianzang{
    display: flex;
    align-items: center;
    margin-right: 3.6vw;
  }
  .pinglun{
    display: flex;
    align-items: center;
  }
  /**/
  .box2{
    padding: 0 7.24vw 0 2.41vw;
  }
  .zuoping{
    display: flex;
    height: 10.869vh;
    padding: 0.679vh 0;
  }
  .zuopingtp{
    width: 40%;
    object-fit: cover;
  }
  .hidden{
    height: 13.58vh;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #7e8c8d;
  }
  .p1{
    line-height: 40px;
  }
  .zuoping_left{
    margin-left: 5.43vh;
  }
  .username{
    color: darkorange;
  }
  .username1,.renzheng{
    color: white;
  }
  .renzheng{
    font-size: 13px;
  }
  .zuopingjieshao{
    font-size: 13px;
    color: #7e8c8d;
  }
</style>
