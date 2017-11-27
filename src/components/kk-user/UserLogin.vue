<template>
  <div>
    <div class="log-all" ref="logAllRef">
      <div class="log-top">
        <router-link to="/user">
          <img src="../../assets/kk-user/kk-user-left-brown.png" alt="">
        </router-link>
        <span>
          <router-link to="/userForget">忘记密码</router-link>
        </span>
      </div>

      <div class="log-content">
        <div class="log-phone">
          <img src="../../assets/kk-user/log/kk-log-phone-gray.png" alt="">
          <input type="text" placeholder="支持中国大陆" @focus="phoneFocus" v-model="phone">
        </div>

        <div class="log-pass">
          <img src="../../assets/kk-user/log/kk-log-lock-gray.png" alt="">
          <input type="password" placeholder="8-30位数字或英文" @focus="passFocus" v-model="password">
        </div>
      </div>

      <h6 v-show="loginHintShow">{{loginHint}}</h6>

      <button @click="loginClicked">登录</button>

      <div class="log-bottom">
        <h2>
          <router-link to="/userReg">立即注册</router-link>
        </h2>
        <div class="other-title">
          <span class="other-text">其他方式登录</span>
        </div>

        <div class="other-way">
          <div class="qq">
            <img src="../../assets/kk-user/log/kk-log-qq.png" alt="">
            <h3>QQ</h3>
          </div>

          <div class="vblog">
            <img src="../../assets/kk-user/log/kk-log-blog.png" alt="">
            <h3>微博</h3>
          </div>

          <div class="wechat">
            <img src="../../assets/kk-user/log/kk-log-wechat.png" alt="">
            <h3>微信</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'UserLogin',
      data () {
        return {
          phone: '',
          password: '',
          loginHint: '',
          loginHintShow: false
        }
      },
      methods: {
        phoneFocus () {
          this.$refs.logAllRef.style.backgroundImage = 'url(' + require('../../assets/kk-user/log/kk-log-phone.png') + ')'
        },
        passFocus () {
          this.$refs.logAllRef.style.backgroundImage = 'url(' + require('../../assets/kk-user/log/kk-log-pass.png') + ')'
        },
        loginClicked () {
          if (this.phone.length !== 11) {
            this.loginHintShow = true
            this.loginHint = '您输入的手机号无效，请重新输入'
          } else if (this.password.length <= 7) {
            this.loginHintShow = true
            this.loginHint = '密码长度至少为8位'
          } else {
            this.$request({
              type: 'post',
              url: '/kkv1/phone/signin',
              params: {
                'phone': this.phone,
                'password': this.password
              },
              headers: {
                'X-Device': 'A:bcce411315f9d871'
              },
              success (res) {
//                console.log(res.headers)
                if (res.data.code === '600004') {
                  this.loginHintShow = true
                  this.loginHint = '账号或者密码不对orz'
                } else {
                  this.$router.push({path: '/user'})
                }
              },
              failed (err) {
                console.log(err)
              }
            })
          }
        }
      }
    }
</script>

<style scoped lang='less'>
  .log-all{
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/kk-user/log/kk-log-phone.png);
    -webkit-background-size: 100%;
    background-size: 100%;
    position: relative;
    .log-top{
      width: 90vw;
      padding:1vh 5vw;
      height: 10vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a{
        img{
          width: 5vw;
          vertical-align: middle;
        }
      }
      span{
        font-size: 17px;
        vertical-align: middle;
        a{
          color: black;
        }
      }
    }
    .log-content{
      width: 60vw;
      height: 15vh;
      background-color: #fff;
      position: absolute;
      top: 37vh;
      left: 20vw;
      border-radius: 18px;
      .log-phone{
        width: 55vw;
        height: 7.5vh;
        border-bottom: 1px solid #f1f1f1;
        display: flex;
        align-items: center;
        padding-left: 5vw;
        img{
          width: 8vw;
        }
        input{
          height: 3vh;
          width: 45vw;
          font-size: 16px;
          border: none;
          outline: none;
        }
      }
      .log-pass{
        width: 55vw;
        height: 7.5vh;
        display: flex;
        align-items: center;
        padding-left: 5vw;
        img{
          margin-left: 1vw;
          width: 6vw;
          margin-right: 1.7vw;
          vertical-align: middle;
        }
        input{
          height: 3vh;
          width: 45vw;
          font-size: 16px;
          border: none;
          outline: none;
          vertical-align: middle;
        }
      }
    }
    h6{
      width: 60vw;
      height: 3vh;
      /*background-color: firebrick;*/
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 52.7vh;
      left: 20vw;
      color: red;
      font-size: 14px;
      font-weight: normal;
    }
    button{
      width: 60vw;
      height: 7.5vh;
      background-color: #323f48;
      border-radius: 15px;
      position: absolute;
      top: 56vh;
      left: 20vw;
      color: #fff;
      font-size: 17px;
      border: none;
      outline: none;
    }
    .log-bottom{
      height: 30vh;
      width: 100vw;
      /*background-color: red;*/
      position: absolute;
      left: 0;
      top: 70vh;
      h2{
        font-weight: normal;
        text-align: center;
        margin-bottom: 2vh;
        a{
          font-size: 17px;
          color: #743c00;
        }
      }
      .other-title{
        text-align: center;
        margin-bottom: 3vh;
        .other-text{
          color: #ddb300;
          font-size: 14px;
          position: relative;
        }
        .other-text:before{
          content: '';
          position: absolute;
          top: 45%;
          left: -52%;
          background: #ddb300;
          width: 35%;
          height: 1px;
        }
        .other-text:after{
          content: '';
          position: absolute;
          top: 45%;
          right: -52%;
          background: #ddb300;
          width: 35%;
          height: 1px;
        }
      }
      .other-way{
        width: 60vw;
        height: 15vh;
        /*background-color: aqua;*/
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20vw;
        div{
          text-align: center;
          img{
            width: 8vw;
          }
          h3{
            font-size: 16px;
            font-weight: normal;
          }
        }
      }
    }
  }
</style>
