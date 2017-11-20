<template>
<div class="list">
  <router-link v-for="item in newList" :key="item['id']" to="#">
    <img :src="item['pic']" alt="">
  </router-link>
</div>
</template>

<script>
  export default {
    name: '',
    props: {
      newList: {
        type: Array
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
.list a{
  width: 15%;
  height: auto;
}
.list a img{
  width: 100%;
  height: 100%;
}
</style>
