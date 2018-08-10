<template>
    <div>
        <div class="kuai">
            <div class="kuai-title">
                <h1 ref="h1">{{$t("news_flash")}}</h1>
                <span class="sanjiao"></span>
                <div class="time">
                    <span class="today">今天 ·</span>
                    <span class="month">7月27日</span>
                    <span class="week">星期日</span>
                </div>
            </div>
            <div class="kuai-con">
                <div class="kuai-left"></div>
                <div class="kuai-right">
                    <div class="lis1" v-for="(index,value) in this.lists" :key="value">
                        <p class="time">{{index.date}} {{index.time}}</p>
                        <p class="des">{{index.title}}</p>
                        <img class="logo" src="../../../assets/img/dian.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'IndexKuai',
  components:{
  },
  data(){
        return{
            lists:[]
        }
    },
    methods: {
        getdata1() {
            let url = this.http+'/pc.php/NewsFlash/lists/limit/5/p/1/cid/46/access_token/'+this.token
            fetch(url)
                .then(e => e.json())
                .then(e => {
                    this.lists = e.data.lists
                });
            } 
    },
    computed: {
        ...mapState(["token","http"])
    },
  updated() {
      let lang = window.localStorage.getItem('language')
      if (lang === 'en') {
        this.$refs.h1.style.fontSize = '14px'
      }else{
          this.$refs.h1.style.fontSize = '18px'
      }
  },
  mounted (){
      let lang = window.localStorage.getItem('language')
      if (lang === 'en') {
        this.$refs.h1.style.fontSize = '14px'
      }else{
          this.$refs.h1.style.fontSize = '18px'
      }
      this.getdata1()
  }
}
</script>
<style  lang="less">
    .kuai{
        height: 470px;
        width: 100%;
        background: #fff;
        padding: 0 15px;
        margin-bottom:18px; 
        box-sizing: border-box;
        .kuai-title{
            height: 48px;
            margin-left:-15px; 
            margin-bottom: 16px;
            // border-bottom: 1px solid #eaeef1;
            h1{
                width: 88px;
                font: 18px/48px "微软雅黑";
                float: left;
                text-align: center;
                color: #fff;
                float: left;
                background: #2076ff;
            }
            .sanjiao{
                width: 39px;
                height: 48px;
                float: left;
                // margin-top: -1px;
                background: url(../../../assets/img/sanjiao.png) no-repeat;
            }
            .time{
                height: 49px;
                text-align: center;
                float: right;
                text-align: center;
                font: 15px/49px "微软雅黑";
                .today{
                    float: left;
                    color: #2177fe;
                }
                .month{
                    color: #31393c;
                    float: left;
                    margin-left: 5px;
                }
                .week{
                    color: #31393c;
                    float: left;
                    margin-left: 5px;
                }
            }
        }
        .kuai-con{
            height: 400px;
            .kuai-left{
                width: 15px;
                height: 370px;
                float: left;
                margin-top: 10px;
                margin-left: 10px;
                border-left: 1px solid #e8e7ec;
            }
            .kuai-right{
                width: 290px;
                height: 400px;
                float: left;
                .lis1{
                    margin-bottom:18px; 
                    position: relative;
                    font: 14px/20px "微软雅黑";
                    .time{
                        color: #c9c9c9;
                    }
                    .des{
                        color: #5b5c60;
                    }
                    img{
                        position: absolute;
                        left: -22px;
                        top: 3px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .kuai .kuai-right {
            width: 230px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 320px) {
        #app .kuai {
            display: none;
        }
    }
</style>