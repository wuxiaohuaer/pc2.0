import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
var params = new URLSearchParams();
params.append('appid', '18172594CCC290DC');
params.append('appsecret', '05a5e180ad8c411e');
axios.post('http://192.168.0.234/pc.php/AccessToken/getToken', params)
  .then(function (res) {
    window.localStorage.setItem("token",res.data.data.access_token)
    let token = localStorage.token;
    if(token != res.data.data.access_token){
      window.localStorage.setItem("token",res.data.data.access_token)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
export default new Vuex.Store({
  state: {
    token: localStorage.token,
    http:'http://192.168.0.234/',
    innerwidth:document.documentElement.clientWidth
  },
  mutations: {

  },
  actions: {

  }
})
