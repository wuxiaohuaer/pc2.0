<template>
    <div>
        <div class="xq-commetbox">
            <div class="statment">
                {{$t("statement")}}
            </div>
            <div class="commentbox">
                <div class="box-left">
                    <img src="../../../assets/img/logo3.png" alt="">
                    <span class="des">四大天王</span>
                </div>
                <div class="box-mid">
                    <textarea :placeholder="$t('enter_the_comment_content')"></textarea>
                    <span class="iconfont">&#xe654;</span>
                </div>
                <div class="box-right">{{$t("submit")}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'XqComentbox',
  components:{
  }
}
</script>
<style lang="less">
    .xq-commetbox{
        width: 100%;
        padding: 14px 8px 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #eaeef1;
        .statment{
            height: 52px;
            width: 100%;
            font: 14px/26px "微软雅黑";
            color: #cfcfcf;
            margin-bottom: 47px;
        }
        .commentbox{
            width: 100%;
            height: 130px;
            margin-bottom: 30px;
            .box-left{
                width: 112px;
                height: 130px;
                float: left;
                border-top-left-radius:10px; 
                border-bottom-left-radius:10px;
                background: #f4f5f7;
                img{
                    margin: 27px 0 0 30px;
                    float: left;
                }
                .des{
                    width: 100%;
                    text-align: center;
                    font: 14px/34px "微软雅黑";
                    float: left;
                }
            }
            .box-mid{
                width: 535px;
                height: 130px;
                float: left;
                padding: 15px 20px;
                box-sizing: border-box;
                background: #f4f5f7;
                textarea{
                    width: 100%;
                    height: 66px;
                    background: #f4f5f7;
                }
                span{
                    font: 22px/30px "微软雅黑";
                }
            }
            .box-right{
                width: 94px;
                height: 130px;
                float: left;
                color: #fff;

                text-align: center;
                font:20px/130px "微软雅黑";
                background: #78acff;
                border-top-right-radius:10px; 
                border-bottom-right-radius:10px;
            }
        }
    }
</style>