<template>
<div class="kkClubAttention">
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
  <p class="AttentionShow" @click="jump"></p>
  <MyNav></MyNav>
</div>
</template>

<script>
  import MyNav from '../../components/kk-nav/FooterNav.vue'
  export default {
    name: '',
    data () {
      return {
        isShow: false
      }
    },
    components: {
      MyNav
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
            if (_this.$refs.kkFindNav.offsetTop === -40) {
              clearInterval(myTimer)
            }
          }, 10)
        } else if (this.scrollTop1 > this.scrollTop2 && this.$refs.kkFindNav.offsetTop === -40) {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.kkFindNav.style.top = _this.$refs.kkFindNav.offsetTop + 1 + 'px'
            if (_this.$refs.kkFindNav.offsetTop === 0) {
              clearInterval(myTimer)
            }
          }, 10)
        }
      },
      jump () {
        this.$router.push({name: 'UserLogin'})
      }
    }
  }
</script>

<style scoped lang=less>
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
  .AttentionShow{
    margin-top: 90px;
    width: 100%;
    height: 85vh;
    background-image: url("../../assets/kk-user/unlog/kk-unlog-collect.png");
    background-size:100%;
    background-repeat:no-repeat;
  }
</style>
