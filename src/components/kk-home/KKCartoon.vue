<template>
  <div class="hello">
    <div class="topDi"></div>
    <div  ref="kkFindNav" class="kkFindNav"  style="top: 0px" >
      <div class="Nav">
        <div class="diBg" >
            <img src="../../assets/kkcartoontitle/kk-games.png" alt="">
        </div>
        <div class="btnN">
          <span @click="changeFen" :class="{actBtn:!isShow}">关注</span>
          <span  @click="changeTui" :class="{actBtn:isShow}">热门</span>
        </div>
        <div class="diBg" @click="search1">
          <img src="../../assets/kk-find/kk-find-search1.png" alt="🔍">
        </div>
      </div>
    </div>
    <ul id="dayList" ref="list" style="top: 60px">
      <router-link tag="li" v-for="(key,i) in dayarray" :key="key.id" to="/" class="list" @touchstart.native="tab(i)">
        {{key}}
      </router-link>
    </ul>
    <div class="detection" @touchmove="touch" @touchstart="changePos1" @touchend="changePos2">
    <div id="mainContent" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="100">
      <div v-for="(k,i) in array" class="content">
        <router-link to="/" tag="div" class="nav"
                     @touchend.native="link(k.topic.id)" @touchstart.native='tiao'>
          <div class="title" :style="{backgroundColor:k.label_color}">{{k.label_text}}</div>
          <p class="heading">{{k.topic.title}}</p>
          <router-link to="/" class="all">全集&nbsp;></router-link>
          <p class="author">作者:&nbsp;&nbsp;{{k.topic.user.nickname}}</p>
        </router-link>
        <div class="box">
          <img v-lazy="k.cover_image_url" class="image">
        </div>
        <router-link to="/" tag="div" class="bottomContent">
          <div class="bottomtitle">{{k.title}}</div>
          <div class="likesCount">
            {{k.likes_count}}
          </div>
          <div class="commentsCount">
            <router-link to="/">{{k.comments_count}}</router-link>
          </div>
        </router-link>
      </div>
      <div @touchstart="tab(Number(tabI-1))" v-show="since === -1 "  class="footer">
        <p class="alert">到底啦!</p>
        <p class="alert"> 看前一天的吧！</p>
      </div>
    </div>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
  import FooterNav from '../kk-nav/FooterNav.vue'
  var day = new Date()
  var nowDay = day.getDay()
  var dayarray = []
  var arrayday = []
  var num = 0
  var weekDay = [Number(day.getTime() / 1000 - 86400 * 6), Number(day.getTime() / 1000 - 86400 * 5), Number(day.getTime() / 1000 - 86400 * 4), Number(day.getTime() / 1000 - 86400 * 3), Number(day.getTime() / 1000 - 86400 * 2), Number(day.getTime() / 1000 - 86400), 0]
  for (var i = 6; i > 0; i--) {
    dayarray[i] = nowDay - i
    switch (dayarray[i]) {
      case 4: dayarray[i] = '周四'; break
      case 3: dayarray[i] = '周三'; break
      case 2: dayarray[i] = '周二'; break
      case 1: dayarray[i] = '周一'; break
      case 0: dayarray[i] = '周日'; break
      case -1: dayarray[i] = '周六'; break
      case -2: dayarray[i] = '周五'; break
      case -3: dayarray[i] = '周四'; break
      case -4: dayarray[i] = '周三'; break
      case -5: dayarray[i] = '周二'; break
      case -6: dayarray[i] = '周一'; break
    }
  }
  dayarray[0] = '今天'
  dayarray[1] = '昨天'
  arrayday = dayarray.reverse()
  var listArr = document.getElementsByClassName('list')
  export default {
    name: 'HelloWorld',
    data () {
      return {
        array: [],
        dayarray: arrayday,
        weekArr: weekDay,
        tabI: '',
        url: 0,
        since: 0,
        loading: false,
        isShow: true
      }
    },
    components: {
      FooterNav
    },
    methods: {
      changeTui () {
        if (!this.isShow) {
          this.isShow = true
          this.$router.push({path: '/'})
        }
      },
      search1: function () {
        this.$router.push({path: '/search'})
      },
      changeFen () {
        if (this.isShow) {
          this.isShow = false
          this.$router.push({path: '/attention'})
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
        if (this.scrollTop1 < this.scrollTop2 && this.$refs.kkFindNav.offsetTop === 0) {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.kkFindNav.style.top = _this.$refs.kkFindNav.offsetTop - 1 + 'px'
            _this.$refs.list.style.top = _this.$refs.list.offsetTop - 1 + 'px'
            if (_this.$refs.kkFindNav.offsetTop === -40) {
              clearInterval(myTimer)
            }
          }, 10)
        } else if (this.scrollTop1 > this.scrollTop2 && this.$refs.kkFindNav.offsetTop === -40) {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.kkFindNav.style.top = _this.$refs.kkFindNav.offsetTop + 1 + 'px'
            _this.$refs.list.style.top = _this.$refs.list.offsetTop + 1 + 'px'
            if (_this.$refs.kkFindNav.offsetTop === 0) {
              clearInterval(myTimer)
            }
          }, 10)
        }
      },
      tiao: function () {
        num = 0
      },
      link: function (val) {
        if (num === 0) {
          this.$router.push({name: 'kkcartoontitle', params: {id: val}})
        } else {
          return false
        }
      },
      touch: function () {
        num = 1
      },
      tab: function (i) {
        num = 0
        this.tabI = i
        this.url = weekDay[i]
        this.array = []
        this.since = 0
        for (var y = 0; y < listArr.length; y++) {
          if (y === i) {
            listArr[y].style.borderBottom = '2px solid #E4C93D'
          } else {
            listArr[y].style.borderBottom = 'none'
          }
        }
        if (this.tabI !== -1) {
          this.HuoQuKkCartoon()
        }
      },
      loadMore () {
        if (!this.loading) {
          this.loading = true
          if (this.since !== -1) {
            setTimeout(() => {
              this.HuoQuKkCartoon()
            }, 2000)
          }
        }
      },
      HuoQuKkCartoon () {
        let a = {
          url: '/kuaikanv1/daily/comic_lists/' + this.url,
          type: 'get',
          headers: {},
          params: {
            gender: this.gender,
            new_device: false,
            since: this.since
          },
          success: function (res) {
            this.array = this.array.concat(res.data.data.comics)
            this.since = res.data.data.since
            if (res['data']['data']['comics'].length < 20) {
              console.log('全部加载')
            }
            this.loading = false
          },
          failed: function (err) {
            console.log(err)
          }
        }
        this.$request(a)
      }
    },
    computed: {
      gender () {
        return this.$store.state.gender
      }
    },
    mounted () {
      this.HuoQuKkCartoon()
      this.tabI = 6
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  image[lazy=loading] {}
  .topDi{
    height: 20px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 25;
    background-color: yellow;
  }
  .kkFindNav{
    padding-top: 20px;
    width: 100%;
    position: fixed;
    z-index: 20;
    background-color: yellow;
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
    border-radius: 50%;
  }
  .btnN{
    height: 24px;
    width: 28%;
    background-color: rgb(0,0,0);
    border-radius: 12px;
    border:1px solid rgb(0,0,0);
  }
  .btnN span{
    display: inline-block;
    font-size: 14px;
    font-weight: 200;
    width: 47%;
    min-width: 42px;
    text-align: center;
    line-height: 24px;
    color: yellow;
    outline: none;
  }
  .btnN .actBtn{
    background-color: yellow;
    color: #000;
    border-radius: 12px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .router-link-active {
    position: relative;
    height: 50px;
  }
  #mainContent {
    margin: 90px 0;
  }
  .content {
    margin-top: 10px;
    padding-top: 10px;
  }

  .title {
    font-size: 12px;
    /*background-color: cornflowerblue;*/
    color: white;
    width: 32px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    border-radius: 4px;
    position: absolute;
    left: 0;

  }
  .heading {
    position: absolute;
    left: 40px;
    top: -3px;
  }
  .all {
    position: absolute;
    color: #7e8c8d;
    right: 0;
    top: 15px;
    text-decoration: none;
    font-size: 12px;
    height: 18px;
    /*border: 1px solid red;*/
  }
  .box {
    height: 56.2802vw;
    background-image: url(../../assets/kk-find/kk-mhbg.jpg);
    background-repeat:no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .author {
    position: absolute;
    top: 25px;
    font-size: 12px;
    width: 340px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #949899;
  }
  #dayList {
    z-index: 10;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid darkgray;
    background-color: white;
    position: fixed;
  }
  #dayList li:last-child {
    border-bottom: 2px solid #E4C93D;
  }
  .list {
    height: 20px;
    font-size: 12px;
    width: 36px;
    text-align: center;
  }
  .bottomContent {
    position: relative;
    height: 25px;
  }
  .bottomtitle {
    font-size: 14px;
    padding-left: 6px;
    color: #949899;
  }
  .likesCount {
    left: 65%;
    font-size: 14px;
    background: url("../../assets/zan.png") no-repeat left;
    padding-left: 20px;
    color: #949899;
  }
  .commentsCount {
    left: 85%;
    font-size: 14px;
    height: 20px;
    background: url("../../assets/comment.png") no-repeat left 2px;
    padding-left: 20px;
  }
  .commentsCount>a {
    color: #949899;
    text-decoration: none;
  }
  .bottomContent>div {
    position: absolute;
  }
  .footer{
    margin: 30px auto;
    width: 60%;
    padding: 2% 0;
    text-align: center;
    border-radius: 40px;
    background-color: rgba(38,129,210,.3);
    color: rgb(38,129,210);
  }
  .footer p{
    font-size: 14px;
  }
</style>

