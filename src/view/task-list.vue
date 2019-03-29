<template>
  <div>
    <!-- 容器 -->
    <div class="page-list">
      <!-- 搜索 -->
      <van-search placeholder="搜索任务名称" v-model="value" class="task-search" />
      <!-- 列表 -->
      <section class="bk-block">
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版任务</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20 至 2019-03-10 15:01:20</div>
          </template>
          <van-icon slot="right-icon" name="clear" class="task-icon close" />
        </van-cell>
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版任务</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20 至 2019-03-10 15:01:20</div>
          </template>
          <van-icon slot="right-icon" name="more" class="task-icon more" />
        </van-cell>
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版任务</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20 至 2019-03-10 15:01:20</div>
          </template>
          <van-icon slot="right-icon" name="pause-circle" class="task-icon pause" />
        </van-cell>
        <van-cell clickable>
          <template slot="title">
            <div class="bk-text">Troytu的测试流程模版任务</div>
            <div class="bk-name">Troytu</div>
            <div class="bk-time">2019-03-10 13:49:20 至 2019-03-10 15:01:20</div>
          </template>
          <van-icon slot="right-icon" name="question" class="task-icon question" />
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
  name: 'task-list',
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
  .task-search {
    padding: 15px 25px 0 25px;

    .van-search__content {
      background-color: rgba(142, 142, 147, 0.12);
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;

      .van-cell {
        padding: 6px 10px 6px 0;
      }
    }
  }
</style>
