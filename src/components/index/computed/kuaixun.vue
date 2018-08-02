<template>
    <div>
        <div class="kuai">
            <div class="kuai-title">
                <h1>{{$t("news_flash")}}</h1>
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
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格</p>
                        <img class="logo" src="../../../assets/img/dian.png">
                    </div>
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格</p>
                        <img class="logo" src="../../../assets/img/dian.png">
                    </div>
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖 以4100美元的价格</p>
                        <img class="logo" src="../../../assets/img/dian.png">
                    </div>
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格</p>
                        <img class="logo" src="../../../assets/img/dian.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'IndexKuai',
  components:{
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
                font: 18px/48px "微软雅黑";
                width: 87px;
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
</style>