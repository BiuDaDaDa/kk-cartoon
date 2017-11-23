<template>
  <div>
    <!-- -----头部----- -->
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/user">
          <img src="../../assets/kk-user/kk-user-close.png" alt="">
        </router-link>
        <h2>编辑资料</h2>
        <h3>发送</h3>
      </div>
    </div>
    <!-- -----头部----- -->
    <div class="info-all">
      <div class="info-img">
        <div class="img-all">
          <img src="../../assets/kk-user/kk-user-head.jpg" alt="">
        </div>
      </div>

      <div class="info-content">
        <div class="info-for" v-for="infoValue,infoIndex in userInfo">
          <h2>{{infoValue.tags}}</h2>
          <h3>{{infoValue.name}}</h3>
        </div>
      </div>

      <div class="info-id">
        <span>uid: 92670787</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'UserInfo',
      data () {
        return {
          userInfo: [
            {
              tags: '昵称',
              name: 'Moriarty24'
            },
            {
              tags: '性别',
              name: '男'
            },
            {
              tags: '昵称',
              name: '1997-01-01'
            }
          ]
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
        img{
          width: 100%;
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
        h3{
          font-size: 17px;
          font-weight: 400;
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
