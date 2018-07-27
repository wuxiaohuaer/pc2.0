<template>
    <div>
        <div class="xq-main">
            <div class="xq-pic"></div>
            <div class="xq-word">
                <div class="word-one">
                    近日，苹果向美国专利商标网站提交了一份新的专利申请，其标题为“电子设备之间的感应充电”。感应充电是对设备进行无线充电的方法，目前主流的解决方案只有通过无线充电底座给设备充电一种方式。由于旗下产品线较多，苹果正尝试让设备间可以进行无线充电，以摆脱单一的充电形式。
                </div>
                <div class="word-one">
                    近日，苹果向美国专利商标网站提交了一份新的专利申请，其标题为“电子设备之间的感应充电”。感应充电是对设备进行无线充电的方法，目前主流的解决方案只有通过无线充电底座给设备充电一种方式。由于旗下产品线较多，苹果正尝试让设备间可以进行无线充电，以摆脱单一的充电形式。
                </div>
                <div class="word-two">
                    近日决方案只有通过无线充电底座给设备充电一种方式。由于旗下产品线较多，苹果正尝试让设备间可以进行无线充电，以摆脱单一的充电形式。
                </div>
                <div class="word-write">
                    <span class="first">本文来源：金钱报</span>
                    <span class="two">
                        本文作者：<span>金钱报</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'XqMain',
  components:{
  }
}
</script>
<style lang="less">
    .xq-main{
        width: 100%;
        border-bottom: 1px solid #eaeef1;
        .xq-pic{
            height: 280px;
            width: 100%;
            background: url(../../../assets/img/xq1.png) no-repeat 130px 30px;
        }
        .xq-word{
            width: 100%;
            padding: 0 10px;
            box-sizing: border-box;
            .word-one{
                font: 17px/31px "微软雅黑";
                margin-bottom:32px; 
            }
            .word-two{
                font: 17px/31px "微软雅黑";
            }
            .word-write{
                font: 14px/56px "微软雅黑";
                margin-top: 50px;
                .first{
                    margin-right:16px; 
                }
                .two{
                    margin-right: 0px;
                    span{
                        color: #76adff;
                    } 
                }
            }
        }
    }
</style>