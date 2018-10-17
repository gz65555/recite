<template>
  <div>
    <div class="top">
      <div class="word">
        {{word}}
      </div>
      <div class="pronounces">
        <div class="pronounce" v-for="pron in msg.data.pronunciations" :key="pron.pron">
          <div>{{pron.type}}</div>
          <div class="sound-mark">[{{pron.pron}}]</div>
          <div>
            <img class="play-icon" src="../../../static/icon/voice.png">
          </div>
        </div>
      </div>
      <img src="../../../static/icon/add-list.png" class="collection" @click="toAddToNotebook">
    </div>
    <div class="explain">
      <div class="label">
        汉语释义
      </div>
      <div class="detail">
        <div class="explain-item" v-for="item in msg.data.cn_definitions" :key="item.explain">
          <div class="type">
            {{item.type}}.
          </div>
          <div class="explain-detail">
            {{item.explain}}
          </div>
        </div>
      </div>
    </div>

    <div class="explain">
      <div class="label">
        英文释义
      </div>
      <div class="detail">
        <div class="explain-item" v-for="item in msg.data.en_definitions" :key="item.explain">
          <div class="type">
            {{item.type}}.
          </div>
          <div class="explain-detail">
            {{item.explain}}
          </div>
        </div>
      </div>
    </div>

    <div class="explain">
      <div class="label">
        例句
      </div>
      <div class="sentence-detail">
        <div class="sentence-item" v-for="item in msg.data.example" :key="item.sentence">
          <div class="sentence">{{item.sentence}}</div>
          <div class="translate">{{item.translation}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data: function () {
      return {
        word: "get",
        msg: {
          "code": 0,
          "data": {
            "pronunciations": [{"type": "uk", "pron": "ɡet"}, {"type": "us", "pron": "ɡet"}],
            "example": [{
              "translation": "总有一天我俩都有机会看看纽约。",
              "sentence": "One day we'll both get to see New York.",
              "point": "get"
            }, {
              "translation": "我早晚要跟你算那笔帐，你这坏蛋！",
              "sentence": "I'll get you for that, you bastard!",
              "point": "get"
            }, {
              "translation": "我觉得他穿的那件衬衣真可笑。",
              "sentence": "I can't get over that shirt he was wearing.",
              "point": "get"
            }],
            "shanbay_id": 2842,
            "en_definitions": [{
              "type": "v",
              "explain": "come into the possession of something concrete or abstract;enter or assume a certain state or condition;cause to move; cause to be in a certain position or condition"
            }, {
              "type": "n",
              "explain": "a return on a shot that seemed impossible to reach and would normally have resulted in a point for the opponent"
            }],
            "cn_definitions": [{"type": "vt", "explain": "使得；获得；受到；变成"}, {"type": "vi", "explain": "成为；变得；到达"}],
            "content": "get",
            "uk_audio": "http://media.shanbay.com/audio/uk/get.mp3",
            "us_audio": "http://media.shanbay.com/audio/us/get.mp3"
          }
        }
      }
    },
    methods: {
      toAddToNotebook() {
        this.$router.push({ path: '/pages/add-to-notebook/main' });
      }
    }
  }
</script>

<style scoped>
  .top {
    background: white;
  }

  .word {
    font-size: 28px;
    padding-top: 15px;
    margin-left: 15px;
    font-weight: bold;
  }

  .play-icon {
    width: 18px;
    height: 18px;
  }

  .pronounces {
    display: flex;
    padding: 15px;
    color: #999;
  }

  .pronounce {
    display: flex;
    font-size: 14px;
    margin-right: 10px;
  }

  .sound-mark {
    margin-left: 5px;
    margin-right: 5px;
  }

  .play-icon {
    vertical-align: middle;
  }

  .explain {
    margin-top: 2px;
  }

  .label {
    padding: 10px 15px;
    background-color: white;
    font-size: 14px;
    font-weight: 400;
  }

  .explain-item {
    display: flex;
    margin-left: 15px;
    padding-top: 10px;
    padding-right: 15px;
    font-size: 14px;
    color: #444;
  }

  .detail {
    margin-top: 2px;
    background-color: white;
  }

  .detail:last-child {
    padding-bottom: 10px;
  }

  .type {
    margin-right: 10px;
  }

  .sentence-detail {
    margin-bottom: 100px;
  }

  .sentence-item:last-child {
    padding-bottom: 10px !important;
  }

  .sentence-item {
    background-color: white;
    padding-left: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 2px;
    font-size: 14px;
    color: #444;
  }

  .collection {
    position: absolute;
    width: 32px;
    height: 32px;
    right: 15px;
    top: 40px;
  }
</style>
