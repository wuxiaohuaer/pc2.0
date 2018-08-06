<template>
    <div>
        <hd-head></hd-head>
        <div class="hangqing-wrap">
            <div class="content">
                <div class="left">
                    <hang-qingdata></hang-qingdata>
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
import HangQingdata from '../hangqing/computed/hangqingdata'
export default {
  name: 'HangQing',
  components:{
      HdHead,
      IndexRank,
      IndexHot,
      HangQingdata
  }
}   
</script>
<style lang="less">
    .hangqing-wrap{
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
        #app .hangqing-wrap .content {
            width: 950px;
        }
        #app .hangqing-wrap  .content .left {
            width: 640px;
        }
        #app .hangqing-wrap  .content .right {
            width: 300px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .hangqing-wrap  .content {
            width: 740px;
        }
        #app .hangqing-wrap  .content .left {
            width: 740px;
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .hangqing-wrap  .content {
            width: 100%;
            margin: 0;
        }
        #app .hangqing-wrap  .content .left {
            width: 100%;
        }
    }
</style>