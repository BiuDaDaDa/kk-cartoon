<template>
  <div id="my-clud" @touchstart="changePos1" @touchend="changePos2">
    <div class="wrap" v-if="isloading">
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
          <img :class="'fbtu'+ common.content.images.length" v-for="(value, i) in common.content.images" :src="common.content.image_base + value" @click="fangda(common.content.images[i])" onClick="event.cancelBubble = true" alt="">
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
      <div class="gao"></div>
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
      let link = window.location.href.split('8081')[1]
      this.$store.commit('clubURLGo', link)
    },
    methods: {
      changePos1 () {
        this.scrollTop1 = document.documentElement.scrollTop || document.body.scrollTop || window.pageYflset || 0
      },
      changePos2 () {
        this.scrollTop2 = document.documentElement.scrollTop || document.body.scrollTop || window.pageYflset || 0
        if (this.scrollTop1 > this.scrollTop2) {
          // 上，触摸下滑动,down动画上
          this.$store.commit('deployGo', 'down')
        } else if (this.scrollTop1 < this.scrollTop2) {
          // 下,触摸上滑动,up动画上
          this.$store.commit('deployGo', 'up')
        }
      },
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
            catalog_type: '1'
          },
          success: function (res) {
            that.isloading = true
            that.array = res.data
          },
          failed: function () {}
        })
      },
      // 时间
      getLocalTime: function (ns) {
        let time = new Date(ns)
        let M = (time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1) + '-'
        let D = (time.getDate() < 10 ? '0' + (time.getDate()) : time.getDate()) + ' '
        let h = (time.getHours() < 10 ? '0' + time.getHours() : time.getHours()) + ':'
        let m = (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes())
        return M + D + h + m
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
        this.$router.push({name: 'PingLunTow', params: {id: this.myid, dataid: this.dataid}})
      },
      move: function () {
//        console.log(window.scrollY)
      },
      zuozhe (ev) {
        this.userid = ev
        this.$router.push({name: 'ZuoZhe', params: {userid: this.userid}})
      },
      fangda (val) {
        this.imageid = val
        this.$router.push({name: 'FangDa', params: {imageid: this.imageid}})
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap{
    background-color: rgb(247,247,247);
    padding-top: 14.2vh;
    width: 100%;
  }
  .box{
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 2.4vw;
    margin-bottom: 0.67vh;
  }
  .box_up{
    width: 98%;
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
    padding: 1.2vw 0.95vh;
    background-color: rgb(240,214,62);
    border-radius: 20px;
  }
  .box_content{
    padding-top: 1.35vh;
    padding-bottom: 4vh;
  }
  .box_img{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-left: 2.4vw;
  }
  .box_bottom{
    display: flex;
    justify-content: space-between;
    margin-top: 0.67vh;
  }
  .usertx{
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    border: 0.24vw solid #ccc;
    margin-right: 2.4vw;
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
  .rou{
    display: flex;
    align-items: center;
  }
  .gao{
    padding-bottom: 8vh;
  }
  .username{
    color: darkorange;
  }
</style>
