<template>
    <div class="extentsion-right">
        <div class="integral">
            <div class="title">{{$t("integral")}}</div>
            <div class="mid">
                <span class="yue color2">{{$t("balance")}}</span>
                <span class="yue-num color1">125156565</span>
                <span class="yue-mb color2">MB</span>
                <span class="dong color2">{{$t("frozen")}}</span>
                <span class="dong-num color1">125156565</span>
                <span class="dong-mb color2">MB</span>
            </div>
            <div class="btn">
                <span class="btn1">{{$t("withdrawals")}}</span>
                <span class="btn2">{{$t("recharge")}}</span>
            </div>
        </div>
        <div class="extend-tab">
            <div class="tab-title">MB{{$t("detailed")}}</div>
            <table class="table">
                <thead class="thead">
                    <tr>
                        <th class="time">{{$t("time")}}</th>
                        <th class="beizhu">{{$t("amount")}}</th>
                        <th class="des">{{$t("detailed")}}</th>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr>
                        <td class="time">2018年7月30日10:36:16</td>
                        <td class="beizhu">王花花</td>
                        <td class="des">哈哈</td>
                    </tr>
                    <tr>
                        <td class="time">2018年7月30日10:36:16</td>
                        <td class="beizhu">王花花</td>
                        <td class="des">哈哈</td>
                    </tr>
                    <tr>
                        <td class="time">2018年7月30日10:36:16</td>
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
  components:{
  }
}
</script>
<style lang="less">
    .extentsion-right{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .integral{
            width: 100%;
            height: 227px;
            margin-bottom: 13px;
            background: #fff;
            padding-top: 7px;
            box-sizing: border-box;
            .title{
                width: 100%;
                height: 72px;
                font: 22px/72px "微软雅黑";
                text-indent: 124px;
                background: url(../../../assets/img/extend-logo.png) no-repeat 75px 15px;
            }
            .mid{
                width: 100%;
                height: 64px;
                background: #feb630;
                font: 18px/64px "微软雅黑";
                .color1{
                    color: #fff;
                }
                .color2{
                    color: #ffefd8;
                }
                .yue{
                    margin-left: 73px;
                    margin-right: 20px;
                }
                .yue-mb{
                    margin-left: 10px;
                    margin-right: 70px;
                }
                .dong-num{
                    margin-left: 20px;
                    margin-right: 10px;
                }
            }
            .btn{
                width: 100%;
                height: 33px;
                margin-top: 23px;
                .btn1{
                    width: 84px;
                    height: 33px;
                    float: right;
                    color: #fff;
                    text-align: center;
                    font:16px/33px "微软雅黑";
                    border-radius: 5px;
                    background: #78acff;
                    margin-right: 70px;
                }
                .btn2{
                    width: 84px;
                    height: 33px;
                    float: right;
                    color: #fff;
                    text-align: center;
                    font:16px/33px "微软雅黑";
                    border-radius: 5px;
                    background: #78acff;
                    margin-right: 40px;
                }
            }
        }
        .extend-tab{
            width: 100%;
            height: 1060px;
            background: #fff;
            .tab-title{
                width: 898px;
                height: 64px;
                margin: 0 26px;
                box-sizing: border-box;
                text-indent: 10px;
                border-bottom: 1px solid #eaeef1;
                font:18px/64px "微软雅黑";
            }
            .table{
                width: 887px;
                border: 1px solid #bebebe;
                margin: 30px 0 0 35px;
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
        #app .person-wrap  .content .extend-right{
            width: 720px;
        }
        #app .person-wrap  .content .tab-title{
            width: 670px;
        }
        #app .person-wrap  .content .table{
            width: 670px;
            margin-left: 30px;
            .beizhu{
                width: 240px;
                height: 56px;
            }
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .person-wrap  .content .extend-right{
            width: 545px;
        }
        #app .person-wrap  .content .tab-title{
            width: 490px;
        }
        #app .person-wrap  .content .extend-tab .table{
            width: 490px;
            margin-left: 30px;
            .beizhu{
                width: 150px;
                height: 56px;
            }
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .extend-right{
            width: 100%;
            .mid{
                font-size: 16px;
                .yue{
                    margin-left: 10px;
                }
            }
        }
        #app .person-wrap  .content .tab-title{
            width: 90%;
            margin-left: 15px;
        }
        #app .person-wrap  .content .table{
            width: 90%;
            margin-left: 15px;
            .beizhu{
                width: 25%;
                height: 56px;
            }
            .des{
                width: 25%;
                height: 56px;
            }
        }
    }
</style>