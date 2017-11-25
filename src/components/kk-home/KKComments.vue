<template>
  <div>
    <div id="nav">
      <div id="close" @touchend="back">X</div>
      <div id="comment">
        <div id="new">最新评论</div>
        <div id="hot">最热评论</div>
      </div>
      <p>{{this.$route.params.id}}</p>
    </div>
    <ul id="content" @touchmove="move">
      <li v-for="(v,i) in array" class="list">
        <div class="head">
          <img :src="v.root.user.avatar_url" alt="">
        </div>
        <div class="name">
          <p>
            {{v.root.user.nickname}}
          </p>
          <div class="text">
            {{v.root.content}}
          </div>
          <div class="time">
            <div class="left">{{v.root.created_at_info}}</div>
            <div class="right">&nbsp;{{v.root.likes_count_info | capitalize}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        array: []
      }
    },
    methods: {
      move: function () {
        if (window.scrollY > document.body.offsetHeight * 0.6) {
          console.log('aaaa')
        }
      },
      back: function () {
        this.$router.push({name: 'kksection', params: {id: this.$route.params.id}})
      }
    },
    filters: {
      capitalize: function (value) {
        if (value > 0) {
          return value
        } else {
          return ''
        }
      }
    },
    mounted () {
      let ace = this.$route.params.id
      var that = this
      let url = {
        url: '/kkv2/comments/floor_list',
        type: 'get',
        params: {
          limit: 20,
          offset: 0,
          order: 'time',
          target_id: ace,
          target_type: 'comic',
          total: 1
        },
        success: function (res) {
          console.log(res.data.data.comment_floors[0].root.created_at_info)
          that.array = res.data.data.comment_floors
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
    width: 100%;
    height: 60px;
    background-color: rgb(245,245,245);
    border-bottom: 1px solid darkgray;
    position: relative;
  }
  #nav>div {
    display: inline-block;
  }
  #close {
    position: absolute;
    color: #FFB431;
    font-size: 20px;
    left: 20px;
    line-height: 60px;
  }
  #comment {
    position: absolute;
    left: 50%;
    width: 160px;
    height: 30px;
    top: 13px;
    margin-left: -80px;
  }
  #comment>div {
    position: absolute;
    width: 70px;
    padding: 5px 7px;
    text-align: center;
    border: 1px solid darkgray;
  }
  #new {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #AEAEAE;
  }
  #hot {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    background-color: white;
    left: 84px;
  }
  .list {
    position: relative;
    border-bottom: 1px solid darkgray;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 15px;
  }
  .head, .name{
    display: inline-block;
  }
  .name {
    margin-left: 5px;
    word-wrap: break-word;
    width: 320px;
  }
  .name>p {
    color: #696969;
  }
  .head {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: top;
  }
  .head>img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .text {
    margin-top: 7px;
  }
  .time {
    overflow: hidden;
    width: 310px;
    margin-top: 7px;
  }
  .left {
    float: left;
    color: #9C9C9C;
  }
  .right {
    float: right;
    color: #9C9C9C;
    padding-left: 18px;
    background: url("../../assets/kkcartoontitle/call.png") no-repeat left;
  }
</style>
