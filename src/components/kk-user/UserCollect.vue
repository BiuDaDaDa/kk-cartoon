<template>
  <div>
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/user">
          <img src="../../assets/kk-user/kk-user-left.png" alt="">
        </router-link>
        <span>我的收藏</span>
      </div>
    </div>

    <div class="collect-all">
      <div class="collect-for">
        <div class="collect-img">
          <img src="" alt="">
        </div>

        <div class="collect-title">
          <h2>第11话 擅闯禁地的惩罚</h2>
          <h3>云天谣</h3>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
    export default {
      name: 'UserCollect'
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
    border-bottom: 1px solid #939393;
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
          top: -2vh;
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
  .collect-all{
    width: 100%;
    min-height: 93.9vh;
    /*background-color: red;*/
    .collect-for{
      width: 97%;
      height: 11vh;
      /*background-color: blue;*/
      margin-left: 3%;
      padding-top: 1vh;
      padding-bottom: 1vh;
      border-bottom: 1px solid #efefef;
      display: flex;
      align-items: flex-start;
      .collect-img{
        width: 30%;
        height: 11vh;
        /*background-color: aqua;*/
      }
      .collect-title{
        margin-left: 3%;
        h2{
          font-size: 18px;
          font-weight: normal;
          line-height: 45px;
        }
        h3{
          font-size: 14px;
          color: #939393;
          font-weight: normal;
          line-height: 45px;
        }
      }
    }
  }
</style>
