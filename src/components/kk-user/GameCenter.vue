<template>
  <div>
    <div class="game-all">
      <img src="../../assets/kk-user/kk-gamecenter.png" alt="" @click="gameClicked">
    </div>
  </div>
</template>

<script>
    export default {
      name: 'GameCenter',
      methods: {
        gameClicked () {
          this.$router.push({path: '/user'})
        }
      }
    }
</script>

<style scoped lang='less'>
  .game-all{
    width: 100vw;
    height: 100vh;
    img {
      width: 100vw;
      height: 100vh;
    }
  }

</style>
