import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index/index.vue'
import Falsh from './components/kuai/falsh'
import XiangQing from './components/xiangqing/xq'
import PersonCenter from './components/center/personal'
import PersonContent from './components/center/content'
import ConXq from './components/center/con-xq'
import Extend from './components/center/extend'
import Account from './components/center/account'
import Market from './components/center/market'
import HangQingdata from './components/hangqing/hangqing.vue'
import QukuaiLian from './components/qukuailian/qukuailian.vue'
import JiaoCheng from './components/jiaocheng/jiaocheng'
import WaKuang from './components/wakuang/wakuang'
import ZiBen from './components/ziben/ziben'
import ZhuanLan from './components/zhuanlan/zhuanlan'
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
    },
    {
      path: '/extend',
      name: 'Extend',
      component: Extend
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/hangqing',
      name: 'HangQingdata',
      component: HangQingdata
    },
    {
      path: '/qukuailian',
      name: ' QukuaiLian',
      component: QukuaiLian
    },
    {
      path: '/jiaocheng',
      name: ' JiaoCheng',
      component: JiaoCheng
    },
    {
      path: '/wakuang',
      name: 'WaKuang',
      component: WaKuang
    },
    {
      path: '/ziben',
      name: 'ZiBen',
      component: ZiBen
    },
    {
      path: '/zhuanlan',
      name: 'ZhuanLan',
      component: ZhuanLan
    }
  ]
})
