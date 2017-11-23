<template>
  <div>
    <div id="nav" ref="head">
      <router-link id="back" tag="div" to="/" @touchend.native="back"><</router-link>
      <p id="title">{{title}}</p>
      <router-link id="complete" tag="div" to="/">全集</router-link>
    </div>
    <div id="content" @touchmove="move">
      <img  :src="k" alt="" class="iamges" v-for="(k,i) in images">
    </div>
    <div id="comment" ref="foot">
      <input type="text" placeholder="吐槽神马的尽管来">
      <div id="send">发送</div>
      <div id="foot">
        <div id="chapter">
          <router-link to='/'><</router-link>
          <div id="now">当前话</div>
          <router-link to='/' class="right" tag="span"> > </router-link>
        </div>
        <router-link to='/' tag="div" id="discuss" @touchend.native="linkto">
          <div id="comment_count">{{comments}}</div>
        </router-link>
        <div id="share" @touchend="share">&nbsp;</div>
        <div id="tool" @touchend="tool">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        title: '',
        images: [],
        comments: '',
        targed: ''
      }
    },
    methods: {
      linkto: function () {
        console.log(this.targed)
        this.$router.push({ name: 'kkcomment', params: {id: this.targed} })
      },
      share: function () {
        console.log('点击分享')
      },
      tool: function () {
        console.log('这是工具')
      },
      back: function () {
        this.$router.go(1)
      },
      move: function () {
        if (window.scrollY > 1) {
          this.$refs.head.style.display = 'none'
          this.$refs.foot.style.display = 'none'
        } else {
          this.$refs.head.style.display = 'block'
          this.$refs.foot.style.display = 'block'
        }
      }
    },
    mounted () {
      var that = this
      let ace = that.$route.params.id
      let url = {
        url: '/kkv2/comic/' + ace,
        type: 'get',
        success: function (res) {
          that.title = res.data.data.title
          that.images = res.data.data.images
          that.comments = res.data.data.comments_count
          that.targed = res.data.data.id
        },
        failed: function (err) {
          console.log(err)
        }
      }
      this.$request(url)
    }
  }
</script>

<style scoped lang="less">
  #nav {
    position: relative;
    height: 40px;
    border-bottom: 1px solid darkgray;
  }
  #back {
    position: absolute;
    left: 15px;
    font-size: 20px;
    line-height: 40px;
  }
  #title {
    position: absolute;
    width: 80px;
    left: 50%;
    line-height: 40px;
    margin-left: -40px;

  }
  #complete {
    position: absolute;
    right: 15px;
    line-height: 40px;
    color: #FFCB57;
  }
  #content {
    width: 100%;
  }
  #content>img {
    width: 100%;
    display: inline-block;
    font-size: 0px;
    margin-bottom: -5px;
  }
  #comment {
    width: 100%;
    height: 90px;
    background-color: white;
    position: fixed;
    bottom: 0;
  }
  input {
    position: absolute;
    width: 70%;
    height: 22px;
    border-radius: 10px;
    outline: none;
    padding-left: 35px;
    border: 1px solid darkgray;
    background: url("../../assets/kkcartoontitle/publish.png") no-repeat 10px;
    top: 10px;
    left:20px;
  }
  #send {
    position: absolute;
    top: 12px;
    right: 30px;
    font-size: 14px;
  }
  #foot {
    position: absolute;
    width: 100%;
    left: 0;
    height: 20px;
    bottom: 14px;
  }
  #now {
    margin-left: 10px;
    margin-right: 10px;
  }
  #chapter {
    position: absolute;
    top: 0px;
    left: 20px;
  }
  #chapter>div {
    display: inline-block;
  }
  #chapter>a {
    color: darkgray;
  }
  .right {
    color: black;
    font-size: 18px;
  }
  #discuss {
    position: absolute;
    top: -4px;
    left: 60px;
    width: 60px;
    height: 30px;
    left: 50%;
    margin-left: -20px;
    /*border: 1px solid red;*/
    background: url("../../assets/kkcartoontitle/discuss.png") no-repeat left 5px;
  }
  #comment_count {
    font-size: 13px;
    color: white;
    text-align: center;
    position: absolute;
    left: 15px;
    width: 36px;
    height: 15px;
    line-height: 15px;
    background-color: red;
    border-radius: 10px;
  }
  #share {
    position: absolute;
    width: 30px;
    background: url("../../assets/kkcartoontitle/share.png") no-repeat;
    left: 67%;
  }
  #tool {
    position: absolute;
    left: 85%;
    width: 30px;
    background: url("../../assets/kkcartoontitle/tool.png") no-repeat;
  }
</style>
