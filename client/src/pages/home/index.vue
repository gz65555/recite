<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-search-bar">
        <div class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
            <input type="text" class="weui-search-bar__input" placeholder="搜索" v-model="inputVal" :focus="inputShowed"
                   @input="inputTyping"/>
            <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
              <icon type="clear" size="14"></icon>
            </div>
          </div>
          <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
            <icon class="weui-icon-search" type="search" size="14"></icon>
            <div class="weui-search-bar__text">搜索</div>
          </label>
        </div>
        <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
      </div>
      <div class="weui-cells searchbar-result" v-if="inputVal.length > 0">
        <word-entry v-for="item in queryResult.entries" :key="item.entry" :entry="item.entry" :explain="item.explain"/>
      </div>
    </div>
  </div>
</template>

<script>
  import wordEntry from '@/components/word-entry'
  export default {
    components: {
      wordEntry,
    },
    data() {
      return {
        inputShowed: false,
        inputVal: '',
        queryResult: {
          "query": "hello",
          "entries": [{
            "explain": "int. 喂; 哈罗; n. 表示问候， 惊奇或唤起注意时的用语; n. (Hello)人名; (法...",
            "entry": "hello"
          }, {"explain": "int. 嗨（表示打招呼）", "entry": "hello"}, {
            "explain": "凯蒂猫（品牌名）",
            "entry": "hello kitty"
          }, {"explain": "你好世界", "entry": "hello world"}, {"explain": "大家好", "entry": "hello everybody"}],
        }
      }
    },
    methods: {
      showInput() {
        this.inputShowed = true;
      },
      hideInput() {
        this.inputVal = '';
        this.inputShowed = false;
      },
      clearInput() {
        this.inputVal = '';
      },
      inputTyping(e) {
        console.log(e);
        this.inputVal = e.mp.detail.value;
        // console.log('输入信息为：'+e.mp.detail.value);
      }
    }
  }
</script>

<style scoped>
  .searchbar-result {
    margin-top: 0;
    font-size: 14px;
  }

  .searchbar-result:before {
    display: none;
  }

  .weui-cell {
    padding: 12px 15px 12px 35px;
  }
</style>
