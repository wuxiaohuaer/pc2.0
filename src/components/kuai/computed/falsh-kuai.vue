<template>
    <div>
        <div class="falsh-kuai">
            <div class="falsh-title">
                <h1>{{$t("news_flash")}}</h1>
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
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格</p>
                        <div class="bottom">
                            <p class="sharing">
                                <span class="iconfont">&#xe6e7;</span>
                               {{$t("news_flash")}}
                            </p>
                        </div>
                        <img class="logo" src="../../../assets/img/dian.png">
                    </div>
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格</p>
                        <div class="bottom">
                            <p class="sharing">
                                <span class="iconfont">&#xe6e7;</span>
                                {{$t("news_flash")}}
                            </p>
                        </div>
                        <img class="logo" src="../../../assets/img/dian.png">
                    </div>
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格</p>
                        <div class="bottom">
                            <p class="sharing">
                                <span class="iconfont">&#xe6e7;</span>
                               {{$t("news_flash")}}
                            </p>
                        </div>
                        <img class="logo" src="../../../assets/img/dian.png">
                    </div>
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格</p>
                        <div class="bottom">
                            <p class="sharing">
                                <span class="iconfont">&#xe6e7;</span>
                               {{$t("news_flash")}}
                            </p>
                        </div>
                        <img class="logo" src="../../../assets/img/dian.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FalshKuai',
  components:{
  }
}
</script>
<style  lang="less">
    .falsh-kuai{
        width: 100%;
        background: #fff;
        padding: 0 30px;
        margin-bottom:18px; 
        box-sizing: border-box;
        .falsh-title{
            height: 48px;
            margin-left:-30px; 
            margin-bottom: 16px;
            h1{
                font: 18px/48px "微软雅黑";
                width: 87px;
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
            height: 918px;
            .kuai-left{
                width: 15px;
                height: 100%;
                float: left;
                margin-top: 10px;
                margin-left: 10px;
                border-left: 1px solid #e8e7ec;
            }
            .kuai-right{
                width: 750px;
                height: 400px;
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
</style>