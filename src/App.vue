<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    fecthHomeData () {
      this.$request({
        type: 'get',
        url: 'api/getHomeData',
        headers: {},
        params: {},
        success: function () {},
        failed: function () {}
      })
    }
  }
}
</script>

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
