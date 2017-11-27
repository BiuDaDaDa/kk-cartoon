<template>
  <div>
    <!-- -----头部----- -->
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/userWallet">
          <img src="../../../assets/kk-user/kk-user-left.png" alt="">
        </router-link>
        <span>交易明细</span>
      </div>
    </div>
    <!-- -----头部----- -->

    <mt-navbar v-model="selected" class="mt-tags">
      <mt-tab-item id="s1" class="mt-tags-title">
        <span>充值记录</span>
      </mt-tab-item>
      <mt-tab-item id="s2" class="mt-tags-title">
        <span>消费记录</span>
      </mt-tab-item>
    </mt-navbar>

    <!--tab-container -->
    <mt-tab-container v-model="selected" :swipeable=true>
      <!--标签1-->
      <mt-tab-container-item id="s1">
        <div class="forever">
          <img src="../../../assets/kk-user/unlog/kk-wallet-input.png" alt="">
        </div>
      </mt-tab-container-item>
      <!--标签1-->

      <!--标签2-->
      <mt-tab-container-item id="s2">
        <div class="three-days">
          <img src="../../../assets/kk-user/unlog/kk-wallet-output.png" alt="">
        </div>
      </mt-tab-container-item>
      <!--标签2-->

    </mt-tab-container>
  </div>
</template>

<script>
    export default {
      name: 'TradeDetail',
      data: function () {
        return {
          selected: 's1'
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
    /*background-color: #fce13c;*/
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
  .forever{
    width: 100vw;
    min-height: 88.9vh;
    background-color: #f8f9fb;
    img{
      width: 100vw;
    }
  }
  .three-days{
    width: 100vw;
    min-height: 88.9vh;
    background-color: #f8f9fb;
    img{
      width: 100vw;
    }
  }
</style>
