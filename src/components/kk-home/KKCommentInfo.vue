<template>
  <div>
    <div id="nav">
      <div @click="back">
        <img src="../../assets/kk-find/kk-find-back.png" alt="">
      </div>
      <div>精彩点评</div>
      <div>
        <img src="../../assets/kkcartoontitle/ellipsis.png" alt="">
      </div>
    </div>
    <div id="content">
      <div id="title">
        <div id="headimg">
          <img :src="commentInfo['user']['avatar_url']" alt="">
        </div>
        <div class="info">
          <div id="username">{{commentInfo['user']['nickname']}}</div>
          <div class="comment_time">{{timeChange(commentInfo['created_at'])}}</div>
        </div>
      </div>
      <div class="comment_text">{{commentInfo['content']}}</div>
      <div class="like">
        <span>
          <img src="../../assets/kkcartoontitle/commit-zan.png" alt="">
          <span @click="isLike">喜欢</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    methods: {
      back () {
        window.history.back()
      },
      //  时间戳处理
      myTime (time) {
        let myYear = new Date(time).getFullYear()
        let myMonth = new Date(time).getMonth() + 1
        if (myMonth < 10) {
          myMonth = '0' + myMonth
        }
        let myDay = new Date(time).getDate()
        if (myDay < 10) {
          myDay = '0' + myDay
        }
        let myWeek = new Date(time).getDay()
        let myWeek2 = ''
        switch (myWeek) {
          case 0:
            myWeek2 = '星期日'
            break
          case 1:
            myWeek2 = '星期一'
            break
          case 2:
            myWeek2 = '星期二'
            break
          case 3:
            myWeek2 = '星期三'
            break
          case 4:
            myWeek2 = '星期四'
            break
          case 5:
            myWeek2 = '星期五'
            break
          case 6:
            myWeek2 = '星期六'
            break
        }
        let myHour = new Date(time).getHours()
        if (myHour < 10) {
          myHour = '0' + myHour
        }
        let myMin = new Date(time).getMinutes()
        if (myMin < 10) {
          myMin = '0' + myMin
        }
        let mySec = new Date(time).getSeconds()
        if (mySec < 10) {
          mySec = '0' + mySec
        }
        return [myYear, myMonth, myDay, myWeek2, myHour, myMin, mySec]
      },
      timeChange (time) {
        console.log(this.myTime(time))
        return this.myTime(time)[0] + '-' + this.myTime(time)[1] + '-' + this.myTime(time)[2]
      },
      isLike () {}
    },
    computed: {
      commentInfo () {
        return this.$store.state.commentInfo
      }
    }
  }
</script>

<style scoped lang="less">
  #nav {
    position: relative;
    padding: 0 10px;
    border-bottom: 1px solid darkgray;
    height: 50px;
  }
  #nav>div {
    display: inline-block;
    position: absolute;
    top: 13px;
  }
  #nav div:nth-child(1) {
    left: 25px;
  }
  #nav div:nth-child(2) {
    color: #292929;
    left: 50%;
    margin-left: -40px;
    width: 80px;
    text-align: center;
  }
  #nav div:nth-child(3) {
    top: 16px;
    right: 25px;
  }
  #content{
    padding: 5%;
  }
  #title{
    display: flex;
    align-items: center;
    justify-content:flex-start;
  }
  #title #headimg{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 5%;
  }
  #title #headimg img{
    width: 100%;
    height: 100%;
  }
  #title .info{
    color: gray;
  }
  #title .info .comment_time{
    font-size: 13px;
  }
  .comment_text{
    padding-top: 8%;
    padding-bottom: 10%;
    font-size: 17px;
    line-height: 32px;
  }
  .like{
    width: 30%;
    border: 1px solid #ccc;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
    border-radius: 25px;
  }
  .like img{
    position: relative;
    top: 5px;
  }
</style>
