<template>
  <div id="app" class="wrap">
    <div class="box">
      <router-link class="title" to="/kk-club" ><span class="title1" ref="rm" @click="clicked">热门</span></router-link>
      <router-link class="title" to="/kk-zuixin"><span class="title1" ref="pl" @click="dianji">最新</span></router-link>
    </div>
    <router-view></router-view>
    <my-nav/>
  </div>
</template>

<script>
  import MyNav from '../../components/kk-nav/FooterNav.vue'
  export default {
    components: {
      MyNav
    },
    name: 'Tabs',
    mounted () {
      this.$refs.rm.style.borderBottom = '2px solid #f0d63e'
    },
    methods: {
      clicked () {
        this.$refs.rm.style.borderBottom = '2px solid #f0d63e'
        this.$refs.pl.style.borderBottom = 'none'
      },
      dianji () {
        this.$refs.pl.style.borderBottom = '2px solid #f0d63e'
        this.$refs.rm.style.borderBottom = 'none'
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap{
    width: 100%;
  }
  .box{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }
  .title{
    color: black;
    box-sizing: border-box;
    padding: 10px 25px;
  }
  .title1{
    color: black;
    box-sizing: border-box;
    padding: 8px 25px;
  }
</style>
