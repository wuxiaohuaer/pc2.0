<template>
    <div class="register-wrap">
        <div class="register">
            <div ref="kuang" v-if="onoff2" class="kuang">{{messages}}</div>
            <h1></h1>
            <div class="input">
                <div class="one">
                    <input class="text" @change="handiphone"  v-model="iphone" name="phone" type="text" placeholder="请输入手机号">
                    <span>{{errorText}}</span>
                </div>
                <div class="two">
                     <input v-model="grapcode" class="text" type="text" placeholder="图形验证码">
                     <img ref="img" @click="getgrap" :src="this.http+'pc.php/User/verifyCode/access_token/'+this.token" alt="">
                </div>
                <div class="two">
                    <input  v-model="mailcode" class="text" name="mail" type="text" placeholder="请输入短信验证码">
                    <span></span>
                    <div @click="getmail" v-if="onoff3" ref="mail" class="eamil">发送验证码</div>
                    <div  v-if="!onoff3" class="sendmail">{{second}}秒后重新发送</div>
                </div>
                <div class="one">
                    <input v-model="password" @change="handpassword" class="text" name="ispassword" type="password" placeholder="6-18位英文字母或数字">
                    <span>{{errorText1}}</span>
                </div>
                <div class="one">
                    <input v-model="againpass" @change="again" class="text" name="againpassword" type="password" placeholder="请输入密码">
                    <span>{{errorText2}}</span>
                </div>
            </div>
            <div v-show="onoff" ref="btn" class="btn" @click="change">确认修改</div>
            <div v-show="!onoff" class="new-btn">确认修改</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from "vuex";
export default {
    name:'ChangePassword',
    data(){
        return{
            iphone:'',
            grapcode:'',
            mailcode:'',
            password:'',
            againpass:'',
            type:1,
            onoff:false,
            onoff2:true,
            onoff3:true,
            errorText:"请输入手机号",
            errorText1:"",
            errorText2:"",
            messages:'',
            second:60
        }
    },
    methods: {
        handiphone(){
            var pwdReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if(this.iphone==""){
                this.errorText = '手机号不能为空'
            }else if(!pwdReg.test(this.iphone)){
                 this.errorText = '请输入正确的手机号'
            }else{
                this.errorText = ''
            }
        },
        handpassword(){
             var pwdReg = /^[A-Za-z0-9_-]{6,18}$/;
            if(this.password==""){
                this.errorText1 = '密码不能为空'
                
            }else if(!pwdReg.test(this.password)){
                 this.errorText1 = '密码为6-18位英文字母或数字'
            }else{
                this.errorText1 = ''
            }
        },
        again(){
            if(this.password!==this.againpass){
                this.errorText2 = '两次密码不一样'
            }else{
                this.errorText2 = ''
            }
        },
        change(){
            var params = new URLSearchParams();
            params.append('phone', this.iphone);
            params.append('code', this.mailcode);
            params.append('password', this.password);
            let url = this.http+'pc.php/User/resetPassword/access_token/'+this.token
            var that = this;
            axios.post(url, params)
                .then(function (res) {   
                    console.log(res);
                    
                    if (res.data.message == 'success') {
                        that.$refs.kuang.style.display = 'block'
                        that.messages = "修改成功！"
                        setTimeout(function(){ 
                            that.$refs.kuang.style.display = 'none'
                            that.$router.push({'path':'/login'})
                        },3000)
                    }else{
                        that.$refs.kuang.style.display = 'block'
                        that.messages = res.data.message
                        setTimeout(function(){ 
                            that.$refs.kuang.style.display = 'none'
                            that.$router.push({'path':'/changepass'})
                        },2000)
                    }
                })
                .catch(function (error) {
                    console.log(error)
                });
        },
        getgrap(){
            this.$refs.img.src = localStorage.grap
        },
        getmail(){
            var that = this;
            var params = new URLSearchParams();
            params.append('phone', this.iphone);
            params.append('verify', this.grapcode);
            params.append('type', this.type);
            let url = this.http+'pc.php/User/sendSms/access_token/'+this.token
            axios.post(url, params)
                .then(function (res) {
                   if (res.data.code == 200) {
                        that.$refs.kuang.style.display = 'block'
                        that.messages = "短信已发送"
                        that.onoff3 = false
                        let timer = setInterval(function(){ 
                            that.second--
                        },1000)
                        if (that.second ==0) {
                            clearInterval(timer)
                        }
                        setTimeout(function(){ 
                            that.$refs.kuang.style.display = 'none'
                        },2000)
                   }else{
                        that.$refs.kuang.style.display = 'block'
                        that.messages = res.data.message
                        setTimeout(function(){ 
                            that.$refs.kuang.style.display = 'none'
                        },2000)
                   }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    mounted () {
        window.localStorage.setItem("grap",this.http+'pc.php/User/verifyCode/access_token/'+this.token);
    },
    computed:{
        ...mapState(["token","http"])
    },
    watch:{
        errorText(curVal){
            if (curVal==''&&this.errorText1==''&&this.errorText2=='') {
                this.onoff = true;
            }
        }
    }
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
            position: relative;
            padding: 70px 50px 30px 65px;
            box-sizing: border-box;
            .kuang{
                width: 40%;
                height: 100px;
                text-align: center;
                display: none;
                font: 16px/100px "微软雅黑";
                background: #fff;
                position: absolute;
                top: 40%;
                left: 30%;
            }
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
                    span{
                        float: left;
                        margin-left: 15%;
                        font: 12px/16px "微软雅黑";
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
                        width: 94px;
                        height: 40px;
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
                        // display: none;
                        margin-top: 11px;
                        background: #f1be1c;
                        border-radius: 5px;
                    }
                    .sendmail{
                        width: 94px;
                        height: 38px;
                        float: left;
                        font: 12px/38px "微软雅黑";
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
                input{
                    margin-top: 8px;
                    margin-right: 5px;
                }
            }
            .btn    {
                cursor: pointer;
            }
            .btn1{
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
            .new-btn{
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
            padding: 15% 0;
            height: 100%;
            .register{
                width: 90%;
                height: 520px;
                padding: 0;
                overflow: hidden;
                .kuang{
                    font: 12px/100px "微软雅黑";
                }
                h1{
                    width: 90%;
                    margin-top: 20px;
                    margin-bottom: 0;
                    background-size:100% 100%; 
                    background-position: center center;
                }
                .input{
                    height: 310px;
                    .one{
                        height: 65px;
                        background-position: 5%;
                        .text{
                            width: 60%;
                            font-size: 12px;
                        }
                    }
                    .two{
                        height: 55px;
                        width: 100%;
                        background-position: 5%;
                        .text{
                            width: 40%;
                            font-size: 12px;
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
                 margin-left: 20px;
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
