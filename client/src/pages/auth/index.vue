<template>
  <div v-if="!isAuth" class="page">
    <button open-type="getUserInfo" @getuserinfo="getUserInfo" class="weui-btn" type="primary" plain="true">授权继续使用
    </button>
  </div>
</template>

<script>
  import * as types from '../../store/action-types';

  export default {
    data: function () {
      return {
        isAuth: false
      }
    },
    methods: {
      getUserInfo(event) {
        const info = event.mp.detail;
        this.$store.dispatch(types.SET_USERINFO, info.userInfo).then(() => {
          this.$router.push({path: '/pages/home/main', isTab: true});
        })
      }
    },
    onLoad() {
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            this.isAuth = true;
            wx.getUserInfo({
              success: res => {
                console.log(res)
                this.$store.dispatch(types.SET_USERINFO, res.userInfo).then(() => {
                  this.$router.push({path: '/pages/home/main', isTab: true});
                });
              }
            })
          }
        }
      })
    }
  }
</script>

<style scoped>
  .page {
    height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
