<template>
  <div>
    <div class="head">
      <img src="../../../static/icon/notebook.png" alt="">
      <p class="username">ukdlqkj</p>
      <p class="manage">管理</p>
    </div>
    <div class="wrapper" style="padding: 20px">
      <div class="collection">
        <notebook/>
      </div>
    </div>
  </div>
</template>

<script>
  import notebook from '@/components/notebook'
  export default {
    components: {
      notebook
    },
    methods: {

    }
  }
</script>

<style scoped>
  .head {
    padding: 10px 20px;
    height: 30px;
    background: white;
  }

  .head > img {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    float: left;
    margin-right: 15px;
  }

  .head .username {
    float: left;
    line-height: 30px;
  }

  .head .manage {
    float: right;
    line-height: 30px;
  }

  .collection {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
</style>
