<template>
    <ul class="btnswiper" ref="li" >
        <router-link tag="li" class="btn" to="/">{{$t("home")}}</router-link>
        <router-link  tag="li" class="btn" to="/falsh">{{$t("news_flash")}}</router-link>
        <router-link  tag="li" class="btn" to="/qukuailian">{{$t("block_chain")}}</router-link>
        <router-link  tag="li" class="btn" to="/ziben">{{$t("capital")}}</router-link>
        <router-link  tag="li" class="btn" to="/jiaocheng">{{$t("course")}}</router-link>
        <router-link  tag="li" class="btn" to="/wakuang">{{$t("mining")}}</router-link>
        <router-link  tag="li" class="btn" to="/zhuanlan">{{$t("special_column")}}</router-link>
        <router-link  tag="li" class="btn" to="/hangqing">{{$t("quotation")}}</router-link>
    </ul>
</template>
<script>
export default {
  name: 'BtnSwiper',
  data(){
      return{
          imgs:[],
      }
  },
}
</script>
<style lang="less">
    .btnswiper{
        width: 100%;
        height: 30px;
        display: none;
        position: fixed;
        top: 87px;
        z-index: 999;
        background: yellow;
        .btn{
            float: left;
            padding: 0 1%;
            font: 14px/30px "微软雅黑";
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        .btnswiper{
            display: block;
            
        }
    }
</style>