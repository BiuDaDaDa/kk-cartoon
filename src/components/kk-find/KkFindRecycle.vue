<template>
<div class="recycle">
  <mt-swipe ref="swipe" :auto="6000">
    <mt-swipe-item v-for="item in newRecycle" :key="item['id']" >
      <div class="imgF" @click="cartoonGo(item['target_id'])">
        <img :src="item['pic']" alt="">
      </div>
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
    methods: {
      cartoonGo (tarId) {
        this.$router.push({name: 'kkcartoontitle', params: {id: tarId}})
      }
    }
  }
</script>

<style scoped lang=less>
  .recycle{
    /*height: 280px;*/
    height: 67.6329vw;
    position: relative;
    overflow: hidden;
  }
  .recycle img{
    width: 100%;
    height:100%;
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
  .imgF{
    width: 100%;
    /*height: 280px;*/
    height: 67.6329vw;
    background-image: url(../../assets/kk-find/kk-mhbg.jpg);
    background-repeat:no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
  }
</style>
