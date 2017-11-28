<template>
  <div>
    <div class="wallet-all">
      <div class="wallet-top">
        <div class="wallet-title">
          <router-link to="/user">
            <img src="../../assets/kk-user/kk-user-left-white.png" alt="">
          </router-link>
          <span class="mywallet">我的钱包</span>
          <span class="help">帮助</span>
        </div>
        <div class="kkb">
          <span class="kkb-number">0
            <span class="kkb-text">kk币</span>
          </span>

        </div>

        <button @click="testone">立即充值</button>
      </div>

      <div class="wallet-bottom">
        <ul>
          <li v-for="value,index in walletList">
            <router-link :to="value.urlInfo">
              <div>
                <img :src="value.src" alt="">
                <span>{{value.name}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'UserWallet',
      data () {
        return {
          walletList: [
            {
              name: '阅读券',
              src: require('../../assets/kk-user/kk-wallet-read.png'),
              urlInfo: '/readTicket'
            },
            {
              name: '已购漫画',
              src: require('../../assets/kk-user/kk-wallet-buylist.png'),
              urlInfo: '/buyCarton'
            },
            {
              name: '自动购买管理',
              src: require('../../assets/kk-user/kk-user-setting.png'),
              urlInfo: '/buyingManagement'
            },
            {
              name: '交易明细',
              src: require('../../assets/kk-user/kk-wallet-trade.png'),
              urlInfo: '/tradeDetail'
            }
          ]
        }
      },
      mounted () {
        let useCookie = document.cookie.indexOf('session')
        if (useCookie === -1) {
          this.$router.push({path: '/userLogin'})
        } else {
          this.$request({
            type: 'get',
            url: '/kuaikanv1/users/me',
            success (res) {
              if (res.data.code === 401) {
                this.$router.push({path: '/userLogin'})
              }
            },
            failed (err) {
              console.log(err)
            }
          })
        }
      },
      methods: {
        testone () {
        }
      }
    }
</script>

<style scoped lang='less'>
  .wallet-all{
    width: 100%;
    min-height: 100vh;
    .wallet-top{
      width: 100%;
      height: 55vh;
      background-image: url(../../assets/kk-user/kk-wallet-bg.png);
      /*background-color: aqua;*/
      -webkit-background-size: 100% 100%;
      background-size: 100% 75%;
      background-repeat:no-repeat;
      border-bottom: 5px solid #fafafa;
      background-color: #fff;
      .wallet-title{
        width: 100%;
        height: 20%;
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
        .mywallet{
          font-size: 20px;
          color: white;
          text-align: center;
          margin: 0 auto;
          vertical-align: top;
        }
        .help{
          position: absolute;
          top: 4vh;
          right: 5vw;
          font-size: 16px;
          font-weight: 200;
          color: white;
        }
      }
      .kkb{
        width: 100%;
        height: 60%;
        /*background-color: red;*/
        margin: 0 auto;
        text-align: center;
        .kkb-number{
          font-size: 80px;
          color: white;
          font-weight: 600;
          position: relative;
          .kkb-text{
            font-size: 16px;
            color: white;
            font-weight: 300;
            vertical-align: bottom;
            position: absolute;
            bottom: 25px;
            right: -40px;
          }
        }
      }
      button{
        width: 90%;
        height: 10%;
        border-radius: 40px;
        margin: 0 auto;
        background-color: #ff751a;
        border: none;
        font-size: 20px;
        color: white;
        margin-left: 5%;
        margin-top: 3%;
        outline: none;
      }
    }
    .wallet-bottom{
      width: 100%;
      height: 45vh;
      ul{
        width: 90%;
        height: 90%;
        /*background-color: red;*/
        margin: 0 auto;
        padding-top: 2%;
        list-style: none;
        li:nth-child(3){
          border-bottom: 5px solid #fafafa;
        }
        li{
          width: 100%;
          height: 22%;
          background-image: url(../../assets/kk-user/kk-user-right.png);
          background-size: 6%;
          background-position: center right;
          background-repeat: no-repeat;
          border-bottom:1px solid #fdfdfd;
          a{
            width: 100%;
            height: 100%;
            text-decoration: none;
            div{
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              img{
                width: 7%;
                vertical-align: middle;
                margin-right: 3%;
              }
              span{
                font-size: 16px;
                color: #2a2a2a;
              }
            }
          }
        }
      }
    }
  }
</style>
