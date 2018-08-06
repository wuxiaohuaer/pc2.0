<template>
    <div class="hq-content">
        <div class="hq-con-des">
            <div class="hq-con-name">交易所</div>
            <div class="hq-con-name">最新成交价</div>
            <div class="hq-con-name">24H小时变化</div>
            <div class="hq-con-name">24H小时最高</div>
            <div class="hq-con-name">24H小时最低</div>
            <div class="hq-con-name">24H小时成交量</div>
            <div class="hq-con-name">24H小时趋势</div>
        </div>
        <div class="hq-con-con">
            <div class="hq-con-row">
                <img src="../../../assets/img/logo2.png" alt="">
                <span class="name one">HuaHua</span>
                <span class="name two">￥66664</span>
                <span class="name three">+12.5%</span>
                <span class="name three">￥66664</span>
                <span class="name three">￥66664</span>
                <span class="name two">+12.5%</span>
                <img src="../../../assets/img/svg2.png" alt="">
            </div>
            <div class="hq-con-row">
                <img src="../../../assets/img/logo2.png" alt="">
                <span class="name one">HuaHua</span>
                <span class="name two">￥66664</span>
                <span class="name three">+12.5%</span>
                <span class="name three">￥66664</span>
                <span class="name three">￥66664</span>
                <span class="name two">+12.5%</span>
                <img src="../../../assets/img/svg2.png" alt="">
            </div>
            <div class="hq-con-row">
                <img src="../../../assets/img/logo2.png" alt="">
                <span class="name one">HuaHua</span>
                <span class="name two">￥66664</span>
                <span class="name three">+12.5%</span>
                <span class="name three">￥66664</span>
                <span class="name three">￥66664</span>
                <span class="name two">+12.5%</span>
                <img src="../../../assets/img/svg2.png" alt="">
            </div>
            <div class="hq-con-row">
                <img src="../../../assets/img/logo2.png" alt="">
                <span class="name one">HuaHua</span>
                <span class="name two">￥66664</span>
                <span class="name three">+12.5%</span>
                <span class="name three">￥66664</span>
                <span class="name three">￥66664</span>
                <span class="name two">+12.5%</span>
                <img src="../../../assets/img/svg2.png" alt="">
            </div>
            <div class="hq-con-row">
                <img src="../../../assets/img/logo2.png" alt="">
                <span class="name one">HuaHua</span>
                <span class="name two">￥66664</span>
                <span class="name three">+12.5%</span>
                <span class="name three">￥66664</span>
                <span class="name three">￥66664</span>
                <span class="name two">+12.5%</span>
                <img src="../../../assets/img/svg2.png" alt="">
            </div>
            <div class="hq-con-row">
                <img src="../../../assets/img/logo2.png" alt="">
                <span class="name one">HuaHua</span>
                <span class="name two">￥66664</span>
                <span class="name three">+12.5%</span>
                <span class="name three">￥66664</span>
                <span class="name three">￥66664</span>
                <span class="name two">+12.5%</span>
                <img src="../../../assets/img/svg2.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HqContent',
  components:{
  }
}
</script>
<style lang="less">
    .hq-content{
        width:100%;
        height: 358px;
        color: #aeaeae;
        .hq-con-des{
            width: 100%;
            height: 34px;
            padding-left: 20px;
            margin-bottom:6px;
            box-sizing: border-box; 
            .hq-con-name{
                font: 12px/34px "微软雅黑";
                float: left;
                padding: 0 21px;
            }
        }
        .hq-con-con{
            width: 100%;
            height: 318px;
            .hq-con-row{
                height: 38px;
                img{
                    float: left;
                    margin: 0px 10px 0 13px;
                }
                .name{
                    float: left;
                    font:12px/38px "微软雅黑";
                }
                .one{
                    margin-right: 25px;
                }
                .two{
                    margin-right: 60px;
                }
                .three{
                    margin-right: 70px;
                }
            }
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .hq-con-des {
            width: 640px;
            padding: 0;
            .hq-con-name {
                padding:0 10px;
            }
        }
        #app .hq-con-row{
            width: 640px;
            .one, .two,.three {
                margin-right: 30px;
            }
        }
        
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
         #app .hq-con-des {
            width: 740px;
            padding: 0;
            .hq-con-name {
                padding:0 17px;
            }
        }
        #app .hq-con-row{
            width: 740px;
            .one, .two,.three {
                margin-right: 45px;
            }
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
         #app .hq-con-des {
            width: 100%;
            padding: 0;
            .hq-con-name {
                padding:0 17px;
            }
        }
        #app .hq-con-row{
            width: 100%;
            .one, .two,.three {
                margin-right: 50px;
            }
        }
    }
</style>