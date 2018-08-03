<template>
    <div class="register-wrap">
        <div class="register">
            <h1></h1>
            <div class="input">
                <div class="one">
                    <input class="text" type="text" placeholder="请输入手机号">
                </div>
                <div class="two">
                     <input class="text" type="text" placeholder="图形验证码">
                     <img src="../../assets/img/logobig2.png" alt="">
                </div>
                <div class="two">
                     <input class="text" type="text" placeholder="短信验证码">
                     <div class="eamil">发送验证码</div>
                </div>
                <div class="one">
                    <input class="text" type="text" placeholder="密码（字母加数字6-18位）">
                </div>
                <div class="one">
                    <input class="text" type="text" placeholder="再次输入">
                </div>
            </div>
            <div class="xieyi">
                <input type="checkbox" name="" id="">
                <span>已阅读并同意《服务条款》</span>
            </div>
            <router-link tag="div" class="btn" to="/login">创建</router-link>
            <router-link tag="div" class="btn1" to="/login">已有账号去登录</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'Register'
}
</script>
<style lang="less" scoped>
    .register-wrap{
        width: 100%;
        height: 940px;
        padding-top: 320px;
        background: #f1f1f1;
        .register{
            width: 500px;
            height: 650px;
            margin: 0 auto;
            background: #fff;
            border-radius: 20px;
            padding: 70px 50px 30px 65px;
            box-sizing: border-box;
            h1{
                width: 385px;
                height: 45px;
                background: url(../../assets/img/logobig.png) no-repeat;
                margin-bottom: 15px;
            }
            .input{
                width: 100%;
                height: 335px;
                margin-bottom: 15px;
                .one{
                    width: 100%;
                    height: 67px;
                    background: url(../../assets/img/logobig1.png) no-repeat 4px 15px;
                    .text{
                        width: 333px;
                        height: 32px;
                        text-indent: 12px;
                        margin: 15px 0 0 52px;
                        font: 14px/32px "微软雅黑";
                        color: #999999;
                        border-bottom: 2px solid #c0c3cc;
                    }
                }
                .two{
                    width: 100%;
                    height: 67px;
                    background: url(../../assets/img/logobig1.png) no-repeat 4px 15px;
                    .text{
                        width: 239px;
                        height: 32px;
                        text-indent: 12px;
                        float: left;
                        margin: 15px 0 0 52px;
                        font: 14px/32px "微软雅黑";
                        color: #999999;
                        border-bottom: 2px solid #c0c3cc;
                    }
                    img{
                        float: left;
                        margin-top: 11px;
                        margin-bottom: 0px;
                    }
                    .eamil{
                        width: 94px;
                        height: 38px;
                        float: left;
                        font: 14px/38px "微软雅黑";
                        text-align: center;
                        color: #fff;
                        margin-top: 11px;
                        background: #f1be1c;
                        border-radius: 5px;
                    }
                }
            }
            .xieyi{
                width: 100%;
                height: 27px;
                margin-bottom: 16px;
                input{
                    margin-top: 8px;
                    margin-right: 5px;
                }
            }
            .btn,.btn1:hover{
                cursor: pointer;
            }
            .btn{
                width: 100%;
                height: 38px;
                border-radius: 5px;
                font: 16px/38px "微软雅黑";
                text-align: center;
                background: #f1be1c;
                color: #fff;
            }
            .btn1{
                width: 100%;
                height: 60px;
                font: 14px/60px "微软雅黑";
                text-align: center;
                color: #2294ff;
            }
        }
    }
</style>
