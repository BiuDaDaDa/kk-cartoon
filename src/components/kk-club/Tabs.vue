<template>
  <div id="app" class="wrap">
    <div class="box">
      <router-link class="title" to="/kk-club">热门</router-link>
      <router-link class="title" to="/kk-zuixin">评论</router-link>
    </div>
    <router-view></router-view>
    <!--<my-club/>-->
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
//    data () {
//      return {
//        tabs: [
//          {text: '热门'},
//          {text: '评论'}
//        ]
//      }
//    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
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
