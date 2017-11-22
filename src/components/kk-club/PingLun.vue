<template>
  <div class="wrap">
    <div class="top">
      <img src="../../assets/hans/houtui.png" alt="">
      <span class="dongtai">动态正文</span>
      <img src="../../assets/hans/gengduo.png" alt="">
    </div>
    <!-- 连接 -->
    <div class="box1">
      <div class="box_up">
        <div class="box_up_left">
          <img class="usertx1" :src="arrayPing.data.feeds[0].user.avatar_url" alt="">
          <span class="username">{{arrayPing.data.feeds[0].user.nickname}}</span>
        </div>
        <div class="box_up_right">
          <img src="../../assets/hans/jia.png" alt="">
          <span>关注</span>
        </div>
      </div>
      <div class="box_content">
        <p v-html="huanhang(arrayPing.data.feeds[0].content.text)"></p>
      </div>
      <div class="box_img">
        <img :class="'fbtu'+ arrayPing.data.feeds[0].content.images.length" v-for="(value, index) in arrayPing.data.feeds[0].content.images" :src="arrayPing.data.feeds[0].content.image_base + value" alt="">
      </div>
      <div class="box_bottom">
        <div class="box_bottom_left">
          <span v-html="getLocalTime(arrayPing.data.feeds[0].updated_at)"></span>
        </div>
        <div class="box_bottom_right">
          <div class="dianzang">
            <img src="../../assets/hans/dianzang.png" alt="">&nbsp;
            <span>{{arrayPing.data.feeds[0].likes_count}}</span>
          </div>
          <div class="pinglun">
            <img src="../../assets/hans/pinglun.png" alt="">&nbsp;
            <span>{{arrayPing.data.feeds[0].comments_count}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <div class="zuixinpinglun">
      <div class="huandian"></div>
      <span>最新评论</span>
    </div>
    <div class="box" v-for="(common, index) in Zuiarray" :key="common.id">
      <div class="box_left">
        <img class="usertx" :src="common.root.user.avatar_url" alt="">
      </div>
      <div class="box_right">
        <p class="username">{{common.root.user.nickname}}</p>
        <p class="usertxt" v-html="huanhang(common.root.content)"></p>
        <div class="box_right_bottom">
          <span class="time">{{common.root.created_at_info}}</span>
          <div class="zang">
            <img class="zangtp" src="../../assets/hans/dianzang.png" alt="">
            <span v-show="isShow(common.root.likes_count)">{{common.root.likes_count}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="chakan">
      <span>查看更多评论</span>
    </div>
    <div class="footer">
      <p>如发现作者发布的内容,对您的权利有所侵害</p>
      <p>请联系邮箱legal@kuaikuanmanhua.com</p>
    </div>
    <!--发布评论-->
    <div class="fabu">
      <div class="fabu_left">
        <i class="tp"></i>
        <input class="input" type="text" placeholder="吐槽神马的尽管来">
      </div>
      <div class="fabu_right">
        <img src="../../assets/hans/pinglun1.png" alt="">
        <div class="num">
          <span>{{arrayPing.data.feeds[0].comments_count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
//        isloading: false,
        Zuiarray: [],
        arrayPing: []
      }
    },
    mounted () {
      this.fecthHomeData()
      this.fecthPingLunData()
    },
    methods: {
      fecthHomeData () {
        let that = this
        this.$request({
          type: 'get',
          url: 'v2/comments/hot_floor_list',
          headers: {},
          params: {
            target_type: 'feed',
            target_id: '391034782126965248'
          },
          success: function (res) {
//            console.log(res.data.data.comment_floors)
            that.Zuiarray = res.data.data.comment_floors
          },
          failed: function () {}
        })
      },
      fecthPingLunData () {
        let that = this
        this.$request({
          type: 'get',
          url: 'v1/feeds/feed_lists',
          headers: {},
          params: {
            uid: '92673412',
            since: '0',
            page_num: '1',
            catalog_type: '2'
          },
          success: function (res) {
            that.arrayPing = res.data
            console.log(res.data.data.feeds)
          },
          failed: function () {}
        })
      },
      // 换行
      huanhang: function (val) {
        if (val.indexOf(/\n/g) === -1) {
          return val.replace(/\n/g, '<br/>')
        }
      },
      // 去零
      isShow: function (val) {
        if (val === 0) {
          return false
        } else {
          return true
        }
      },
      // 时间
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
      }
    }
  }
</script>

<style scoped lang="less">
  .fabu{
    width: 90%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 4px 40px 6px 10px;
    align-items: center;
    background-color: rgb(240,240,240);
  }
  .fabu_left{
    width: 75%;
    position: relative;
    padding: 9px 0;
  }
  .tp{
    position: absolute;
    left: 20px;
    top: 18px;
    z-index: 5;
    background-image: url(../../assets/hans/fabu.png);
    background-repeat: no-repeat;
    background-position: 0px 0px;
    width: 22px;
    height: 22px;
  }
  .fabu_right{
    margin-top: 6px;
    position: relative;
  }
  .input{
    width: 100%;
    border-radius: 20px;
    border: 1px solid #ccc;
    outline: none;
    line-height: 38px;
    padding-left: 50px;
  }
  .num{
    position: absolute;
    left: 8px;
    top: -15px;
    background-color: red;
    border-radius: 45%;
    color: white;
    padding: 1px 6px;
  }
  .wrap{
    background-color: rgb(220,220,220);
    /*padding-top: 60px;*/
  }
  .box1{
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 5px;
    margin-top: 51px;
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
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-right: 10px;
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
  /*评论*/
  .zuixinpinglun{
    display: flex;
    border-bottom: 1px solid #ccc;
    align-items: center;
    padding: 20px 10px;
    margin-top: 10px;
    background-color: white;
  }
  .huandian{
    width: 4px;
    height: 15px;
    background-color: rgb(240,170,0);
    border-radius: 45%;
    margin-right: 10px;
  }
  .box{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    padding: 10px;
    background-color: white;
  }
  .box_left{
    width: 53px;
    margin-right:  10px;
  }
  .box_right{
    width: 90%;
  }
  .box_right_bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .zang{
    display: flex;
    align-items: center;
  }
  .usertx{
    width: 100%;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  .usertxt{
    margin: 15px 0;
  }
  .chakan{
    text-align: center;
    line-height: 50px;
    background-color: white;
  }
  .footer{
    text-align: center;
    background-color: rgb(230,230,230);
    padding: 20px 0;
    margin-bottom: 68px;
  }
  .zangtp{
    margin-right: 5px;
  }
  .top{
    width: 90%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: white;
    border-bottom: 1px solid #ccc;
  }
  .dongtai{
    line-height: 50px;
  }
</style>
