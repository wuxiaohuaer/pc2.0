<template>
    <div>
        <div class="xq-com">
            <div class="comment-one">
                <div class="xq-comleft">
                    <img src="../../../assets/img/pic4.png" alt="">
                </div>
                <div class="xq-comright">
                    <div class="comright-one">
                        <p class="one-top">
                            <span class="write">典韦</span>
                            <span>2018-07-27</span>
                            <span>17:03</span>
                        </p>
                        <p class="des">
                            身体里沉睡的野兽爆发了
                        </p>
                        <p class="reply">
                            <span class="iconfont">&#xe6e7;</span>
                            回复
                        </p>
                    </div>
                    <div class="comright-one no-border">
                        <p class="one-top">
                            <span>孙尚香 @</span>
                            <span class="write">典韦</span>
                            <span>2018-07-27</span>
                            <span>17:03</span>
                        </p>
                        <p class="des">
                            大小姐驾到统统闪开
                        </p>
                        <p class="reply">
                            <span class="iconfont">&#xe6e7;</span>
                            回复
                        </p>
                    </div>
                    <div class="comright-one no-border">
                        <p class="one-top">
                            <span>黄忠 @</span>
                            <span class="write">孙尚香</span>
                            <span>2018-07-27</span>
                            <span>17:03</span>
                        </p>
                        <p class="des">
                            老兵不死，只会逐渐凋零
                        </p>
                        <p class="reply">
                            <span class="iconfont">&#xe6e7;</span>
                            回复
                        </p>
                    </div>
                </div>
            </div>
            <div class="comment-one">
                <div class="xq-comleft">
                    <img src="../../../assets/img/pic4.png" alt="">
                </div>
                <div class="xq-comright">
                    <div class="comright-one">
                        <p class="one-top">
                            <span class="write">典韦</span>
                            <span>2018-07-27</span>
                            <span>17:03</span>
                        </p>
                        <p class="des">
                            身体里沉睡的野兽爆发了
                        </p>
                        <p class="reply">
                            <span class="iconfont">&#xe6e7;</span>
                            回复
                        </p>
                    </div>
                    <div class="comright-one no-border">
                        <p class="one-top">
                            <span>孙尚香 @</span>
                            <span class="write">典韦</span>
                            <span>2018-07-27</span>
                            <span>17:03</span>
                        </p>
                        <p class="des">
                            大小姐驾到统统闪开
                        </p>
                        <p class="reply">
                            <span class="iconfont">&#xe6e7;</span>
                            回复
                        </p>
                    </div>
                    <div class="comright-one no-border">
                        <p class="one-top">
                            <span>黄忠 @</span>
                            <span class="write">孙尚香</span>
                            <span>2018-07-27</span>
                            <span>17:03</span>
                        </p>
                        <p class="des">
                            老兵不死，只会逐渐凋零
                        </p>
                        <p class="reply">
                            <span class="iconfont">&#xe6e7;</span>
                            回复
                        </p>
                    </div>
                </div>
            </div>
            <div class="comment-one">
                <div class="xq-comleft">
                    <img src="../../../assets/img/pic4.png" alt="">
                </div>
                <div class="xq-comright">
                    <div class="comright-one">
                        <p class="one-top">
                            <span class="write">典韦</span>
                            <span>2018-07-27</span>
                            <span>17:03</span>
                        </p>
                        <p class="des">
                            身体里沉睡的野兽爆发了
                        </p>
                        <p class="reply">
                            <span class="iconfont">&#xe6e7;</span>
                            回复
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'XqComent',
  components:{
  }
}
</script>
<style lang="less">
    .no-border{
        border: none;
    }
    .xq-com{
        width: 100%;
        .comment-one{
            height: 310px;
            width: 100%;
            border-bottom: 1px solid #eaeef1;
            .xq-comleft{
                width: 102px;
                height: 310px;
                float: left;
                img{
                    margin: 15px 0 0 21px;
                }
            }
            .xq-comright{
                width: 655px;
                height: 290px;
                padding-left: 10px;
                box-sizing: border-box;
                padding-top: 20px;
                float: left;
                .comright-one{
                    width: 100%;
                    height: 90px;
                    .one-top{
                        font: 14px/26px "微软雅黑";
                        color: #bfc0c2;
                        span{
                            margin-right: 5px;
                        }
                        .write{
                            color: #8aa5c3;
                            margin-right: 20px;
                        }
                    }
                    .des{
                        font: 16px/28px "微软雅黑";
                    }
                    .reply{
                        font:14px/26px "微软雅黑";
                        .iconfont{
                            margin-right: 12px;
                        }
                    }
                }
            }
        }
    }
</style>