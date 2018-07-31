<template>
    <div>
        <div class="top-head">
            <div class="top-index">
                <div class="top-left">
                    <span class="iconfont lang">&#xe654;</span>
                    <!-- <select  class="desfont">
                        <option>中文</option>
                        <option>英文</option>
                    </select> -->
                    <select class="lange" @change="handchange($event)">
                        <option class="desfont" v-for="index,value in langu" :value="value" :key="value">{{index}}</option>
                    </select>
                    <!-- <div class="deslange" v-show="onoff" @click="handclick">中文</div>
                    <div class="lange" v-show="!onoff">
                        <div class="desfont">中文</div>
                        <div class="desfont">中文</div>
                        <div class="desfont">中文</div>
                    </div> -->
                    <span class="iconfont xia">&#xe62d;</span>
                </div>
                <div class="top-ipone">
                    <span class="iconfont ipone">&#xe608;</span>
                    <span class="desfont">APP下载</span>
                </div>
                 <div class="top-time">
                    <span>2018.3.29</span>
                    <span>今天</span>
                    <span>星期四</span>
                    <span class="ma-left">15:06</span>
                </div>
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
                en:"英文",
                ru:"俄语",
                ko:"韩语",
                ja:"日语"

          }
      }
  },
  methods:{
      handchange(event){
        let lang = event.target.value
        this.$i18n.locale = lang
        window.localStorage.setItem('language', event.target.value)
        window.localStorage.setItem('lang', this.langu[event.target.value])
      }
  },
  computed:{
      language(){
          let lan = window.localStorage.getItem('lang')
          return lan
      }
  }
}
</script>
<style  lang="less">
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
                .lange{
                    background: transparent;
                    width: 40px;
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
</style>