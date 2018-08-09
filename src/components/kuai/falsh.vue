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
        overflow: hidden;
        padding-top: 12px;
        background: #f4f5f7;
        .content{
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            padding-bottom: 45px;
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
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .falsh-wrap .content {
            width: 950px;
        }
        #app .falsh-wrap  .content .left {
            width: 640px;
        }
        #app .falsh-wrap  .content .right {
            width: 300px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .falsh-wrap  .content {
            width: 740px;
        }
        #app .falsh-wrap  .content .left {
            width: 740px;
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .falsh-wrap  .content {
            width: 100%;
            margin: 0;
        }
        #app .falsh-wrap  .content .left {
            width: 100%;
        }
    }
</style>