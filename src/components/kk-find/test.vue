<template>
  <div class="test">
  <mt-navbar v-model="selected">
    <mt-tab-item @click="change1(it)" v-for="it in arr" class="tag" :class="{actTag:TagId = it}" :key="it" :id='it'>选项{{it}}</mt-tab-item>
  </mt-navbar>
  <mt-tab-container v-model="selected" :swipeable=true>
    <mt-tab-container-item v-for="it in arr" :key="it" :id='it'>
      <mt-cell v-for="n in tocArr[it-1]" :key="n" :title="n" />
    </mt-tab-container-item>
  </mt-tab-container>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        selected: '',
        TagId: '1',
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        tocArr: [ ['内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1'],
          ['内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2'],
          ['内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1'],
          ['内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2'],
          ['内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1'],
          ['内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2'],
          ['内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1'],
          ['内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2'],
          ['内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1'],
          ['内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2'],
          ['内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1'],
          ['内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2'],
          ['内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1', '内容1'],
          ['内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2', '内容2']]
      }
    },
    methods: {
      change1 (ev) {
        this.TagId = ev
      }
    }
  }
</script>

<style scoped lang=less>
  // nav换行问题 解决
  // 切换加载数据
  // 切换后偏移量问题 //用子路由数据获取有问题
.mint-navbar{
  position: fixed;
  width: 100%;
  padding-top: 40px;
  top: 0px;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom:3px solid orange;
    color: orange;
    margin-bottom: 0;
  }
  .tag{
    padding: 2.5% 0;
    background-color: #fff;
    margin: 1.5% 2%;
  }
  .mint-tab-item-label{
    width: 50px;
    background-color: yellow;
  }
  .mint-tab-container{
    padding-top: 130px;
  }
  .mint-cell{
    padding: 50px 0;
  }
</style>
