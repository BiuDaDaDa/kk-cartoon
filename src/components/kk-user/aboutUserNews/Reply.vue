<template>
  <div>
    <div class="reply-all">
      <div class="reply-for" v-for="replyValue,replyIndex in userReply">

        <div class="reply-top">
          <div class="reply-userimg">
            <img :src="replyValue.user.avatar_url" alt="">
          </div>

          <div class="reply-userinfo">
            <span>{{replyValue.user.nickname}}</span>
            <span class="reply-userinfo-time">{{replyValue.created_at_info}}</span>
          </div>
          <button>回复</button>
        </div>

        <div class="reply-content">
          <span>{{replyValue.content}}</span>
        </div>

        <div class="reply-which">
          <div class="rw-top">
            <span>{{replyValue.target_comment.content}}</span>
          </div>

          <div class="rw-bottom">
            <div class="rw-ct-img">
              <img :src="replyValue.target_comic.cover_image_url" alt="">
            </div>
            <div class="rw-ct-title">
              <span>{{replyValue.target_comic.title}}</span>
              <span class="rw-ct-carton">{{replyValue.target_comic.topic_title}}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'Reply',
      data () {
        return {
          userReply: []
        }
      },
      mounted () {
        let useCookie = document.cookie.indexOf('session')
        if (useCookie !== -1) {
          this.$request({
            type: 'get',
            url: '/kuaikanv2/comments/replies',
            success (res) {
//              console.log(res.data.data.comments)
              this.userReply = res.data.data.comments
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
  .reply-all{
    width: 100%;
    min-height: 83.9vh;
    .reply-for{
      width: 100%;
      height: 35vh;
      /*background-color: red;*/
      border-bottom: 1px solid #efefef;
      background-color: #fff;
      overflow: hidden;
      padding-bottom: 1vh;
      .reply-top{
        width: 100%;
        height: 20%;
        /*background-color: #777;*/
        display: flex;
        align-items: center;
        position: relative;
        .reply-userimg{
          width: 10%;
          height: 75%;
          border-radius: 50%;
          overflow: hidden;
          margin-left: 2%;
          background-image: url(../../../assets/kk-user/kk-user-head.jpg);
          -webkit-background-size: 100% 100%;
          background-size: 100% 100%;
          background-repeat:no-repeat;
          img{
            width: 100%;
          }
        }
        .reply-userinfo{
          margin-left: 3%;
          span{
            display: block;
            color: #939393;
            font-size: 16px;
          }
          .reply-userinfo-time{
            font-size: 15px;
          }
        }
        button{
          position: absolute;
          top: 20%;
          right: 5vw;
          z-index: 1;
          font-size: 15px;
          border: 1px solid #ebebeb;
          background-color: #fff;
          padding: 3px 9px;
          border-radius: 20px;
          color: #c2c2c2;
        }
      }
      .reply-content{
        width: 80%;
        display: flex;
        align-items: center;
        /*background-color: red;*/
        margin-left: 15vw;
        line-height: 6vh;
        font-size: 17px;
      }
      .reply-which{
        width: 75%;
        margin-left: 15vw;
        padding: 0 2.5vw 2vh;
        background-color: #f6fafb;
        .rw-top{
          display: flex;
          width: 100%;
          /*background-color: red;*/
          span{
            color: #676b6c;
            line-height: 6vh;
            font-size: 17px;
          }
        }
        .rw-bottom{
          display: flex;
          width: 100%;
          height: 14vh;
          background-color: #fff;
          .rw-ct-img{
            width: 40%;
            height: 100%;
            /*background-color: red;*/
            overflow: hidden;
            img{
              width: 110%;
              height: 100%;
            }
          }
          .rw-ct-title{
            width: 56%;
            padding-left: 4%;
            padding-top: 2vh;
            padding-bottom: 2vh;
            span{
              display: block;
              font-size: 17px;
            }
            .rw-ct-carton{
              margin-top: 5vh;
              font-size: 14px;
              color: #c3c3c3;
            }
          }
        }
      }
    }
  }
</style>
