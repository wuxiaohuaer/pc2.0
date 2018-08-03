import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(axios)
var params = new URLSearchParams();
var token = ''
params.append('appid', '18172594CCC290DC');
params.append('appsecret', '05a5e180ad8c411e');
function gettoken(){
  axios.post('http://192.168.0.234/api.php/AccessToken/getToken', params)
  .then(function (res) {
    var arr = res.data.access_token
    token = arr
  })
  .catch(function (error) {
    console.log(error);
  });
  return token
}
gettoken()
export default getdata