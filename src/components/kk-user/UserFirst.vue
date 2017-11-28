<template>
 <div>
   <div class="first-all">
     <div class="first-top">
       <router-link to="/userLogin">
         <img src="../../assets/kk-user/kk-user-left-brown.png" alt="">
       </router-link>
     </div>

     <div class="first-content">
       <div class="first-name">
         <img :src="nameImg" alt="">
         <input type="text" placeholder="请输入昵称，最少3位字符" ref="nameValue" @focus="nameFocus" v-model="firstName">
       </div>

       <div class="first-pass">
         <img :src="passImg" alt="">
         <input type="password" placeholder="输入您的密码" ref="passValue" @focus="passFocus" v-model="password">
       </div>
     </div>

     <h6 v-show="firstHintShow">{{firstHint}}</h6>

     <button @click="firstClicked">提交</button>
   </div>
 </div>
</template>

<script>
  export default {
    name: 'UserFirst',
    data () {
      return {
        firstHintShow: false,
        firstName: '',
        password: '',
        firstHint: '',
        nameImg: require('../../assets/kk-user/kk-first-user-gray.png'),
        passImg: require('../../assets/kk-user/kk-first-lock-gray.png')
      }
    },
    methods: {
      firstClicked () {
        if (this.$refs.nameValue.value === '' || this.$refs.passValue.value === '') {
          this.firstHint = '请输入用户名或密码'
          this.firstHintShow = true
        } else {
          if (this.firstName.length <= 2) {
            this.firstHint = '昵称长度不能少于3个字符'
            this.firstHintShow = true
          } else {
            if (this.password.length <= 7) {
              this.firstHint = '密码长度至少为8位'
              this.firstHintShow = true
            } else {
              this.$request({
                type: 'post',
                url: '/kkv1/phone/signup',
                params: {
                  nickName: this.firstName,
                  password: this.password,
                  'sa_event': 'eyJkaXN0aW5jdF9pZCI6IkE6YmNjZTQxMTMxNWY5ZDg3MSIsImV2ZW50IjoiU2lnbnVwU3VjY2VzcyIsIm9yaWdpbmFsX2lkIjoiQTpiY2NlNDExMzE1ZjlkODcxIiwicHJvamVjdCI6Imt1YWlrYW5fYXBwIiwicHJvcGVydGllcyI6eyJOaWNrTmFtZSI6IuWwj-eOi-WtkGxociIsIlNpZ251cFR5cGUiOiLmiYvmnLrlj7ciLCJUcmlnZ2VyUGFnZSI6IlNpZ251cFByb2ZpbGVQYWdlIiwiZGlzdGluY3RfaWQiOjAsIkNoYW5uZWxzIjoia3VhaWthbjIyMSIsIlByb3BlcnR5RXZlbnQiOiJTaWdudXBTdWNjZXNzIiwiYWJ0ZXN0U2lnbiI6WyJzY2hlbWVfaG9tZV9mYXZvdXJpdGVfaW1nXzFfYiJdLCJhYnRlc3RfZ3JvdXAiOjcwLCIkYXBwX3ZlcnNpb24iOiI0LjguMCIsIiRsaWJfdmVyc2lvbiI6IjEuNi4zNCIsIiRtYW51ZmFjdHVyZXIiOiJIVUFXRUkiLCIkbW9kZWwiOiJEVUstQUwyMCIsIiRvcyI6IkFuZHJvaWQiLCIkb3NfdmVyc2lvbiI6IjcuMCIsIiRzY3JlZW5faGVpZ2h0IjoyNDE2LCIkc2NyZWVuX3dpZHRoIjoxNDQwLCIkd2lmaSI6dHJ1ZSwiJGNhcnJpZXIiOiLkuK3lm73np7vliqgiLCIkbmV0d29ya190eXBlIjoiV0lGSSJ9LCJ0aW1lIjoxNTExNzc0OTcyMTE4LCJ0eXBlIjoidHJhY2sifQ%3D%3D'
                },
                success (res) {
                  if (res.data.code === 600007) {
                    this.firstHint = '这个昵称已经有人用过咯~'
                    this.firstHintShow = true
                  } else {
                    this.$request({
                      type: 'post',
                      url: '/kkv1/phone/signin',
                      params: {
                        'phone': window.localStorage.getItem('phoneNum'),
                        'password': this.password
                      },
                      headers: {
                        'X-Device': 'A:bcce411315f9d871'
                      },
                      success (res) {
                        this.$router.push({path: '/user'})
                      },
                      failed (err) {
                        console.log(err)
                      }
                    })
                  }
                },
                failed (err) {
                  console.log(err)
                }
              })
            }
          }
        }
      },
      nameFocus () {
        this.nameImg = require('../../assets/kk-user/kk-first-user-black.png')
        this.passImg = require('../../assets/kk-user/kk-first-lock-gray.png')
      },
      passFocus () {
        this.passImg = require('../../assets/kk-user/kk-first-lock-black.png')
        this.nameImg = require('../../assets/kk-user/kk-first-user-gray.png')
      }
    }
  }
</script>

<style scoped lang='less'>
  .first-all{
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/kk-user/log/kk-regfor-bg.png);
    -webkit-background-size: 100%;
    background-size: 100%;
    position: relative;
    .first-top {
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
    .first-content{
      width: 60vw;
      height: 15vh;
      background-color: #fff;
      position: absolute;
      top: 27vh;
      left: 20vw;
      border-radius: 18px;
      .first-name{
        width: 55vw;
        height: 7.5vh;
        border-bottom: 1px solid #f1f1f1;
        display: flex;
        align-items: center;
        padding-left: 6.6vw;
        img{
          width: 5vw;
          margin-right:1.7vw;
        }
        input{
          height: 3vh;
          width: 45vw;
          font-size: 16px;
          border: none;
          outline: none;
        }
      }
      .first-pass{
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
      top: 42.7vh;
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
      top: 46vh;
      left: 20vw;
      color: #fff;
      font-size: 17px;
      border: none;
      outline: none;
    }
  }
</style>
