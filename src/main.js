// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button,
  Search,
  Cell,
  CellGroup,
  Icon,
  Tag,
  Tabbar,
  TabbarItem,
  Field,
  List
} from 'vant'
Vue.use(Button)
  .use(Search)
  .use(Cell)
  .use(CellGroup)
  .use(Icon)
  .use(Tag)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Field)
  .use(List)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
