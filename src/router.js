import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index/index.vue'
import Falsh from './components/kuai/falsh'
import XiangQing from './components/xiangqing/xq'
import PersonCenter from './components/center/personal'
import PersonContent from './components/center/content'
import ConXq from './components/center/con-xq'
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
    },
    {
      path: '/center',
      name: 'PersonCenter',
      component: PersonCenter
    },
    {
      path: '/con',
      name: 'PersonContent',
      component: PersonContent
    },
    {
      path: '/conxq',
      name: 'ConXq',
      component: ConXq
    }
  ]
})
