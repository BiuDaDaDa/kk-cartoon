
<template>
  <p>还没有关注作品,吃下这些安利不后悔</p>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        array: []
      }
    },
    mounted () {
//      var _that = this
      let a = {
        url: 'kkv2/topic/fav/timeline_v3',
        type: 'get',
        data: '',
        headers: {},
        params: {
          since: 0
        },
        success: function (res) {
          console.log(res)
        },
        failed: function (err) {
          console.log(err)
        }
      }
      this.$request(a)
    }
  }
</script>

<style scoped lang="less">

</style>
