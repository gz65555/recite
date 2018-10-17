<template>
  <div class="page">
    <div class="top">
      <img class="head" :src="avatarUrl" alt="">
      <div>{{nickName}}</div>
    </div>
    <div class="page__bd">
      <div class="weui-grids">
        <block v-for="item in grids" :key="index">
          <div class="weui-grid white-bg">
            <image class="weui-grid__icon" :src="item.src"/>
            <div class="weui-grid__label">{{item.name}}</div>
          </div>
        </block>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        grids: [
          {src: '../../../static/icon/icon_nav_button.png', name: 'Button'},
          {src: '../../../static/icon/icon_nav_cell.png', name: 'Cell'},
          {src: '../../../static/icon/icon_nav_toast.png', name: 'Toast'},
          {src: '../../../static/icon/icon_nav_dialog.png', name: 'Dialog'},
          {src: '../../../static/icon/icon_nav_button.png', name: 'Progress'},
          {src: '../../../static/icon/icon_nav_panel.png', name: 'Msg'},
          {src: '../../../static/icon/icon_nav_article.png', name: 'Article'},
          {src: '../../../static/icon/icon_nav_actionSheet.png', name: 'ActionSheet'},
          {src: '../../../static/icon/icon_nav_icons.png', name: 'Icons'}
        ]
      }
    },
    methods: {},
    computed: {
      nickName() {
        return this.$store.state.userInfo.nickName;
      },
      avatarUrl() {
        return this.$store.state.userInfo.avatarUrl;
      },
    }
  }
</script>

<style>
  .white-bg:active {
    background-color: #ddd;
  }

  .white-bg {
    background-color: white;
  }

  .head {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-left: 20px;
    margin-right: 15px;
  }

  .top {
    display: flex;
    align-items: center;
    background-color: white;
    margin: 5px 0;
    border: 1px solid #ddd;
    padding: 15px 15px;
  }
</style>
