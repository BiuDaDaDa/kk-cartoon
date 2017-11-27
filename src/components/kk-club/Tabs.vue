<template>
  <div id="app" class="wrap">
    <div class="box">
      <router-link class="title" to="/kk-club">热门</router-link>
      <router-link class="title" to="/kk-zuixin">评论</router-link>
    </div>
    <router-view></router-view>
    <!--<my-club/>-->
    <my-nav/>
  </div>
</template>

<script>
  import MyNav from '../../components/kk-nav/FooterNav.vue'
//  import MyClub from '../../components/kk-nav/Club.vue'
  export default {
    components: {
      MyNav
//      MyClub
    },
    name: 'Tabs',
    methods: {
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
    top: 0px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }
  .title{
    color: black;
    border-bottom: 2px solid rgb(240,214,62);
    box-sizing: border-box;
    padding: 10px 25px;
  }
</style>
