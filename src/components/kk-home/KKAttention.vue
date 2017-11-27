
<template>
  <div>
    <div id="box">
      <img src="../../assets/kkcartoontitle/topered.png" alt="" id="image">
      <img src="../../assets/kkcartoontitle/trapezoid.png" alt="" id="trapezoid">
      <div id="login">登录</div>
      <p id="introduce">不登录怎么看老司机的珍藏</p>
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
        array: []
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
