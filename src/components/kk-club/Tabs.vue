<template>
  <div id="app" class="wrap" ref="wrap" @touchstart="changePos1" @touchend="changePos2">
    <div class="box">
      <router-link class="title" to="/kk-club">热门</router-link>
      <router-link class="title" to="/kk-zuixin">评论</router-link>
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
    methods: {
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
        if (this.scrollTop1 < this.scrollTop2 && this.$refs.wrap.offsetTop === 0) {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.wrap.style.top = _this.$refs.wrap.offsetTop - 1 + 'px'
            if (_this.$refs.wrap.offsetTop === -40) {
              clearInterval(myTimer)
            }
          }, 10)
        } else if (this.scrollTop1 > this.scrollTop2 && this.$refs.wrap.offsetTop === -40) {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.wrap.style.top = _this.$refs.wrap.offsetTop + 1 + 'px'
            if (_this.$refs.wrap.offsetTop === 0) {
              clearInterval(myTimer)
            }
          }, 10)
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap{
    width: 100%;
  }
  .box{
    position: fixed;
    left: 0;
    top: 60px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }
  .title{
    color: black;
    border-bottom: 2px solid rgb(240,214,62);
    box-sizing: border-box;
    padding: 10px 25px;
  }
</style>
