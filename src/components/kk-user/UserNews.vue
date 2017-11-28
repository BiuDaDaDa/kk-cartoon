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

    <mt-tab-container v-model="selected" :swipeable=true>
      <mt-tab-container-item id="s1">
        <div class="user-pl-all" v-if="userLog">
          <div class="downlist">
            <span class="downlist-tags" @click="listTagsClicked">{{changeTags}}</span>
            <img src="../../assets/kk-user/kk-user-down.png" alt="">
            <div class="user-downlist-none" v-show="noneShow">
              <div class="none-img">
                <img src="../../assets/kk-user/kk-user-up.png" alt="">
              </div>
              <div class="none-down">
                <span class="none-span-one" @click="returnClicked">回复我的</span>
                <span @click="mineClicked">我发出的</span>
              </div>
            </div>
          </div>

          <div class="user-pl-content-all">
            <router-view></router-view>
          </div>
        </div>
        <div class="unlog-user-pl-all" v-if="!userLog">
          <router-link to="/userLogin"></router-link>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="s2">

        <div class="inform-all" v-if="userLog">
          <div class="inform-for" v-for="informValue,informIndex in userMessage">
            <div class="inform-top">
              <span>2017-11-15</span>
            </div>

            <div class="inform-body">
              <div class="inform-body-header">
                <img :src="informValue.send_user.avatar_url" alt="">
                <span>{{informValue.send_user.nickname}}</span>
              </div>

              <div class="inform-body-content">
                <pre>
                  {{informValue.description}}
                </pre>
              </div>

              <div class="inform-body-footer">
                <span>{{informValue.target_guide_name}}</span>
              </div>
            </div>
          </div>

        </div>

        <div class="unlog-inform-all" v-if="!userLog">
          <div class="uia-top">
            <span>登录后可查看全部通知</span>
            <button @click="toUserLogin">登录</button>
          </div>
          <div class="uia-bottom"></div>
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
        selected: 's1',
        noneShow: false,
        changeTags: '回复我的',
        userLog: false,
        userMessage: []
      }
    },
    mounted () {
      let useCookie = document.cookie.indexOf('session')
      if (useCookie === -1) {
        this.userLog = false
      } else {
        this.$request({
          type: 'get',
          url: '/kuaikanv2/messages/all?start_time=1511089083341',
          success (res) {
//            console.log(res.data.data.since)
            if (res.data.data.since === -1) {
              this.userLog = false
            } else {
              this.userLog = true
              this.userMessage = res.data.data.messages
            }
          },
          failed (err) {
            console.log(err)
          }
        })
      }
    },
    methods: {
      listTagsClicked () {
        this.noneShow = !this.noneShow
      },
      returnClicked () {
        this.changeTags = '回复我的'
        this.noneShow = !this.noneShow
        this.$router.push({path: '/userNews/reply'})
      },
      mineClicked () {
        this.changeTags = '我发出的'
        this.noneShow = !this.noneShow
        this.$router.push({path: '/userNews/sendout'})
      },
      toUserLogin () {
        this.$router.push({path: '/userLogin'})
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
          top: -1.8vh;
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
        color: #ffbb1a;
        border-bottom: 3px solid #ffbb1a;
      }
    }
  }
  .unlog-user-pl-all{
    width: 100vw;
    height: 89vh;
    background-color: #f8f9fb;
    background-image: url(../../assets/kk-user/unlog/kk-unlog-comment.png);
    -webkit-background-size: 100%;
    background-size: 100%;
    background-repeat:no-repeat;
    a{
      width: 100%;
      height: 100%;
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
            color: #fff;
            margin: 0 5px;
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
  .unlog-inform-all{
    width: 100vw;
    height: 88.9vh;
    background-color: red;
    .uia-top{
      width: 90vw;
      height: 10%;
      background-color: #fee6e6;
      padding: 0 5vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button{
        width: 15vw;
        height: 50%;
        background-color: #fbe338;
        border: none;
        outline: none;
        border-radius: 15px;
        color: #735300;
        font-size: 15px;
      }
    }
    .uia-bottom{
      width: 100vw;
      height: 100%;
      background-color: #f8f9fb;
      background-image: url(../../assets/kk-user/unlog/kk-unlog-message.png);
      -webkit-background-size: 100% 100%;
      background-size: 100%;
      background-repeat:no-repeat;
    }
  }
  .inform-all{
    width: 100%;
    min-height: 88.9vh;
    background-color: #f9f8fd;
    .inform-for{
      width: 100vw;
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
          width: 88%;
          height: 78%;
          margin: 0 auto;
          pre{
            margin: 0 auto;
            color: black;
            white-space: pre-wrap;
            line-height: 25px;
          }
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
  }





</style>
