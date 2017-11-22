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
      <mt-tab-container-item id="s1">
        <div class="pro-all">
          <div class="pro-for">
            <div class="pro-img">
              <img src="" alt="">
            </div>

            <div class="pro-title">
                <h2>无形门之汴京摸鱼</h2>
                <h3>渣克+海分形</h3>
                <h4>更新至：第一话 父子特工</h4>

            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <!--标签1-->

      <!--标签2-->
      <mt-tab-container-item id="s2">
        <div class="author-all">
          <div class="author-for">
            <div class="author-img">
              <img src="" alt="">
            </div>

            <div class="author-name">
              <h5>快看漫画</h5>
              <h6>认证：快看漫画APP 官方账号</h6>
            </div>
          </div>
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
          selected: 2
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
        border-bottom: 3px solid #ffbb1a;
      }
    }
  }

  /* -----------下部公共部分----------- */
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
         background-color: blue;
         img{
           width: 100%;
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
         }
       }
     }
   }



</style>
