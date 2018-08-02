<template>
    <div>
        <div class="hdhead">
            <router-link to="/">
                <img class="imgs" src="../../../assets/img/logo.png">
            </router-link>
            <ul class="nav">
                <router-link tag="li" class="nav-li" to="/">{{$t("home")}}</router-link>
                <router-link tag="li" class="nav-li" to="/falsh">{{$t("news_flash")}}</router-link>
                <router-link tag="li" class="nav-li" to="/qukuailian">{{$t("block_chain")}}</router-link>
                <router-link tag="li" class="nav-li" to="/ziben">{{$t("capital")}}</router-link>
                <router-link tag="li" class="nav-li" to="/jiaocheng">{{$t("course")}}</router-link>
                <router-link tag="li" class="nav-li" to="/wakuang">{{$t("mining")}}</router-link>
                <router-link tag="li" class="nav-li" to="/zhuanlan">{{$t("special_column")}}</router-link>
                <router-link tag="li" class="nav-li" to="/hangqing">{{$t("quotation")}}</router-link>
            </ul>
            <div class="srach">
                <input class="srach-txt" type="text">
                <span  class="iconfont">&#xe632;</span>
            </div>
            <router-link tag="div" class="login" to="center">{{$t("login")}}</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'BottomHead',
  methods:{
  }
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
            .nav-li:hover{
                cursor: pointer;
            }
            .nav-li{
                font: 14px/76px "宋体";
                float: left;
                padding: 0 15px;
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