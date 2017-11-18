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
      <div class="boxBottom">
        <p class="title">{{ite['title']}}</p>
        <p class="recommended_text">{{ite['recommended_text']}}</p>
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
  .box14{
    width: 49%;
    margin-bottom: 10px;
  }
  .box4{
    width: 33%;
    margin-bottom: 10px;
  }
  .box19{
    width: 33%;
    margin-bottom: 10px;
  }
  .box7{
    width: 100%;
    margin-bottom: 10px;
  }
  .boxF .boxTop{
    width: 100%;
    height:auto;
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
    color:black;
  }
  .boxBottom .recommended_text{
    font-size: 13px;
    color: #888;
    font-weight: bolder;
  }
</style>
