<template>
    <div>
        <hd-head></hd-head>
        <div class="person-wrap">
            <div class="content">
                <div class="left">
                    <center-title></center-title>
                </div>
                <div class="right">
                    <account-right></account-right>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HdHead from '../head/head'
import CenterTitle from '../center/computed/center-title'
import AccountRight from '../center/computed/accountright'

export default {
  name: 'Extend',
  components:{
      HdHead,
      CenterTitle,
      AccountRight
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
                background: #fff;
                float: right;
            }
        }
    }
</style>