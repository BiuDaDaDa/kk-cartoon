<template>
  <div>
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/user">
          <img src="../../assets/kk-user/kk-user-left.png" alt="">
        </router-link>
        <span>我的消息</span>
      </div>
    </div>

    <mt-navbar v-model="selected" class="mt-tags">
      <mt-tab-item id="s1" class="mt-tags-title">
        <span>评论</span>
      </mt-tab-item>
      <mt-tab-item id="s2" class="mt-tags-title">
        <span>通知</span>
      </mt-tab-item>
    </mt-navbar>

     <!--tab-container -->
    <mt-tab-container v-model="selected" :swipeable=true>
      <mt-tab-container-item id="s1">
        <div class="user-pl-all">
          <div class="downlist">
            <span class="downlist-tags" @click="listTagsClicked">{{changeTags}}</span>
            <img src="../../assets/kk-user/kk-user-down.png" alt="">
            <div class="user-downlist-none" v-show="noneShow">
              <div class="none-img">
                <img src="../../assets/kk-user/kk-user-up.png" alt="">
              </div>
              <div class="none-down">
                <span class="none-span-one" @click="returnClicked">
                   <router-link :to="userChoose">回复我的</router-link>
                </span>
                <span @click="mineClicked">
                  <router-link :to="userChoose">我发出的</router-link>
                </span>
              </div>
            </div>
          </div>

          <div class="user-pl-content-all">
            <router-view></router-view>
          </div>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="s2">

        <div class="inform-all">

          <div class="inform-top">
            <span>2017-11-15</span>
          </div>

          <div class="inform-body">
            <div class="inform-body-header">
              <img src="../../assets/kk-user/kk-user-xzs.jpg" alt="">
              <span>快看小助手</span>
            </div>

            <div class="inform-body-content"></div>

            <div class="inform-body-footer">
              <span>立即体验</span>
            </div>
          </div>

        </div>

      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  export default {
    name: 'UserNews',
    data () {
      return {
        selected: 1,
        s1: [1, 2, 3, 4, 5, 6, 7, 8],
        s2: [1, 2, 3, 4, 5, 6, 7],
        noneShow: false,
        changeTags: '回复我的',
        userChoose: ''
      }
    },
    methods: {
      listTagsClicked () {
        this.noneShow = !this.noneShow
      },
      returnClicked () {
        this.changeTags = '回复我的'
        this.noneShow = !this.noneShow
        this.userChoose = '/userNews/reply'
      },
      mineClicked () {
        this.changeTags = '我发出的'
        this.noneShow = !this.noneShow
        this.userChoose = '/userNews/sendout'
      }
    }
  }
</script>

<style scoped lang='less'>
  .newsTitle{
    width: 100%;
    height: 6vh;
    font-weight: 200;
    /*background-color: #aaa;*/
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
  .mt-tags{
    margin-bottom: 2px;
    border-bottom: 2px solid #939393;
    a{
      padding: 0;
      text-decoration: none;
      border-bottom: none;
    }
    .mt-tags-title{
      span{
        display: inline-block;
        padding: 5px 10px;
        margin-bottom: 5px;
        font-size: 16px;
        color: #939393;
      }
    }
    .is-selected{
      border-bottom: none;
      span{
        border-bottom: 3px solid #ffbb1a;
      }
    }
  }

  .user-pl-all{
    border-top: 3px solid #f9f8fd;
    background-color: #f9f8fd;
    width: 100%;
    min-height: 88.9vh;
    .downlist{
      width: 100%;
      height: 5vh;
      background-color: #fff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .downlist-tags{
        font-size: 16px;
        color: #6f94be;
        float: right;
        margin-right: 10vw;
      }
      img{
        position: absolute;
        top: 0.8vh;
        right: 4vw;
        width: 25px;
        height: 25px;
      }
      .user-downlist-none{
        position: absolute;
        bottom: -12vh;
        right: 5vw;
        z-index: 3;
        background-color: #4d4d4f;
        margin: 0 auto;
        border-radius: 10px;
        text-align: center;
        .none-img{
          position: relative;
          img{
            position: absolute;
            top: -17px;
            left: 38%;
            width: 25px;
            height: 25px;
          }
        }
        .none-down{
          padding: 10px 10px;
          span{
            display: block;
            a{
              color: #fff;
              margin: 0 5px;
            }
          }
          .none-span-one{
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 2px solid #fff;
          }
        }
      }
    }
  }
  .inform-all{
    width: 100%;
    min-height: 88.9vh;
    background-color: #f9f8fd;
    .inform-top{
      width: 100%;
      margin: 0 auto;
      text-align: center;
      span{
        color: #a4a5a7;
        font-size: 14px;
        line-height: 40px;
      }
    }
    .inform-body{
      margin: 0 auto;
      width: 90%;
      height: 60vh;
      background-color: white;
      font-size: 15px;
      .inform-body-header{
        width: 90%;
        height: 10%;
        /*background-color: red;*/
        border-bottom: 1px solid #f1f1f1;
        margin: 0 auto;
        display: flex;
        align-items: center;
        img{
          vertical-align: middle;
          width: 5%;
          height: 40%;
        }
        span{
          vertical-align: middle;
          margin-left: 5%;
        }
      }
      .inform-body-content{
        display: flex;
        width: 90%;
        height: 78%;
        margin: 0 auto;
        /*background-color: #654;*/
      }
      .inform-body-footer{
        width: 90%;
        height: 10%;
        /*background-color: red;*/
        background-image: url(../../assets/kk-user/kk-user-right.png);
        background-size: 5% 40%;
        background-repeat:no-repeat;
        background-position:right;
        border-top: 1px solid #f1f1f1;
        margin: 0 auto;
        display: flex;
        align-items: center;
        span{
          color: #eab953;
        }
      }
    }
  }





</style>
