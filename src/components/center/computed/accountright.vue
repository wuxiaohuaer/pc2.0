<template>
    <div class="account-right">
        <div class="account-name">
            <span class="title">{{$t("nickname")}}</span>
            <input type="text" :placeholder="$t('please_enter_the_nickname')">
        </div>
        <div class="account-des">
            <span class="title">{{$t("introduce")}}</span>
            <input type="text" :placeholder="$t('please_enter_the_signature')">
        </div>
        <div class="account-logo">
            <span class="title">{{$t("head_portrait")}}</span>
            <div class="text">+</div>
        </div>
        <div class="btn">{{$t("modify")}}</div>
    </div>
</template>
<script>

export default {
  name: 'AccountRight',
  data(){
      return {
          
      }
  },
  components:{
  },
  computed:{
      holder(){
          return {
              
          }
      }
  }
}
</script>
<style lang="less">
    .account-right{
        width: 100%;
        height: 1300px;
        .account-name{
            width: 100%;
            height: 75px;
            border-bottom:1px solid #d7d8dc; 
            .title{
                width: 104px;
                float: left;
                color: #8b959e;
                font: 19px/75px "微软雅黑";
            }
            input{
                width: 600px;
                height: 26px;
                margin-top: 27px;
                font: 14px/26px "微软雅黑";
                color: #9ca5ac;
            }
        }
        .account-des{
            width: 100%;
            height: 128px;
            padding-top: 30px;
            box-sizing: border-box;
            border-bottom:1px solid #d7d8dc; 
            .title{
                width: 104px;
                float: left;
                color: #3a3a3a;
                font: 17px/48px "微软雅黑";
            }
            input{
                width: 600px;
                height: 26px;
                margin-top: 14px;
                font: 14px/26px "微软雅黑";
                color: #9ca5ac;
            }
        }
        .account-logo{
            width: 100%;
            height: 250px;
            padding-top: 30px;
            box-sizing: border-box;
            .title{
                width: 104px;
                float: left;
                color: #3a3a3a;
                font: 17px/48px "微软雅黑";
            }
            .text{
                width: 118px;
                height: 118px;
                margin-top: 13px;
                float: left;
                border: 1px dashed #d7d8dc;
                font: 30px/118px "微软雅黑";
                text-align: center;
                color: #78acff;
            }
        }
        .btn{
            width: 120px;
            height: 48px;
            background: red;
            border-radius: 5px;
            font: 18px/48px "微软雅黑";
            text-align: center;
            color: #fff;
            margin-left: 358px;
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .account-right input {
            width: 540px;
        }
        #app .account-right .btn {
            margin-left: 250px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .account-right input {
            width: 410px;
        }
        #app .account-right .btn {
            margin-left: 175px;
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .person-wrap .content .right .account-right{
            width: 100%;
        }
        #app .account-right input {
            width: 60%;
        }
        #app .account-right .btn {
            margin-left: 175px;
        }
    }
</style>