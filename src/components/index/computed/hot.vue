<template>
    <div>
        <div class="hot">
            <div class="hot-title">
                <h1>实时热门</h1>
                <span class="iconfont">&#xe6e7;</span>
            </div>
            <div class="hot-con">
                <div class="hot-lis">
                    <img src="../../../assets/img/hot1.png" alt="">
                    <div class="hot-des">
                        <div class="title">爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖</div>
                        <div class="time">2018年7月27日 11时30分</div>
                    </div>
                </div>
                <div class="hot-lis">
                    <img src="../../../assets/img/hot1.png" alt="">
                    <div class="hot-des">
                        <div class="title">爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖</div>
                        <div class="time">2018年7月27日 11时30分</div>
                    </div>
                </div>
                <div class="hot-lis">
                    <img src="../../../assets/img/hot1.png" alt="">
                    <div class="hot-des">
                        <div class="title">爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖</div>
                        <div class="time">2018年7月27日 11时30分</div>
                    </div>
                </div>
                <div class="hot-lis">
                    <img src="../../../assets/img/hot1.png" alt="">
                    <div class="hot-des">
                        <div class="title">爱因斯坦字条拍卖 以4100美元的价格爱因斯坦字条拍卖</div>
                        <div class="time">2018年7月27日 11时30分</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'IndexHot',
  components:{
  }
}
</script>
<style lang="less">
    .hot{
        width: 100%;
        background: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        margin-bottom:10px; 
        .hot-title{
            height: 48px;
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
        .hot-con{
            height: 431px;
            width: 100%;
            .hot-lis{
                height: 93px;
                box-sizing: border-box;
                margin: 20px 12px 0px 4px;
                // padding: 20px 12px 20px 4px;
                border-bottom: 1px dashed #eaeef1; 
                img{
                    float: left;
                    margin-right: 16px;
                }
                .hot-des{
                    float: left;
                    width: 187px;
                    height: 74px;
                    .title{
                        margin-top: 3px;
                        margin-bottom: 10px;
                        font: 14px/18px "微软雅黑";
                        color: #5c5d61;
                    }
                    .time{
                        font: 12px/24px "微软雅黑";
                        color: #989898;
                    }
                }
            }
        }
    }
</style>