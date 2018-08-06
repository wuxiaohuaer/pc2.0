<template>
    <div class="market-right">
        <div class="market-top">
            <div class="top-title">{{$t("extension_setting")}}</div>
            <div class="top-con">
                <div class="top-hd" ref="reward">
                    <div class="reward">
                        <span class="des" ref="reward1">{{$t("general_award")}}</span>
                        <input type="number" value="45445">
                    </div>
                    <div class="reward">
                        <span class="des" ref="reward2">{{$t("single_award")}}</span>
                        <input type="number" value="45445">
                    </div>
                    <div class="reward">
                        <span class="des" ref="reward3">{{$t("one_single_award")}}</span>
                        <input type="number" value="45445">
                    </div>
                </div>
                <div class="btn">{{$t("extension_setting")}}</div>
            </div>
        </div>
        <div class="market-bottom">
            <div class="top-title">{{$t("popularize_the_detail")}}</div>
            <div class="num">{{$t("popularizing_reading")}}15151   {{$t("popularizing_reading")}}151</div>
            <table class="table">
                <thead class="thead">
                    <tr>
                        <th class="time">{{$t("phone_number")}}</th>
                        <th class="beizhu">{{$t("reading")}}</th>
                        <th class="des">{{$t("consume")}}MB</th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr>
                        <td class="time">17862920689</td>
                        <td class="beizhu">王花花</td>
                        <td class="des">哈哈</td>
                    </tr>
                    <tr>
                        <td class="time">17862920689</td>
                        <td class="beizhu">王花花</td>
                        <td class="des">哈哈</td>
                    </tr>
                    <tr>
                        <td class="time">17862920689</td>
                        <td class="beizhu">王花花</td>
                        <td class="des">哈哈</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

export default {
  name: 'ExtentsionRight',
  data () { return { locale: 'en' } },
  components:{
  },
   updated() {
      let lang = window.localStorage.getItem('language')
      if (lang === 'ru' || lang === 'en') {
          for (let i = 0; i < this.$refs.reward.children.length; i++) {
              this.$refs.reward1.style.fontSize = '12px'; 
              this.$refs.reward2.style.fontSize = '12px'; 
              this.$refs.reward3.style.fontSize = '12px'; 
          }
      }else if(lang === 'zh'){
        this.$refs.reward1.style.fontSize = '14px';
        this.$refs.reward2.style.fontSize = '14px';
        this.$refs.reward3.style.fontSize = '14px';
      }else{
        this.$refs.reward1.style.fontSize = '14px'; 
        this.$refs.reward2.style.fontSize = '14px'; 
        this.$refs.reward3.style.fontSize = '14px'; 
      }
  },
  mounted (){
      let lang = window.localStorage.getItem('language')
      if (lang === 'ru'|| lang === 'en') {
        // this.$refs.li.children[i].className = 'lii'
        for (let i = 0; i < this.$refs.reward.children.length; i++) {
              this.$refs.reward1.style.fontSize = '12px'; 
              this.$refs.reward2.style.fontSize = '12px'; 
              this.$refs.reward3.style.fontSize = '12px'; 
          }
      }else if(lang === 'zh'){
        this.$refs.reward1.style.fontSize = '14px';
        this.$refs.reward2.style.fontSize = '14px'; 
        this.$refs.reward3.style.fontSize = '14px';
      }else{
        this.$refs.reward1.style.fontSize = '14px'; 
        this.$refs.reward2.style.fontSize = '14px'; 
        this.$refs.reward3.style.fontSize = '14px'; 
      }
  }
}
</script>
<style lang="less">
    .market-right{
        width: 100%;
        height: 100%;
        .market-top{
            width: 100%;
            height: 248px;
            margin-bottom: 14px;
            padding: 0 51px 0 26px;
            box-sizing: border-box;
            background: #fff;
            .top-title{
                font: 18px/65px "微软雅黑";
                width: 100%;
                height: 65px;
                border-bottom: 1px solid #eaedf2;
                text-indent: 10px;
                background: url(../../../assets/img/logo-11.png) no-repeat center right;
            }
            .top-con{
                width: 100%;
                height: 182px;
                padding-top: 43px;
                box-sizing: border-box;
                .top-hd{
                    width: 100%;
                    height: 22px;
                    .reward{
                        height: 22px;
                        float: left;
                        margin-right: 20px;
                        .des{
                            float: left;
                            font: 14px/22px "微软雅黑";
                            margin-right: 10px;
                            margin-left: 18px;
                        }
                        input{
                            width: 65px;
                            float: left;
                            padding-left: 5px;
                            height: 20px;
                            border-radius: 3px;
                            border: 1px solid #c1c3cf;
                        }
                    }
                }
                .btn{
                    width: 80px;
                    height: 32px;
                    float: right;
                    word-wrap: break-word;
                    font: 12px/32px "微软雅黑";
                    text-align: center;
                    color: #fff;
                    margin: 47px 0 0 12px;
                    background: #78acff;
                }
            }
            
        }
        .market-bottom{
            width: 100%;
            height: 1036px;
            background: teal;
            padding: 0 51px 0 26px;
            box-sizing: border-box;
            background: #fff;
            .top-title{
                font: 18px/65px "微软雅黑";
                width: 100%;
                height: 65px;
                border-bottom: 1px solid #eaedf2;
                text-indent: 10px;
                background: url(../../../assets/img/logo-11.png) no-repeat center right;
            }
             .tab-title{
                width: 898px;
                height: 64px;
                margin: 0 26px;
                box-sizing: border-box;
                text-indent: 10px;
                border-bottom: 1px solid #eaeef1;
                font:18px/64px "微软雅黑";
            }
            .num{
                width: 100%;
                height: 56px;
                margin-top: 20px;
                color: #79acff;
                font: 14px/56px "微软雅黑";
            }
            .table{
                width: 887px;
                border: 1px solid #bebebe;
                thead{
                    width: 100%;
                    height: 56px;
                    tr{
                        width: 100%;
                        height: 56px;
                        text-align: center;
                        font: 14px/56px "微软雅黑";
                        th{
                            border: 1px solid #bebebe;
                        }
                        .time{
                            width: 212px;
                            height: 56px;
                        }
                    }
                }
                tbody{
                    width: 100%;
                    height: 137px;
                    tr{
                        width: 100%;
                        height: 45px;
                        text-align: center;
                        color: #c9c9c9;
                        td{
                            border: 1px solid #bebebe;
                        }
                        .time{
                            width: 212px;
                            height: 56px;
                        }
                        .beizhu{
                            width: 354px;
                            height: 56px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .person-wrap  .content .market-bottom .table{
            width: 670px;
            margin-left: 0px;
            .beizhu{
                width: 240px;
                height: 56px;
            }
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .person-wrap  .content  .market-bottom .table{
            width: 490px;
            margin-left: 0px;
            .beizhu{
                width: 150px;
                height: 56px;
            }
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .top-con  .btn{
            margin-top: 20px;
        }
        #app .top-con .reward{
            margin-right: 0;
        }
    }
</style>