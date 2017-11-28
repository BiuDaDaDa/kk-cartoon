<template>
  <div>
    <div class="reg-all">
      <div class="reg-top">
        <router-link to="/userLogin">
          <img src="../../assets/kk-user/kk-user-left-brown.png" alt="">
        </router-link>
      </div>

      <div class="reg-input">
        <input type="password" placeholder="请输入新密码，至少8位" ref="newPass" v-model="passNum">
      </div>
      <h4 v-show="hintShow">{{resetHint}}</h4>
      <button @click="confirm">确认</button>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserReset',
    data () {
      return {
        passNum: '',
        resetHint: '',
        hintShow: false
      }
    },
    methods: {
      confirm () {
        if (this.passNum.length <= 7) {
          this.hintShow = true
          this.resetHint = '密码长度至少为8位'
        } else {
          this.$request({
            type: 'post',
            url: '/kkv1/account/reset_password/by_phone',
            params: {
              password: this.passNum
            },
            success (res) {
              if (res.data.code === 401) {
                this.hintShow = true
                this.resetHint = '请求超时'
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
      width: 56vw;
      height: 4.5vh;
      background-color: #fff;
      display: flex;
      align-items: center;
      position: absolute;
      left: 20vw;
      top: 27vh;
      border-radius: 18px;
      padding: 1vh 2vw;
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
      top: 32.9vh;
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
      top: 36.5vh;
      border-radius: 15px;
      color: #fff;
      font-size: 17px;
      background-color: #323f48;
      border: none;
      outline: none;
    }
  }
</style>
