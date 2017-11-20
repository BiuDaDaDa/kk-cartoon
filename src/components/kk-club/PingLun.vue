<template>
  <div class="wrap" v-if="isloading">
    <div class="zuixinpinglun">
      <div class="huandian"></div>
      <span>最新评论</span>
    </div>
    <div class="box" v-for="(common, index) in array.data.comment_floors">
      <div class="box_left">
        <img class="usertx" :src="common.root.user.avatar_url" alt="">
      </div>
      <div class="box_right">
        <p class="username">{{common.root.user.nickname}}</p>
        <p class="usertxt" v-html="huanhang(common.root.content)"></p>
        <div class="box_right_bottom">
          <span class="time">{{common.root.created_at_info}}</span>
          <div class="zang">
            <img class="zangtp" src="../../assets/hans/dianzang.png" alt="">
            <span v-show="isShow(common.root.likes_count)">{{common.root.likes_count}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="chakan">
      <span>查看更多评论</span>
    </div>
    <div class="footer">
      <p>如发现作者发布的内容,对您的权利有所侵害</p>
      <p>请联系邮箱legal@kuaikuanmanhua.com</p>
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
          url: 'v2/comments/hot_floor_list',
          headers: {},
          params: {
            target_type: 'feed',
            target_id: '389134304900284544'
          },
          success: function (res) {
            console.log(res.data)
            that.isloading = true
            that.array = res.data
          },
          failed: function () {}
        })
      },
      // 换行
      huanhang: function (val) {
        if (val.indexOf(/\n/g) === -1) {
          return val.replace(/\n/g, '<br/>')
        }
      },
      // 去零
      isShow: function (val) {
        if (val === 0) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .zuixinpinglun{
    display: flex;
    border-bottom: 1px solid #ccc;
    align-items: center;
    padding: 20px 10px;
  }
  .huandian{
    width: 4px;
    height: 15px;
    background-color: rgb(240,170,0);
    border-radius: 45%;
    margin-right: 10px;
  }
  .box{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    padding: 10px;
  }
  .box_left{
    width: 10%;
    margin-right:  10px;
  }
  .box_right{
    width: 90%;
  }
  .box_right_bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .zang{
    display: flex;
    align-items: center;
  }
  .usertx{
    width: 100%;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  .usertxt{
    margin: 15px 0;
  }
  .chakan{
    text-align: center;
    line-height: 50px;
  }
  .footer{
    text-align: center;
    background-color: rgb(230,230,230);
    padding: 20px 0;
  }
  .zangtp{
    margin-right: 5px;
  }
</style>
