<template>
    <div class="xq-fenxiang">
        <div class="fen-top">
            <div class="fen-left">fjfsfjashfhjasfjkasfskfas</div>
            <div class="fen-right">{{$t("copy_link")}}</div>
        </div>
        <div class="fen-bottom">
            <div class="erweima"></div>
            <div class="mades">{{$t("weChat")}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'XqRight'
}
</script>
<style lang="less">
    .xq-fenxiang{
        width: 100%;
        height: 288px;
        margin-top: 20px;
        .fen-top{
            width: 400px;
            height: 29px;
            margin-left: 175px;
            .fen-left{
                width: 320px;
                height: 29px;
                float: left;
                background: #f4f5f7;
                text-align: center;
                color: #656668;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                font: 16px/29px "微软雅黑";
            }
            .fen-right{
                width: 80px;
                height: 29px;
                float: left;
                text-align: center;
                background: #78acff;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                color: #fff;
                font: 14px/29px "微软雅黑";
            }
        }
        .fen-bottom{
            width: 160px;
            height: 210px;
            margin: 50px 0 0 310px;
            .erweima{
                width: 160px;
                height: 160px;
                background: palevioletred;
            }
            .mades{
                width: 160px;
                height: 50px;
                text-align: center;
                color: #343434;
                font: 16px/50px "微软雅黑";
            }
        }
    }
</style>

