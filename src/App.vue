<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <button @click="fecthHomeData">ddd</button>
    <button @click="test">666</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    fecthHomeData () {
      this.$request({
        type: 'get',
        url: 'v1/topic_new/discovery_list',
        headers: {
          'X-Device': 'A:eef09de00f4e0b31',
//          'User-Agent': 'Kuaikan/4.6.6/46600(Android;5.1.1;MI 4S;kuaikan220;WIFI;1920*1080)'
        },
        params: {
          'gender': '1',
          'operator_count': '6'
        },
        success: function (res) {
          console.log(res)
        },
        failed: function (err) {
          console.log(err)
        }
      })
    },
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
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
