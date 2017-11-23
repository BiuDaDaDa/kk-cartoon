<template>
  <div>
    <!-- -----头部----- -->
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/user">
          <img src="../../assets/kk-user/kk-user-left.png" alt="">
        </router-link>
        <span class="title-tags">浏览历史</span>
        <span class="title-clear">清空</span>
      </div>
    </div>
    <!-- -----头部----- -->

    <div class="history-all">
      <div class="history-for">
        <div class="history-img">
          <img src="" alt="">
        </div>

        <div class="history-title">
          <h2>云天谣</h2>
          <h3>更新至：第11话 擅闯禁地的惩罚</h3>
          <h4>阅读至：第11话 擅闯禁地的惩罚</h4>
        </div>

        <button>续看</button>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
      name: 'UserHistory'
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
          top: -1.8vh;
          left: 5vw;
          width: 25px;
          height: 25px;
          vertical-align: middle;
        }
      }
      .title-tags{
        font-size: 20px;
        text-align: center;
        margin: 0 auto;
        vertical-align: middle;
      }
      .title-clear{
        position: absolute;
        top: 1.2vh;
        right: 3vw;
        font-size: 17px;
        color: #ffbb1a;
      }
    }
  }
  /* -----------头部----------- */

  .history-all{
    width: 100vw;
    min-height: 93.9vh;
    /*background-color: red;*/
    .history-for{
      width: 95vw;
      height: 10vh;
      /*background-color: blue;*/
      padding: 1.5vh 2.5vw;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #efefef;
      .history-img{
        height: 10vh;
        width: 30%;
        background-color: gold;
        img{
          width: 100%;
        }
      }
      .history-title{
        width: 50%;
        height: 10vh;
        margin-left: 2%;
        margin-right: 3%;
        /*background-color: greenyellow;*/
        h2{
          font-size: 18px;
          font-weight: 400;
        }
        h3{
          font-size: 14px;
          color: #939393;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        h4{
          margin-top: 1vh;
          font-size: 14px;
          color: #939393;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      button{
        border: 1px solid #ffbb1a;
        color: #ffbb1a;
        width: 13vw;
        font-size: 14px;
        height: 4vh;
        background-color: #fff;
        border-radius: 30px;
      }

    }
  }

</style>
