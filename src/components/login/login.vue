<template>
    <div class="login-wrap">
        <div class="login">
            <h1></h1>
            <div class="input">
                <div class="one">
                    <input class="text" type="text" placeholder="请输入手机号">
                </div>
                <div class="one">
                    <input class="text" type="text" placeholder="密码（字母加数字6-18位）">
                </div>
                <div class="remove">忘记密码</div>
            </div>
            <router-link tag="div" class="btn" to="/">登录</router-link>
            <router-link tag="div" class="btn1" to="/register">注册</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'Register'
}
</script>
<style lang="less" scoped>
    .login-wrap{
        width: 100%;
        height: 940px;
        padding-top: 320px;
        background: #f1f1f1;
        .login{
            width: 500px;
            height: 450px;
            margin: 0 auto;
            background: #fff;
            border-radius: 20px;
            padding: 70px 50px 30px 65px;
            box-sizing: border-box;
            h1{
                width: 385px;
                height: 45px;
                background: url(../../assets/img/logobig.png) no-repeat;
                margin-bottom: 30px;
            }
            .input{
                width: 100%;
                height: 150px;
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
                .remove{
                    width: 100%;
                    height: 16px;
                    font: 12px/16px "微软雅黑";
                    text-align: right;
                    color: #2294ff;
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
                width: 108px;
                height: 32px;
                font: 14px/32px "微软雅黑";
                text-align: center;
                background: #2294ff;
                border-radius: 5px;
                margin: 13px 0 0 130px;
                color: #fff;
            }
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .login-wrap {
            margin-top: -140px;
            padding: 100px 0;
            height: 1000px;
            .login{
                width: 70%;
                height: 300px;
                padding: 0;
                overflow: hidden;
                h1{
                    // width: 100%;
                    margin-top: 20px;
                    margin-bottom: 0;
                    background-size:60% 60%; 
                }
                .input{
                    width: 100%;
                    height: 150px;
                    margin-bottom: 15px;
                    .one{
                        background-size: 10% 40%;
                        background-position: 20px;
                        .text{
                            width: 65%;
                            height: 32px;
                            text-indent: 12px;
                            margin: 15px 0 0 52px;
                            font: 12px/32px "微软雅黑";
                            color: #999999;
                            border-bottom: 2px solid #c0c3cc;
                        }
                    }
                    .remove{
                        width: 100%;
                        height: 16px;
                        margin-right: 10px;
                        font: 12px/16px "微软雅黑";
                        text-align: right;
                        color: #2294ff;
                    }
                }
                .btn{
                    width: 30%;
                    height: 24px;
                    margin: 0 auto;
                    font: 14px/24px "微软雅黑";
                }
                .btn1{
                    width: 30%;
                    height: 24px;
                    
                    margin: 0 auto;
                    margin-top: 10px;
                    font: 12px/24px "微软雅黑";
                }
            }
        }
    }
</style>
