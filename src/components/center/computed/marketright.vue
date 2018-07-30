<template>
    <div class="market-right">
        <div class="market-top">
            <div class="top-title">推广设置</div>
            <div class="top-con">
                <div class="reward">
                    <span class="des">总奖励</span>
                    <input type="number" value="45445">
                </div>
                <div class="reward">
                    <span class="des">单次点击</span>
                    <input type="number" value="45445">
                </div>
                <div class="reward">
                    <span class="des">单次点击上限</span>
                    <input type="number" value="45445">
                </div>
                <div class="btn">提交</div>
            </div>
        </div>
        <div class="market-bottom">
            <div class="top-title">推广明细</div>
            <div class="num">推广阅读：15151    总发放：1212MB</div>
            <table class="table">
                <thead class="thead">
                    <tr>
                        <th class="time">手机号</th>
                        <th class="beizhu">阅读数</th>
                        <th class="des">消耗MB数</th>
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
  components:{
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
                .reward{
                    height: 22px;
                    float: left;
                    margin-right: 90px;
                    .des{
                        float: left;
                        font: 14px/22px "微软雅黑";
                        margin-right: 10px;
                        margin-left: 18px;
                    }
                    input{
                        width: 95px;
                        float: left;
                        padding-left: 5px;
                        height: 20px;
                        border-radius: 3px;
                        border: 1px solid #c1c3cf;
                    }
                }
                .btn{
                    width: 80px;
                    height: 32px;
                    float: left;
                    font: 14px/32px "微软雅黑";
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
</style>