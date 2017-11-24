<template>
  <div>
    <div class="footer-all">
      <div class="footer-for" v-for="navValue,navIndex in nav">
        <img :src="navValue.navSrcOne" alt="">
        <h3 ref="navStyle">{{navValue.navName}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'FooterNav',
      data () {
        return {
          nav: [
            {
              navName: '漫画',
              navSrcOne: require('../../assets/kk-nav/kk-nav-carton.png'),
              navSrcTwo: require('../../assets/kk-nav/kk-nav-carton-c.png')
            },
            {
              navName: '发现',
              navSrcOne: require('../../assets/kk-nav/kk-nav-find.png'),
              navSrcTwo: require('../../assets/kk-nav/kk-nav-find-c.png')
            },
            {
              navName: 'V社区',
              navSrcOne: require('../../assets/kk-nav/kk-nav-v.png'),
              navSrcTwo: require('../../assets/kk-nav/kk-nav-v-c.png')
            },
            {
              navName: '我的',
              navSrcOne: require('../../assets/kk-nav/kk-nav-user-c.png'),
              navSrcTwo: require('../../assets/kk-nav/kk-nav-user-c.png')
            }
          ]
        }
      }
    }
</script>

<style scoped lang='less'>
  .footer-all{
    width: 100vw;
    height: 8vh;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #f1f1f1;
    div{
      margin-top: 0.5vh;
      height: 8vh;
      img{
        height: 50%;
      }
      h3{
        font-size: 14px;
        color: #939393;
      }
    }


  }
</style>
