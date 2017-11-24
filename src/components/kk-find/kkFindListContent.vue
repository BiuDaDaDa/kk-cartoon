<template>
<div class="ListContent">
  <div class="topNav">
    <img @click="goBack" class="back" src="../../assets/kk-find/kk-find-back.png" alt="<">
    排行榜
  </div>
  <div class="navList">
    <span v-for="item in ListArr" @click="changeTab (item['id'])" :class="{actNavL:item['id']=== NavListId}">
      {{item['title']}}
    </span>
  </div>
  <div class="wrap">
    <div class="UpdateList">下次出榜时间:&nbsp;&nbsp;{{UpDateTime}}</div>
    <div v-for="(myTopic,index) in topics" class="box">
      <div class="bLeft">
        <img :src="myTopic['vertical_image_url']" alt="">
      </div>
      <div class="bRight">
        <div class="topOne">
          <img v-if="index===0||index===1||index===2" :src="require('../../assets/kk-find/topList'+index+'.jpg')" alt=''>
          <span v-if="index!==0&&index!==1&&index!==2">{{index+1<10?'0'+(index+1):index+1}}</span>
        </div>
        <p class="title">{{myTopic['title']}}</p>
        <p class="author">作者：{{myTopic['user']['nickname']}}</p>
        <p class="UpTo">更新至：{{myTopic['latest_comic_title']}}</p>
        <p class="tags">
          <span v-for="tag in myTopic['category']">{{tag}}</span>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        topics: [],
        ListArr: [{title: '男生榜', id: '5'},
          {title: '女生榜', id: '6'},
          {title: '20岁+最爱榜', id: '7'},
          {title: '新作榜', id: '2'},
          {title: '完结榜', id: '3'},
          {title: '畅销榜', id: '4'}],
        NavListId: '5',
        UpDateTime: ''
      }
    },
    methods: {
      changeTab (tid) {
        this.NavListId = tid
        this.HuoQuListSort()
      },
      HuoQuListSort () {
        this.$request({
          type: 'get',
          url: 'pcv2/topic/rank_list/' + this.NavListId,
          header: {},
          params: {
            since: 0,
            limit: 0
          },
          success: function (res) {
            // 加载数据
            this.topics = res['data']['data']['topics']
            this.UpDateTime = res['data']['data']['next_update_date']
//            console.log(this.topics)
          },
          failed: function (err) {
            console.log(err)
          }
        })
      },
      goBack () {
        this.$router.push({ path: '/kkfind' })
      }
    },
    mounted () {
      this.HuoQuListSort()
    }
  }
</script>

<style scoped lang=less>
  .topNav{
    text-align: center;
    line-height: 40px;
    font-size: 17px;
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    z-index: 22;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }
  .topNav .back{
    position: absolute;
    left: 5%;
    top: 30%;
    width: 16px;
    height: 16px;
  }
  .navList{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 20;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 40px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }
  .navList span{
    font-size: 15px;
    padding: 2.5% 0;
    margin: 0 3.7%;
    border-bottom: 3px solid #fff;
  }
  .navList .actNavL{
    border-bottom:3px solid orange;
    color: orange;
  }
  .wrap{
    width: 100%;
    margin-top: 32%;
  }
  .UpdateList{
    line-height: 40px;
    font-size: 14px;
    color: #7e8c8d;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  .box{
    overflow: hidden;
    border-bottom: 1px solid #ccc;
  }
  .bLeft{
    width: 35%;
    height: 182px;
    margin-right: 5%;
    float: left;

  }
  .bLeft img{
    width: 100%;
    height:100%;
  }
  .bRight{
    width: 45%;
    float: left;
    padding-top: 2%;
    position: relative;
  }
  .bRight .topOne{
    position: absolute;
    top: 20%;
    right: -20%;
    width: 26px;
    height: 26px;
  }
  .bRight .topOne img{
    width:150%;
    height: auto;
  }
  .bRight .topOne span{
    font-family: "Times New Roman";
    font-size: 22px;
    font-weight: bolder;
    color: grey;

  }
  .bRight p{
    margin-bottom: 5%;
  }
  .bRight .title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 18px;
    margin-bottom: 2%;
    margin-top: 5%;
  }
  .bRight .author{
    font-size: 13px;
    color: #aaa;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .bRight .UpTo{
    font-size: 13px;
    color: #aaa;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .bRight .tags span{
    display: inline-block;
    font-size: 13px;
    color: #aaa;
    margin-right: 2%;
    padding:.6% 1%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
