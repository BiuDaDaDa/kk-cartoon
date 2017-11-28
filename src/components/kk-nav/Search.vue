<template>
  <div>
    <div class="search-all">
      <div class="search-top">
        <div class="search-box">
          <img src="../../assets/kk-nav/kk-Search.png" alt="">
          <input type="search" placeholder="搜索作品名、作者名" @input="doSearch" ref="searchOver">
        </div>
        <button @click="searchBack">取消</button>
      </div>

      <div class="search-bottom" v-show="searchShow">
        <div class="bottom-title">
          <span>热门搜索</span>
          <img src="../../assets/kk-nav/kk-refresh.png" alt="" @click="refreshClicked">
        </div>

        <div class="bottom-content">
          <span class="content-for" v-for="searchValue,searchIndex in searchContent">{{searchValue.target_title}}
            <span v-if="searchValue.tag !== ''" :style="{backgroundColor:searchValue.tag === '更新'?'#eb8f4e':'#b694f3'}">{{searchValue.tag}}</span>
          </span>
        </div>

      </div>


      <div class="search-do" v-if="!searchShow">
        <div class="do-top">
          搜索"<span>{{searchHeader}}</span>"
        </div>

        <div class="do-content">
          <div class="do-for" v-for="doValue,doIndex in searchResult">
            <h2 v-if="doValue.search_result_type === 3">阅读</h2>
            <h2 v-if="doValue.search_result_type === 4">作者</h2>
            <h2 v-if="doValue.search_result_type === 5">搜索</h2>
            <h3>{{doValue.title}}</h3>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
    export default {
      name: 'Search',
      data () {
        return {
          searchContent: [],
          searchSince: 0,
          searchShow: true,
          searchResult: [],
          searchHeader: ''
        }
      },
      mounted () {
        this.$request({
          type: 'get',
          url: '/kuaikanv2/topic/search/new_hot_word',
          params: {
            'since': this.searchSince,
            'count': 10
          },
          success (res) {
//            console.log(res.data.data.hot_word)
            this.searchContent = res.data.data.hot_word
          },
          failed (err) {
            console.log(err)
          }
        })
      },
      methods: {
        searchBack () {
          this.$router.go(-1)
        },
        refreshClicked () {
          console.log(1)
          if (this.searchSince <= 69) {
            this.searchSince += 10
          } else {
            this.searchSince = 0
          }
//          console.log(this.searchSince)
          this.$request({
            type: 'get',
            url: '/kuaikanv2/topic/search/new_hot_word',
            params: {
              'since': this.searchSince,
              'count': 10
            },
            success (res) {
//              console.log(res.data.data.hot_word)
              this.searchContent = res.data.data.hot_word
            },
            failed (err) {
              console.log(err)
            }
          })
        },
        doSearch () {
          if (this.$refs.searchOver.value !== '') {
            this.searchShow = false
            this.searchHeader = this.$refs.searchOver.value
            this.$request({
              type: 'get',
              url: '/kuaikanv2/topic/search/composite',
              params: {
                'keyword': this.$refs.searchOver.value
              },
              success (res) {
                this.searchResult = res.data.data.info
//                console.log(this.searchResult)
              },
              failed (err) {
                console.log(err)
              }
            })
          } else {
            this.searchShow = true
          }
        }
      }
    }
</script>

<style scoped lang='less'>
  .search-all{
    width: 100vw;
    height: 100vh;
    .search-top{
      width: 90vw;
      height: 10vh;
      background-color: white;
      padding: 0 5vw;
      display: flex;
      align-items: center;
      .search-box{
        width: 80vw;
        height: 5vh;
        padding-left: 3vw;
        background-color: #f8f9fb;
        border-radius: 20px;
        display: flex;
        align-items: center;
        margin-right: 3vw;
        img{
          width: 7%;
          margin-right: 3.5vw;
        }
        input{
          width: 59vw;
          height: 3.8vh;
          background-color: #f8f9fb;
          border: none;
          outline: none;
          font-size: 17px;
        }
      }
      button{
        height: 5vh;
        width: 15vw;
        font-size: 18px;
        color: black;
        background-color: white;
        outline: none;
        border: none;
      }
    }
    .search-bottom{
      width: 100vw;
      height: 90vh;
      /*background-color: red;*/
      .bottom-title{
        width: 90vw;
        height: 5vh;
        padding: 0 5vw;
        /*background-color: aqua;*/
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
          color: #717171;
          font-size: 16px;
        }
        img{
          width: 5vw;
        }
      }
      .bottom-content{
        width: 90vw;
        padding: 1vh 5vw;
        /*background-color: gold;*/
        .content-for{
          font-size: 15px;
          display: inline-block;
          padding: 0.8vh 2.5vw;
          /*background-color: red;*/
          border-radius: 20px;
          margin-bottom: 1.5vh;
          border: 1px solid #ebebeb;
          margin-right: 2vw;
          span{
            font-size: 12px;
            width: fit-content;
            height: fit-content;
            /*background-color: red;*/
            border-radius: 5px;
            color: white;
            padding: 0 2px;
          }
        }

      }
    }
    .search-do{
      width: 100vw;
      min-height: 90vh;
      /*background-color: red;*/
      .do-top{
        width: 90vw;
        padding: 1vh 5vw 1.5vh;
        font-size: 14px;
        color: #7fadde;
      }
      .do-content{
        width: 90vw;
        padding:0 5vw;
        div:last-child{
          border: none;
        }
        .do-for{
          width: 100%;
          height: 3vh;
          padding: 1vh 0 1vh;
          display: flex;
          align-items: center;
          /*background-color: gold;*/
          border-bottom: 1px solid #e9e9e9;
          h2{
            display: inline-block;
            font-size: 13px;
            color: #dadada;
            margin-right: 3vw;
            font-weight: normal;
          }
          h3{
            font-size: 15px;
            font-weight: normal;
          }
        }
      }
    }
  }
</style>
