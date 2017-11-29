<template>
  <div class="wrap">
    <div class="top" ref="head">
      <router-link to="/kk-zuixin">
        <img src="../../assets/hans/houtui.png" alt="">
      </router-link>
      <span class="dongtai">动态正文</span>
      <img src="../../assets/hans/gengduo.png" alt="">
    </div>
    <!--连接 -->
    <div @touchmove="move">
      <div class="box1" v-if="isloading">
        <div class="box_up">
          <div class="box_up_left">
            <img class="usertx1" :src="arrayPing.user.avatar_url"  @click="zuozhe(arrayPing.user.id)" alt="">
            <span class="username">{{arrayPing.user.nickname}}</span>
            <!--<p>{{arrayPing.updated_at}}</p>-->
          </div>
          <div class="box_up_right">
            <img src="../../assets/hans/jia.png" alt="">
            <span>关注</span>
          </div>
        </div>
        <div class="box_content">
          <p v-html="huanhang(arrayPing.content.text)"></p>
        </div>
        <div class="box_img">
          <img :class="'fbtu'+ arrayPing.content.images.length" v-for="(value, index) in arrayPing.content.images" :src="arrayPing.content.image_base + value" alt="">
        </div>
        <div class="box_bottom">
          <div class="box_bottom_left">
            <span v-html="getLocalTime(arrayPing.updated_at)"></span>
          </div>
          <div class="box_bottom_right">
            <div class="dianzang">
              <img src="../../assets/hans/dianzang.png" alt="">&nbsp;
              <span>{{arrayPing.likes_count}}</span>
            </div>
            <div class="pinglun" @click="clicked(feed1)">
              <img src="../../assets/hans/pinglun.png" alt="">&nbsp;
              <span>{{arrayPing.comments_count}}</span>
            </div>
          </div>
        </div>
      </div>
      <!--评论 -->
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
          <!---->
          <div class="children_comments" v-if="common.children_comments.length>0">
            <div v-for="(v,i) in common.children_comments">
              <span>{{v.user.nickname}}</span>
              : {{v.content}}
            </div>
          </div>
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
      <div class="fabu" ref="foot">
        <div class="fabu_left">
          <i class="tp"></i>
          <input class="input" type="text" placeholder="吐槽神马的尽管来">
        </div>
        <div class="fabu_right">
          <img src="../../assets/hans/pinglun1.png" alt="">
          <div class="num">
            <span>{{arrayPing.comments_count}}</span>
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
        Zuiarray: [],
        arrayPing: [],
        feed1: this.$route.params.id,
        feed2: this.$route.params.dataid
      }
    },
    mounted () {
      let that = this
      this.$request({
        type: 'get',
        url: '/kuaikanv2/comments/hot_floor_list',
        headers: {},
        params: {
          'target_type': 'feed',
          'target_id': this.feed1
        },
        success: function (res) {
          that.Zuiarray = res.data.data.comment_floors
        },
        failed: function () {}
      })
      let thatt = this
      this.$request({
        type: 'get',
        url: '/kuaikanv1/feeds/feed_lists',
        headers: {},
        params: {
          'uid': '',
          'since': '0',
          'page_num': '1',
          'catalog_type': '1'
        },
        success: function (res) {
          that.isloading = true
          thatt.arrayPing = res.data.data.feeds[that.feed2]
//          console.log(thatt.arrayPing)
        },
        failed: function () {}
      })
    },
    methods: {
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
      getLocalTime: function (ns) {
        let time = new Date(ns)
        let M = (time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1) + '-'
        let D = (time.getDate() < 10 ? '0' + (time.getDate()) : time.getDate()) + ' '
        let h = (time.getHours() < 10 ? '0' + time.getHours() : time.getHours()) + ':'
        let m = (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes())
        return M + D + h + m
      },
      move: function () {
        if (window.scrollY >= 45 && window.scrollY <= 899) {
          this.$refs.head.style.display = 'none'
          this.$refs.foot.style.display = 'none'
          this.$refs.head.className = ''
        } else if (window.scrollY >= 900 || window.screenY === 0) {
          this.$refs.head.className = 'top'
          this.$refs.head.style.display = 'flex'
          this.$refs.foot.style.display = 'flex'
          this.$refs.foot.className = 'fabu'
        }
      },
      zuozhe (ev) {
        this.userid = ev
        this.$router.push({name: 'ZuoZhe', params: {userid: this.userid}})
      },
      clicked (ev) {
//        console.log(ev)
        this.myid = ev
        this.$router.push({path: `/kk-daping/${this.myid}`})
      }
    }
  }
