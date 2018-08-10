<template>
    <div>
        <div class="xq-antuor">
            <p class="border"></p>
            <div>
                <img class="antuor-logo" :src="http+info.img" alt="">
                <div class="antuor-des">
                    
                    <p class="des-title">{{info.username}}</p>
                    <p class="des-des">{{$t("article_num")}}：{{info.article_counts}}</p>
                    <p class="des-des">{{$t("article_views")}}：{{info.browse}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import Bus from '../../../api/bus.js'
import {mapState} from 'vuex'
export default {
  name: 'XqAntuor',
  components:{
  },
  data(){
      return {
          uid:12,
          info:{}
      }
  },
  methods: {
      getdata1() {
            this.num++
            let url = this.http+'pc.php/SpecialColumn/info/uid/'+this.uid+'/access_token/'+this.token
            fetch(url)
                .then(e => e.json())
                .then(e => {
                    this.info = e.data.info;
                    
                    // this.lists = e.data.lists
                });
            },
  },
  mounted () {
      this.uid = localStorage.uid?localStorage.uid:this.uid
      this.getdata1() 
  },
  computed:{
    ...mapState(["token","http"]),
  }
}
</script>
<style lang="less">
    .xq-antuor{
        width: 100%;
        height: 150px;
        margin-bottom: 18px;
        background: #fff;
        .border{
            width: 100%;
            height: 24px;
            border-left: 10px solid #2377fe;
        }
        div{
            height: 123px;
            width: 100%;
            .antuor-logo{
                width: 100px;
                height: 100px;
                margin: 0px 0 0 24px;
                float: left;
                margin-right: 20px;
            }
            .antuor-des{
                width: 195px;
                height: 123px;
                float: left;
                .des-title{
                    font:bold 20px/34px "微软雅黑";
                }
                .des-des{
                    font:16px/28px "微软雅黑";
                    color: #c0c0c2;
                }
            }
        }
        
    }
</style>