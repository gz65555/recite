<template>
  <navigator url="/pages/word-detail/main" class="weui-cell" hover-class="weui-cell_active">
    <div class="weui-cell__bd item">
      <img src="../../static/icon/search.png" class="search-icon">
      <div class="entry">{{entry}}</div>
      <div class="explain">{{explain}}</div>
    </div>
  </navigator>
</template>

<script>
  export default {
    props: ['entry', 'explain']
  }
</script>

<style>
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    overflow: hidden;
  }
  .search-icon {
    width: 20px;
    height: 20px;
    display: block;
    flex-shrink: 0;
    margin-right: 5px;
  }

  .entry {
    font-size: 16px;
    flex-shrink: 0;
    margin-right: 5px;
  }

  .explain {
    color: #999999;
    font-size: 12px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    display: inline-block;
    padding-top: 3px;
  }
</style>
