<template>
  <div id="my-clud">
  <div class="wrap" v-if="isloading">
    <!--<div class="top">-->
      <!--<span class="title">热门</span>-->
      <!--<span class="title">评论</span>-->
    <!--</div>-->
    <div class="box" @touchmove="move" v-for="(common, i) in array.data.feeds" @click="jump(common.share_url, i)">
      <div class="box_up">
        <div class="box_up_left">
          <img class="usertx" :src="common.user.avatar_url" alt="" @click="zuozhe(common.user.id)" onClick="event.cancelBubble = true">
          <span class="username">{{common.user.nickname}}</span>
        </div>
        <div class="box_up_right">
          <img src="../../assets/hans/jia.png" alt="">
          <span>关注</span>
        </div>
      </div>
      <div class="box_content">
        <p v-html="huanhang(common.content.text)"></p>
      </div>
      <div class="box_img">
        <img :class="'fbtu'+ common.content.images.length" v-for="(value, index) in common.content.images" :src="common.content.image_base + value" alt="">
      </div>
      <div class="box_bottom">
        <div class="box_bottom_left">
          <span v-html="getLocalTime(common.updated_at)"></span>
        </div>
        <div class="box_bottom_right">
          <div class="dianzang">
            <img src="../../assets/hans/dianzang.png" alt="">&nbsp;
            <span>{{common.likes_count}}</span>
          </div>
          <div class="pinglun" @click="tab(common.share_url)" onClick="event.cancelBubble = true">
            <img src="../../assets/hans/pinglun.png" alt="">&nbsp;
            <span>{{common.comments_count}}</span>
        </div>
      </div>
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
        isloading: false,
        array: []
//        feed: []
      }
    },
    mounted () {
      this.fecthHomeData()
    },
    methods: {
      fecthHomeData () {
        let that = this
        this.$request({
          type: 'get',
          url: 'kuaikanv1/feeds/feed_lists',
          headers: {},
          params: {
            uid: '92673412',
            since: '0',
            page_num: '1',
            catalog_type: '2'
          },
          success: function (res) {
            that.isloading = true
            that.array = res.data
          },
          failed: function () {}
        })
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
      },
      // 换行
      huanhang: function (val) {
        if (val.indexOf(/\n/g) === -1) {
          return val.replace(/\n/g, '<br/>')
        }
      },
      tab: function (ev) {
        // 拆分字符串,取右
        this.myid = ev.split('feeds/')[1]
        this.$router.push({path: `/kk-daping/${this.myid}`})
      },
      jump: function (ev, ee) {
        // 拆分字符串,取右
        this.myid = ev.split('feeds/')[1]
        this.dataid = ee
        this.$router.push({name: 'PingLun', params: {id: this.myid, dataid: this.dataid}})
      },
      move: function () {
//        console.log(window.scrollY)
      },
      zuozhe (ev) {
        this.userid = ev
        this.$router.push({name: 'ZuoZhe', params: {userid: this.userid}})
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap{
    background-color: rgb(247,247,247);
    padding-top: 45px;
    width: 414px;
  }
  .box{
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 5px;
  }
  .box_up{
    width: 385px;
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
  .usertx{
    width: 50px;
    height: 50px;
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
  .rou{
    display: flex;
    align-items: center;
  }
</style>
