<template>
  <div>
    <div ref="head">
      <div id="nav">
        <router-link id="back" tag="div" to="/" @touchend.native="back"><</router-link>
        <p id="title">{{title}}</p>
        <router-link id="complete" tag="div" to="/" @touchend.native="back">全集</router-link>
      </div>
      <mt-popup
        v-model="popupVisible"
        position="bottom">
        <div id="popup">
          &nbsp;
          <p id="shin">分享</p>
          <div id="social">
            <div class="dian">
              <img src="../../assets/kkcartoontitle/weichat.png" alt="">
              <div>微信</div>
            </div>
            <div class="dian">
              <img src="../../assets/kkcartoontitle/friend.png" alt="">
              <p>朋友圈</p>
            </div>
            <div class="dian">
              <img src="../../assets/kkcartoontitle/QQ.png" alt="">
              <p>QQ</p>
            </div>
            <div class="dian">
              <img src="../../assets/kkcartoontitle/qqkj.png" alt="">
              <p>QQ空间</p>
            </div>
            <div class="dian">
              <img src="../../assets/kkcartoontitle/weibo.png" alt="">
              <p>微博</p>
            </div>
          </div>
          <div id="collect">
            <div class="dian">
              <img src="../../assets/kkcartoontitle/collect.png" alt="">
              <p>收藏</p>
            </div>
            <div class="dian">
              <img src="../../assets/kkcartoontitle/report.png" alt="">
              <p>举报</p>
            </div>
          </div>
          <!--分割线-->
          <div id="line">&nbsp;</div>
          <div id="abolish" @click="abolish">取消</div>
        </div>
      </mt-popup>
    <!--中间内容-->
  </div>
    <div id="content" @touchmove="move">
      <img  :src="k" alt="" class="iamges" v-for="(k,i) in images">
    </div>
    <div id="rump">
      <div class="zan">
        <img src="../../assets/kkcartoontitle/nozan.png" alt="">
        <p class="text">赞{{zan_count}}</p>
      </div>
      <div class="attention">
        <img src="../../assets/kkcartoontitle/attention.png" alt="">
        <p class="text">关注</p>
      </div>
      <div class="share">
        <img src="../../assets/kkcartoontitle/share.png" alt="">
        <p class="text">分享</p>
      </div>
    </div>
    <div id="cross">
      <div class="previous_posts"><&nbsp;上一篇</div>
      <div class="line"></div>
      <div class="next_chapter">下一篇&nbsp;></div>
    </div>
    <!--作者-->
    <div class="author">
      <p class="sign"></p>
      <div>作者</div>
    </div>
    <!--作者详情-->
    <div id="information">
      <div v-for="(val,index) in authorArr" class="authorList">
        <div class="authorHead">
          <img :src="val.avatar_url" alt="">
        </div>
        <div class="authorName">{{val.nickname}}</div>
      </div>
    </div>
    <!--评论-->
    <div class="author">
      <p class="sign"></p>
      <div>评论</div>
    </div>
    <ul>
      <li v-for="(val,index) in commentsArr" class="comments">
        <img :src="val.root.user.avatar_url" alt="">
        <div class="rightContent">
          <div class="username">{{val.root.user.nickname}}</div>
          <div class="commentext">
            {{val.root.content}}
          </div>
          <!--<p class="children_comments">{{val.children_comments.id}}1111111</p>-->
          <div class="children_comments" v-if="val.children_comments.length>0">
            <div v-for="(v,i) in val.children_comments">
              <span>{{v.user.nickname}}</span>
              :{{v.content}}
            </div>
          </div>
          <!--时间-->
          <div class="time">
            <div class="created">{{val.root.created_at_info}}</div>
            <div class="call" @touchend="call(val.root.id)">{{val.root.likes_count}}</div>
          </div>
        </div>
      </li>
    </ul>
    <!--查看更多评论-->
    <router-link to='/' tag="p" @touchend.native="linkto" id="chakan">查看更多评论&nbsp;></router-link>
    <!--底部发送-->
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
        <div id="share" @touchend="share" @click="shartt">&nbsp;</div>
        <div id="tool" @touchend="tool">&nbsp;</div>
      </div>
    </div>
    <!--弹出-->
  </div>
</template>

