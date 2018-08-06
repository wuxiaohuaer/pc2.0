<template>
    <div>
        <div class="rank">
            <div class="rank-title">
                <h1>{{$t("news_rankings")}}</h1>
                <span class="iconfont">&#xe6e7;</span>
            </div>
            <div class="rank-con">
                <div class="rank-left"></div>
                <div class="rank-right">
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格</p>
                        <span>1</span>
                    </div>
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格</p>
                        <span>2</span>
                    </div>
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖</p>
                        <span>3</span>
                    </div>
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格</p>
                        <span>4</span>
                    </div>
                    <div class="lis1">
                        <p class="time">2012-12-12 20:10</p>
                        <p class="des">爱因斯坦字条拍卖 以4100美元的价格</p>
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'IndexRank',
  components:{
  }
}
</script>
<style lang="less">
    img{
        margin-bottom: 10px;
    }
    .rank{
        height: 470px;
        width: 100%;
        background: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        margin-bottom:10px; 
        .rank-title{
            height: 48px;
            margin-bottom: 18px;
            border-bottom: 1px solid #eaeef1;
            h1{
                font: 18px/48px "微软雅黑";
                float: left;
            }
            span{
                float: right;
                font: 18px/48px "微软雅黑";
            }
        }
         .rank-con{
            height: 400px;
            .rank-left{
                width: 15px;
                height: 370px;
                margin-left: 15px;
                float: left;
                margin-top: 10px;
            }
            .rank-right{
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
                    span{
                        position: absolute;
                        left: -22px;
                        top: 0px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .rank-right {
            width: 230px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 320px) {
        #app .rank {
            display: none;
        }
        #app .rank {
            display: none;
        }
    }
</style>