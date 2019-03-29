import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import ProcessList from '@/view/process-list'
import TaskList from '@/view/task-list'
import TaskSetting from '@/view/task-setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/process-list',
      name: 'process-list',
      component: ProcessList
    },
    {
      path: '/task-list',
      name: 'task-list',
      component: TaskList
    },
    {
      path: '/task-setting',
      name: 'task-setting',
      component: TaskSetting
    }
  ]
})
