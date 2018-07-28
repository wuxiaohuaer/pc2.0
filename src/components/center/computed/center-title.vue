<template>
    <div>
        <div class="center-title">
            <ul class="center-ul">
                <li>
                    <router-link to="/center">写文章</router-link>
                </li>
                <li>
                    <router-link to="/con">内容管理</router-link>
                </li>
                <li>
                    <router-link to="/">资产管理</router-link>
                </li>
                <li>
                    <router-link to="/">账号信息</router-link>
                </li>
                <li>
                    <router-link to="/">推广市场</router-link>
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