<template>
  <div class="page">
    <div class="page__bd top">
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
    <div class="box">
      <div class="sentence">
        {{sentenceData.content}}
      </div>
      <div class="trans">
        {{sentenceData.note}}
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
        },
        sentenceData: {
          "sid": "3158",
          "tts": "http:\/\/news.iciba.com\/admin\/tts\/2018-10-16-day.mp3",
          "content": "I have failed over and over and over again in my life. And that is why I succeed.",
          "note": "\u6211\u7684\u4e00\u751f\u4e00\u6b21\u53c8\u4e00\u6b21\u5931\u8d25\u8fc7\uff0c\u800c\u90a3\u6b63\u662f\u6211\u6210\u529f\u7684\u539f\u56e0\u3002",
          "love": "581",
          "translation": "\u5c0f\u7f16\u7684\u8bdd\uff1a\u8fd9\u53e5\u8bdd\u51fa\u81ea\u8fc8\u514b\u5c14\u00b7\u4e54\u4e39\u3002\u4fd7\u8bdd\u8bf4\uff1a\u5931\u8d25\u662f\u6210\u529f\u4e4b\u6bcd\uff0c\u8fd9\u662f\u88ab\u65e0\u6570\u4e8b\u5b9e\u8bc1\u660e\u7684\u4e00\u6761\u771f\u7406\u3002\u5728\u901a\u5411\u6210\u529f\u7684\u8def\u4e0a\uff0c\u5931\u8d25\u662f\u4e0d\u53ef\u907f\u514d\u7684\uff1b\u5bf9\u594b\u6597\u8005\u6765\u8bf4\uff0c\u5931\u8d25\u5c31\u610f\u5473\u7740\u5411\u6210\u529f\u53c8\u8fc8\u8fdb\u4e00\u6b65\u3002\u4efb\u4f55\u4e8b\u60c5\u7684\u6210\u529f\uff0c\u65e0\u4e0d\u662f\u4e00\u6b21\u53c8\u4e00\u6b21\u5931\u8d25\u6478\u7d22\u51fa\u6765\u7684\u3002",
          "picture": "http:\/\/cdn.iciba.com\/news\/word\/20181016.jpg",
          "picture2": "http:\/\/cdn.iciba.com\/news\/word\/big_20181016b.jpg",
          "caption": "\u8bcd\u9738\u6bcf\u65e5\u4e00\u53e5",
          "dateline": "2018-10-16",
          "s_pv": "0",
          "sp_pv": "0",
          "tags": [{"id": null, "name": null}],
          "fenxiang_img": "http:\/\/cdn.iciba.com\/web\/news\/longweibo\/imag\/2018-10-16.jpg"
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
  .top {
    padding-bottom: 20px;
  }

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

  .box {
    margin-left: 12px;
    margin-right: 12px;
    box-shadow: 1px 1px 5px #ddd;
    padding: 15px;
    border-radius: 5px;
  }

  .trans {
    font-size: 14px;
    margin-top: 5px;
    color: #888;
  }
</style>
