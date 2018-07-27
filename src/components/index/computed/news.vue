<template>
    <div>
        <img src="../../../assets/img/img1.png" alt="">
        <div class="index-news">
            <div class="news-one">
                <img src="../../../assets/img/pic1.png" alt="">
                <div class="news-des">
                    <h1>雅虎日本携2000万美金入场，计划开设加密货币交易所</h1>
                    <h3>据当地媒体报道，互联网巨头雅虎（Yahoo!）的日本分部暂定于在2019年4月成立1个加密货币交易所。</h3>
                    <div class="last">
                        <div class="news-left">
                            <span class="iconfont news-logo">&#xe65d;</span>
                            <span class="news-author">金钱豹</span>
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
            <div class="news-one">
                <img src="../../../assets/img/pic1.png" alt="">
                <div class="news-des">
                    <h1>雅虎日本携2000万美金入场，计划开设加密货币交易所</h1>
                    <h3>据当地媒体报道，互联网巨头雅虎（Yahoo!）的日本分部暂定于在2019年4月成立1个加密货币交易所。</h3>
                    <div class="last">
                        <div class="news-left">
                            <span class="iconfont news-logo">&#xe65d;</span>
                            <span class="news-author">金钱豹</span>
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
            <div class="news-one">
                <img src="../../../assets/img/pic1.png" alt="">
                <div class="news-des">
                    <h1>雅虎日本携2000万美金入场，计划开设加密货币交易所</h1>
                    <h3>据当地媒体报道，互联网巨头雅虎（Yahoo!）的日本分部暂定于在2019年4月成立1个加密货币交易所。</h3>
                    <div class="last">
                        <div class="news-left">
                            <span class="iconfont news-logo">&#xe65d;</span>
                            <span class="news-author">金钱豹</span>
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
            <div class="news-one">
                <img src="../../../assets/img/pic1.png" alt="">
                <div class="news-des">
                    <h1>雅虎日本携2000万美金入场，计划开设加密货币交易所</h1>
                    <h3>据当地媒体报道，互联网巨头雅虎（Yahoo!）的日本分部暂定于在2019年4月成立1个加密货币交易所。</h3>
                    <div class="last">
                        <div class="news-left">
                            <span class="iconfont news-logo">&#xe65d;</span>
                            <span class="news-author">金钱豹</span>
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
        </div>
    </div>
</template>
<script>
export default {
  name: 'IndexNews',
  components:{
  }
}
</script>
<style lang="less">
    .index-news{
        width: 840px;
        box-sizing: border-box;
        margin-top:12px; 
        padding: 0 30px;
        background: #fff;
        .news-one{
            width: 100%;
            height: 220px;
            border-bottom: 1px dashed #ecedf1; 
            img{
                margin-top: 30px;
                margin-right: 30px;
                float: left;
            }
            .news-des{
                width: 530px;
                height: 156px;
                float: left;
                margin-top: 35px;
                h1{
                    font: bold 22px/26px "黑体";
                    margin-bottom:10px; 
                }
                h3{
                    font: 18px/22px "微软雅黑";
                    margin-bottom:15px;
                }
                .last{
                    height: 22px;
                    font:14px/22px "微软雅黑";
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
                        .news-logo{
                            margin-right: 10px;
                        }
                    } 
                    .news-right{
                        float: right;
                        .news-logo{
                            margin-right: 10px;
                        }
                        .news-author{
                            margin-right: 50px;
                        }
                    } 
                }
            }
        }
    }
</style>