<template>
  <div>
    <!-- -----头部----- -->
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/userWallet">
          <img src="../../../assets/kk-user/kk-user-left.png" alt="">
        </router-link>
        <span>阅读券</span>
      </div>
    </div>
    <!-- -----头部----- -->
    <div class="read-all">
      <img src="../../../assets/kk-user/unlog/kk-wallet-read.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
      name: 'ReadTicket'
    }
</script>

<style scoped lang='less'>
  /* -----------头部----------- */
  .newsTitle{
    width: 100%;
    height: 6vh;
    font-weight: 200;
    /*background-color: #aaa;*/
    display: flex;
    align-items: center;
    .titleAll{
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      a{
        text-decoration: none;
        position: relative;
        color: #424242;
        img{
          position: absolute;
          top: -1.8vh;
          left: 5vw;
          width: 25px;
          height: 25px;
          vertical-align: middle;
        }
      }
      span{
        font-size: 20px;
        text-align: center;
        margin: 0 auto;
        vertical-align: middle;
      }
    }
  }
  /* -----------头部----------- */
  .read-all{
    width: 100vw;
    min-height: 94vh;
    background-color: #f8f9fb;
    /*background-color: red;*/
    img{
      width: 100%;
    }
  }
</style>
