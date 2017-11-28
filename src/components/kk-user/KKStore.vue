<template>
  <div>
    <div class="store-all">
      <img src="../../assets/kk-user/kk-store.png" alt="" @click="storeClicked">
    </div>
  </div>
</template>

<script>
    export default {
      name: 'KKStore',
      methods: {
        storeClicked () {
          this.$router.push({path: '/user'})
        }
      }
    }
</script>

<style scoped lang='less'>
  .store-all{
    width: 100vw;
    height: 100vh;
    img {
      width: 100vw;
      height: 100vh;
    }
  }

</style>
