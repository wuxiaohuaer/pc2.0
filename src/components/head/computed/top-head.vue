<template>
    <div class="top-head">
        <div class="top-index">
            <div class="top-left">
                <span class="iconfont lang">&#xe654;</span>
                <select class="lange" @change="handchange($event)" ref="aaa">
                    <option class="desfont" v-for="(index,value) in langu" :value="value" :key="value">{{index}}</option>
                </select>
                <span class="iconfont xia">&#xe62d;</span>
            </div>
            <div class="top-ipone">
                <span class="iconfont ipone">&#xe608;</span>
                <span class="desfont">APP{{$t("download")}}</span>
            </div>
            <div class="top-time">
                <span>2018-01-18</span>
                <span>今天</span>
                <span>星期四</span>
                <span class="ma-left">15:06</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'TopHead',
  data(){
      return{
          langu:{
            zh:"中文",
            en:"English",
            ru:"русский",
            ko:"한국어",
            ja:"日本語"
          },
      }
  },
  mounted(){
      let lan = window.localStorage.getItem('language')
      if (lan) {
           this.$refs.aaa.value = lan
        }
  },
  methods:{
      handchange(event){
        this.$i18n.locale = event.target.value
        window.localStorage.setItem('language', event.target.value)
        window.localStorage.setItem('lang', this.langu[event.target.value])
      },
  },
  computed:{
  },
}
</script>
<style  lang="less">
    .mobile-tophead{
        width: 100%;
    }
    .top-head{
        width:100%;
        background:#424348;
        .top-index{
            width: 1200px;
            height:30px;
            margin: 0 auto;
            .top-left{
                height: 14px;
                float: left;
                margin-right: 33px;
                margin-left: 5px;
                color: #b9bcc3;
                .desfont{
                    float: left;
                    width: 40px;
                    font-size: 16px;
                    float: left;
                    color: #b9bcc3;
                    text-align: center;
                    font: 14px/30px "微软雅黑";
                }
                .lange{
                    background: transparent;
                    width: 60px;
                    font-size: 16px;
                    float: left;
                    color: #b9bcc3;
                    text-align: center;
                    font: 14px/30px "微软雅黑";
                    -webkit-appearance: none; /*for chrome*/
                }
                .lang{
                    margin-right: 4px;
                    font-size: 14px;
                    font: 12px/30px "微软雅黑";
                    float: left;
                }
                .xia{
                    margin-left: -5px;
                    font-size: 14px;
                    font: 12px/30px "微软雅黑";
                    float: left;
                }
            }
            .top-ipone{
                height: 16px;
                margin-left: 5px;
                float: left;
                color: #b9bcc3;
                .desfont{
                    font-size: 12px;
                    margin-right: 4px;
                    font: 12px/30px "微软雅黑";
                    float: left;
                }
                .ipone{
                    margin-right: 4px;
                    font: 20px/30px "微软雅黑";
                    float: left;
                }
            }
            .top-time{
                height: 14px;
                font: 12px/30px "微软雅黑";
                float: right;
                color: #b9bcc3;
                span{
                    float: left;
                    margin-right:1px; 
                }
                .ma-left{
                    margin-left: 3px;
                }
            }
        }
    }
    @media screen and (max-width: 1210px)and(min-width: 960px) {
        #app .top-index{ 
            width: 950px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .top-index{ 
            width: 750px;
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .top-head{
            position: fixed;
            top: 0px;
            z-index: 999;
        }
        #app .top-index{ 
            width: 100%;
        }
        #app .top-time{
            display: none;
        }
    }
</style>