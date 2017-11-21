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
    props: {
      newRecycle: {
        type: Array
      }
    },
    data () {
      return {
        activeIndex: ''
      }
    },
    beforeUpdate () {
      // 记录更新前的下标
      this.activeIndex = this.$refs.swipe.index
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
