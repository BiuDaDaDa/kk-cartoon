<template>
  <div>
    <div class="verify-all">
      <div class="verify-top">
        <router-link to="/userLogin">
          <img src="../../assets/kk-user/kk-user-left-brown.png" alt="">
        </router-link>
      </div>

      <div class="verify-input">
        <input type="text" placeholder="输入验证码" ref="yzmNum">
        <h6 @click="again" ref="againRef">{{againSend}}</h6>
      </div>

      <h4 v-show="yzmShow">{{yzmHint}}</h4>

      <button @click="regNext">下一步</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserVerify',
    data () {
      return {
        yzmShow: true,
        yzmHint: '请输入验证码',
        againSend: '重新发送',
        backTime: 1,
        phoneNum: ''
      }
    },
    mounted () {
      let that = this
      console.log(that.phoneNum)
      let timer
      clearInterval(timer)
      timer = setInterval(function () {
        that.backTime = that.backTime - 1
        if (that.backTime >= 0) {
          that.$refs.againRef.style.pointerEvents = 'none'
          that.againSend = that.backTime + '秒后重新获取'
        } else {
          clearInterval(timer)
          that.$refs.againRef.style.pointerEvents = 'auto'
          that.againSend = '重新发送'
          that.backTime = 60
        }
      }, 1000)
    },
    methods: {
      regNext () {
        if (this.$refs.yzmNum.value === '') {
          this.yzmShow = true
          this.yzmHint = '请输入验证码'
        } else {
          console.log(1)
        }
      },
      again () {
        window.localStorage.getItem('phoneNum')
        this.$request({
          type: 'post',
          url: '/kuaikanv1/phone/send_code',
          params: {
            'phone': this.phoneNum,
            'reason': 'register'
          },
          success (res) {
            let that = this
            let timertwo
            clearInterval(timertwo)
            timertwo = setInterval(function () {
              that.backTime = that.backTime - 1
              if (that.backTime >= 0) {
                that.againSend = that.backTime + '秒后重新获取'
                that.$refs.againRef.style.pointerEvents = 'none'
                that.$refs.againRef.color = '#b8b8b8'
              } else {
                clearInterval(timertwo)
                that.againSend = '重新发送'
                that.$refs.againRef.style.pointerEvents = 'auto'
                that.backTime = 60
              }
            }, 1000)
          },
          failed (err) {
            console.log(err)
          }
        })
      }
    }
  }
</script>

<style scoped lang='less'>
  .verify-all{
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/kk-user/log/kk-regfor-bg.png);
    -webkit-background-size: 100%;
    background-size: 100%;
    position: relative;
    .verify-top {
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
    .verify-input{
      width: 60vw;
      height: 7.5vh;
      overflow: hidden;
      background-color: #fff;
      display: flex;
      align-items: center;
      position: absolute;
      left: 20vw;
      top: 28vh;
      border-radius: 18px;
      input{
        height: 3vh;
        width: 35vw;
        /*background-color: red;*/
        font-size: 16px;
        border: none;
        outline: none;
        margin-left: 5vw;
      }
      h6{
        width: 25vw;
        height: 7.5vh;
        background-color: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: normal;
        color: #939393;
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
  }
</style>
