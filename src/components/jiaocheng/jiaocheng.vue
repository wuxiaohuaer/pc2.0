<template>
    <div>
        <hd-head></hd-head>
        <div class="jiaocheng-wrap">
            <div class="content">
                <div class="left">
                    <computed></computed>
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
import Computed from './computed/computed'
export default {
  name: 'JiaoCheng',
  components:{
      HdHead,
      IndexRank,
      IndexHot,
      Computed
  }
}   
</script>
<style lang="less">
    .jiaocheng-wrap{
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
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .jiaocheng-wrap .content {
            width: 950px;
        }
        #app .jiaocheng-wrap  .content .left {
            width: 640px;
        }
        #app .jiaocheng-wrap  .content .right {
            width: 300px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .jiaocheng-wrap  .content {
            width: 740px;
        }
        #app .jiaocheng-wrap  .content .left {
            width: 740px;
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .jiaocheng-wrap  .content {
            width: 100%;
            margin: 0;
        }
        #app .jiaocheng-wrap  .content .left {
            width: 100%;
        }
    }
</style>