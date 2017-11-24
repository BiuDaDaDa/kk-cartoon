<template>
  <div>
    <div class="forget-all">
      <div class="forget-top">
        <router-link to="/userLogin">
          <img src="../../assets/kk-user/kk-user-left-brown.png" alt="">
        </router-link>
      </div>

      <div class="forget-input">
        <img src="../../assets/kk-user/log/kk-log-phone-black.png" alt="">
        <input type="text" placeholder="请输入您的手机号">
      </div>

      <button>获取验证码</button>

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
    name: 'UserForget'
  }
</script>

<style scoped lang='less'>
  .forget-all{
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/kk-user/log/kk-regfor-bg.png);
    -webkit-background-size: 100%;
    background-size: 100%;
    position: relative;
    .forget-top {
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
    .forget-input{
      width: 60vw;
      height: 7.5vh;
      background-color: #fff;
      display: flex;
      align-items: center;
      position: absolute;
      left: 20vw;
      top: 28vh;
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
