<template>
  <div class="wrap" v-if="isloading">
    <div class="box" v-for="(common, index) in array.data.feeds">
      <div class="box_up">
        <div class="box_up_left">
          <img class="usertx" :src="common.user.avatar_url" alt="">
          <span class="username">{{common.user.nickname}}</span>
        </div>
        <div class="box_up_right">
          <img src="../../assets/hans/jia.png" alt="">
          <span>关注</span>
        </div>
      </div>
      <div class="box_content">
        <p v-html="huanhang(common.content.text)"></p>
      </div>
      <div class="Screen">
        <div class="box_img">
          <img class="fbtu" v-for="(value, index) in common.content.images" :src="common.content.image_base + value" alt="">
        </div>
      </div>
      <div class="box_bottom">
        <div class="box_bottom_left">
          <span v-html="getLocalTime(common.updated_at)"></span>
        </div>
        <div class="box_bottom_fight">
          <div class="dianzang">
            <img src="../../assets/hans/dianzang.png" alt="">
            <span>{{common.likes_count}}</span>
          </div>
          <div class="pinglun">
            <img src="../../assets/hans/pinglun.png" alt="">
            <span>{{common.comments_count}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        isloading: false,
        array: []
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
          url: 'v1/feeds/feed_lists?uid=92673412&since=0&page_num=1&catalog_type=2&sa_event=eyJkaXN0aW5jdF9pZCI6IjkyNjczNDEyIiwiZXZlbnQiOiJSZWFkVkNvbW11bml0eSIsIm9yaWdpbmFsX2lkIjoiQTozNGYwMDhiOTFiZDNhN2QwIiwicHJvamVjdCI6Imt1YWlrYW5fYXBwIiwicHJvcGVydGllcyI6eyJGaW5kVGFiTmFtZSI6IuaOqOiNkCIsIkZyb21WQ29tbXVuaXR5VGFiTmFtZSI6IueDremXqCIsIkhvbWVwYWdlVGFiTmFtZSI6IuWFs-azqCIsIkhvbWVwYWdlVXBkYXRlRGF0ZSI6MCwiVHJpZ2dlclBhZ2UiOiJWQ29tbXVuaXR5UGFnZSIsIlZDb21tdW5pdHlUYWJOYW1lIjoi54Ot6ZeoIiwiQ2hhbm5lbHMiOiJrdWFpa2FuMjMwIiwiUHJvcGVydHlFdmVudCI6IlJlYWRWQ29tbXVuaXR5IiwiYWJ0ZXN0U2lnbiI6WyLnqbrliJfooagiXSwiYWJ0ZXN0X2dyb3VwIjo1LCIkYXBwX3ZlcnNpb24iOiI0LjcuMCIsIiRsaWJfdmVyc2lvbiI6IjEuNi4zNCIsIiRtYW51ZmFjdHVyZXIiOiJzYW1zdW5nIiwiJG1vZGVsIjoiU00tQzUwMDAiLCIkb3MiOiJBbmRyb2lkIiwiJG9zX3ZlcnNpb24iOiI2LjAuMSIsIiRzY3JlZW5faGVpZ2h0IjoxOTIwLCIkc2NyZWVuX3dpZHRoIjoxMDgwLCIkd2lmaSI6dHJ1ZSwiJGNhcnJpZXIiOiJDSE4tVU5JQ09NIiwiJG5ldHdvcmtfdHlwZSI6IldJRkkifSwidGltZSI6MTUxMDgzMzU0NjY5NywidHlwZSI6InRyYWNrIn0%3D&new_device=false',
          headers: {},
          params: {},
          success: function (res) {
            console.log(res.data)
            that.isloading = true
            that.array = res.data
          },
          failed: function () {}
        })
      },
      // 时间
      getLocalTime: function (nS) {
        if ((new Date(parseInt(nS)).getHours()) < 10) {
          return (new Date(parseInt(nS)).getMonth() + 1) + '-' + (new Date(parseInt(nS)).getDate()) + '&nbsp;' + '0' + (new Date(parseInt(nS)).getHours()) + ':' + (new Date(parseInt(nS)).getMinutes())
        } else if ((new Date(parseInt(nS)).getMinutes()) < 10) {
          return (new Date(parseInt(nS)).getMonth() + 1) + '-' + (new Date(parseInt(nS)).getDate()) + '&nbsp;' + (new Date(parseInt(nS)).getHours()) + ':' + '0' + (new Date(parseInt(nS)).getMinutes())
        } else if ((new Date(parseInt(nS)).getHours()) < 10 && (new Date(parseInt(nS)).getMinutes()) < 10) {
          return (new Date(parseInt(nS)).getMonth() + 1) + '-' + (new Date(parseInt(nS)).getDate()) + '&nbsp;' + '0' + (new Date(parseInt(nS)).getHours()) + ':' + '0' + (new Date(parseInt(nS)).getMinutes())
        } else {
          return (new Date(parseInt(nS)).getMonth() + 1) + '-' + (new Date(parseInt(nS)).getDate()) + '&nbsp;' + (new Date(parseInt(nS)).getHours()) + ':' + (new Date(parseInt(nS)).getMinutes())
        }
      },
      // 换行
      huanhang: function (val) {
        if (val.indexOf(/\s/g) === -1) {
          return val.replace(/\s/g, '<br/>')
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap{
    background-color: #ccc;
  }
  .box{
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 5px;
  }
  .box_up{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box_up_left{
    display: flex;
    align-items: center;
  }
  .box_up_right{
    padding: 5px;
    background-color: orange;
    border-radius: 20px;
  }
  .box_content{

  }
  .Screen{
    width: 99%;
    height: 100%;
    display: flex;
    overflow: hidden;
    border: 1px solid green;
  }
  .box_img{
    width: 29%;
    display: flex;
    margin-left: 20px;
  }
  .box_bottom{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .usertx{
    width: 20%;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-right: 10px;
  }
  .fbtu{
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-left: 5px;
  }
  .box_bottom_fight{
    display: flex;
    align-items: center;
  }
  .dianzang{
    display: flex;
    align-items: center;
  }
  .pinglun{
    display: flex;
    align-items: center;
  }
</style>
