<template>
<div class="content">
<div v-for="item in newContent" class="boxBar">
  <div v-if="item['topics']" class="BTitle">
    <span class="title">{{item['title']}}</span>
    <span class="more">更多&nbsp;></span>
  </div>
  <div class="boxF">
    <router-link v-for="ite in item['topics']||item['banners']" to="#" :key="ite['target_id']" :class="'box'+item['item_type']">
      <div class="boxTop">
        <img :src="ite['pic']" alt="">
      </div>
      <div v-if="item['topics']" class="boxBottom">
        <p class="title">{{ite['title']}}</p>
        <p class="recommended_text">{{ite['recommended_text']}}
          <span v-if="!ite['recommended_text']" v-for="val in ite['category']">{{val}}</span>
        </p>
      </div>
    </router-link>
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
        rec: false
      }
    },
    mounted () {
    }
  }
</script>
<style scoped lang=less>
  a{
    text-decoration: none;
  }
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
.boxF{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .box14,.box2, .box18{
    width: 49%;
    margin-bottom: 10px;
  }
  .box14 .boxTop, .box2 .boxTop{
    height:127px;
  }
  .box4,.box5{
    width: 33%;
    margin-bottom: 10px;
  }
  .box4 .boxTop, .box5 .boxTop{
    height:182px;
  }
  .box19{
    width: 33%;
    margin-bottom: 10px;
  }
  .box19 .boxTop{
    height:182px;
  }
  .box7{
    width: 100%;
    margin-bottom: 10px;
  }
  .box7 .boxTop{
    height:136px;
  }
  .boxF .boxTop{
    width: 100%;
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
  }
  .boxBottom span{
    margin-right: 2%;
  }
</style>
