<template>
  <div>
    <!-- -----头部----- -->
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/user">
          <img src="../../assets/kk-user/kk-user-left.png" alt="">
        </router-link>
        <span>我的关注</span>
      </div>
    </div>
    <!-- -----头部----- -->


    <mt-navbar v-model="selected" class="mt-tags">
      <mt-tab-item id="s1" class="mt-tags-title">
        <span>作品</span>
      </mt-tab-item>
      <mt-tab-item id="s2" class="mt-tags-title">
        <span>作者</span>
      </mt-tab-item>
    </mt-navbar>

    <!--tab-container -->
    <mt-tab-container v-model="selected" :swipeable=true>
      <!--标签1-->
      <mt-tab-container-item id="s1" v-show="isShow">
        <div class="pro-all" v-if="userLog">
          <div class="pro-for" v-for="workValue,workIndex in userWork">
            <div class="pro-img">
              <img :src="workValue.cover_image_url" alt="">
            </div>

            <div class="pro-title">
                <h2>{{workValue.title}}</h2>
                <h3>{{workValue.user.nickname}}</h3>
                <h4>更新至：{{workValue.latest_comic_title}}</h4>

            </div>
          </div>
        </div>
        <div class="unlog-pro-all">
          <router-link to="/userLogin"></router-link>
        </div>
      </mt-tab-container-item>
      <!--标签1-->

      <!--标签2-->
      <mt-tab-container-item id="s2" v-show="!isShow">
        <div class="author-all" v-if="userLog">
          <div class="author-for" v-for="authorValue,authorIndex in userAuthor">
            <div class="author-img">
              <img :src="authorValue.avatar_url" alt="">
            </div>

            <div class="author-name">
              <h5>{{authorValue.nickname}}</h5>
              <h6>{{authorValue.u_intro}}</h6>
            </div>
          </div>
        </div>
        <div class="unlog-author-all">
          <router-link to="/userLogin"></router-link>
        </div>
      </mt-tab-container-item>
      <!--标签2-->

    </mt-tab-container>
    <!--tab-container -->

  </div>
</template>

<script>
    export default {
      name: 'UserAttention',
      data: function () {
        return {
          selected: 's1',
          userLog: false,
          userWork: [],
          userAuthor: [],
          isShow: true
        }
      },
      mounted () {
        let useCookie = document.cookie.indexOf('session')
        if (useCookie === -1) {
          this.userLog = false
        } else {
          this.$request({
            type: 'get',
            url: '/kuaikanv1/fav/topics',
            success (res) {
              if (res.data.data === undefined) {
                this.userLog = false
              } else {
                this.userLog = true
                this.userWork = res.data.data.topics
                console.log(this.userWork)
              }
            },
            failed (err) {
              console.log(err)
            }
          })
          this.$request({
            type: 'get',
            url: '/kuaikanv1/feeds/following_author_list?since=0',
            success (res) {
              if (res.data.data === undefined) {
                this.userLog = false
              } else {
                this.userLog = true
                this.userAuthor = res.data.data.author_list
                console.log(this.userAuthor)
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
  /* -----------头部----------- */

  /* -----------下部公共部分----------- */
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

  /* -----------下部公共部分----------- */
   .unlog-pro-all{
     width: 100vw;
     height: 88.9vh;
     background-color: #f8f9fb;
     background-image: url(../../assets/kk-user/unlog/kk-unlog-attention.png);
     background-size:100%;
     background-repeat:no-repeat;
     a{
       width: 100%;
       height: 100%;
     }
   }
   .pro-all{
     width: 100%;
     min-height: 88.9vh;
     /*background-color: red;*/
     .pro-for{
       width: 100%;
       height: 18vh;
       /*background-color: salmon;*/
       display: flex;
       border-bottom: 1px solid #efefef;
       .pro-img{
         width: 45%;
         height: 100%;
         /*background-color: blue;*/
         display: flex;
         overflow: hidden;
         align-items: center;
         img{
           height: 100%;
         }
       }
       .pro-title{
         width: 50%;
         height: 85%;
         /*background-color: gold;*/
         padding-left: 5%;
         padding-top: 5%;
         h2{
           font-size: 19px;
           line-height: 30px;
         }
         h3{
           font-size: 14px;
           color: #b8b8b8;
           font-weight: 300;
         }
         h4{
           margin-top: 13%;
           font-size: 15px;
           font-weight: normal;
           color: #c3c3c3;
           overflow: hidden;
           text-overflow:ellipsis;
           white-space: nowrap;
         }
       }
     }
   }
  .unlog-author-all{
    width: 100vw;
    height: 88.9vh;
    background-color: #f8f9fb;
    background-image: url(../../assets/kk-user/unlog/kk-unlog-attention.png);
    background-size:100%;
    background-repeat:no-repeat;
    a{
      width: 100%;
      height: 100%;
    }
  }
  .author-all{
    width: 100%;
    min-height: 88.9vh;
    .author-for{
      width: 100%;
      height: 8vh;
      /*background-color: red;*/
      display: flex;
      align-items: flex-start;
      padding: 2% 3%;
      border-bottom: 1px solid #efefef;
      .author-img{
        width: 15%;
        height: 100%;
        background-color: gold;
        margin-right: 3%;
        img{
          width: 100%;
        }
      }
      .author-name{
        h5{
          font-size: 18px;
          color: #ff751a;
          font-weight: normal;
          line-height: 30px;
        }
        h6{
          font-size: 14px;
          font-weight: normal;
          color: #939393;
          line-height: 30px;
        }
      }
    }
  }



</style>
