<template>
  <div id="app">
    <router-view/>
    <!--<button @click="fecthHomeData">ddd</button>-->
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    fecthHomeData () {
      this.$request({
        type: 'get',
        url: 'v1/feeds/feed_lists?uid=92673412&since=0&page_num=1&catalog_type=2&sa_event=eyJkaXN0aW5jdF9pZCI6IjkyNjczNDEyIiwiZXZlbnQiOiJSZWFkVkNvbW11bml0eSIsIm9yaWdpbmFsX2lkIjoiQTozNGYwMDhiOTFiZDNhN2QwIiwicHJvamVjdCI6Imt1YWlrYW5fYXBwIiwicHJvcGVydGllcyI6eyJGaW5kVGFiTmFtZSI6IuaOqOiNkCIsIkZyb21WQ29tbXVuaXR5VGFiTmFtZSI6IueDremXqCIsIkhvbWVwYWdlVGFiTmFtZSI6IuWFs-azqCIsIkhvbWVwYWdlVXBkYXRlRGF0ZSI6MCwiVHJpZ2dlclBhZ2UiOiJWQ29tbXVuaXR5UGFnZSIsIlZDb21tdW5pdHlUYWJOYW1lIjoi54Ot6ZeoIiwiQ2hhbm5lbHMiOiJrdWFpa2FuMjMwIiwiUHJvcGVydHlFdmVudCI6IlJlYWRWQ29tbXVuaXR5IiwiYWJ0ZXN0U2lnbiI6WyLnqbrliJfooagiXSwiYWJ0ZXN0X2dyb3VwIjo1LCIkYXBwX3ZlcnNpb24iOiI0LjcuMCIsIiRsaWJfdmVyc2lvbiI6IjEuNi4zNCIsIiRtYW51ZmFjdHVyZXIiOiJzYW1zdW5nIiwiJG1vZGVsIjoiU00tQzUwMDAiLCIkb3MiOiJBbmRyb2lkIiwiJG9zX3ZlcnNpb24iOiI2LjAuMSIsIiRzY3JlZW5faGVpZ2h0IjoxOTIwLCIkc2NyZWVuX3dpZHRoIjoxMDgwLCIkd2lmaSI6dHJ1ZSwiJGNhcnJpZXIiOiJDSE4tVU5JQ09NIiwiJG5ldHdvcmtfdHlwZSI6IldJRkkifSwidGltZSI6MTUxMDgzMzU0NjY5NywidHlwZSI6InRyYWNrIn0%3D&new_device=false',
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
  *{
    margin: 0;
    padding: 0;
  }
</style>
