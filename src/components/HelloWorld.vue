<template>
  <div class="hello" @touchmove="touch">
    <ul id="dayList" ref="list">
      <router-link tag="li" v-for="(key,i) in dayarray" :key="key.id" to="/" class="list" @touchstart.native="tab(i)">
        {{key}}
      </router-link>
    </ul>
    <div id="mainContent">
      <div v-for="(k,i) in array" class="content">
        <router-link to="/" tag="div">
          <div class="title">{{k.label_text}}</div>
          <p class="heading">{{k.topic.title}}</p>
          <router-link to="/" class="all">全集&nbsp;></router-link>
          <p class="author">作者:&nbsp;&nbsp;{{k.topic.user.nickname}}</p>
        </router-link>
        <img :src="k.cover_image_url" alt="" class="image">
        <router-link to="/" tag="div" class="bottomContent">
          <div class="bottomtitle">{{k.title}}</div>
          <div class="likesCount">
            {{k.likes_count}}
          </div>
          <div class="commentsCount">
            <router-link to="/">{{k.comments_count}}</router-link>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//  var day = new Date()
//  var nowDay = day.getDay()
//  var dayarray = []
//  var weekDay = ['v1/daily/comic_lists/1510416000', 'v1/daily/comic_' +
//  'lists/1510329600', 'v1/daily/comic_lists/1510502400', 'v1/daily/comic_lists' +
//  '/1510588800', 'v1/daily/comic_lists/1510675200', 'v1/daily/comic_lists' +
//  '/1510761600', 'v1/daily/comic_lists/0']
//  for (var i = 0; i < 7; i++) {
//    dayarray[i] = nowDay - i
//    switch (dayarray[i]) {
//      case 1: dayarray[i] = '周一'; break
//      case 2: dayarray[i] = '周二'; break
//      case 3: dayarray[i] = '周三'; break
//      case 4: dayarray[i] = '周四'; break
//      case 5: dayarray[i] = '周五'; break
//      case 0: dayarray[i] = '周日'; break
//      case -1: dayarray[i] = '周六'; break
//    }
//  }
//  dayarray[0] = '今天'
//  dayarray[1] = '昨天'
  var listArr = document.getElementsByClassName('list')
  export default {
    name: 'HelloWorld',
    data () {
      return {
        array: [],
        dayarray: dayarray.reverse(),
        weekArr: weekDay,
        url: ''
      }
    },
    methods: {
      touch: function () {
        if (window.scrollY > 0) {
          this.$refs.list.className = 'fixed'
        } else {
          this.$refs.list.className = ''
        }
        if (window.scrollY > 3200) {
        }
      },
      tab: function (i) {
        this.url = weekDay[i]
        for (var y = 0; y < listArr.length; y++) {
          if (y === i) {
            listArr[y].style.borderBottom = '2px solid #E4C93D'
          } else {
            listArr[y].style.borderBottom = 'none'
          }
        }
      }
    },
    mounted () {
      var _that = this
      let a = {
        url: 'v1/daily/comic_lists/0',
        type: 'get',
        headers: {},
        params: {
          gender: 1,
          new_device: false,
          since: 0
        },
        success: function (res) {
          console.log(res.data.data.comics)
          _that.array = res.data.data.comics
        },
        failed: function (err) {
          console.log(err)
        }
      }
      this.$request(a)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .router-link-active {
    position: relative;
    height: 50px;
  }
  #mainContent {
    margin-top: -15px;
  }
  .content {
    padding-top: 5px;
    border: 1px solid fuchsia;
  }
  .fixed {
    position: fixed;
    top: -17px;
  }

  .title {
    font-size: 12px;
    background-color: cornflowerblue;
    color: white;
    width: 32px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    border-radius: 4px;
    position: absolute;
    left: 0;
  }
  .heading {
    position: absolute;
    left: 40px;
    top: -18px;
  }
  .all {
    position: absolute;
    color: #7e8c8d;
    right: 0;
    top: 15px;
    text-decoration: none;
    font-size: 12px;
    height: 18px;
    /*border: 1px solid red;*/
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .author {
    position: absolute;
    top: 13px;
    font-size: 12px;
    width: 340px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #949899;
  }
  #dayList {
    z-index: 10;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid darkgray;
    background-color: white;
  }
  #dayList li:last-child {
    border-bottom: 2px solid #E4C93D;
  }
  .list {
    height: 20px;
    font-size: 12px;
    width: 36px;
    text-align: center;
  }
  .bottomContent {
    position: relative;
  }
  .bottomtitle {
    font-size: 14px;
    padding-left: 6px;
    color: #949899;
  }
  .likesCount {
    left: 65%;
    font-size: 14px;
    background: url("../assets/zan.png") no-repeat left;
    padding-left: 20px;
    color: #949899;
  }
  .commentsCount {
    left: 85%;
    font-size: 14px;
    background: url("../assets/comment.png") no-repeat left;
    padding-left: 20px;
  }
  .commentsCount>a {
    color: #949899;
    text-decoration: none;
  }
  .bottomContent>div {
    position: absolute;
  }
</style>
