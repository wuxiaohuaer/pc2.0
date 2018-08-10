import Vue from 'vue'
import axios from 'axios'
gettoken(){
    let that = this
    var params = new URLSearchParams();
    params.append('appid', '18172594CCC290DC');
    params.append('appsecret', '05a5e180ad8c411e');
    axios.post('http://192.168.0.234/pc.php/AccessToken/getToken', params)
    .then(function (res) {
        that.token = res.data.data.access_token
        console.log(that.token);
        
        // window.localStorage.setItem("token",res.data.data.access_token)
        // let token = localStorage.token;
        // if(token != res.data.data.access_token){
        //   window.localStorage.setItem("token",res.data.data.access_token)
        // }
    })
    .catch(function (error) {
        console.log(error);
    });
}
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
              console.log(error)
               reject(error)
            })
    })
}

export default {
  // 获取我的页面的后台数据
  mineBaseMsgApi() {
     alert('进入api.js')
    return fetch('/api/getBoardList');
  }
}
  