<template>
  <div>
    <div class="page-list">
      <!-- 搜索 -->
      <van-search placeholder="搜索流程名称" v-model="value" class="process-search" />
      <!-- 收藏 -->
      <section class="bk-block">
        <h2 class="bk-block-title">收藏</h2>
        <van-cell clickable to="task-setting">
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20</div>
          </template>
          <van-icon slot="right-icon" name="star" class="star-icon collection" />
        </van-cell>
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20</div>
          </template>
          <van-icon slot="right-icon" name="star" class="star-icon collection" />
        </van-cell>
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20</div>
          </template>
          <van-icon slot="right-icon" name="star" class="star-icon collection" />
        </van-cell>
      </section>
      <!-- 开区 -->
      <section class="bk-block">
        <h2 class="bk-block-title">开区</h2>
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20</div>
          </template>
        </van-cell>
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20</div>
          </template>
        </van-cell>
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20</div>
          </template>
        </van-cell>
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20</div>
          </template>
        </van-cell>
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20</div>
          </template>
        </van-cell>
      </section>
    </div>
    <!-- 标签栏 -->
    <van-tabbar v-model="active" class="bk-tabbar">
      <van-tabbar-item>
        <span>流程</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon_process.active : icon_process.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item>
        <span>任务</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon_task.active : icon_task.normal"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'process-list',
  data () {
    return {
      active: 0,
      value: '',
      icon_process: {
        normal: '/static/images/icon-process-normal.png',
        active: '/static/images/icon-process-active.png'
      },
      icon_task: {
        normal: '/static/images/icon-task-normal.png',
        active: '/static/images/icon-task-active.png'
      }
    }
  }
}
</script>

<style lang="less">
  @import '../../static/style/page';
  @import '../../static/style/var';
  .page-list{
    background: @white;
    min-height: 100vh;
    padding-bottom: 50px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  /*search*/
  .process-search{
    background-color: #F2F2F2!important;
    padding: 8px 25px;

    .van-search__content{
      background-color: @white;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;

      .van-cell{
        padding: 6px 10px 6px 0;
      }
    }
  }
</style>
