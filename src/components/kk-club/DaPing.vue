<template>
  <div>
    <div class="top">
        <router-link to="/kk-club">
        <img class="x" src="../../assets/hans/x.png" alt="">
        </router-link>
      <div class="btn">
        <div v-for="(jump, i) in jumps" class="tabs" @click="clicked(i)">{{jump}}</div>
      </div>
    </div>
    <div class="div1"></div>
    <div class="box" v-for="(common, j) in parray" :key="common.id">
      <div class="box_left">
        <img class="usertx" :src="common.root.user.avatar_url" alt="">
      </div>
      <div class="box_right">
        <p class="username">{{common.root.user.nickname}}</p>
        <p class="usertxt" v-html="huanhang(common.root.content)"></p>
        <!---->
        <div class="children_comments" v-if="common.children_comments.length>0" @click="tiao1(common.root.id)">
          <div v-for="(v,i) in common.children_comments">
            <span>{{v.user.nickname}}</span>
            : {{v.content}}
          </div>
          <span v-if="common.children_total == 1"></span>
          <span v-else="common.children_total !== 1">共{{common.children_total}}条回复</span>
        </div>
        <!---->
        <div class="box_right_bottom">
          <span class="time">{{common.root.created_at_info}}</span>
          <div class="zang">
            <img class="zangtp" src="../../assets/hans/dianzang.png" alt="">
            <span v-show="isShow(common.root.likes_count)">{{common.root.likes_count}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="div2"></div>
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
  var tab = document.getElementsByClassName('tabs')
  export default {
    name: 'DaPing',
    data () {
      return {
        parray: [],
        bg: 0,
        feed1: this.$route.params.id,
        jumps: [
          '最新评论',
          '最热评论'
        ],
        tabs: ''
      }
    },
    mounted () {
      this.fecthHomeData()
    },
    methods: {
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
      },
      fecthHomeData () {
        let that = this
        this.$request({
          type: 'get',
          url: '/kuaikanv2/comments/floor_list',
          headers: {},
          params: {
            'target_type': 'feed',
            'target_id': this.feed1,
            'order': this.tabs
          },
          success: function (res) {
            that.parray = res.data.data.comment_floors
          },
          failed: function () {}
        })
      },
      clicked (i) {
//        console.log(i)
        if (i === 0) {
          this.tabs = 'time'
          this.fecthHomeData()
        } else {
          this.tabs = 'score'
          this.fecthHomeData()
        }
        for (var j = 0; j < tab.length; j++) {
          if (j === i) {
            tab[j].style.backgroundColor = 'rgb(200,200,200)'
            tab[j].style.color = 'white'
          } else {
            tab[j].style.backgroundColor = 'rgb(230,230,230)'
            tab[j].style.color = 'black'
          }
        }
      },
      tiao1 (ev) {
//        console.log(ev)
        this.myid = ev
        this.$router.push({name: 'HuiHua', params: {id: this.myid}})
      }
    }
  }
</script>

<style scoped lang="less">
  .children_comments {
    background-color: #F6F9FA;
    padding: 0.95vh 2.41vw;
    width: 77.29vw;
    margin: 2.03vh 0;
  }
  .children_comments>div {
    font-size: 13px;
  }
  .children_comments>div>span {
    color: #757575;
    font-size: 13px;
  }
  .children_comments>span {
    color: deepskyblue;
    font-size: 13px;
  }
  .box{
    width: 100%;
    display: flex;
    border-bottom: 0.24vw solid #ccc;
    box-sizing: border-box;
    padding: 2.41vw;
    background-color: white;
  }
  .box_left{
    width: 12.8vw;
    margin-right: 2.41vw;
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
    border: 0.24vw solid #ccc;
  }
  .usertxt{
    margin: 2.03vh 0;
  }
  /**/
  .fabu{
    width: 90%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.54vh 8.66vw 0.81vh 2.41vw;
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
  /**/
  .div1{
    margin-top: 6.92vh;
  }
  .div2{
    margin-bottom: 9.1vh;
  }
  .top{
    width: 90%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4.83vw;
    background-color: white;
    border-bottom: 0.24vw solid #ccc;
  }
  .x{
    position: absolute;
    left: 2.41vw;
    top: 1.9vh;
  }
  .btn{
    display: flex;
    padding: 0.81vh 0;
  }
  .tabs{
    padding: 0.81vh 7.24vw;
    background-color: rgb(230,230,230);
    border: 0.24vw solid #ccc;
  }
  .btn div:nth-child(1){
    background-color: rgb(200,200,200);
    color: white;
  }
</style>
