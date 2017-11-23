<template>
  <div>
    <!-- -----头部----- -->
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/user">
          <img src="../../assets/kk-user/kk-user-left.png" alt="">
        </router-link>
        <span>设置</span>
      </div>
    </div>
    <!-- -----头部----- -->

    <div class="setting-all">
      <div class="setting-top">
        <div class="setting-top-for" v-for="topValue,topIndex in settingTop">
          <div class="setting-top-text">
            <h2>{{topValue.textOne}}</h2>
            <h3>{{topValue.textTwo}}</h3>
          </div>
          <mt-switch class="st-btn" v-model="value"></mt-switch>
        </div>
      </div>
      <div class="setting-phone">
        <h2>手机号设置</h2>
        <h3>188****1110</h3>
      </div>
      <div class="setting-bottom">
        <div class="setting-bottom-for" v-for="bottomValue,bottomIndex in settingBottom">
          <h4>{{bottomValue.textOne}}</h4>
          <h5>{{bottomValue.textTwo}}</h5>
        </div>
      </div>
      <div class="exit-login">
        <button>退出当前账号</button>
      </div>


    </div>
  </div>
</template>

<script>
    export default {
      name: 'UserSetting',
      data () {
        return {
          value: false,
          settingTop: [
            {
              textOne: '低流量模式',
              textTwo: '非wifi环境下加载低质量图片，可为您节省70%流量'
            },
            {
              textOne: '回复推送',
              textTwo: '开启后及时收到别人的评论(•ˋωˊ•)'
            },
            {
              textOne: '更新提醒',
              textTwo: '关注作品更新后将及时提醒'
            },
            {
              textOne: '夜间模式',
              textTwo: '开启夜间模式，夜间阅读不伤眼'
            }
          ],
          settingBottom: [
            {
              textOne: '赏个好评',
              textTwo: ''
            },
            {
              textOne: '意见反馈',
              textTwo: ''
            },
            {
              textOne: '推荐给好友',
              textTwo: ''
            },
            {
              textOne: '清理缓存',
              textTwo: '27.5M'
            },
            {
              textOne: '帮助中心',
              textTwo: ''
            },
            {
              textOne: '关于快看',
              textTwo: ''
            },
            {
              textOne: '版本更新',
              textTwo: ''
            },
            {
              textOne: '用户协议',
              textTwo: ''
            }
          ]
        }
      }
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

  .setting-all{
    width: 100vw;
    min-height: 94vh;
    /*background-color: red;*/
    .setting-top{
      border-top: 10px solid #f8f9fb;
      width: 100vw;
      height: 35vh;
      border-bottom: 8px solid #f8f9fb;
      /*background-color: blue;*/
      .setting-top-for{
        width: 100%;
        height: 25%;
        /*background-color: aqua;*/
        display: flex;
        align-items: center;
        .setting-top-text{
          width: 77vw;
          margin-left: 2%;
          margin-right: 5%;
          h2{
            font-size: 18px;
            font-weight: 400;
            line-height: 5vh;
          }
          h3{
            font-size: 14px;
            font-weight: normal;
            color: #939393;;
          }
        }
      }
    }
    .setting-phone{
      width: 100vw;
      height: 8vh;
      /*background-color: salmon;*/
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 8px solid #f8f9fb;
      background-image: url(../../assets/kk-user/kk-user-right.png);
      background-size: 5%;
      background-repeat:no-repeat;
      background-position: 97% 48%;

      h2{
        margin-left: 2%;
        font-size: 18px;
        font-weight: 400;
        line-height: 5vh;
      }
      h3{
        font-size: 14px;
        font-weight: normal;
        color: #939393;
        margin-right: 8%;
      }
    }
    .setting-bottom{
      width: 100vw;
      min-height: 65vh;
      /*background-color: #fde23d;*/
      .setting-bottom-for:nth-child(2){
        background-image: url(../../assets/kk-user/kk-user-right.png);
        background-size: 5%;
        background-repeat:no-repeat;
        background-position: 97% 48%;
      }
      .setting-bottom-for:nth-child(3){
        border-bottom: 8px solid #f8f9fb;
      }
      .setting-bottom-for:nth-child(5){
        background-image: url(../../assets/kk-user/kk-user-right.png);
        background-size: 5%;
        background-repeat:no-repeat;
        background-position: 97% 48%;
      }
      .setting-bottom-for:nth-child(6){
        background-image: url(../../assets/kk-user/kk-user-right.png);
        background-size: 5%;
        background-repeat:no-repeat;
        background-position: 97% 48%;
      }
      .setting-bottom-for:nth-child(8){
        background-image: url(../../assets/kk-user/kk-user-right.png);
        background-size: 5%;
        background-repeat:no-repeat;
        background-position: 97% 48%;
      }
      .setting-bottom-for:nth-child(9){
        border-bottom: none;
      }
      .setting-bottom-for{
        width: 100vw;
        height: 8vh;
        /*background-color: salmon;*/
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #f1f1f1;
        h4{
          margin-left: 2%;
          font-size: 18px;
          font-weight: 400;
          line-height: 5vh;
        }
        h5{
          font-size: 14px;
          font-weight: normal;
          color: #939393;
          margin-right: 3%;
        }
      }
    }
    .exit-login{
      width: 100vw;
      height: 13vh;
      background-color: #f8f9fb;
      display: flex;
      align-items: center;
      justify-content: center;
      button{
        width: 90%;
        height: 50%;
        background-color: #ff751a;
        border: none;
        border-radius: 40px;
        color: #fff;
        font-size: 20px;
        font-weight: 300;
        outline: none;
      }
    }
  }
</style>
