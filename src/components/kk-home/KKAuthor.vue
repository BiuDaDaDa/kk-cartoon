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
        <p style="color: #FDFDFD">{{zlarray.nickname}}</p>
        <p class="fensi" v-text="qq(zlarray.follower_cnt)"></p>
        <p>{{zlarray.u_intro}}</p>
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
            <div class="pinglun">
              <img src="../../assets/hans/pinglun.png" alt="">&nbsp;
              <span>{{dt.comments_count}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box2" v-show="isSee">
      <p class="p1">简介</p>
      <p class="p1">{{zlarray.intro || '作者辛苦赶稿,都没来得及填写资料哦'}}</p>
      <p class="p1">TA的作品</p>
      <div class="zuoping"  v-for="(topic, i) in topics">
        <img class="zuopingtp" :src="topic.cover_image_url" alt="">
        <div class="zuoping_left">
          <p class="zuopingtitle">{{topic.title}}</p>
          <div class="hidden">
            <div class="zuopingjieshao">{{topic.description}}</div>
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
        isSee: true,
        userid: this.$route.params.id
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
        this.$router.go(-1)
      },
      qq (val) {
        if (val >= 100000) {
          val = parseInt(val / 10000) + '  万粉丝'
        } else {
          val = val + '  粉丝'
        }
        return val
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
    padding: 20px 20px;
  }
  .top_up_right{
    padding: 5px 7px;
    background-color: rgb(240,214,62);
    border-radius: 20px;
  }
  .top_usertx{
    text-align: center;
    padding-bottom: 40px;
    line-height: 30px;
  }
  .usertx{
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  .fensi{
    width: 20%;
    background-color: rgba(0,0,0,.5);
    margin: 0 auto;
    padding: 2px 6px;
    border-radius: 50px;
    font-size: 13px;
    color: #FCD240;
  }
  /**/
  .box{
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }
  /*2px solid rgb(255,255,255)*/
  .tabs{
    color: black;
    box-sizing: border-box;
    padding: 10px 25px;
  }
  /**/
  .box1_bg{
    background: rgb(247,247,247);
  }
  .box1{
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 5px;
  }
  .box_up{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box_up_left{
    display: flex;
    align-items: center;
  }
  .box_up_right{
    padding: 5px 7px;
    background-color: rgb(240,214,62);
    border-radius: 20px;
  }
  .box_content{
    padding-top: 10px;
    padding-bottom: 30px;
  }
  .box_img{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
  }
  .box_bottom{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .usertx1{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-right: 10px;
  }
  .username {
    color: #F97B2E;
  }
  .fbtu1{
    width: 60%;
    height: 236.39px;
    object-fit: cover;
  }
  .fbtu2,.fbtu3,.fbtu5,.fbtu6,.fbtu7,.fbtu8,.fbtu9{
    width: 30%;
    height: 118.19px;
    margin-left: 5px;
    margin-bottom: 5px;
    object-fit: cover;
  }
  .fbtu4{
    width: 29%;
    height: 118.19px;
    margin-left: 5px;
    margin-bottom: 5px;
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
    margin-right: 15px;
  }
  .pinglun{
    display: flex;
    align-items: center;
  }
  /**/
  .box2{
    padding: 0 30px 0 10px;
  }
  .zuoping{
    display: flex;
    height: 80px;
    padding: 5px 0;
  }
  .zuopingtp{
    width: 40%;
    object-fit: cover;
  }
  .hidden{
    display: inline-block;
    height: 50px;
    width: 200px;
    font-size: 12px;
    margin-top: 10px;
    color: #B4B4B4;
    overflow:hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .p1{
    line-height: 40px;
  }
  .zuoping_left{
    margin-left: 10px;
  }
</style>

