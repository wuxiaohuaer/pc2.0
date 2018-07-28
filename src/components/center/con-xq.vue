<template>
    <div>
        <hd-head></hd-head>
        <div class="person-wrap">
            <div class="content">
                <div class="left">
                    <center-title></center-title>
                </div>
                <div class="right">
                    <xq-title></xq-title>
                    <xq-main></xq-main>
                    <xq-right></xq-right>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HdHead from '../head/head'
import CenterTitle from '../center/computed/center-title'
import XqTitle from '../xiangqing/computed/title'
import XqMain from '../xiangqing/computed/main'
import XqRight from '../center/computed/con-xqright'
export default {
  name: 'ConXq',
  components:{
      HdHead,
      CenterTitle,
      XqMain,
      XqTitle,
      XqRight
  }
}
</script>
<style lang="less">
    .person-wrap{
        width: 100%;
        height: 100%;
        padding-top: 12px;
        background: #f4f5f7;
        .content{
            width: 1200px;
            margin: 0 auto;
            height: 2300px;
            .left{
                margin-right: 10px;
                float: left;
            }
            .right{
                width: 980px;
                height: 1300px;
                float: right;
                padding: 28px 130px 0 70px;
                box-sizing: border-box;
                background: #fff;
            }
        }
    }
</style>