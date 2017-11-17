<template>
  <div>
    <div class="user-all">
      <div class="user-top"></div>

      <div class="user-bottom">
        <div class="user-head"></div>
        <div class="user-bottom-body">
          <span class="user-name">登录</span>
          <ul class="user-name-firstul">
            <li v-for="newsValue, newsIndex in userNews">
              <div>
                <img :src="newsValue.src">
                <span>{{newsValue.name}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'CartonUser',
      data () {
        return {
          userNews: [
            {
              name: '我的消息',
              src: require('../../assets/kk-user/kk-user-news.png')
            },
            {
              name: '我的钱包',
              src: require('../../assets/kk-user/kk-user-wallet.png')
            },
            {
              name: '我的关注',
              src: require('../../assets/kk-user/kk-user-attention.png')
            },
            {
              name: '我的收藏',
              src: require('../../assets/kk-user/kk-user-collect.png')
            },
            {
              name: '浏览历史',
              src: require('../../assets/kk-user/kk-user-history.png')
            },
            {
              name: '游戏中心',
              src: require('../../assets/kk-user/kk-user-game.png')
            },
            {
              name: '快看商城',
              src: require('../../assets/kk-user/kk-user-store.png')
            },
            {
              name: '今日更新',
              src: require('../../assets/kk-user/kk-user-update.png')
            },
            {
              name: '设置',
              src: require('../../assets/kk-user/kk-user-setting.png')
            }
          ]
        }
      }
    }
  </script>


<style scoped lang='less'>
.user-all{
  position: relative;
}
.user-top{
  width: 100%;
  height: 25vh;
  position: absolute;
  top: 0;
  z-index: 1;
  background-image: url("../../assets/kk-user/kk_user_bg.png");
  background-size:100% 100%;
}
.user-bottom{
  width: 100%;
  height: 80vh;
  left: 0;
  top: 20vh;
  background-color: white;
  position: absolute;
  z-index: 2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .user-head{
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -30px;
    margin-top: -30px;
    z-index: 3;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .user-bottom-body{
    width: 100%;
    height: 95%;
    margin-top: 5vh;
    span{
      padding-top: 0.8vh;
      padding-bottom: 0.8vh;
      font-size: 16px;
      display: flex;
      justify-content: center;
    }
    ul{
      width: 100%;
      height: 85vh;
      /*background-color: gold;*/
      list-style: none;
      li:nth-child(2){
        border-bottom: 6px solid #f8f8f8;
      }
      li:nth-child(5){
        border-bottom: 6px solid #f8f8f8;
      }
      li:nth-child(7){
        border-bottom: 6px solid #f8f8f8;
      }
      li:nth-child(8){
        border-bottom: 6px solid #f8f8f8;
      }
      li:nth-child(9){
        border-bottom: none;
      }
      li{
        width: 85%;
        margin: 0 auto;
        height: 11%;
        background-image: url("../../assets/kk-user/kk-user-right.png");
        background-size:20px 20px;
        background-position: center right;
        background-repeat: no-repeat;
        border-bottom:1px solid #efefef;
        div{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;

          img{
            width: 20px;
            height: 20px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
