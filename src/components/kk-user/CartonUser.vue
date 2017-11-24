<template>
  <div>
    <div class="user-all">
      <div class="user-top"></div>

      <div class="user-bottom">
        <router-link class="userIn" to="/userLogin">
          <div class="user-head">
          </div>
        </router-link>
        <div class="user-bottom-body">
          <span class="user-name">登录</span>
          <ul class="user-name-firstul">
            <div class="user-name-bb" v-for="newsValue, newsIndex in userNews" @click="turnClicked(newsIndex)" ref="turnStyle">
              <li>
                <router-link :to="newsValue.userInfo"></router-link>
                <div>
                  <img :src="newsValue.src">
                  <span>
                    {{newsValue.name}}
                  </span>
                  <button v-if="newsValue.show">一键缓存</button>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
    import FooterNav from '../../components/kk-nav/FooterNav'
    export default {
      name: 'CartonUser',
      components: {
        FooterNav
      },
      data () {
        return {
          userNews: [
            {
              name: '我的消息',
              src: require('../../assets/kk-user/kk-user-news.png'),
              show: false,
              userInfo: 'userNews'
            },
            {
              name: '我的钱包',
              src: require('../../assets/kk-user/kk-user-wallet.png'),
              show: false,
              userInfo: 'userWallet'
            },
            {
              name: '我的关注',
              src: require('../../assets/kk-user/kk-user-attention.png'),
              show: false,
              userInfo: 'userAttention'
            },
            {
              name: '我的收藏',
              src: require('../../assets/kk-user/kk-user-collect.png'),
              show: false,
              userInfo: 'userCollect'
            },
            {
              name: '浏览历史',
              src: require('../../assets/kk-user/kk-user-history.png'),
              show: false,
              userInfo: 'userHistory'
            },
            {
              name: '游戏中心',
              src: require('../../assets/kk-user/kk-user-game.png'),
              show: false,
              userInfo: 'gameCenter'
            },
            {
              name: '快看商城',
              src: require('../../assets/kk-user/kk-user-store.png'),
              show: false,
              userInfo: 'kkStore'
            },
            {
              name: '今日更新',
              src: require('../../assets/kk-user/kk-user-update.png'),
              show: true,
              userInfo: 'userUpdate'
            },
            {
              name: '设置',
              src: require('../../assets/kk-user/kk-user-setting.png'),
              show: false,
              userInfo: 'userSetting'
            }
          ],
          turnStyle: ''
        }
      },
      methods: {
        turnClicked (index) {
          this.$refs.turnStyle[index].style.backgroundColor = '#939393'
        }
      }
    }
  </script>


<style scoped lang='less'>
.user-all{
  position: relative;
  a{
    text-decoration: none;
    color: #424242;
  }
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
  .userIn{
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -30px;
    margin-top: -30px;
    z-index: 3;
    display: block;
    .user-head{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-image: url(../../assets/kk-user/kk-user-head.jpg);
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
      background-repeat:no-repeat;
    }
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
      .user-name-bb:nth-child(2){
        li{
          border-bottom: none;
        }
        border-bottom: 3px solid #fafafa;
      }
      .user-name-bb:nth-child(5){
        li{
          border-bottom: none;
        }
        border-bottom: 3px solid #fafafa;
      }
      .user-name-bb:nth-child(7){
        li{
          border-bottom: none;
        }
        border-bottom: 3px solid #fafafa;
      }
      .user-name-bb:nth-child(8){
        li{
          border-bottom: none;
          background-image: none;
        }
        border-bottom: 3px solid #fafafa;
      }
      .user-name-bb{
        width: 100%;
        height: 11%;
        display: flex;
        align-items: flex-end;
        li{
          width: 90%;
          height: 100%;
          margin: 0 auto;
          background-image: url("../../assets/kk-user/kk-user-right.png");
          background-size:20px 20px;
          background-position: center right;
          background-repeat: no-repeat;
          border-bottom:1px solid #fdfdfd;
          position: relative;
          a{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 3;
          }
          div{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;

            img{
              width: 20px;
              height: 20px;
              display: inline-block;
              vertical-align: middle;
              margin-right: 10px;
            }
            button{
              height: 50%;
              width: 20vw;
              border-radius: 30px;
              border: none;
              background-color: gold;
              position: absolute;
              top: 25%;
              right: 0px;

            }
          }
        }
      }
    }
  }
}
</style>
