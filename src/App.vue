<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="fecthHomeData">ddd</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    fecthHomeData () {
      this.$request({
        type: 'get',
        url: 'v1/daily/comic_lists/0',
        headers: {},
        params: {},
        success: function (res) {
          console.log(res)
        },
        failed: function () {}
      })
    }
  }
}
</script>
<link rel="stylesheet/less" href="./common/less/reset.less">
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
