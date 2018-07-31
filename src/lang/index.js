import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'

Vue.use(VueI18n)

// const messages = {
//   //英文
//   en: {
//     message: {
//       hello: 'hello',
//       about: 'about',
//       welcome: "Welcome"
//     }
//   },
//   //简体中文
//   zhCHS: {
//     message: {
//       hello: '你好',
//       about: '关于',
//       welcome: "欢迎"
//     }
//   },
//   //繁体中文
//   zhCHT: {
//     message: {
//       hello: '妳好',
//       about: '關於',
//       welcome: "歡迎"
//     }
//   }
// }
// const messages = {
//   locale: 'en',  // 语言标识
 
// }
function lang () {
  // 将选择的语言存在localStorage中
    let t = window.localStorage.getItem('language')
    if (t) return t
    // 默认中文
    else return 'zh'
  } 
const language = lang()
  // 自定义 window 的 lang 属性
window.lang = lang()
const i18n = new VueI18n({
  locale: language, // set locale
  messages: {
    'zh': require('./zh'),
    'en': require('./en'),
    'ko': require('./ko'),
    'ru': require('./ru'),
    'ja': require('./ja')
  } // set locale messages
})
export default i18n