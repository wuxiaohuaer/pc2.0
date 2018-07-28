<template>
    <div>
        <div class="hdhead">
            <img class="imgs" src="../../../assets/img/logo.png">
            <ul class="nav">
                <router-link tag="li" class="nav-li" to="/">首页</router-link>
                <router-link tag="li" class="nav-li" to="/falsh">快讯</router-link>
                <router-link tag="li" class="nav-li" to="">区块链</router-link>
                <router-link tag="li" class="nav-li" to="">资本</router-link>
                <router-link tag="li" class="nav-li" to="">教程</router-link>
                <router-link tag="li" class="nav-li" to="">挖矿</router-link>
                <router-link tag="li" class="nav-li" to="">专栏</router-link>
                <router-link tag="li" class="nav-li" to="">行情</router-link>
            </ul>
            <div class="srach">
                <input class="srach-txt" type="text">
                <span class="iconfont">&#xe632;</span>
            </div>
            <router-link tag="div" class="login" to="center">登录</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'BottomHead'
}
</script>
<style  lang="less">
    .hdhead{
        width: 1200px;
        height: 76px;
        margin: 0 auto;
        .imgs{
            margin-right:30px;
            float: left;
        }
        .nav{
            height: 76px;
            float: left;
            margin-right: 156px;
            .nav-li:hover{
                cursor: pointer;
            }
            .nav-li{
                font: 16px/76px "宋体";
                float: left;
                padding: 0 20px;
            }
        }
        .srach{
            height: 28px;
            width: 190px;
            background: #f4f5f7;
            float: left;
            margin-top:25px;
            border-radius: 20px;
            .srach-txt{
                width: 140px;
                margin-left: 10px;
                margin-top: 3px;
                background: #f4f5f7;
                float: left;
            }
            .iconfont{
                float: left;
                margin-top: 4px;
                margin-left: 5px;
            }
        }
        .login:hover{
                cursor: pointer;
            }
        .login{
            width: 76px;
            height: 34px;
            background: #adcdfe;
            text-align: center;
            float: right;
            border-radius: 5px;
            margin-top: 23px;
            font: bold 14px/34px "宋体";
        }
    }
</style>