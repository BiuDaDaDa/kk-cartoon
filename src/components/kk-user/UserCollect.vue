<template>
  <div>
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/user">
          <img src="../../assets/kk-user/kk-user-left.png" alt="">
        </router-link>
        <span>我的收藏</span>
      </div>
    </div>

    <div class="collect-all" v-if="userLog">
      <div class="collect-for" v-for="collectValue,collectIndex in userCollect">
        <div class="collect-img">
          <img :src="collectValue.cover_image_url" alt="">
        </div>

        <div class="collect-title">
          <h2>{{collectValue.title}}</h2>
          <h3>{{collectValue.topic.title}}</h3>
        </div>
      </div>
    </div>

    <div class="unlog-collect-all">
      <router-link to="/userLogin"></router-link>
    </div>



  </div>
</template>

<script>
    export default {
      name: 'UserCollect',
      data () {
        return {
          userLog: false,
          userCollect: []
        }
      },
      mounted () {
        let useCookie = document.cookie.indexOf('session')
        if (useCookie === -1) {
          this.userLog = false
        } else {
          this.$request({
            type: 'get',
            url: '/kuaikanv1/fav/comics',
            success (res) {
              if (res.data.code === 401) {
                this.userLog = false
              } else {
                this.userLog = true
                this.userCollect = res.data.data.comics
//                console.log(this.userCollect)
              }
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
  /* -----------头部----------- */
  .newsTitle{
    width: 100%;
    height: 6vh;
    font-weight: 200;
    /*background-color: #aaa;*/
    display: flex;
    align-items: center;
    border-bottom: 1px solid #939393;
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
          top: -2vh;
          left: 5vw;
          width: 25px;
          height: 25px;
          vertical-align: middle;
        }
      }
      span{
        font-size: 20px;
        text-align: center;
        margin: 0 auto;
        vertical-align: middle;
      }
    }
  }
  /* -----------头部----------- */
  .unlog-collect-all{
    width: 100vw;
    height: 93.9vh;
    background-image: url(../../assets/kk-user/unlog/kk-unlog-collect.png);
    background-size:100%;
    background-repeat:no-repeat;
    a{
      width: 100%;
      height: 100%;
    }
  }
  .collect-all{
    width: 100%;
    min-height: 93.9vh;
    /*background-color: red;*/
    .collect-for{
      width: 97%;
      height: 11vh;
      /*background-color: blue;*/
      margin-left: 3%;
      padding-top: 1vh;
      padding-bottom: 1vh;
      border-bottom: 1px solid #efefef;
      display: flex;
      align-items: flex-start;
      .collect-img{
        width: 30%;
        height: 11vh;
        overflow: hidden;
        img{
          width: 110%;
          height: 100%;
        }
        /*background-color: aqua;*/
      }
      .collect-title{
        margin-left: 3%;
        h2{
          font-size: 18px;
          font-weight: normal;
          line-height: 45px;
        }
        h3{
          font-size: 14px;
          color: #939393;
          font-weight: normal;
          line-height: 45px;
        }
      }
    }
  }
</style>
