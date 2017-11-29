<template>
  <div>
    <div class="top" ref="head">
      <div @click="isback">
      <!--<router-link>-->
        <img src="../../assets/hans/houtui.png" alt="">
      <!--</router-link>-->
     </div>
      <span class="dongtai">会话详情</span>
    </div>
    <div class="box" v-if="isloading">
      <div class="box_left">
        <img class="usertx" :src="numarray.root.user.avatar_url" alt="">
      </div>
      <div class="box_right">
        <p class="username">{{numarray.root.user.nickname}}</p>
        <p class="usertxt" v-html="huanhang(numarray.root.content)"></p>
        <div class="box_right_bottom">
          <span class="time">{{numarray.root.created_at_info}}</span>
          <div class="zang">
            <img class="zangtp" src="../../assets/hans/dianzang.png" alt="">
            <span v-show="isShow(numarray.root.likes_count)">{{numarray.root.likes_count}}</span>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="box1" v-for="(common, i) in numarray.children_comments">
      <div class="box_left1">
        <img class="usertx" :src="common.user.avatar_url" alt="">
      </div>
      <div class="box_right">
        <p class="username">{{common.user.nickname}}</p>
        <div class="div1">
          <p v-if="common.reply_user == null"></p>
          <span v-else="common.reply_user.nickname != null">@{{common.reply_user.nickname}} : </span>
          <span class="usertxt" v-html="huanhang(common.content)"></span>
        </div>
        <div class="box_right_bottom">
          <div>
            <span class="lou">{{common.floor}}楼</span>
            <span class="time">{{common.created_at_info}}</span>
          </div>
          <div class="zang">
            <img class="zangtp" src="../../assets/hans/dianzang.png" alt="">
            <span v-show="isShow(common.likes_count)">{{common.likes_count}}</span>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="footer"></div>
    <div class="fabu">
      <div class="fabu_left">
        <i class="tp"></i>
        <input class="input" type="text" placeholder="吐槽神马的尽管来">
      </div>
      <div class="fabu_right">
        发送
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HuiHua',
    data () {
      return {
        numarray: [],
        isloading: false,
        feed1: this.$route.params.id
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
          url: '/kuaikanv2/comments/floor_detail',
          headers: {},
          params: {
            'comment_id': this.feed1,
            'since': '0',
            'limit': '20',
            'direction': '0'
          },
          success: function (res) {
            that.isloading = true
            that.numarray = res.data.data.comment_floors
//            console.log(that.numarray)
          },
          failed: function () {}
        })
      },
      huanhang: function (val) {
        if (val.indexOf(/\n/g) === -1) {
          return val.replace(/\n/g, '<br/>')
        }
      },
      isShow: function (val) {
        if (val === 0) {
          return false
        } else {
          return true
        }
      },
      isback () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  .box{
    width: 100%;
    display: flex;
    border-bottom: 0.24vw solid #ccc;
    box-sizing: border-box;
    padding: 2.41vw;
    background-color: white;
    margin-top: 6.92vh;
  }
  .box1{
    width: 100%;
    display: flex;
    border-bottom: 0.24vw solid #ccc;
    box-sizing: border-box;
    padding: 2.41vw;
    background-color: rgb(230,230,230);
  }
  .box_left{
    width: 12.8vw;
    margin-right:  2.41vw;
    position: relative;
  }
  .box_left1{
    width: 12.8vw;
    margin-right:  2.41vw;
    position: relative;
  }
  .box_left:before{
    content: '';
    background: url(../../assets/hans/v.png);
    background-repeat: repeat;
    background-size: 4.1vw 2.3vh;
    position: absolute;
    left: 8.45vw;
    top: 4.75vh;
    z-index: 10;
    width: 4.1vw;
    height: 2.3vh;
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
    margin: 2.03vh 0;
  }
  .lou{
    margin-right: 2.41vw;
  }
  .div1{
    margin: 2.03vh 0;
    /*padding: 0 10px;*/
  }
  /**/
  .top{
    width: 90%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    /*justify-content: space-between;*/
    padding: 0 4.83vw;
    background-color: white;
    border-bottom: 0.24vw solid #ccc;
    z-index: 111;
  }
  .dongtai{
    line-height: 6.79vh;
    margin-left: 35%;
  }
  /**/
  .fabu{
    width: 90%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.54vh 9.66vw 0.81vh 2.41vw;
    align-items: center;
    background-color: rgb(240,240,240);
  }
  .fabu_left{
    width: 75%;
    position: relative;
    padding: 1.22vh 0;
  }
  .tp{
    position: absolute;
    left: 4.83vw;
    top: 2vh;
    z-index: 5;
    background-image: url(../../assets/hans/fabu.png);
    background-repeat: no-repeat;
    background-position: 0px 0px;
    width: 7.31vw;
    height: 3.98vh;
  }
  .fabu_right{
    position: relative;
    left: 2.41vw;
  }
  .input{
    width: 100%;
    border-radius: 20px;
    border: 0.24vw solid #ccc;
    outline: none;
    line-height: 5.16vh;
    padding-left: 12.07vw;
  }
  .footer{
    margin-bottom: 9.23vh;
  }
</style>
