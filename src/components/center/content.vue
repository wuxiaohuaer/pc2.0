<template>
    <div>
        <hd-head></hd-head>
        <div class="person-wrap">
            <div class="content">
                <div class="left">
                    <center-title></center-title>
                </div>
                <div class="right">
                    <content-con></content-con>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HdHead from '../head/head'
import CenterTitle from '../center/computed/center-title'
import ContentCon from '../center/computed/conright'

export default {
  name: 'PersonCon',
  components:{
      HdHead,
      CenterTitle,
      ContentCon
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
            height: 1320px;
            .left{
                margin-right: 10px;
                float: left;
            }
            .right{
                width: 980px;
                height: 1300px;
                float: right;
                background: #fff;
            }
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .person-wrap .content {
            width: 950px;
        }
        #app .person-wrap  .content .left {
            width: 210px;
        }
        #app .person-wrap  .content .right {
            width: 730px;
            padding:  28px 65px 0 35px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .person-wrap .content {
            width: 740px;
        }
        #app .person-wrap  .content .left {
            width: 180px;
        }
        #app .person-wrap  .content .right {
            width: 550px;
            padding:  28px 10px 0 10px;
        }
    }
</style>