</script>

<style scoped lang="less">
  .children_comments {
    background-color: #F6F9FA;
    padding: 1.69vw 1.35vh;
    width: 77.29vw;
    margin: 2vh 0;
  }
  .children_comments>div {
    font-size: 13px;
  }
  .children_comments>div>span {
    color: #757575;
    font-size: 13px;
  }
  .wrap{
    width: 100vw;
    display: flex;
    background-color: rgb(220,220,220);
  }
  .fabu{
    width: 90%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.54vh 9.66vw 0.81vh 2.14vw;
    align-items: center;
    background-color: rgb(240,240,240);
  }
  .fabu_left{
    width: 75%;
    position: relative;
    padding: 1.22vh 0;
  }
  .tp{
    position: absolute;
    left: 4.83vw;
    top: 2.1vh;
    z-index: 5;
    background-image: url(../../assets/hans/fabu.png);
    background-repeat: no-repeat;
    background-position: 0px 0px;
    width: 7.31vw;
    height: 5.31vh;
  }
  .fabu_right{
    margin-top: 0.81vh;
    position: relative;
    margin-right: 2.41vw;
  }
  .input{
    width: 100%;
    border-radius: 20px;
    border: 0.24vw solid #ccc;
    outline: none;
    line-height: 5.16vh;
    padding-left: 12.07vw;
  }
  .num{
    position: absolute;
    left: 1.93vw;
    top: -2.03vh;
    background-color: red;
    border-radius: 45%;
    color: white;
    padding: 0.135vh 1.44vw;
  }
  .box1{
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 2.41vw;
    margin-bottom: 0.67vh;
    margin-top: 6.92vh;
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
    padding-top: 1.358vh;
    padding-bottom: 4.07vh;
  }
  .box_img{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-left:2.4vw;
  }
  .box_bottom{
    display: flex;
    justify-content: space-between;
    margin-top: 0.67vh;
  }
  .usertx1{
    width: 12.07vw;
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
  /*评论*/
  .zuixinpinglun{
    display: flex;
    border-bottom: 0.24vw solid #ccc;
    align-items: center;
    padding: 2.71vh 2.41vw;
    margin-top: 1.35vh;
    background-color: white;
  }
  .huandian{
    width: 0.96vw;
    height: 2.03vh;
    background-color: rgb(240,170,0);
    border-radius: 45%;
    margin-right: 2.41vw;
  }
  .box{
    width: 100%;
    display: flex;
    border-bottom: 0.24vw solid #ccc;
    box-sizing: border-box;
    padding: 2.4vw;
    background-color: white;
  }
  .box_left{
    width: 13.5%;
  }
  .box_right{
    width: 86%;
    margin-left: 2.4vw;
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
    border: 0.24vw solid #ccc;
  }
  .usertxt{
    margin: 15px 0;
  }
  .chakan{
    text-align: center;
    line-height: 6.79vh;
    background-color: white;
  }
  .footer{
    text-align: center;
    background-color: rgb(230,230,230);
    padding: 2.71vh 0;
    margin-bottom: 9.23vh;
  }
  .zangtp{
    margin-right: 1.2vw;
  }
  .top{
    width: 95.5%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.41vw;
    background-color: white;
    border-bottom: 0.24vw solid #ccc;
    z-index: 111;
  }
  .dongtai{
    line-height: 6.79vh;
  }
</style>
