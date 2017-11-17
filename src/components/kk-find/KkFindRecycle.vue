<template>
<div class="recycle">
  <mt-swipe ref="swipe" :auto="6000">
    <mt-swipe-item v-for="item in newRecycle" :key="item['id']">
      <router-link to="#">
        <img :src="item['pic']" alt="">
      </router-link>
    </mt-swipe-item>
  </mt-swipe>
  <div class="bottomBorder"></div>
</div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        newRecycle: [],
        activeIndex: ''
      }
    },
    beforeUpdate () {
      // 记录更新前下标
      this.activeIndex = this.$refs.swipe.index
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
          console.log(res.data.data.infos[0]['banners'])
          this.newRecycle = res['data']['data']['infos'][0]['banners']
          console.log(this.newRecycle)
        },
        failed: function (err) {
          console.log(err)
        }
      })
    },
    watch: {
      activeIndex: function (val, oldVal) {
//        console.log('newIndex: %s, oldIndex: %s', val, oldVal)
      }
    }
  }
</script>

<style scoped lang=less>
  .recycle{
    min-height: 100px;
    height: 260px;
    position: relative;
    overflow: hidden;
  }
  .recycle img{
    width: 100%;
    height: 100%;
  }
  .bottomBorder{
    height: 40px;
    width: 120%;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    bottom: -30px;
    left: -10%;
  }
</style>
