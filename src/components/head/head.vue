<template>
    <div>
        <top-head></top-head>
        <bottom-head></bottom-head>
        <ul class="nav-mobil" ref="li" >
            <router-link tag="li" class="nav-li" to="/">{{$t("home")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/falsh">{{$t("news_flash")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/qukuailian">{{$t("block_chain")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/ziben">{{$t("capital")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/jiaocheng">{{$t("course")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/wakuang">{{$t("mining")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/zhuanlan">{{$t("special_column")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/hangqing">{{$t("quotation")}}</router-link>
        </ul>
        <div class="login-mobil">
            <router-link class="left" to="/">首页</router-link>
            <router-link class="right" to="/login">账户</router-link>
        </div>
    </div>
</template>
<script>
import TopHead from './computed/top-head'
import BottomHead from './computed/bottom-head'
export default {
  name: 'HdHead',
  components:{
      TopHead,
      BottomHead
  }
}
</script>
<style lang="less">
    .nav-mobil{
        height: 24px;
        display: none;
        float: left;
        .nav-li:hover{
            cursor: pointer;
        }
        .nav-li{
            box-sizing: border-box;
            text-align: center;
            word-wrap:break-word;
            font: 14px/24px "宋体";
            float: left;
            padding: 0 10px;
        }
    }
    .login-mobil{
        height: 45px;
        width: 100%;
        background: teal;
        display: none;
    }
    @media screen and (max-width: 740px) and (min-width: 320px){
        .nav-mobil{
            width: 100%;
            height: 35px;
            position: fixed;
            top: 103px;
            z-index: 999;
            background: #fff;
            font: 12px/35px "微软雅黑";
            border-top: 1px solid #eaeef1;
            display: block;
            overflow: auto;
            .nav-li{
                height: 35px;
                box-sizing: border-box;
                text-align: center;
                word-wrap:break-word;
                font: 14px/35px "宋体";
                padding: 0 2%;
            }
        }
        .login-mobil{
            display: block;
            position: fixed;
            bottom: 0;
            z-index: 999;
            .left{
                float: left;
                height: 45px;
                width: 50%;
                text-align: center;
                font: 14px/45px "微软雅黑";
            }
            .right{
                float: left;
                height: 45px;
                width: 50%;
                text-align: center;
                font: 14px/45px "微软雅黑";
            }
        }
    }
</style>