<script>
  var num = 0
  export default {
    name: '',
    data () {
      return {
        title: '',
        images: [],
        comments: '',
        targed: '',
        zan_count: '',
        authorArr: [],
        commentsArr: [],
        popupVisible: false
      }
    },
    methods: {
      shartt: function () {
        this.popupVisible = true
      },
      abolish: function () {
        this.popupVisible = false
      },
      linkto: function () {
        console.log(this.targed)
        this.$router.push({ name: 'kkcomment', params: {id: this.targed} })
      },
      back: function () {
        this.$router.push({name: 'kkcartoontitle'})
      },
      call: function (i) {
        console.log(i)
        let url = {
          url: '/kkv2/like/add',
          type: 'post',
          params: {
            app_id: 1000000027,
            kk_c_t: 1511430018881,
            kk_s_t: 1511430016139,
            target_id: i,
            target_type: 'comment',
            tt: false
          },
          success: function (res) {
            console.log(res.data)
          },
          failed: function (err) {
            console.log(err)
          }
        }
        this.$request(url)
      },
      share: function () {
        console.log('点击分享')
      },
      tool: function () {
        console.log('这是工具')
      },
      move: function () {
        var that = this
        console.log(window.scrollY)
        if (window.scrollY > 1 && window.scrollY <= 6800) {
          this.$refs.head.style.display = 'none'
          this.$refs.foot.style.display = 'none'
          this.$refs.head.className = ''
        } else if (window.scrollY >= 7000) {
          this.$refs.head.className = 'head'
          this.$refs.head.style.display = 'block'
          this.$refs.foot.style.display = 'block'
          this.$refs.foot.className = 'foot'
        } else if (window.scrollY > 5600) {
          if (num === 0) {
            num = 1
            let url = {
              url: '/kkv2/comments/hot_floor_list',
              type: 'get',
              params: {
                target_id: this.$route.params.id,
                target_type: 'comic'
              },
              success: function (res) {
                that.commentsArr = res.data.data.comment_floors
                console.log(res.data.data.comment_floors)
              },
              failed: function (err) {
                console.log(err)
              }
            }
            this.$request(url)
          }
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
          that.zan_count = res.data.data.likes_count
          that.authorArr = res.data.data.topic.related_authors
          console.log(res.data.data)
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
  .head {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: white;
  }
  .foot {
    position: fixed;
    bottom: 0;
    background-color: rgb(245,245,245);
  }
  #back {
    position: absolute;
    left: 15px;
    font-size: 20px;
    line-height: 40px;
  }
  #title {
    font-size: 14px;
    text-align: center;
    position: absolute;
    width: 180px;
    left: 50%;
    line-height: 40px;
    margin-left: -90px;
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
  #rump {
    position: relative;
    height: 60px;
    border-bottom: 1px solid darkgray;
  }
  #rump>div {
    display: inline-block;
  }
  .zan {
    position: absolute;
    width: 65px;
    left: 10%;
  }
  .zan>img {
    margin-left: 15px;
  }
  .attention {
    position: absolute;
    left: 50%;
    width: 36px;
    margin-left: -15px;
  }
  .attention>img {
    margin-left: 2px;
  }
  .text {
    color: #626262;
    width: 100px;
  }
  .share {
    position: absolute;
    left: 80%;
  }
  .share>img {
    margin-left: 2px;
  }
  #cross {
    position: relative;
    border-bottom: 2px solid darkgray;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 50px;
  }
  #cross>div {
    position: absolute;
    display: inline-block;
  }
  .previous_posts {
    height: 40px;
    width: 80px;
    left: 15%;
    line-height: 50px;
  }
  .next_chapter {
    left: 70%;
    line-height: 50px;
  }
  .line {
    width: 1px;
    height: 50px;
    background-color: darkgray;
    left: 50%;
  }
  .author {
    padding: 5px 10px;
    border-bottom: 1px solid darkgray;
  }
  .sign{
    display: inline-block;
    width: 6px;
    height: 12px;
    background-color: #FCB43C;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .author>div {
    display: inline-block;
    font-size: 14px;
  }
  #information {
    position: relative;
    padding: 13px 10px;
  }
  #information>div {
    display: inline-block;
  }
  .authorList {
    position: relative;
    width: 160px;
    height: 40px;
  }
  .authorList>div {
    display: inline-block;
  }
  .authorHead {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .authorHead>img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .authorName {
    font-size: 13px;
    position: absolute;
    left: 50px;
    top: 12px;
  }
  .comments {
    width: 100%;
    padding-left: 15px;
    padding-top: 15px;
    border-bottom: 1px solid darkgray;
  }
  .comments>img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 10px;
    top: 10px;
    vertical-align: top;
  }
  .rightContent {
    display: inline-block;
  }
  .username {
    font-size: 13px;
    color: #6D6D6D;
  }
  .commentext {
    width: 320px;
    word-wrap: break-word;
    margin-top: 10px;
  }
  .children_comments {
    background-color: #F6F9FA;
    padding: 7px 10px;
    width: 320px;
    margin-top: 15px;
  }
  .children_comments>div {
    font-size: 13px;
  }
  .children_comments>div>span {
    color: #757575;
    font-size: 13px;
  }
  .time {
    width: 340px;
    overflow: hidden;
    margin-top: 10px;
    color: #A7A7A7;
    font-size: 13px;
  }
  .created {
    float: left;
  }
  .call {
    float: right;
    padding-left: 15px;
    background: url("../../assets/zan.png") no-repeat left;
  }
  #chakan {
    width: 140px;
    text-align: center;
    margin: auto;
    font-size: 12px;
    color: #289CE0;
    margin-bottom: 100px;
    padding-top: 15px;
  }
  #popup {
    background-color: #E5E3E1;
    width: 432px;
    position: relative;
    height: 280px;
  }
  #shin {
    position: absolute;
    top: 10px;
    width: 100px;
    font-size: 13px;
    text-align: center;
    left: 50%;
    margin-left: -50px;
  }
  #social {
    position: absolute;
    top: 50px;
    left: 30px;
    width: 360px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  .dian {
    text-align: center;
    display: inline-block;
  }
  #collect {
    position: absolute;
    top: 140px;
    left: 30px;
  }
  #collect div:nth-child(2) {
    margin-left: 20px;
  }
  #line {
    position: absolute;
    top: 230px;
    width: 100%;
    height: 1px;
    background-color: darkgray;
  }
  #abolish {
    position: absolute;
    width: 60px;
    left: 50%;
    margin-left: -30px;
    font-size: 20px;
    text-align: center;
    top: 240px;
  }
</style>
