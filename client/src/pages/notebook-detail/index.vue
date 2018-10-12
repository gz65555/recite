<template>
  <div>
    <div class="top">
      <div class="left">
        <p class="title">标题</p>
        <p class="sub-title">共x词</p>
      </div>
      <div class="right">
        管理
      </div>
    </div>
    <div>
      <div class="words">
        <word/>
        <word/>
        <word/>
        <word/>
        <word/>
        <word/>
      </div>
      <div class="footer">
        <div class="hr"></div>
        <div>
          <div class="middle">
            END
          </div>
        </div>
        <div class="hr"></div>
      </div>
    </div>
    <div class="bottom-fixed">
      <img src="../../../static/icon/play.png">
    </div>
  </div>
</template>

<script>
  import word from '@/components/word'

  export default {
    components: {
      word
    }
  }
</script>

<style scoped>
  .word {
    border-top: 0.5px solid #eee;
  }

  .top {
    height: 60px;
    background-color: white;
    box-shadow: 1px 1px 2px #eee;
  }

  .top .left {
    float: left;
    margin-left: 20px;
  }

  .top .left p {
    clear: both;
  }

  .top .left .title {
    margin-top: 5px;
    font-size: 18px;
  }

  .top .left .sub-title {
    font-size: 12px;
    color: #999999;
  }

  .top .right {
    float: right;
    line-height: 60px;
    margin-right: 20px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #ddd;
  }

  .middle {
    padding: 10px 20px;
  }

  .hr {
    width: 120px;
    background-color: #ddd;
    height: 1px;
  }

  .bottom-fixed {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 3px #eee;
  }

  .bottom-fixed img {
    width: 50px;
    height: 50px;
    margin: 5px;
  }
</style>
