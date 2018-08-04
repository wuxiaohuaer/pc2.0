<template>
    <div class="person-conright">
        <router-link to="/conxq" tag="div" class="con-lis">
            <div class="lis-left">
                <div class="title">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="des">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="btn">{{$t("recommend_this_article")}}</div>
            </div>
            <img src="../../../assets/img/pic11.png" alt="">
        </router-link>
        <router-link to="/conxq" tag="div" class="con-lis">
            <div class="lis-left">
                <div class="title">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="des">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="btn">{{$t("recommend_this_article")}}</div>
            </div>
            <img src="../../../assets/img/pic11.png" alt="">
        </router-link>
        <router-link to="/conxq" tag="div" class="con-lis">
            <div class="lis-left">
                <div class="title">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="des">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="btn">{{$t("recommend_this_article")}}</div>
            </div>
            <img src="../../../assets/img/pic11.png" alt="">
        </router-link>
        <router-link to="/conxq" tag="div" class="con-lis">
            <div class="lis-left">
                <div class="title">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="des">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="btn">{{$t("recommend_this_article")}}</div>
            </div>
            <img src="../../../assets/img/pic11.png" alt="">
        </router-link>
        <router-link to="/conxq" tag="div" class="con-lis">
            <div class="lis-left">
                <div class="title">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="des">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="btn">{{$t("recommend_this_article")}}</div>
            </div>
            <img src="../../../assets/img/pic11.png" alt="">
        </router-link>
        <router-link to="/conxq" tag="div" class="con-lis">
            <div class="lis-left">
                <div class="title">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="des">什么是区块链真相？这个视频可能比李笑来的音频更震撼</div>
                <div class="btn">{{$t("recommend_this_article")}}</div>
            </div>
            <img src="../../../assets/img/pic11.png" alt="">
        </router-link>
    </div>
</template>
<script>

export default {
  name: 'ContentCon',
  components:{
  }
}
</script>
<style lang="less">
    .person-conright{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .con-lis:hover{
                cursor: pointer;
            }
        .con-lis{
            width: 100%;
            height: 135px;
            margin-bottom: 24px;
            border-bottom: 1px dashed #e9edf0;
            .lis-left{
                width: 570px;
                height: 100%;
                float: left;
                .title{
                    width: 100%;
                    height: 32px;
                    font: 20px/32px "黑体";
                }
                .des{
                    width: 100%;
                    height: 26px;
                    margin-bottom: 18px;    
                    font: 14px/26px "微软雅黑";
                    color: #727679;
                }
                .btn{
                    width: 108px;
                    height: 30px;
                    background: #78acff;
                    border-radius: 5px;
                    text-align: center;
                    color: #fff;
                    font: 14px/30px "微软雅黑";
                }
            }
            img{
                float: right;
                margin-top: 6px;
            }
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .person-wrap  .content .lis-left{
            width: 450px;
            .title{
                font-size: 18px;
            }
        }
        // #app .person-wrap  .content .market-bottom .reward{
        //     display: block;
        // }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .person-wrap  .content  .lis-left{
            width: 365px;
            .title{
                font-size: 14px;
            }
            .des{
                font-size: 12px;
            }
        }
        
    }
</style>