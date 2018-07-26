<template>
    <div class="hq">
        <!-- 行情头 -->
        <header class="head">
            <span class="post"></span>
            <h3 class="title">行情</h3>
            <div class="hd-zhan">
                <span class="hd-desc">BTC</span>
                <img src="../../../assets/img/svg.png" alt="">
            </div>
            <div class="hd-zhan">
                <span class="hd-desc">BTC</span>
                <img src="../../../assets/img/svg.png" alt="">
            </div>
            <div class="hd-zhan">
                <span class="hd-desc">BTC</span>
                <img src="../../../assets/img/svg.png" alt="">
            </div>
            <div class="hd-right">更多</div>
        </header>
        <!-- 行情展示 -->
        <div class="hq-title">
            <ul>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
                <li>BTC</li>
            </ul>
            <span class="iconfont">&#xe600;</span>
            <span class="iconfont">&#xe601;</span>
        </div>
        <hq-content></hq-content>
    </div>
</template>
<script>
import HqContent from './hq-content'
export default {
  name: 'IndexHq',
  components:{
      HqContent
  }
}
</script>
<style lang="less">
    .hq{
        width: 840px;
        height: 490px;
        box-sizing: border-box;
        background: #ffffff;
        margin-top: 20px;
        padding: 0 28px 12px 30px;
        margin-bottom:11px; 
        position: relative;
        color: #aeaeae;
        .head{
            width: 100%;
            height: 70px;
            border-bottom: 1px solid #eaeef1;
            .post{
                position: absolute;
                left: 0px;
                top: 27px;
                width: 8px;
                height: 17px;
                background: #2076ff;
            }
            .title{
                float: left;
                font: 18px/70px "微软雅黑";
                float: left;
                color: #585858;
            }
            .hd-zhan{
                width: 140px;
                height: 34px;
                margin-top: 23px;
                margin-left: 35px;
                float: left;
                .hd-desc{
                    padding: 0 15px;
                    font: 12px/34px "微软雅黑";
                    float: left;
                }
                img{
                    float: right;
                }
            }
            .hd-right{
                float: right;
                font:12px/70px "微软雅黑";
            }
        }
        .hq-title{
            width: 100%;
            height: 49px;
            span{
                float: left;
                width: 7px;
                padding: 0 3px;
                font: 16px/49px "微软雅黑";
            }
            ul{
                width: 750px;
                height: 49px;
                float: left;
                li{
                    float: left;
                    padding: 0 13px;
                    font: 14px/49px "微软雅黑";
                }
            }
        }
    }
</style>