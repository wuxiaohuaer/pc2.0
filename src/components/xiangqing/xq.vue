<template>
    <div>
        <hd-head></hd-head>
        <div class="xq-wrap">
            <div class="content">
                <div class="left">
                    <xq-title></xq-title>
                    <xq-main></xq-main>
                    <xq-comentbox></xq-comentbox>
                    <xq-coment></xq-coment>
                </div>
                <div class="right">
                    <xq-antuor></xq-antuor>
                    <index-rank></index-rank>
                    <index-hot></index-hot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HdHead from '../head/head'
import XqTitle from '../xiangqing/computed/title'
import XqMain from '../xiangqing/computed/main'
import XqComentbox from '../xiangqing/computed/comment-box'
import XqComent from '../xiangqing/computed/comment'
import XqAntuor from '../xiangqing/computed/antuor'
import IndexRank from '../index/computed/rank'
import IndexHot from '../index/computed/hot'
export default {
  name: 'XiangQing',
  components:{
      HdHead,
      XqTitle,
      XqMain,
      XqComentbox,
      XqComent,
      IndexRank,
      IndexHot,
      XqAntuor

  }
}
</script>
<style lang="less">
    .xq-wrap{
        width: 100%;
        height: 100%;
        padding-top: 12px;
        background: #f4f5f7;
        .content{
            width: 1200px;
            margin: 0 auto;
            height: 2300px;
            .left{
                width: 840px;
                padding: 0 40px;
                box-sizing: border-box;
                margin-right: 10px;
                float: left;
                background: #fff;
            }
            .right{
                width: 350px;
                height: 2300px;
                float: right;
            }
        }
    }
</style>