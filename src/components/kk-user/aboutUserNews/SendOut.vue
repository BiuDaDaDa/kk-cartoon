<template>
  <div>
    <div class="sendout-all">
      <div class="sendout-for" v-for="sendValue,sendIndex in userSend">
        <div class="sf-top">
          <span>{{sendValue.content}}</span>
        </div>

        <div class="sf-center">
          <span>{{sendValue.target_comment.content}}</span>
          <div class="sfc-img">
            <img :src="sendValue.target_comic.cover_image_url" alt="">
          </div>

          <div class="sfc-title">
            <div class="sfc-zj">{{sendValue.target_comic.title}}</div>
            <div class="sfc-carton">{{sendValue.target_comic.topic_title}}</div>
          </div>
        </div>

        <div class="sf-bottom">
          <div class="sfb-time">
            <span>{{sendValue.created_at_info}}</span>
          </div>

          <div class="sfb-zan">
            <img src="../../../assets/kk-user/kk-user-zan.png" alt="">
            <span>{{sendValue.likes_count}}</span>
            <button>删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'Comment',
      data () {
        return {
          userSend: []
        }
      },
      mounted () {
        let useCookie = document.cookie.indexOf('session')
        if (useCookie !== -1) {
          this.$request({
            type: 'get',
            url: '/kuaikanv2/comments/me',
            success (res) {
              console.log(res.data.data.comments)
              this.userSend = res.data.data.comments
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
  .sendout-all{
    width: 100%;
    min-height: 83.9vh;
    background-color: #fff;
    .sendout-for{
      width: 93%;
      margin-left: 4.5%;
      margin-right: 2.5%;
      height: 37vh;
      padding-top: 1vh;
      padding-bottom: 2vh;
      border-bottom: 1px solid #efefef;
      /*background-color: red;*/
      .sf-top{
        width: 100%;
        height: 25%;
        /*background-color: gold;*/
        display: flex;
        align-items: center;
        font-size: 17px;
      }
      .sf-center{
        width: 94%;
        height: 44%;
        padding: 8% 3% 4%;
        background-color: #f6fafb;
        display: flex;
        position: relative;
        span{
          position: absolute;
          top: 3%;
          left: 3%;
          font-size:15px;
        }
        .sfc-img{
          width: 40%;
          height: 100%;
          background-color: royalblue;
          overflow: hidden;
          img{
            width: 110%;
            height: 100%;
          }
        }
        .sfc-title{
          width: 60%;
          height: 100%;
          background-color: #fff;
          padding-left: 2vw;
          .sfc-zj{
            margin-top: 2.5vh;
            font-size: 17px;
          }
          .sfc-carton{
            margin-top: 6vh;
            font-size: 14px;
            color: #9d9d9d;

          }
        }
      }
      .sf-bottom{
        width: 100%;
        height: 20%;
        /*background-color: royalblue;*/
        display: flex;
        align-items: center;
        justify-content: space-between;
        .sfb-time{
          font-size: 16px;
          color: #9d9d9d;
          vertical-align: middle;
        }
        .sfb-zan{
          position: relative;
          img{
            width: 15%;
            margin-left: 30%;
            vertical-align: top;
          }
          span{
            vertical-align: middle;
            font-size: 16px;
            color: #9d9d9d;
          }
          button{
            position: absolute;
            top: -2px;
            right: 0;
            z-index: 1;
            font-size: 15px;
            border: 1px solid #ebebeb;
            background-color: #fff;
            padding: 2px 7px;
            border-radius: 20px;
            color: #c2c2c2;
          }
        }
      }

    }
  }
</style>
