<template>
    <div>
        <hd-head></hd-head>
        <div class="falsh-wrap">
            <div class="content">
                <div class="left">
                    <falsh-kuai></falsh-kuai>
                </div>
                <div class="right">
                    <index-rank></index-rank>
                    <index-hot></index-hot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HdHead from '../head/head'
import IndexRank from '../index/computed/rank'
import IndexHot from '../index/computed/hot'
import FalshKuai from '../kuai/computed/falsh-kuai'
export default {
  name: 'Falsh',
  components:{
      HdHead,
      IndexRank,
      IndexHot,
      FalshKuai
  }
}
</script>
<style lang="less">
    .falsh-wrap{
        width: 100%;
        height: 100%;
        padding-top: 12px;
        background: #f4f5f7;
        .content{
            width: 1200px;
            margin: 0 auto;
            height: 2500px;
            .left{
                width: 840px;
                height: 100%;
                overflow: hidden;
                margin-right: 10px;
                float: left;
            }
            .right{
                width: 350px;
                float: right;
            }
        }
    }
</style>