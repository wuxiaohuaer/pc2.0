<template>
    <div>
        <div class="xq-title">
            <div class="h1">雅虎日本携2000万美金入场，计划开设加密货币交易所</div>
            <div class="last">
                <div class="news-left">
                    <span class="news-time">4小时前</span>
                </div>
                <div class="news-mid">
                    <span class="iconfont news-logo">&#xe664;</span>
                    <span class="news-author">交易所</span>
                </div>
                <div class="news-right">
                    <span class="iconfont news-logo">&#xe6e7;</span>
                    <span class="news-author">48664</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'XqTitle',
  components:{
  }
}
</script>
<style lang="less">
    .xq-title{
        width: 100%;
        height: 105px;
        margin-top: 13px;
        border-bottom: 1px solid #eaeef1;
        .h1{
            height: 54px;
            font: 28px/54px "微软雅黑";
            text-indent: 8px;
        }
        .last{
            height: 40px;
            font:14px/40px "微软雅黑";
            padding-left:4px;
            .news-left{
                float: left;
                .news-logo{
                    margin-right: 10px;
                }
                .news-author{
                    margin-right: 20px;
                }
                .news-time{
                    margin-right: 30px;
                }   
            } 
            .news-mid{
                float: left;
                margin-right:20px; 
                .news-logo{
                    margin-right: 10px;
                }
            } 
            .news-right{
                float: left;
                .news-logo{
                    margin-right: 10px;
                }
                .news-author{
                    margin-right: 50px;
                }
            } 
        }
    }
</style>