<template>
  <div>
  <mt-navbar v-model="selected">
    <mt-tab-item @click="change1(it)" v-for="it in arr" class="tag" :class="{actTag:TagId = it}" :id='it'>选项{{it}}</mt-tab-item>
  </mt-navbar>

  <!-- tab-container -->
  <mt-tab-container v-model="selected" :swipeable=true>
    <mt-tab-container-item v-for="it in arr" :id='it'>
      <mt-cell v-for="n in 30" :title="'内容 ' + n" />
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
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
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
  // nav换行问题
  // 切换加载数据
.mint-navbar{
  position: fixed;
  width: 100%;
  top: 40px;
  z-index: 10;
  background-color: red;
}
  .tag{
    background-color: green;
    margin: 0 2%;
  }
  .mint-tab-item-label{
    width: 50px;
    background-color: yellow;
  }
</style>
