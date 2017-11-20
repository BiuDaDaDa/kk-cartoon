<template>
  <div id="app">
    <router-view/>
<<<<<<< HEAD
    <!--<button @click="fecthHomeData">ddd</button>-->
    <!--<img src="./assets/logo.png">-->

    <!--<button @click="fecthHomeData">ddd</button>-->
    <!--<button @click="test">666</button>-->
=======
    <!--<button @click="boyCard">boy</button>-->
    <!--<button @click="girCard">girl</button>-->
>>>>>>> 8e01534427f124c9611447cce782ef5d10c00656
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      gender: '0'
    }
  },
  methods: {
<<<<<<< HEAD
//    fecthHomeData () {
//      this.$request({
//        type: 'get',
//        url: 'v1/feeds/feed_lists?uid=92673412&since=0&page_num=1&catalog_type=2&sa_event=eyJkaXN0aW5jdF9pZCI6IjkyNjczNDEyIiwiZXZlbnQiOiJSZWFkVkNvbW11bml0eSIsIm9yaWdpbmFsX2lkIjoiQTozNGYwMDhiOTFiZDNhN2QwIiwicHJvamVjdCI6Imt1YWlrYW5fYXBwIiwicHJvcGVydGllcyI6eyJGaW5kVGFiTmFtZSI6IuaOqOiNkCIsIkZyb21WQ29tbXVuaXR5VGFiTmFtZSI6IueDremXqCIsIkhvbWVwYWdlVGFiTmFtZSI6IuWFs-azqCIsIkhvbWVwYWdlVXBkYXRlRGF0ZSI6MCwiVHJpZ2dlclBhZ2UiOiJWQ29tbXVuaXR5UGFnZSIsIlZDb21tdW5pdHlUYWJOYW1lIjoi54Ot6ZeoIiwiQ2hhbm5lbHMiOiJrdWFpa2FuMjMwIiwiUHJvcGVydHlFdmVudCI6IlJlYWRWQ29tbXVuaXR5IiwiYWJ0ZXN0U2lnbiI6WyLnqbrliJfooagiXSwiYWJ0ZXN0X2dyb3VwIjo1LCIkYXBwX3ZlcnNpb24iOiI0LjcuMCIsIiRsaWJfdmVyc2lvbiI6IjEuNi4zNCIsIiRtYW51ZmFjdHVyZXIiOiJzYW1zdW5nIiwiJG1vZGVsIjoiU00tQzUwMDAiLCIkb3MiOiJBbmRyb2lkIiwiJG9zX3ZlcnNpb24iOiI2LjAuMSIsIiRzY3JlZW5faGVpZ2h0IjoxOTIwLCIkc2NyZWVuX3dpZHRoIjoxMDgwLCIkd2lmaSI6dHJ1ZSwiJGNhcnJpZXIiOiJDSE4tVU5JQ09NIiwiJG5ldHdvcmtfdHlwZSI6IldJRkkifSwidGltZSI6MTUxMDgzMzU0NjY5NywidHlwZSI6InRyYWNrIn0%3D&new_device=false',
//        headers: {},
//        params: {},
//        url: 'v1/topic_new/discovery_list',
//        headers: {
//          'X-Device': 'A:eef09de00f4e0b31'
//          'User-Agent': 'Kuaikan/4.6.6/46600(Android;5.1.1;MI 4S;kuaikan220;WIFI;1920*1080)'
//        },
//        params: {
//          'gender': '1',
//          'operator_count': '6'
//        },
//        success: function (res) {
//          console.log(res)
//        },
//        failed: function (err) {
//          console.log(err)
//        }
//      })
//    },
    test () {
      this.$request({
        type: 'get',
        url: 'api/topic_new/discovery_list',
        headers: {
          'X-Device': 'I:69F388A7-E1B2-4F9A-8EFD-F971E5B73404'
//          'User-Agent': 'Kuaikan/4.6.6/46600(Android;5.1.1;MI 4S;kuaikan220;WIFI;1920*1080)'
        },
        params: {
          'gender': '0',
          'operator_count': '7'
=======
    boyCard () {
      this.gender = '0'
      this.fecthHomeData()
    },
    girCard () {
      this.gender = '1'
      this.fecthHomeData()
    },
    fecthHomeData () {
      this.$request({
        type: 'get',
        url: 'v1/topic_new/discovery_list',
        headers: {
          'X-Device': 'A:eef09de00f4e0b31'
//          'User-Agent': 'Kuaikan/4.6.6/46600(Android;5.1.1;MI 4S;kuaikan220;WIFI;1920*1080)'
        },
        params: {
          'gender': this.gender,
          'operator_count': '6'
>>>>>>> 8e01534427f124c9611447cce782ef5d10c00656
        },
        success: function (res) {
          console.log(res)
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
}
</script>
<link rel="stylesheet/less" href="./common/less/reset.less">
<style>
<<<<<<< HEAD
  /**{*/
    /*margin: 0;*/
    /*padding: 0;*/
  /*}*/
/**{*/
  /*margin: 0;*/
  /*padding: 0;*/
/*}*/
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*!*margin-top: 60px;*!*/
/*}*/
=======
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
>>>>>>> 8e01534427f124c9611447cce782ef5d10c00656
</style>
