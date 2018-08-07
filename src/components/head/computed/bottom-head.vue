<template>
    <div class="hdhead">
        <router-link to="/">
            <img class="imgs" src="../../../assets/img/logo.png">
        </router-link>
        <ul class="nav" ref="li" >
            <router-link tag="li" class="nav-li" to="/">{{$t("home")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/falsh">{{$t("news_flash")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/qukuailian">{{$t("block_chain")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/ziben">{{$t("capital")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/jiaocheng">{{$t("course")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/wakuang">{{$t("mining")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/zhuanlan">{{$t("special_column")}}</router-link>
            <router-link  tag="li" class="nav-li" to="/hangqing">{{$t("quotation")}}</router-link>
        </ul>
        <router-link tag="div" class="login" to="/center">登录</router-link>
        <div class="srach">
            <span  class="iconfont">&#xe632;</span>
            <input type="text" class="srach-txt">
        </div>
        <span class="iconfont modil">&#xe632;</span>
    </div>
</template>
<script>
export default {
  name: 'BottomHead',
  methods:{
  },
  updated() {
      let lang = window.localStorage.getItem('language')
      if (lang === 'ru') {
         for (let i = 0; i < this.$refs.li.children.length; i++) {
             this.$refs.li.children[i].className = 'lii'
            //   console.log(this.$refs.li.children)
         }
      }else if(lang === 'en'){
          for (let i = 0; i < this.$refs.li.children.length; i++) {
             this.$refs.li.children[i].className = 'li1'
         }
      }else{
          for (let i = 0; i < this.$refs.li.children.length; i++) {
             this.$refs.li.children[i].className = 'nav-li'
         }
      }
  },
  mounted (){
      let lang = window.localStorage.getItem('language')
      if (lang === 'ru') {
         for (let i = 0; i < this.$refs.li.children.length; i++) {
             this.$refs.li.children[i].className = 'lii'
            //   console.log(this.$refs.li.children)
         }
      }else if(lang === 'en'){
          for (let i = 0; i < this.$refs.li.children.length; i++) {
             this.$refs.li.children[i].className = 'li1'
         }
      }else{
          for (let i = 0; i < this.$refs.li.children.length; i++) {
             this.$refs.li.children[i].className = 'nav-li'
         }
      }
  }
}
</script>
<style  lang="less">
    .lii{
        width: 80px;
        float: left;
        margin-top: 15px;
        padding: 0px 10px;
        box-sizing: border-box;
        word-wrap:break-word;
        font: 14px/20px "宋体";
    }
    .li1{
        box-sizing: border-box;
        text-align: center;
        word-wrap:break-word;
        font: 14px/76px "宋体";
        float: left;
        padding: 0 15px;
    }
    .hdhead{
        width: 100%;
        height: 76px;
        margin: 0 auto;
        .imgs{
            margin-right:30px;
            float: left;
            margin-bottom: 0px;
        }
        .nav{
            height: 76px;
            float: left;
            .nav-li:hover{
                cursor: pointer;
            }
            .nav-li{
                box-sizing: border-box;
                text-align: center;
                word-wrap:break-word;
                font: 18px/76px "宋体";
                float: left;
                padding: 0 15px;
            }
        }
        
        .srach{
            height: 28px;
            width: 190px;
            background: #f4f5f7;
            float: right;
            margin-right: 40px;
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
        .modil{
            display: none;
            float: right;
            font-size: 28px;
            margin-right: 4%;
            margin-top: 30px;
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
    @media screen and (max-width: 1210px) and(min-width: 960px) {
        #app .hdhead{ 
            width: 950px;
            .imgs{
                margin-right: 15px;
            }
            li{
                font-size: 12px;
                width: 70px;
                padding: 0px 5px;
            }
            .srach{
                width: 160px;
                margin-right: 0px;
                .srach-txt{
                    width: 120px;
                }
            }
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .hdhead{ 
            width: 750px;
            .imgs{
                width: 97.5px;
                height: 57px;
                margin-top: 10px;
                margin-right: 5px;
            }
            .nav-li{
                width: 50px;
                font-size: 12px;
                padding: 0 10px;
            }
            .lii{
                width: 58px;
                font-size: 12px;
                padding: 0 5px;
            }
            .li1{
                width: 58px;
                font-size: 12px;
                padding: 0 5px;
            }
            .srach{
                width: 100px;
                margin-right: 10px;
                .srach-txt{
                    width: 60px;
                }
            }
            .login{
                width: 60px;
                font-size: 12px;
            }
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .hdhead{ 
            width: 100%;
            position: fixed;
            top: 30px;
            z-index: 999;
            background: #fff;
            .imgs{
                margin-left: 30%;
            }
            .nav{
                display: none;
            }
            .srach{
                display: none;
            }
            .modil{
                display: block;
                float: right;
                margin-top: 25px;
            }
            .nav-mobil{
                display: block;
            }
            .login{
                display: none;
            }
        }
    }
</style>