<template>
  <div id="app">
    <router-view/>
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
</style>
