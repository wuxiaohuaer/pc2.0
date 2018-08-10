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
import i18n from './lang/index' 
import axios from 'axios'
import VueI18n from 'vue-i18n'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import { Validator } from 'vee-validate';
import VeeValidate from 'vee-validate';
Vue.prototype.bus= new Vue()
Validator.addLocale(zh_CN);
Vue.use(VeeValidate, {
  locale: 'zh_CN',
 });

Vue.use(VueI18n)
Vue.prototype.$http=axios
Vue.use(VueQuillEditor)
require('swiper/dist/css/swiper.css')
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  i18n: i18n,
  render: h => h(App)
}).$mount('#app')
