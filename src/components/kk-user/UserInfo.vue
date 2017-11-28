<template>
  <div>
    <!-- -----头部----- -->
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/user">
          <img src="../../assets/kk-user/kk-user-close.png" alt="">
        </router-link>
        <h2>编辑资料</h2>
        <h3 @click="sendInfo">发送</h3>
      </div>
    </div>
    <!-- -----头部----- -->
    <div class="info-all">
      <div class="info-img">
        <div class="img-all">
          <img ref="userInfoImg" :src="showImg === 1 ? userInfo.avatar_url : changeUserImg" alt="">
          <input type="file" accept="image/*" ref="userImg" @change="changeImg($event)">
        </div>
      </div>

      <div class="info-content">
        <div class="info-for">
          <h2>昵称</h2>
          <input ref="userNickName" type="text" :value="userInfo.nickname">
        </div>
        <div class="info-for">
          <h2>性别</h2>
          <input ref="userSex" type="text" :value="userInfo.gender === 1 ? '男' : '女'">
        </div>
        <div class="info-for">
          <h2>生日</h2>
          <input ref="userBirthday" type="text" :value="userInfo.birthday">
        </div>
      </div>

      <div class="info-id">
        <span>{{userInfo.id}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'UserInfo',
      data () {
        return {
          showImg: 1,
          userInfo: '',
          changeUserImg: ''
        }
      },
      mounted () {
        this.showImg = 1
        this.$request({
          type: 'get',
          url: '/kuaikanv1/users/me',
          heders: {
            'X-Device': 'A:bcce411315f9d871'
          },
          success (res) {
            this.userInfo = res.data.data
//            console.log(this.userInfo)
          },
          failed (err) {
            console.log(err)
          }
        })
      },
      methods: {
        sendInfo () {
          console.log(this.$refs.userNickName.value)
          console.log(this.$refs.userSex.value)
          console.log(this.$refs.userBirthday.value)
//          console.log(this.changeUserImg)
          console.log(this.$refs.userImg.value)
          this.$request({
            type: 'post',
            url: '/kuaikanv1/account/update',
            params: {
              'gender': 1,
              'birthday': '1993-02-24',
              'nickname': 'Moriarty666'
//              'avatar': this.changeUserImg
            },
            headers: {
//              'Content-Type': 'multipart/form-data; boundary=c86061fd-e1a4-4c08-b15d-4095fff571a6',
              'X-Device': 'A:bcce411315f9d871',
              'user-agent': 'Kuaikan/4.8.0/48000(Android;7.0;DUK-AL20;kuaikan221;WIFI;2416*1440)'
            },
            success (res) {
              console.log(res)
            },
            failed (err) {
              console.log(err)
            }
          })
        },
        changeImg (obj) {
          this.showImg = 2
          console.log(obj.target.files[0])
          let file = obj.target.files[0]
          let reader = new FileReader()
          let that = this
          reader.onload = function (e) {
            that.changeUserImg = e.target.result
          }
          reader.readAsDataURL(file)
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
    background-color: #ffd60f;
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
      h2{
        font-size: 20px;
        text-align: center;
        font-weight: normal;
        margin: 0 auto;
        vertical-align: middle;
      }
      h3{
        position: absolute;
        top: 1.3vh;
        right: 5vw;
        font-weight: normal;
        font-size: 17px;
      }
    }
  }
  .info-all{
    width: 100vw;
    height: 94vh;
    background-color: #f9f9f9;
    .info-img{
      width: 100vw;
      height: 30%;
      /*background-color: blue;*/
      display: flex;
      align-items: center;
      justify-content: center;
      .img-all{
        width: 25vw;
        height: 25vw;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        img{
          width: 100%;
        }
        input{
          position: absolute;
          top:0;
          left: 0;
          width: 25vw;
          height: 25vw;
          background-color: red;
          z-index: 10;
          border: none;
          opacity: 0;
          outline: none;
        }
      }
    }
    .info-content{
      width: 90vw;
      height: 25%;
      /*background-color: aqua;*/
      padding: 0 5vw;
      .info-for{
        width: 90vw;
        height: 30%;
        background-color: #fff;
        display: flex;
        align-items: center;
        border-bottom: 1.2vh solid #f9f9f9;
        h2{
          font-size: 17px;
          font-weight: 200;
          margin-left: 2vw;
          margin-right: 4vw;
        }
        input{
          font-size: 17px;
          font-weight: 300;
          width: 70vw;
          border: none;
          outline: none;
        }
      }
    }
    .info-id{
      width: 100vw;
      height: 5vh;
      /*background-color: gold;*/
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      bottom: 0;
      left: 0;
      span{
        font-size: 14px;
        color: #939393;
      }
    }
  }
  /* -----------头部----------- */
</style>
