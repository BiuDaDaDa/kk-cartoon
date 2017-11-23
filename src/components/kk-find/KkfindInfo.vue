<template>
<div @touchstart="changePos1" @touchend="changePos2" class="kkFind">
  <div  ref="kkFindNav" class="kkFindNav"  style="top: 0px" >
    <div class="Nav" :class="{activeNav:!isShow}">
      <div class="diBg" :class="{actDiBg:!isShow}">
        <img src="" alt="男">
      </div>
      <div class="btnN">
        <span @click="changeTui" :class="{actBtn:isShow}">推荐</span>
        <span @click="changeFen" :class="{actBtn:!isShow}">分类</span>
      </div>
      <div class="diBg" :class="{actDiBg:!isShow}">
        <img src="" alt="🔍">
      </div>
    </div>
  </div>
  <div v-show="isShow" class="recommend">
    <Recycle :newRecycle="newRecycle"/>
    <List :newList="newList"/>
    <myContent :newContent="newContent"/>
    <div class="btnF">
      <button class="contribute">
      <span class="banner">
        <img src="../../assets/kk-find/kk-find-contribute.png" alt="">
        <span>我要投稿</span>
      </span>
      </button>
      <button class="allComposition">
      <span class="banner">
        <img src="../../assets/kk-find/kk-find-all.png" alt="">
        <span>全部作品</span>
      </span>
      </button>
    </div>
  </div>
  <div v-show="!isShow" class="follow">
    <myTopic :goShow="isShow"/>
    <!-- 控制无限加载 -->
  </div>
</div>
</template>

<script>
  import Recycle from './KkFindRecycle'
  import List from './KkFindList'
  import myContent from './KkFindContent'
  import myTopic from './KkFindTopic'
  export default {
    name: '',
    components: {
      Recycle,
      List,
      myContent,
      myTopic
    },
    data () {
      return {
        newRecycle: [],
        newList: [],
        newContent: [],
        gender: 1,
        isShow: true,
        scrollTop1: '',
        scrollTop2: ''
      }
    },
    methods: {
      changeTui () {
        this.isShow = true
      },
      changeFen () {
        this.isShow = false
      },
      changePos1 () {
        this.scrollTop1 = document.documentElement.scrollTop || document.body.scrollTop || window.pageYflset || 0
      },
      changePos2 () {
        this.scrollTop2 = document.documentElement.scrollTop || document.body.scrollTop || window.pageYflset || 0
        if (this.scrollTop1 !== this.scrollTop2) {
          this.changePos()
        }
      },
      changePos () {
        let myTimer = null
        let _this = this
        // 向下滑动
        if (this.scrollTop1 < this.scrollTop2 && this.$refs.kkFindNav.offsetTop === 0) {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.kkFindNav.style.top = _this.$refs.kkFindNav.offsetTop - 1 + 'px'
            if (_this.$refs.kkFindNav.offsetTop === -60) {
              clearInterval(myTimer)
            }
          }, 10)
        } else if (this.scrollTop1 > this.scrollTop2 && this.$refs.kkFindNav.offsetTop === -60) {
          clearInterval(myTimer)
          myTimer = setInterval(function () {
            _this.$refs.kkFindNav.style.top = _this.$refs.kkFindNav.offsetTop + 1 + 'px'
            if (_this.$refs.kkFindNav.offsetTop === 0) {
              clearInterval(myTimer)
            }
          }, 10)
        }
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'kuaikanv1/topic_new/discovery_list',
        headers: {
          'X-Device': 'A:eef09de00f4e0b31'
//          'User-Agent': 'Kuaikan/4.6.6/46600(Android;5.1.1;MI 4S;kuaikan220;WIFI;780*480)'
        },
        params: {
          'gender': this.gender,
          'operator_count': '6'
        },
        success: function (res) {
          this.newRecycle = res['data']['data']['infos'][0]['banners']
          this.newList = res['data']['data']['infos'][1]['banners']
          for (let i = 2; i < res['data']['data']['infos'].length; i++) {
            this.newContent.push(res['data']['data']['infos'][i])
          }
//          console.log(res['data']['data']['infos'])
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang=less>

  .kkFindNav{
    padding-top: 20px;
    width: 100%;
    position: fixed;
    z-index: 20;

  }
  .Nav{
    display: flex;
    height: 40px;
    padding:0 5%;
    justify-content: space-between;
    align-items: center;
  }
  .diBg{
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(0,0,0,.6);
  }
  .actDiBg{
    background-color: #fff;
  }
  .btnN{
    height: 24px;
    width: 28%;
    background-color: rgba(0,0,0,.6);
    border-radius: 12px;
    border:1px solid rgba(0,0,0,.6);
  }
  .btnN span{
    display: inline-block;
    font-size: 14px;
    font-weight: 200;
    text-align: center;
    line-height: 24px;
    color: #fff;
    padding: 0 10%;
    outline: none;
  }
  .btnN .actBtn{
    background-color: #fff;
    color: orange;
    border-radius: 12px;
  }
  .activeNav{
    background-color: #fff;
  }
  .btnF{
    padding:5%;
    display: flex;
    justify-content: space-around;

  }
  .btnF button{
    width: 45%;
    padding: 3% 0;
    font-size: 17px;
    border-radius: 4px;
    background-color: #fff;
  }
  .btnF button .banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btnF .contribute{
    color: blue;
    border: 1px solid blue;
  }
  .btnF .allComposition{
    color: red;
    border: 1px solid red;
  }
  .allComposition img{
    padding: 4px;
    width: 20px;
    height: 20px;
  }
  .follow{
    padding-top: 38%;
  }
</style>
