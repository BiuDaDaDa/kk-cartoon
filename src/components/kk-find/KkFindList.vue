<template>
<div class="list">
  <div v-for="(item,index) in newList" @click="myChangeTab(index)" :key="item['id']" class="imgF">
    <img v-lazy="item['pic']" alt="">
  </div>
</div>
</template>

<script>
  export default {
    name: '',
    props: {
      newList: {
        type: Array
      }
    },
    methods: {
      myChangeTab (index) {
        if (index === 0) {
          this.$router.push({path: '/kkList'})
        }
        if (index === 3) {
          this.$router.push({path: '/kkFindFen'})
        }
      }
    }
  }
</script>

<style scoped lang=less>
  .list{
    padding: 2% 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
.list .imgF{
  width: 15%;
  /*height: 80px;*/
  height: 19.3237vw;
  background-image: url(../../assets/kk-find/kk-mhbg.jpg);
  background-repeat:no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
}
.list .imgF img{
  width: 100%;
  height: 100%;
}
  image[lazy=loading] {}
</style>
