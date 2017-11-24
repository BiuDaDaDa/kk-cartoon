<template>
  <div>
    <div class="reg-all">
      <div class="reg-top">
        <router-link to="/userLogin">
          <img src="../../assets/kk-user/kk-user-left-brown.png" alt="">
        </router-link>
      </div>

      <div class="reg-input">
        <img src="../../assets/kk-user/log/kk-log-phone-black.png" alt="">
        <input type="text" placeholder="请输入您的手机号" v-model="phoneNum" ref="phoneValue">
      </div>
      <h4 v-show="hintShow">{{regHint}}</h4>
      <button @click="getyzm">获取验证码</button>

      <h3>
        注册即视为同意
        <span>《用户协议》</span>
        <span>《隐私协议》</span>
        <span>《未成年人保护协议》</span>
      </h3>

    </div>
  </div>
</template>

<script>

    export default {
      name: 'UserReg',
      data () {
        return {
          phoneNum: '',
          regHint: '',
          hintShow: false
        }
      },
      methods: {
        getyzm () {
          if (this.$refs.phoneValue.value === '') {
            this.regHint = '请输入您的手机号'
            this.hintShow = true
          } else {
            this.$request({
              type: 'post',
              url: '/kuaikanv1/phone/send_code',
              params: {
                'phone': this.phoneNum,
                'reason': 'register'
              },
              success (res) {
                let backCode
//              console.log(this.phoneNum)
                console.log(res.data.code)
                backCode = res.data.code
                if (backCode === 600002) {
                  console.log(this.phoneNum)
                  this.regHint = '填错了吧？这是无效的手机号！(ˊ·_·`)'
                  this.hintShow = true
                } else if (backCode === 600003) {
                  this.regHint = '该手机号码的账号已经存在了哟~(ˊ·Д·)'
                  this.hintShow = true
                } else {
                  console.log(this.phoneNum)
                  window.localStorage.setItem('phoneNum', this.phoneNum)
                  this.$router.push({path: '/userVerify'})
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
  .reg-all{
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/kk-user/log/kk-regfor-bg.png);
    -webkit-background-size: 100%;
    background-size: 100%;
    position: relative;
    .reg-top {
      width: 90vw;
      padding: 1vh 5vw;
      height: 10vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        img {
          width: 5vw;
          vertical-align: middle;
        }
      }
    }
    .reg-input{
      width: 60vw;
      height: 7.5vh;
      background-color: #fff;
      display: flex;
      align-items: center;
      position: absolute;
      left: 20vw;
      top: 27vh;
      border-radius: 18px;
      img{
        width: 8vw;
        margin-left: 5vw;
        margin-right: 2vw;
      }
      input{
        height: 3vh;
        width: 45vw;
        font-size: 16px;
        border: none;
        outline: none;
      }
    }
    h4{
      width: 60vw;
      height: 4vh;
      /*background-color: aqua;*/
      position: absolute;
      left: 20vw;
      top: 34.5vh;
      font-size: 14px;
      font-weight: normal;
      color: red;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button{
      width: 60vw;
      height: 6vh;
      text-align: center;
      position: absolute;
      left: 20vw;
      top: 38.5vh;
      border-radius: 15px;
      color: #fff;
      font-size: 17px;
      background-color: #323f48;
      border: none;
      outline: none;
    }
    h3{
      width: 90vw;
      text-align: center;
      font-size: 12px;
      font-weight: normal;
      position: absolute;
      top: 48.5vh;
      left: 5vw;
      span{
        color: deepskyblue;
      }
    }
  }
</style>
