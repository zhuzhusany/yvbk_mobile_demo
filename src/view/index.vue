<template>
  <div class="index-view">
    <van-cell to="process-list">
      <template slot="title">
        <van-tag class="tag-1">标</van-tag>
        <span class="title">标准运维</span>
      </template>
    </van-cell>
    <van-cell to="task-list">
      <template slot="title">
        <van-tag class="tag-2">S</van-tag>
        <span class="title">Sql</span>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="less">
  @import '../../static/style/page';
  @import '../../static/style/var';
  .index-view {
    min-height: 100vh;
    background-color: @white;
    padding: 20px 0;
    box-sizing: border-box;

    .van-cell {
      background-color: #F0F0F0;
      height: 90px;
      margin: 0 25px 20px 25px;
      width: auto;
      border-radius: 10px;
      padding: 15px;
      box-sizing: border-box;

      .van-tag {
        width: 60px;
        height: 60px;
        line-height: 60px;
        border-radius: 4px;
        text-align: center;
        display: inline-block;
        padding: 0;
        font-size: 28px;
        color: @white;
      }

      .tag-1 {
        background-color: #ff5656 !important;
      }

      .tag-2 {
        background-color: #3A84FF !important;
      }

      .title {
        font-size: 16px;
        font-weight: bold;
        margin-left: 10px;
        color: @black;
      }
    }
  }
</style>
