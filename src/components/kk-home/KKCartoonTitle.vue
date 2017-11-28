<template>
  <div>
    <!--选集-->
    <div id="out">
      <div id="mask"></div>
      <router-link to='/' class="back"><</router-link>
      <button class="attention">+关注</button>
      <img :src="jsText.cover_image_url" alt="" class="image">
      <div class="title">{{jsText.title}}</div>
      <div id="foot">
       <div class="left">
         <button v-for="(k,i) in jsText.category">
           {{k}}
         </button>
       </div>
       <div class="right">
         总热度&nbsp;{{jsText.view_count | getCount}}
       </div>
      </div>
    </div>
    <ul id="list">
      <li v-for="(value,i) in listArray" class="listContent" @touchstart="tab(i)">
        {{value}}
      </li>
    </ul>
    <div id="serialize" v-if="tf">
      <div>{{jsText.update_status}}{{jsText.update_day}}</div>
      <div>
        <span v-text="text"></span>
        <img src="../../assets/kkcartoontitle/upp.png" class="order" @touchend='order' ref="img">
      </div>
    </div>
    <ul id="contentList" v-if="tf">
      <router-link to="/kkcartitle" v-for="(key,i) in timeArr"
                   :key="key.id" tag="li" class="writings" @touchend.native="kk(i,key.id)"
                   @touchstart.native="start" @touchmove.native="move">
        <div class="mask" v-if="!key.is_free">{{key.see_first_alert}}</div>
        <img :src="key.cover_image_url" alt="" class="images">
        <div class="rightContent">
          <div class="history" v-if="clock"></div>
          <div class="section">
            <p>{{key.title}}</p>
          </div>
          <div class="time">
            <div class="timer">
              {{key.created_at | capitalize}}
            </div>
            <div class="zan" v-html="likeCount(key.likes_count)">
            </div>
          </div>
        </div>
      </router-link>
    </ul>
    <!--详情-->
    <div v-if="!tf">
      <div id="introduction">
        <div id="production">作品简介</div>
        <div id="text">{{textbox}}</div>
        <div id="author">
          <div>作者:</div>
          <div>
            <img :src="headimg" alt="" id="headimg">
          </div>
          <div>{{nickname}}</div>
        </div>
      </div>
      <!--人气值-->
      <div id="moods">
        <div>人气值{{popularity | getCount}}</div>
        <div>总评论{{comments | getCount}}</div>
        <div>{{count | getCount}}人已关注</div>
      </div>
      <!--精彩点评-->
      <div>
        <div id="title">
          <div>精彩点评</div>
          <div>投稿</div>
        </div>
        <ul id="reply">
          <router-link to='/' tag="li" class="replys" :key="index" v-for="(value,index) in commentArr"
                       @touchend.native="info(value.topic_id,value)" @touchmove="slide">
            <img :src="value.user.avatar_url" alt="" class="headimage">
            <div class="content">
              <p class="username">{{value.user.nickname}}</p>
              <p class="created_at">{{(value.created_at)/1000 | capitalize}}</p>
              <div class="call">{{value.likes_count}}</div>
              <div class="courtent">{{value.content}}</div>
            </div>
          </router-link>
          <p id="essence">暂无更多精华</p>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  var list = document.getElementsByClassName('listContent')
  var histories = document.getElementsByClassName('history')
  var tf = true
  var count = 0
  var num = 0
  export default {
    name: '',
    data () {
      return {
        id: '',
        jsText: {},
        num: '',
        listArray: ['详情', '选集'],
        timeArr: [],
        clock: true,
        tf: true,
        text: '正序',
        textbox: '',
        headimg: '',
        nickname: '',
        popularity: '',
        comments: '',
        count: '',
        commentArr: []
      }
    },
    filters: {
      capitalize: function (time) {
        var oldTime = new Date(time * 1000)
        var nowTime = new Date()
        var a = oldTime.toLocaleString()
        var nowYear = nowTime.getFullYear()
        if (a.substr(0, 4) === nowYear) {
          var oldMoon = oldTime.getMonth()
          var nowMoon = nowTime.getMonth()
          if (oldMoon === nowMoon) {
            var nowDate = nowTime.getDate()
            var oldDate = oldTime.getDate()
            if (nowDate - oldDate === 0) {
              var b = a.substr(11, 6)
              if (b.indexOf('上午') !== -1) {
                var c = b.replace('上午', '')
                var d = c.split(':')
                if (d[0] < 10) {
                  d[0] = '0' + d[0]
                } else if (d[0] === 12) {
                  d[0] = '00'
                }
              } else {
                c = b.replace('下午', '')
                d = c.split(':')
                if (d[0] < 12) {
                  d[0] = parseInt(d[0]) + parseInt(12)
                }
              }
              var hour = d.join(':')
              time = hour
            } else if (nowDate - oldDate === 1) {
              this.num = '昨天'
            } else {
              var day = a.substr(5, 5)
              day = day.replace('/', '-')
              time = day
            }
          } else {
            var day1 = a.substr(5, 5)
            day1 = day1.replace('/', '-')
            time = day1
          }
        } else {
          var years = a.substr(0, 10).replace(/\//g, '-')
          time = years
        }
        return time
      },
      getCount: function (count) {
        if (count / 100000 < 1) {
          return count
        } else if (count / 100000000 < 1) {
          return parseInt(count / 10000) + '万'
        } else {
          return (count / 100000000).toFixed(2) + '亿'
        }
      }
    },
    methods: {
      kk: function (i, val) {
        if (count === 0) {
          this.$router.push({ name: 'kksection', params: {id: val} })
          for (var j = 0; j < histories.length; j++) {
            if (j === i) {
              histories[j].style.display = 'block'
            } else {
              histories[j].style.display = 'none'
            }
          }
        }
      },
      start: function () {
        count = 0
      },
      move: function () {
        count = 1
      },
      likeCount: function (val) {
        if (val >= 100000) {
          val = parseInt(val / 10000) + '万'
        }
        return val
      },
      tab: function (i) {
        if (i === 0) {
          this.tf = false
          let url = {
            url: '/kkv2/review/topic/' + this.$route.params.id,
            type: 'get',
            params: {
              limit: 20,
              since: 0
            },
            headers: {
              'X-Device': 'A:eef09de00f4e0b31'
            },
            success: function (res) {
              console.log(res.data.data.reviews)
              this.commentArr = res.data.data.reviews
            },
            failed: function (err) {
              console.log(err)
            }
          }
          this.$request(url)
        } else {
          this.tf = true
        }
        for (var j = 0; j < list.length; j++) {
          if (j === i) {
            list[j].style.borderBottom = '2px solid #E4C93D'
            list[j].style.color = '#000000'
          } else {
            list[j].style.borderBottom = 'none'
            list[j].style.color = '#808080'
          }
        }
      },
      order: function () {
        tf = !tf
        if (tf) {
          this.text = '正序'
        } else {
          this.text = '倒序'
        }
        this.timeArr.reverse()
      },
      slide: function () {
        num = 1
      },
      info: function (id, val) {
        if (num === 0) {
          this.$router.push({name: 'kkcommentinfo', params: { id: id }})
          this.$store.commit('commentInfoTo', val)
          console.log(val)
        }
        num = 0
      }
    },
    mounted () {
      var _that = this
      let ace = this.$route.params.id
      let url = {
        url: '/kkv1/topics/' + ace,
        type: 'get',
        headers: {},
        params: {
          is_homepage: 0,
          is_new_device: false,
          sort: 0,
          sortAction: 0
        },
        success: function (res) {
          _that.timeArr = res.data.data.comics
          _that.jsText = res.data.data
          _that.textbox = res.data.data.description
          _that.headimg = res.data.data.user.avatar_url
          _that.nickname = res.data.data.user.nickname
          _that.popularity = res.data.data.popularity_value
          _that.comments = res.data.data.comments_count
          _that.count = res.data.data.fav_count
          console.log(res.data.data.user)
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
  #out {
    width: 100%;
    position: relative;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .back {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 16px;
    color: white;
    text-decoration: none;
  }
  #mask {
    width: 100%;
    height: 98%;
    top: 0;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
  }
  .attention {
    position: absolute;
    background-color: #fde23d;
    padding: 2px 9px;
    border: none;
    border-radius: 8px;
    outline: none;
    right: 20px;
    top: 20px;
  }
  .title {
    color: white;
    position: absolute;
    bottom: 35px;
    left: 20px;
  }
  #foot {
    position: absolute;
    bottom: 10px;
    width: 90%;
    /*border: 1px solid red;*/
    margin-left: 5%;
    bottom: 10px;
    overflow: hidden;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
    font-size: 12px;
    color: white;
  }
  .left>button {
    border: 1px solid white;
    border-radius: 10px;
    padding-left: 7px;
    padding-right: 7px;
    outline: none;
    color: white;
    margin-right: 10px;
    background-color: rgba(0,0,0,0);
    font-size: 12px;
  }
  #list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    border-bottom: 1px solid darkgray;
  }
  .listContent {
    font-size: 14px;
    padding: 5px 20px;
  }
  #list li:nth-child(1) {
    margin-left: 80px;
    color: #808080;
  }
  #list li:nth-child(2) {
    margin-right: 80px;
    border-bottom: 2px solid #E4C93D;
    color: #000000;
  }
  #serialize {
    overflow: hidden;
    padding: 10px 5px;
  }
  .order {
    vertical-align: middle;
  }
  #serialize>div {
    font-size: 14px;
  }
  #serialize div:nth-child(1) {
    float: left;
  }
  #serialize div:nth-child(2) {
    float: right;
  }
  .images {
    width: 30%;
    display: inline-block;
    vertical-align: top;
  }
  .writings {
    padding: 5px;
    position: relative;
  }
  .mask {
    position: absolute;
    width: 29%;
    height: 70px;
    background-color: rgba(0,0,0,0.4);
    top: 4px;
    color: #fde23d;
    text-align: center;
    line-height: 70px;
  }
  .rightContent {
    display: inline-block;
    height: 68px;
    width: 68%;
    position: relative;
    background-color: rgb(250,250,250);
  }
  .history {
    position: absolute;
    width: 60px;
    height: 20px;
    border-radius: 20px;
    right: -40px;
    background: url("../../assets/kkcartoontitle/clock.png") no-repeat 6px;
    background-color: #fde23d;
    display: none;
  }
  .section {
    position: absolute;
    top: 0;
    left: 5px;
  }
  .section>p {
    height: 20px;
    width: 235px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .time {
    position: absolute;
    width: 100%;
    bottom: 0;
    overflow: hidden;
  }
  .timer {
    float: left;
    font-size: 13px;
  }
  .zan {
    padding-left: 20px;
    background: url("../../assets/zan.png") no-repeat left;
    float: right;
    color: #b7cacb;
  }
  #introduction {
    width: 100%;
    padding: 10px 5px;
  }
  #production {
    font-size: 14px;
  }
  #text {
    margin-top: 10px;
    width: 92%;
    font-size: 13px;
  }
  #headimg {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  #author {
    margin-top: 10px;
    position: relative;
    height: 30px;
  }
  #author>div {
    position: absolute;
    display: inline-block;
  }
  #author div:nth-child(1) {
    left: 0;
    top: 5px;
    font-size: 13px;
    color: #5F5F5F;
  }
  #author div:nth-child(2) {
    left: 35px;
  }
  #author div:nth-child(3) {
    left: 75px;
    top: 5px;
    font-size: 13px;
  }
  #moods {
    position: relative;
    height: 30px;
    border-bottom: 3px solid #F6F9FA;
  }
  #moods>div {
    position: absolute;
    display: inline-block;
    padding-left: 25px;
    font-size: 13px;
  }
  #moods div:nth-child(1) {
    background: url("../../assets/kkcartoontitle/crow.png") no-repeat left;
  }
  #moods div:nth-child(2) {
    background: url("../../assets/kkcartoontitle/reply.png") no-repeat left 1px;
    left: 40%;
  }
  #moods div:nth-child(3) {
    background: url("../../assets/kkcartoontitle/counter.png") no-repeat left;
    left: 70%;
  }
  #title {
    overflow: hidden;
  }
  #title div:nth-child(1) {
    float: left;
  }
  #title div:nth-child(2) {
    float: right;
    padding-left: 26px;
    background: url("../../assets/kkcartoontitle/pen.png") no-repeat 7px;
    background-color: #DBEEFD;
    width: 46px;
    height: 26px;
    line-height: 26px;
    border-radius: 12px;
  }
  .replys {
    padding-bottom: 20px;
    margin-bottom: 10px;
    background-color: rgb(245,245,245);
    border-bottom: 1px solid #F4F4F4;
  }
  .headimage {
    width: 40px;
    height: 40px;
    padding: 10px 5px;
    border-radius: 50%;
    vertical-align: top;
  }
  .content {
    display: inline-block;
    position: relative;
    padding-bottom: 10px;
    width: 85%;
    margin-top: 10px;
  }
  .username {
    color: #797979;
    position: absolute;
    width: 160px;
  }
  .created_at {
    position: absolute;
    top: 25px;
    font-size: 12px;
    color: #BDBDBD;
  }
  .call {
    position: absolute;
    right: 10px;
    top: 15px;
    color: #B1B1B1;
    font-size: 14px;
    padding-left: 16px;
    background: url("../../assets/kkcartoontitle/call.png") no-repeat left;
  }
  .courtent {
    margin-top: 50px;
    color: #848484;
  }
  #essence {
    width: 200px;
    margin: auto;
    text-align: center;
    font-size: 14px;
    color: #848484;
    margin-top: 20px;
  }
</style>
