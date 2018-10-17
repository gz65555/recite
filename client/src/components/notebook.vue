<template>
  <div class="notebook" @click="onNoteBookClick()">
    <p class="title">hello</p>
    <p class="sub-title">共3词</p>
  </div>
</template>

<script>
  export default {
    methods: {
      onNoteBookClick() {
        this.$router.push({path: '/pages/notebook-detail/main'})
      }
    }
  }
</script>

<style scoped>
  .notebook {
    width: 160px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 1px 1px 8px #eee;
    background: white;
  }

  .title {
    font-size: 20px;
    margin-top: 50px;
  }

  .sub-title {
    font-size: 14px;
    color: #999999;
  }
</style>
