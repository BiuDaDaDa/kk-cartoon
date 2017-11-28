<template>
  <div id="app" class="wrap">
    <div class="topDi"></div>
    <div  ref="kkFindNav" class="kkFindNav"  style="top: 0px" >
      <div class="Nav">
        <div class="diBg" >
          <img src="../../assets/hans/kkClub-play.png" alt="">
        </div>
        <div class="btnN">
          <span @click="changeFen" :class="{actBtn:!isShow}">关注</span>
          <span  @click="changeTui" :class="{actBtn:isShow}">广场</span>
        </div>
        <div class="diBg">
          <img src="../../assets/kk-find/kk-find-search1.png" alt="🔍">
        </div>
      </div>
    </div>
    <div ref="clubNav" class="box" style="top: 60px">
      <router-link class="title" :class="{actTitle:kkClubURL === '/kk-club'}" to="/kk-club">热门</router-link>
      <router-link class="title" :class="{actTitle:kkClubURL === '/kk-zuixin'}" to="/kk-zuixin">评论</router-link>
    </div>
    <router-view></router-view>
    <!--<my-club/>-->
    <my-nav/>
  </div>
</template>

<script>
  import MyNav from '../../components/kk-nav/FooterNav.vue'
  //  import MyClub from '../../components/kk-nav/Club.vue'
  export default {
    components: {
      MyNav
//      MyClub
    },
    name: 'Tabs',
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      changeTui () {
        if (!this.isShow) {
          this.isShow = true
          this.$router.push({path: '/kk-club'})
        }
      },
      changeFen () {
        if (this.isShow) {
          this.isShow = false
          this.$router.push({path: '/kk-attention'})
        }
      },
      changePos () {
        console.log(this.kkClubURL)
        let myTimer = null
        let _this = this
        // 向下滑动
        if (this.deploy === 'up' && this.$refs.kkFindNav.offsetTop === 0) {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.kkFindNav.style.top = _this.$refs.kkFindNav.offsetTop - 1 + 'px'
            _this.$refs.clubNav.style.top = _this.$refs.clubNav.offsetTop - 1 + 'px'
            if (_this.$refs.kkFindNav.offsetTop === -40) {
              clearInterval(myTimer)
            }
          }, 10)
        } else if (this.deploy === 'down' && this.$refs.kkFindNav.offsetTop === -40) {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.kkFindNav.style.top = _this.$refs.kkFindNav.offsetTop + 1 + 'px'
            _this.$refs.clubNav.style.top = _this.$refs.clubNav.offsetTop + 1 + 'px'
            if (_this.$refs.kkFindNav.offsetTop === 0) {
              clearInterval(myTimer)
            }
          }, 10)
        }
      }
    },
    computed: {
      deploy () {
        return this.$store.state.deploy
      },
      kkClubURL () {
        return this.$store.state.kkClubURL
      }
    },
    watch: {
      deploy () {
        this.changePos()
      }
    }
  }
</script>

<style scoped lang="less">
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
    text-align: center;
    line-height: 24px;
    color: yellow;
    padding: 0 10%;
    outline: none;
  }
  .btnN .actBtn{
    background-color: yellow;
    color: #000;
    border-radius: 12px;
  }
  .wrap{
    width: 100%;
  }
  .box{
    position: fixed;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }
  .title{
    color: black;
    border-bottom: 2px solid #fff;
    box-sizing: border-box;
    padding: 10px 25px;
  }
  .actTitle{
    border-bottom: 2px solid orange;
  }
</style>
