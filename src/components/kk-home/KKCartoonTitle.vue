<template>
  <div>
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
         总热度&nbsp;{{(jsText.view_count/100000000).toFixed(2)}}亿
       </div>
      </div>
    </div>
    <ul id="list">
      <li v-for="(value,i) in listArray" class="listContent" @touchstart="tab(i)">
        {{value}}
      </li>
    </ul>
    <div id="serialize">
      <div>{{jsText.update_status}}{{jsText.update_day}}</div>
      <div>
        倒序
        <img src="../../assets/kkcartoontitle/upp.png" alt="" class="order" @click='order' ref="img">
      </div>
    </div>
    <ul id="contentList">
      <router-link to="/" v-for="(key,i) in jsText.comics" :key="key.id" tag="li" class="writings">
        <img :src="key.cover_image_url" alt="" class="images">
        <div class="rightContent">
          <div class="section">
            <p>{{key.title}}</p>
          </div>
          <div class="time">
            <div></div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import bus from '../../common/js/eventBus'
  var list = document.getElementsByClassName('listContent')
  export default {
    name: '',
    data () {
      return {
        id: '',
        jsText: {},
        listArray: ['详情', '选集']
      }
    },
    methods: {
      tab: function (i) {
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
        console.log(this.$refs.img.src)
      }
    },
    mounted () {
      var _that = this
      bus.$on('info', function (msg) {
        _that.id = msg
        console.log(msg)
      })
      let url = {
        url: 'v1/topics/133',
        type: 'get',
        headers: {},
        params: {
          is_homepage: 0,
          is_new_device: false,
          sort: 0,
          sortAction: 0
        },
        success: function (res) {
          console.log(res.data.data)
          _that.jsText = res.data.data
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
    border: 1px solid red;
  }
  .rightContent {
    display: inline-block;
    height: 68px;
    width: 60%;
    border: 1px solid sienna;
    position: relative;
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
    border: 1px solid aqua;
    bottom: 0;
    overflow: hidden;
  }
</style>
