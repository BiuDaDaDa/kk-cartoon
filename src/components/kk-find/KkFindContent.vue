<template>
<div class="content">
  <div class="boxBar" v-for="item in newContent">
    <div class="BTitle" v-if="item['topics']">
      <span class="title">
        {{item['title']}}
      </span>
      <span class="more" @click="moreGo(item['action'],item['title'])">
        更多&nbsp;
        <img src="../../assets/kk-find/kk-find-more.png" alt=">">
     </span>
    </div>
    <div class="boxF">
      <div :class="'box'+item['item_type']" v-for="ite in item['topics']||item['banners']"
           @touchmove="changeGo1" @touchend="changeGo2(ite['target_id'])" :key="ite['target_id']">
        <div class="boxTop">
          <img v-lazy="ite['pic']" alt="">
        </div>
        <div class="boxBottom" v-if="item['topics']" >
          <p class="title">{{ite['title']}}</p>
          <p class="recommended_text">{{ite['recommended_text']}}
            <span v-if="!ite['recommended_text']" v-for="val in ite['category']">{{val}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: '',
    props: {
      newContent: {
        type: Array
      }
    },
    data () {
      return {
        rec: false,
        isGo: 1
      }
    },
    methods: {
      moreGo (act, tle) {
        this.$router.push({path: '/kkFindMore'})
        let tt = {0: act, 1: tle, 2: 'kkfind'}
        this.$store.commit('increment', tt)
      },
      changeGo1 () {
        this.isGo = 0
      },
      changeGo2 (tarId) {
        if (this.isGo === 1) {
          this.cartoonGo(tarId)
        } else {
          this.isGo = 1
        }
      },
      cartoonGo (tarId) {
        this.$router.push({name: 'kkcartoontitle', params: {id: tarId}})
      }
    }
  }
</script>
<style scoped lang=less>
.boxBar{
  margin: 10px 0;
  width: 100%;
}
.BTitle{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3% 0;
  font-size:17px;
}
.BTitle .more{
  position: absolute;
  right: 2%;
  font-size: 14px;
  color: #7e8c8d;
}
  .BTitle .more img{
    width: 16px;
    height: 16px;
    position: relative;
    top: 3px;
  }
.boxF{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
image[lazy=loading] {}
  .box14,.box2,.box18{
    width: 49%;
    margin-bottom: 2.4155vw;
  }
  .box14 .boxTop, .box2 .boxTop{
    /*height:127px;*/
    height:30.6763vw;
  }
  .box18 .boxTop{
    /*height: 203px;*/
    height: 49.0338vw;
   }
  .box4,.box5{
    width: 33%;
    margin-bottom: 2.4155vw;
  }
  .box4 .boxTop, .box5 .boxTop{
    /*height:182px;*/
    height:43.9614vw;
  }
  .box19{
    width: 33%;
    margin-bottom: 2.4155vw;
  }
  .box19 .boxTop{
    /*height:182px;*/
    height:43.9614vw;
  }
  .box7{
    width: 100%;
    margin-bottom: 2.4155vw;
  }
  .box7 .boxTop{
    /*height:136px;*/
    height:32.8502vw;
  }
  .boxF .boxTop{
    width: 100%;
    background-image: url(../../assets/kk-find/kk-mhbg.jpg);
    background-repeat:no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
  }
  .boxF img{
    width: 100%;
    height: 100%;
  }
  .boxBottom p{
    padding-left: 5%;
  }
  .boxBottom .title{
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:black;
  }
  .boxBottom .recommended_text{
    font-size: 13px;
    color: #888;
    font-weight: bolder;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .boxBottom span{
    margin-right: 2%;
  }
</style>
