<template>
    <div class="register-wrap">
        <div class="register">
            <h1></h1>
            <div class="input">
                <div class="one">
                    <input v-model="iphone" class="text" type="text" placeholder="请输入手机号">
                </div>
                <div class="two">
                     <input v-model="grapcode" class="text" type="text" placeholder="图形验证码">
                     <img ref="img" @click="getgrap" :src="this.http+'pc.php/User/verifyCode/access_token/'+this.token" alt="">
                </div>
                <div class="two">
                     <input v-model="mailcode" class="text" type="text" placeholder="短信验证码">
                     <div @click="getmail" class="eamil">发送验证码</div>
                </div>
                <div class="one">
                    <input v-model="password" class="text" type="password" placeholder="密码（字母加数字6-18位）">
                </div>
                <div class="one">
                    <input v-model="againpass" class="text" type="password" placeholder="再次输入">
                </div>
            </div>
            <div class="xieyi">
                <input type="checkbox" v-model="check" name="" id="">
                <span>已阅读并同意《服务条款》</span>
            </div>
            <div class="btn" @click="register">注册</div>
            <!-- <router-link tag="div" class="btn" to="/login">{{grapcode}}</router-link> -->
            <router-link tag="div" class="btn1" to="/login">已有账号去登录</router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from "vuex";
export default {
    name:'Register',
    data(){
        return{
            iphone:'',
            grapcode:'',
            mailcode:'',
            password:'',
            againpass:'',
            type:0,
            check:false,
        }
    },
    methods: {  
        
        register(){
            var params = new URLSearchParams();
            params.append('phone', this.iphone);
            params.append('sms_code', this.mailcode);
            params.append('password', this.password);
            let url = this.http+'pc.php/User/register/access_token/'+this.token
            axios.post(url, params)
                .then(function (res) {
                    console.log(res.data.info.uid)
                    // this.$router.push({'path':'/'})
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getgrap(){
            this.$refs.img.src = localStorage.grap
        },
        getmail(){
            var params = new URLSearchParams();
            params.append('phone', this.iphone);
            params.append('verify', this.grapcode);
            params.append('type', this.type);
            let url = this.http+'pc.php/User/sendSms/access_token/'+this.token
            axios.post(url, params)
                .then(function (res) {
                    console.log(res.data)
                    // this.$router.push({'path':'/'})
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    mounted () {
        window.localStorage.setItem("grap",this.http+'pc.php/User/verifyCode/access_token/'+this.token);
    },
    computed: {
    ...mapState(["token","http"])
  },
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
     @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .register-wrap {
            margin-top: -140px;
            padding: 20% 0;
            height: 100%;
            .register{
                width: 90%;
                height: 500px;
                padding: 0;
                overflow: hidden;
                h1{
                    width: 90%;
                    margin-top: 20px;
                    margin-bottom: 0;
                    background-size:100% 100%; 
                    background-position: center center;
                }
                .input{
                    height: 278px;
                    .one{
                        height: 55px;
                        background-position: 5%;
                        .text{
                            width: 60%;
                        }
                    }
                    .two{
                        height: 55px;
                        width: 100%;
                        background-position: 5%;
                        .text{
                            width: 40%;
                        }
                        img{
                            width: 36%;
                            margin-top: 15px;
                        }
                        .eamil{
                            width: 36%;
                        }
                    }
                }
            }
             .xieyi{
                 margin-left: 10px;
                input{
                    margin-top: 0px;
                }
            }
            .btn{
                width: 90%;
                margin: 0 auto;
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
