<template>
    <div>
        <hd-head></hd-head>
        <div class="ziben-wrap">
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
  name: 'HangQing',
  components:{
      HdHead,
      IndexRank,
      IndexHot,
      Computed
  }
}   
</script>
<style lang="less">
    .ziben-wrap{
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
        #app .ziben-wrap .content {
            width: 950px;
        }
        #app .ziben-wrap  .content .left {
            width: 640px;
        }
        #app .ziben-wrap  .content .right {
            width: 300px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .ziben-wrap  .content {
            width: 740px;
        }
        #app .ziben-wrap  .content .left {
            width: 740px;
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .ziben-wrap  .content {
            width: 100%;
            margin: 0;
        }
        #app .ziben-wrap  .content .left {
            width: 100%;
        }
    }
</style>