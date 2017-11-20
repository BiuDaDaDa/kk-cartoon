<template>
  <div id="app" class="wrap">
    <div class="box">
      <!--<div class="remen" v-for="(tab, index) in tabs">-->
        <!--<div class="title">{{tab.text}}</div>-->
      <!--</div>-->
      <router-link class="title" to="/kk-club">热门</router-link>
      <router-link class="title" to="/kk-zuixin">评论</router-link>
    </div>
    <router-view></router-view>
    <!--<my-club class="club"/>-->
    <!--<my-zui-xin class="zuixin"/>-->
  </div>
</template>

<script>
  import MyClub from '../../components/kk-club/Club'
//  import MyZuiXin from '../../components/kk-club/ZuiXin'
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
    },
    components: {
      MyClub
//      MyZuiXin
    }
  }
</script>

<style scoped lang="less">
  .box{
    position: fixed;
    left: 0;
    top: 16px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }
  .title{
    border-bottom: 2px solid rgb(240,214,62);
    box-sizing: border-box;
    padding: 10px 25px;
  }
  /*.club{*/
    /*padding-top: 60px;*/
  /*}*/
  /*.zuixin{*/
    /*padding-top: 60px;*/
  /*}*/
</style>
