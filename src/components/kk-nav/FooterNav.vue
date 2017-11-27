<template>
  <div>
    <div class="footer-all">
      <div class="kk-carton">
        <router-link to="/"></router-link>
        <img :src="cartonSrc" alt="">
        <h3 ref="cartonRef">漫画</h3>
      </div>

      <div class="kk-find">
        <router-link to="/kkFind"></router-link>
        <img :src="findSrc" alt="">
        <h3 ref="findRef">发现</h3>
      </div>

      <div class="kk-club">
        <router-link to="/kk-club"></router-link>
        <router-link to="/kk-tabs"></router-link>
        <img :src="clubSrc" alt="">
        <h3 ref="clubRef">V社区</h3>
      </div>

      <div class="kk-user">
        <router-link to="/user"></router-link>
        <img :src="userSrc" alt="">
        <h3 ref="userRef">我的</h3>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterNav',
    data () {
      return {
        cartonSrc: require('../../assets/kk-nav/kk-nav-carton.png'),
        findSrc: require('../../assets/kk-nav/kk-nav-find.png'),
        clubSrc: require('../../assets/kk-nav/kk-nav-v.png'),
        userSrc: require('../../assets/kk-nav/kk-nav-user.png')
      }
    },
    mounted () {
      console.log(window.location.href.split('8081')[1])
//        console.log(window.location.href.split('8081')[1])
      let link = window.location.href.split('8081')[1]
      if (link === '/user') {
        this.userSrc = require('../../assets/kk-nav/kk-nav-user-c.png')
        this.$refs.userRef.style.color = '#fce13c'
      } else if (link === '/' || link === '/attention') {
        this.cartonSrc = require('../../assets/kk-nav/kk-nav-carton-c.png')
        this.$refs.cartonRef.style.color = '#fce13c'
      } else if (link === '/kkFind' || link === '/kkFindFen') {
        this.findSrc = require('../../assets/kk-nav/kk-nav-find-c.png')
        this.$refs.findRef.style.color = '#fce13c'
      } else if (link === '/kk-club') {
        this.clubSrc = require('../../assets/kk-nav/kk-nav-v-c.png')
        this.$refs.clubRef.style.color = '#fce13c'
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
