<template>
  <div>
    <div class="box" @click="isback">
      <img class="tp" :src="ht + myid" alt="">
    </div>
    <div class="txt">1 / 1</div>
    <div class="dian">. . .</div>
  </div>
</template>

<script>
  export default {
    name: 'FangDa',
    data () {
      return {
        ht: '',
        myid: this.$route.params.imageid
      }
    },
    mounted () {
      this.fecthHomeData()
    },
    methods: {
      fecthHomeData () {
        let that = this
        this.$request({
          type: 'get',
          url: '/kuaikanv1/feeds/feed_lists',
          headers: {},
          params: {
            uid: '92673412',
            since: '0',
            page_num: '1',
            catalog_type: '2'
          },
          success: function (res) {
            that.ht = res.data.data.feeds[0].content.image_base
          },
          failed: function () {}
        })
      },
      isback () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  .box{
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: table-cell;
    vertical-align:middle;
    position: relative;
  }
  .tp{
    width: 100vw;
    vertical-align: middle;
  }
  .txt{
    color: white;
    position: absolute;
    bottom: 1.35vh;
    left: 46%;
  }
  .dian{
    font-weight: bolder;
    color: white;
    position: absolute;
    top: 0;
    right: 2.41vw;
  }
</style>
