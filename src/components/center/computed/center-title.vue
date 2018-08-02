<template>
    <div>
        <div class="center-title">
            <ul class="center-ul">
                <li>
                    <router-link to="/center">{{$t("write_article")}}</router-link>
                </li>
                <li>
                    <router-link to="/con">{{$t("content_management")}}</router-link>
                </li>
                <li>
                    <router-link to="/extend">{{$t("asset_management")}}</router-link>
                </li>
                <li>
                    <router-link to="/account">{{$t("account_information")}}</router-link>
                </li>
                <li>
                    <router-link to="/market">{{$t("promote_the_market")}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
  name: 'CenterTitle',
  components:{
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
        text-indent: 70px;
        li{
            height: 56px;
            padding-top: 10px;
            background: url(../../../assets/img/logo11.png) no-repeat 25px 35px;
        }
    }
}
</style>