<template>
    <div class="falsh-kuai">
        <div class="falsh-title">
            <h1 ref="h1">{{$t("news_flash")}}</h1>
            <span class="sanjiao"></span>
            <div class="time">
                <span class="week">星期日</span>
                <span class="month">7月27日</span>
                <span class="today">今天 ·</span>
            </div>
        </div>
        <div class="kuai-con">
            <div class="kuai-left"></div>
            <div class="kuai-right">
                <div class="lis1" v-for="(index,value) in this.lists" :key="value">
                    <p class="time">{{index.date}} {{index.time}}</p>
                    <p class="des">{{index.content}}</p>
                    <div class="bottom">
                        <p class="sharing">
                            <span class="iconfont">&#xe6e7;</span>
                            {{$t("share ")}}
                        </p>
                    </div>
                    <img class="logo" src="../../../assets/img/dian.png">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'FalshKuai',
  components:{
  },
  data(){
      return{
        lists:[]
      }
  },
    methods: {
        getdata1() {
            let url = this.http+'/api.php/NewsFlash/lists/p/1/cid/46/access_token/'+this.token
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
    mounted () {
        let lang = window.localStorage.getItem('language')
        if (lang === 'en') {
            this.$refs.h1.style.font = '14px/24px "微软雅黑"'
        }else{
             this.$refs.h1.style.font = '16px/48px "微软雅黑"'
        }
        this.getdata1()
    },
    updated() {
        let lang = window.localStorage.getItem('language')
        if (lang === 'en') {
             this.$refs.h1.style.font = '14px/24px "微软雅黑"'
        }else{
            this.$refs.h1.style.font = '16px/48px "微软雅黑"'
        }
    }
}
</script>
<style  lang="less">
    .falsh-kuai{
        width: 100%;
        height: 100%;
        background: #fff;
        padding: 0 30px;
        margin-bottom:18px; 
        box-sizing: border-box;
        .falsh-title{
            height: 48px;
            margin-left:-30px; 
            margin-bottom: 16px;
            h1{
                width: 90px;
                font: 18px/48px "微软雅黑";
                float: left;
                text-align: center;
                color: #fff;
                float: left;
                background: #2076ff;
            }
            .sanjiao{
                width: 72px;
                height: 48px;
                float: left;
                background: url(../../../assets/img/sanjiao.png) no-repeat;
            }
            .time{
                width: 645px;
                height: 48px;
                text-align: center;
                float: right;
                text-align: right;
                text-align: center;
                font: 15px/49px "微软雅黑";
                border-bottom: 1px dashed #eaeef1;
                .today{
                    float: left;
                    color: #2177fe;
                    float: right;
                }
                .month{
                    color: #31393c;
                    float: right;
                    margin-left: 5px;
                }
                .week{
                    color: #31393c;
                    float: right;
                    margin-left: 5px;
                }
            }
        }
        .kuai-con{
            overflow: hidden;
            .kuai-left{
                width: 15px;
                float: left;
                margin-top: 10px;
                margin-left: 10px;
                border-left: 1px solid #e8e7ec;
            }
            .kuai-right{
                width: 750px;
                float: left;
                .lis1{
                    margin-bottom:18px; 
                    position: relative;
                    font: 14px/20px "微软雅黑";
                    .time{
                        color: #c9c9c9;
                        font: 14px/24px "微软雅黑";
                    }
                    .des{
                        color: #5b5c60;
                        font: 14px/24px "微软雅黑";
                    }
                    .bottom{
                        height: 50px;
                        border-bottom: 1px dashed #eaeef1;
                        .sharing{
                            text-align: right;
                            color: #5b5c60;
                            font: 14px/26px "微软雅黑";
                        }
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
    @media screen and (max-width: 1210px) {
        #app .falsh-kuai .time{
            width: 450px;
        }
        #app .falsh-kuai .kuai-con .kuai-right{
            width: 550px;
        }
    }
     @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .falsh-kuai .time{
            width: 450px;
        }
        #app .falsh-kuai .kuai-con .kuai-right{
            width: 650px;
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {

        #app .falsh-kuai .falsh-title .time{
            width: 50%;
            font-size: 14px;
        }
        #app .falsh-kuai .kuai-con .kuai-right{
            width: 90%;
            .lis1{
                width: 100%;
            }
        }
        .falsh-kuai{
            .falsh-title{
                h1{
                    width: 20%;
                    font: 12px/48px "微软雅黑";
                }
            }
        }
    }
</style>