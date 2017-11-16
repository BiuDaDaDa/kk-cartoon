<template>
<div class="recycle">
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
</div>
</template>

<script>
  export default {
    name: '',
    mounted () {
      this.$request({
        type: 'get',
        url: 'http://api.kuaikanmanhua.com/v1/topic_new/discovery_list',
        header: {
          'Host': 'api.kuaikanmanhua.com',
          'X-Device': 'A:eef09de00f4e0b31',
          'User-Agent': 'Kuaikan/4.6.6/46600(Android;5.1.1;MI 4S;kuaikan220;WIFI;1920*1080)'
        },
        params: {
          'gender': '1',
          'operator_count': '6'
        },
        success: function (res) {
          console.log(res.data)
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang=less>
  .recycle{
    color: red;
    min-height: 100px;
    height: 200px;
  }
  .mint-swipe-item{
    background-color: blue;
  }
</style>
