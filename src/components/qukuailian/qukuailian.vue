<template>
    <div>
        <hd-head></hd-head>
        <div class="falsh-wrap">
            <div class="content">
                <div class="left">
                    <qu-data></qu-data>
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
import QuData from '../qukuailian/computed/computed'
export default {
  name: 'HangQing',
  components:{
      HdHead,
      IndexRank,
      IndexHot,
      QuData
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
            height: 2300px;
            .left{
                width: 840px;
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