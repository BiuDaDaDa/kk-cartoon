<template>
  <div>
    <!-- -----头部----- -->
    <div class="newsTitle">
      <div class="titleAll">
        <router-link to="/user">
          <img src="../../assets/kk-user/kk-user-close.png" alt="">
        </router-link>
        <h2>编辑资料</h2>
        <h3>发送</h3>
      </div>
    </div>
    <!-- -----头部----- -->
    <div class="info-all">
      <div class="info-img">
        <div class="img-all">
          <img :src="infoUrl" alt="">
        </div>
      </div>

      <div class="info-content">
        <div class="info-for">
          <h2>昵称</h2>
          <input type="text" :value="infoName">
        </div>
        <div class="info-for">
          <h2>性别</h2>
          <input type="text" :value="infoSex === 1 ? '男' : '女'">
        </div>
        <div class="info-for">
          <h2>生日</h2>
          <input type="text" :value="infoBirthday">
        </div>
      </div>

      <div class="info-id">
        <span>{{infoId}}</span>
      </div>
    </div>
    <div class="user-sex"></div>
    <!--<div class="user-birthday">-->
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    <!--</div>-->
  </div>
</template>

<script>
    export default {
      name: 'UserInfo',
      data () {
        return {
          infoName: '',
          infoSex: '',
          infoBirthday: '',
          infoUrl: '',
          infoId: '',
          slots: [
            {
              flex: 1,
              values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
              className: 'slot1',
              textAlign: 'right'
            },
            {
              divider: true,
              content: '-',
              className: 'slot2'
            }, {
              flex: 1,
              values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
              className: 'slot3',
              textAlign: 'left'
            }
          ]
        }
      },
      mounted () {
        this.$request({
          type: 'get',
          url: '/kuaikanv1/users/me',
          heders: {
            'X-Device': 'A:bcce411315f9d871'
          },
          success (res) {
            this.infoName = res.data.data.nickname
            this.infoSex = res.data.data.gender
            this.infoBirthday = res.data.data.birthday
            this.infoUrl = res.data.data.avatar_url
            this.infoId = res.data.data.id
//            console.log(res.data.data.avatar_url)
          },
          failed (err) {
            console.log(err)
          }
        })
      },
      methods: {
        onValuesChange (picker, values) {
          if (values[0] > values[1]) {
            picker.setSlotValue(1, values[0])
          }
        }
      }
    }
</script>

<style scoped lang='less'>
  /* -----------头部----------- */
  .newsTitle{
    width: 100%;
    height: 6vh;
    font-weight: 200;
    background-color: #ffd60f;
    display: flex;
    align-items: center;
    .titleAll{
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      a{
        text-decoration: none;
        position: relative;
        color: #424242;
        img{
          position: absolute;
          top: -1.8vh;
          left: 5vw;
          width: 25px;
          height: 25px;
          vertical-align: middle;
        }
      }
      h2{
        font-size: 20px;
        text-align: center;
        font-weight: normal;
        margin: 0 auto;
        vertical-align: middle;
      }
      h3{
        position: absolute;
        top: 1.3vh;
        right: 5vw;
        font-weight: normal;
        font-size: 17px;
      }
    }
  }
  .info-all{
    width: 100vw;
    height: 94vh;
    background-color: #f9f9f9;
    .info-img{
      width: 100vw;
      height: 30%;
      /*background-color: blue;*/
      display: flex;
      align-items: center;
      justify-content: center;
      .img-all{
        width: 25vw;
        height: 25vw;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
    }
    .info-content{
      width: 90vw;
      height: 25%;
      /*background-color: aqua;*/
      padding: 0 5vw;
      .info-for{
        width: 90vw;
        height: 30%;
        background-color: #fff;
        display: flex;
        align-items: center;
        border-bottom: 1.2vh solid #f9f9f9;
        h2{
          font-size: 17px;
          font-weight: 200;
          margin-left: 2vw;
          margin-right: 4vw;
        }
        input{
          font-size: 17px;
          font-weight: 300;
          width: 70vw;
          border: none;
          outline: none;
        }
      }
    }
    .info-id{
      width: 100vw;
      height: 5vh;
      /*background-color: gold;*/
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      bottom: 0;
      left: 0;
      span{
        font-size: 14px;
        color: #939393;
      }
    }
  }
  /* -----------头部----------- */
</style>
