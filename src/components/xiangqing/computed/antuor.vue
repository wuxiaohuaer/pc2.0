<template>
    <div>
        <div class="xq-antuor">
            <p class="border"></p>
            <div>
                <img class="antuor-logo" src="../../../assets/img/logo5.png" alt="">
                <div class="antuor-des">
                    <p class="des-title">金钱报</p>
                    <p class="des-des">{{$t("article_num")}}：54564564</p>
                    <p class="des-des">{{$t("article_views")}}：656545</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'XqAntuor',
  components:{
  }
}
</script>
<style lang="less">
    .xq-antuor{
        width: 100%;
        height: 150px;
        margin-bottom: 18px;
        background: #fff;
        .border{
            width: 100%;
            height: 24px;
            border-left: 10px solid #2377fe;
        }
        div{
            height: 123px;
            width: 100%;
            .antuor-logo{
                margin: 0px 0 0 24px;
                float: left;
                margin-right: 20px;
            }
            .antuor-des{
                width: 195px;
                height: 123px;
                float: left;
                .des-title{
                    font:bold 20px/34px "微软雅黑";
                }
                .des-des{
                    font:16px/28px "微软雅黑";
                    color: #c0c0c2;
                }
            }
        }
        
    }
</style>