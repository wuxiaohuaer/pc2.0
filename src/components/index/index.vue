<template>
    <div>
        <hd-head></hd-head>
        <div class="wrap">
            <div class="content">
                <div class="left" ref="left">
                    <index-swiper></index-swiper>
                    <IndexHq></IndexHq>
                    <index-news :tokens="this.token"></index-news>
                </div>
                <div class="right">
                    <index-person></index-person>
                    <index-kuai></index-kuai>
                    <index-rank></index-rank>
                    <index-hot></index-hot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HdHead from '../head/head'
import IndexSwiper from '../index/computed/swiper'
import IndexHq from '../index/computed/hq'
import IndexNews from '../index/computed/news'
import IndexPerson from '../index/computed/person'
import IndexKuai from '../index/computed/kuaixun'
import IndexRank from '../index/computed/rank'
import IndexHot from '../index/computed/hot'
import BtnSwiper from '../index/computed/btnswiper'
import axios from 'axios'
export default {
  name: 'Index',
  data(){
      return {
          token : ''
      }
  },
  components:{
      HdHead,
      IndexSwiper,
      IndexHq,
      IndexNews,
      IndexPerson,
      IndexKuai,
      IndexRank,
      IndexHot,
      BtnSwiper
  },
  methods:{
        gettoken(){
            let that = this
            var params = new URLSearchParams();
            params.append('appid', '18172594CCC290DC');
            params.append('appsecret', '05a5e180ad8c411e');
            axios.post('http://192.168.0.234/pc.php/AccessToken/getToken', params)
            .then(function (res) {
                that.token = res.data.data.access_token
                console.log(that.token);
                
                window.localStorage.setItem("token",res.data.data.access_token)
                let token = localStorage.token;
                if(token != res.data.data.access_token){
                  window.localStorage.setItem("token",res.data.data.access_token)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
  },
  mounted ()  {
      this.gettoken()
  }
}
</script>
<style lang="less">
    .wrap{
        width: 100%;
        padding-top: 12px;
        background: #f4f5f7;
        .content{
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            padding-bottom: 45px;
            .left{
                width: 840px;
                margin-right: 10px;
                float: left;
            }
            .right{
                width: 350px;
                float: right;
            }
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .wrap .content {
            width: 950px;
        }
        #app .wrap  .content .left {
            width: 640px;
        }
        #app .wrap  .content .right {
            width: 300px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .wrap  .content {
            width: 740px;
        }
        #app .wrap  .content .left {
            width: 740px;
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .wrap  .content {
            width: 100%;
            margin: 0;
        }
        #app .wrap  .content .left {
            width: 100%;
        }
    }

</style>