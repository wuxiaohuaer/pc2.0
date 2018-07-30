import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/css/iconfont.css'
import './assets/css/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.use(VueQuillEditor)
require('swiper/dist/css/swiper.css')
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
