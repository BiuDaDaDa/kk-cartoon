<template>
<div class="kkFind">
  <Recycle :newRecycle="newRecycle"></Recycle>
  <List :newList="newList"></List>
  <myContent :newContent="newContent"></myContent>
  <div class="btnF">
    <button class="contribute">
      <span class="banner">
        <img src="../../assets/kk-find/kk-find-contribute.png" alt="">
        <span>我要投稿</span>
      </span>
    </button>
    <button class="allComposition">
      <span class="banner">
        <img src="../../assets/kk-find/kk-find-all.png" alt="">
        <span>全部作品</span>
      </span>
    </button>
  </div>
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
.btnF{
  padding:5%;
  display: flex;
  justify-content: space-around;

}
  .btnF button{
    width: 45%;
    padding: 3% 0;
    font-size: 17px;
    border-radius: 4px;
    background-color: #fff;
  }
  .btnF button .banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
 .btnF .contribute{
    color: blue;
    border: 1px solid blue;
  }
  .btnF .allComposition{
    color: red;
    border: 1px solid red;
  }
  .allComposition img{
    padding: 4px;
    width: 20px;
    height: 20px;
  }
</style>
