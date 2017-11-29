<template>
  <div>
    <div class="footer-all">
      <div class="kk-for" v-for="footerValue,footerIndex in userFooter">
        <router-link :to="footerValue.urlFirst"></router-link>
        <router-link :to="footerValue.urlSecond" v-if="footerValue.urlSecond"></router-link>
        <img :src="footerValue.imgSrc" alt="">
        <h3 ref="forRef">{{footerValue.name}}</h3>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterNav',
    data () {
      return {
        userFooter: [
          {
            urlFirst: '/',
            imgSrc: require('../../assets/kk-nav/kk-nav-carton.png'),
            name: '漫画'
          },
          {
            urlFirst: '/kkFind',
            imgSrc: require('../../assets/kk-nav/kk-nav-find.png'),
            name: '发现'
          },
          {
            urlFirst: '/kk-tabs',
            urlSecond: '/kk-club',
            imgSrc: require('../../assets/kk-nav/kk-nav-v.png'),
            name: 'V社区'
          },
          {
            urlFirst: '/user',
            imgSrc: require('../../assets/kk-nav/kk-nav-user.png'),
            name: '我的'
          }
        ]
      }
    },
    mounted () {
//      console.log(window.location.href.split('8081')[1])
      let link = window.location.href.split('8081')[1]
      if (link === '/user') {
        this.userFooter[3].imgSrc = require('../../assets/kk-nav/kk-nav-user-c.png')
        this.$refs.forRef[3].style.color = '#fce13c'
      } else if (link === '/' || link === '/attention') {
        this.userFooter[0].imgSrc = require('../../assets/kk-nav/kk-nav-carton-c.png')
        this.$refs.forRef[0].style.color = '#fce13c'
      } else if (link === '/kkFind' || link === '/kkFindFen') {
        this.userFooter[1].imgSrc = require('../../assets/kk-nav/kk-nav-find-c.png')
        this.$refs.forRef[1].style.color = '#fce13c'
      } else if (link === '/kk-tabs') {
      } else if (link === '/kk-club' || link === '/kk-attention') {
        this.userFooter[2].imgSrc = require('../../assets/kk-nav/kk-nav-v-c.png')
        this.$refs.forRef[2].style.color = '#fce13c'
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
      position: relative;
      a{
        width: 100%;
        height: 8vh;
        position: absolute;
        top: 0;
        left: 0;
      }
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
