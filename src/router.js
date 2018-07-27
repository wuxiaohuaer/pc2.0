import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index/index.vue'
import Falsh from './components/kuai/falsh'
import XiangQing from './components/xiangqing/xq'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/falsh',
      name: 'Falsh',
      component: Falsh
    },
    {
      path: '/xq',
      name: 'XiangQing',
      component: XiangQing
    }
  ]
})
