<template>
  <div>
    <div class="sendout-all">
      <div class="sendout-for">
        <div class="sf-top">
          <span>随手就是一个赞</span>
        </div>

        <div class="sf-center">
          <div class="sfc-img">
            <img src="" alt="">
          </div>

          <div class="sfc-title">
            <div class="sfc-zj">第六话 噩耗</div>
            <div class="sfc-carton">烬天录</div>
          </div>
        </div>

        <div class="sf-bottom">
          <div class="sfb-time">
            <span>11-20 19:12</span>
          </div>

          <div class="sfb-zan">
            <img src="../../../assets/kk-user/kk-user-zan.png" alt="">
            <span>1</span>
            <button>删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'Comment'
    }
</script>

<style scoped lang='less'>
  .sendout-all{
    width: 100%;
    min-height: 83.9vh;
    background-color: #fff;
    .sendout-for{
      width: 93%;
      margin-left: 4.5%;
      margin-right: 2.5%;
      height: 37vh;
      padding-top: 1vh;
      padding-bottom: 2vh;
      border-bottom: 1px solid #efefef;
      /*background-color: red;*/
      .sf-top{
        width: 100%;
        height: 25%;
        /*background-color: gold;*/
        display: flex;
        align-items: center;
        font-size: 17px;
      }
      .sf-center{
        width: 94%;
        height: 44%;
        padding: 7% 3% 4%;
        background-color: #f6fafb;
        display: flex;
        .sfc-img{
          width: 40%;
          height: 100%;
          background-color: royalblue;
        }
        .sfc-title{
          width: 60%;
          height: 100%;
          background-color: #fff;
          padding-left: 2vw;
          .sfc-zj{
            margin-top: 2.5vh;
            font-size: 17px;
          }
          .sfc-carton{
            margin-top: 6vh;
            font-size: 14px;
            color: #9d9d9d;

          }
        }
      }
      .sf-bottom{
        width: 100%;
        height: 20%;
        /*background-color: royalblue;*/
        display: flex;
        align-items: center;
        justify-content: space-between;
        .sfb-time{
          font-size: 16px;
          color: #9d9d9d;
          vertical-align: middle;
        }
        .sfb-zan{
          position: relative;
          img{
            width: 15%;
            margin-left: 30%;
            vertical-align: top;
          }
          span{
            vertical-align: middle;
            font-size: 16px;
            color: #9d9d9d;
          }
          button{
            position: absolute;
            top: -2px;
            right: 0;
            z-index: 1;
            font-size: 15px;
            border: 1px solid #ebebeb;
            background-color: #fff;
            padding: 2px 7px;
            border-radius: 20px;
            color: #c2c2c2;
          }
        }
      }

    }
  }
</style>
