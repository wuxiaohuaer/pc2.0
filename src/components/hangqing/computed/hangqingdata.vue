<template>
    <div class="hangqing">
        <div class="title">
            <span class="lis">ETC</span>
            <span class="lis">ETC</span>
            <span class="lis">ETC</span>
            <span class="lis">ETC</span>
            <span class="lis">ETC</span>
            <span class="lis">ETC</span>
            <span class="lis">ETC</span>
            <span class="lis">ETC</span>
            <span class="lis">ETC</span>
        </div>
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
    </div>
</template>
<script>
import HqContent from '../../index/computed/hq-content'
export default {
  name: 'HangQingdata',
  components:{
      HqContent
  }
}
</script>
<style  lang="less">
    .hangqing{
        width: 100%;
        height: 980px;
        background: #fff;
        .title{
            width: 100%;
            height: 27px;
            font: 12px/27px "微软雅黑";
            .lis{
                float: left;
                padding: 0 14px;
                color: #b89688;
            }
        }
        .hq-content{
            width:100%;
            height: 358px;
            margin-left: 15px;
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
                        margin: 0px 10px 0 13px;
                    }
                    .name{
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
    }
</style>