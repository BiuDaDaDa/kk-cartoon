<template>
<div class="kkFind">
  <Recycle :newRecycle="newRecycle"></Recycle>
  <List :newList="newList"></List>
  <myContent :newContent="newContent"></myContent>
</div>
</template>

<script>
  import Recycle from './KkFindRecycle'
  import List from './KkFindList'
  import myContent from './KkFindContent'
  export default {
    name: '',
    components: {
      Recycle,
      List,
      myContent
    },
    data () {
      return {
        newRecycle: [],
        newList: [],
        newContent: []
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'v1/topic_new/discovery_list',
        headers: {
          'X-Device': 'A:eef09de00f4e0b31'
//          'User-Agent': 'Kuaikan/4.6.6/46600(Android;5.1.1;MI 4S;kuaikan220;WIFI;780*480)'
        },
        params: {
          'gender': '1',
          'operator_count': '6'
        },
        success: function (res) {
          this.newRecycle = res['data']['data']['infos'][0]['banners']
          this.newList = res['data']['data']['infos'][1]['banners']
          for (var i = 2; i < res['data']['data']['infos'].length; i++) {
            this.newContent.push(res['data']['data']['infos'][i])
          }
          console.log(res['data']['data']['infos'])
          console.log(this.newContent)
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang=less>

</style>
