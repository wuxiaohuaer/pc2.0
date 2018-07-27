<template>
    <div>
        <hd-head></hd-head>
        <div class="wrap">
            <div class="content">
                <div class="left">
                    <index-swiper></index-swiper>
                    <IndexHq></IndexHq>
                    <index-news></index-news>
                </div>
                <div class="right">
                    <index-person></index-person>
                    <index-kuai></index-kuai>
                    <index-rank></index-rank>
                    <index-hot></index-hot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HdHead from '../head/head'
import IndexSwiper from '../index/computed/swiper'
import IndexHq from '../index/computed/hq'
import IndexNews from '../index/computed/news'
import IndexPerson from '../index/computed/person'
import IndexKuai from '../index/computed/kuaixun'
import IndexRank from '../index/computed/rank'
import IndexHot from '../index/computed/hot'
export default {
  name: 'Index',
  components:{
      HdHead,
      IndexSwiper,
      IndexHq,
      IndexNews,
      IndexPerson,
      IndexKuai,
      IndexRank,
      IndexHot
  }
}
</script>
<style lang="less">
    .wrap{
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