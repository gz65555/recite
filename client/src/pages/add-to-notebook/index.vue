<template>
  <div class="page">
    <checkbox-group @change="checkboxChange" class="checkbox-group">
      <label class="weui-cell weui-check__label" v-for="item in checkboxItems" :key="index">
        <checkbox class="weui-check" :value="item.value" :checked="item.checked"/>
        <div class="weui-cell__hd weui-check__hd_in-checkbox">
          <icon class="weui-icon-checkbox_circle" type="circle" size="23" v-if="!item.checked"></icon>
          <icon class="weui-icon-checkbox_success" type="success" size="23" v-if="item.checked"></icon>
        </div>
        <div class="weui-cell__bd">{{item.name}}</div>
      </label>
    </checkbox-group>
    <div class="bottom">
      <button class="weui-btn" type="primary" plain="true">添加到单词本</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkboxItems: [
          {name: 'standard is dealt for u.', value: '0', checked: true},
          {name: 'standard is dealicient for u.', value: '1', checked: false},
          {name: 'standard is dealicient for u.', value: '2', checked: false},
          {name: 'standard is dealicient for u.', value: '3', checked: false},
          {name: 'standard is dealicient for u.', value: '4', checked: false},
        ],
      }
    },
    methods: {
      checkboxChange(e) {
        console.log('checkbox发生change事件，携带value值为：' + e.mp.detail.value);
        const checkboxItems = this.checkboxItems, values = e.mp.detail.value;
        for (let i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
          checkboxItems[i].checked = false;

          for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
            if (checkboxItems[i].value === values[j]) {
              checkboxItems[i].checked = true;
              break;
            }
          }
        }
        this.checkboxItems = checkboxItems;
      }
    }

  }
</script>

<style>
  .checkbox-group {
    margin-bottom: 100px;
  }
  .bottom {
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .bottom button {
    margin: 10px 20px;
  }
</style>
