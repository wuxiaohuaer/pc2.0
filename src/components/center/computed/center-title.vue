<template>
    <div>
        <div class="center-title">
            <ul class="center-ul" ref="li">
                <router-link tag="li" class="li" to="/center">{{$t("write_article")}}</router-link>
                <router-link tag="li" class="li" to="/con">{{$t("content_management")}}</router-link>
                <router-link tag="li" class="li" to="/extend">{{$t("asset_management")}}</router-link>
                <router-link tag="li" class="li" to="/account">{{$t("account_information")}}</router-link>
                <router-link tag="li" class="li" to="/market">{{$t("promote_the_market")}}</router-link>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
  name: 'CenterTitle',
  components:{
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
             this.$refs.li.children[i].className = 'li'
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
             this.$refs.li.children[i].className = 'li'
         }
      }
  }
}
</script>
<style lang="less">
.center-title{
    width: 210px;
    height: 1300px;
    background: #fff;
    .center-ul{
        height: 100%;
        width: 100%;
        font: bold 18px/66px "宋体";
        .li{
            height: 56px;
            padding-top: 10px;
            text-indent: 70px;
            background: url(../../../assets/img/logo11.png) no-repeat 25px 35px;
        }
        .lii{
            width: 100%;
            padding-left: 70px;
            font: 12px/26px "宋体";
            background: url(../../../assets/img/logo11.png) no-repeat 25px 35px;
        }
        .li1{
            width: 100%;
            height: 66px;
            padding-left: 70px;
            word-wrap:break-word;
            font: 14px/66px "宋体";
            background: url(../../../assets/img/logo11.png) no-repeat 25px 25px;
        }
    }
}
</style>