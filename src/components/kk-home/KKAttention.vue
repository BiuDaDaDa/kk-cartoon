
<template>
  <div>
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
        <div class="diBg">
          <img src="../../assets/kk-find/kk-find-search1.png" alt="🔍">
        </div>
      </div>
    </div>
    <div class="detection" @touchstart="changePos1" @touchend="changePos2">
      <div id="box">
        <img src="../../assets/kkcartoontitle/topered.png" alt="" id="image">
        <img src="../../assets/kkcartoontitle/trapezoid.png" alt="" id="trapezoid">
        <div id="login">登录</div>
        <p id="introduce">不登录怎么看老司机的珍藏</p>
      </div>
    </div>
    <FooterNav></FooterNav>
  </div>

</template>

<script>
  import FooterNav from '../kk-nav/FooterNav.vue'
  export default {
    name: '',
    data () {
      return {
        array: [],
        isShow: false
      }
    },
    methods: {
      changeTui () {
        if (!this.isShow) {
          this.isShow = true
          this.$router.push({path: '/'})
        }
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
      }
    },
    mounted () {
//      var _that = this
      let a = {
        url: 'kkv2/topic/fav/timeline_v3',
        type: 'get',
        data: '',
        headers: {},
        params: {
          since: 0
        },
        success: function (res) {
          console.log(res)
        },
        failed: function (err) {
          console.log(err)
        }
      }
      this.$request(a)
    },
    components: {
      FooterNav
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
    width: 47%;
    min-width: 42px;
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
  #box {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: #DBEEF5;
    position: relative;
    left: 50%;
    top: 140px;
    margin-left: -90px;
  }
  #image {
    position: absolute;
    top: 58px;
    left: 50%;
    margin-left: -32px;
  }
  #trapezoid {
    position: absolute;
    top: 115px;
    width: 140px;
    left: 50%;
    margin-left: -70px;
  }
  #login {
    position: absolute;
    width: 140px;
    height: 50px;
    background-color: #fde23d;
    left: 50%;
    margin-left: -70px;
    top: 150px;
    border-radius: 24px;
    text-align: center;
    line-height: 50px;
  }
  #introduce{
    position: absolute;
    top: 210px;
    width: 220px;
  }
</style>
