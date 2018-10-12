<template>
  <div class="word">
    <div class="left">
      <div class="vocabulary">Hello</div>
      <div class="phonetic">[cí huì]</div>
      <div class="paraphrase">He warned us against</div>
    </div>
    <div class="play">
      <img src="../../static/icon/voice.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "word"
  }
</script>

<style scoped>
  .word {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  .word .left .vocabulary {
    font-weight: bold;
    font-size: 18px;
    color: #000;
  }

  .word .left .phonetic {
    font-size: 14px;
    color: #333;
  }

  .word .left .paraphrase {
    font-size: 12px;
    color: #999;
  }

  .play {
    width: 28px;
    height: 27px;
  }

  .play img {
    max-width: 100%;
    max-height: 100%;
  }
</style>
