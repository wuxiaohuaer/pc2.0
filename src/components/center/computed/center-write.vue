<template>
    <div class="center-write">
        <input  type="text" class="text-title" :placeholder="$t('title_article')">
        <quill-editor></quill-editor>
        <div class="write-tag">
            <span class="tag-title">{{$t("tag")}}</span>
            <input type="text" name="" id="">
            <span class="tag-add">+</span>
            <span ref="des" class="tag-des">{{$t("tag_describe")}}</span>
        </div>
        <div class="write-abs">
            <span class="tag-title">{{$t("content_summary")}}</span>
            <textarea type="text"  :placeholder="$t('content_summary_describe')" name=""></textarea>
        </div>
        <div class="write-ups">
            <span class="tag-title">{{$t("upload_the_cover")}}</span>
            <div class="ups-kuang">+</div>
        </div>
        <div class="write-statement">
            <span class="tag-title">{{$t("copyright_declarations")}}</span>
            <div class="statement-txt">{{$t("copyright_declaration")}}</div>
        </div>
        <div class="write-btn" ref="btn">
            <span class="bule">{{$t("publish")}}</span>
            <span class="one">{{$t("deposit_draft")}}<span></span></span>
            <span class="two">{{$t("preview")}}<span></span></span>
        </div>
    </div>
</template>
<script>
import QuillEditor from './quill'
export default {
  name: 'CenterWrite',
  components:{
      QuillEditor
  },
  updated() {
      let lang = window.localStorage.getItem('language')
      if (lang === 'ru') {
        this.$refs.des.style.fontSize = '12px'
        this.$refs.btn.children[1].style.fontSize = '12px'
        this.$refs.btn.children[1].style.lineHeight = '18px'
        this.$refs.btn.children[2].style.fontSize = '12px'
        this.$refs.btn.children[2].style.lineHeight = '18px'
      }else if(lang === 'en'){
        this.$refs.btn.children[1].style.lineHeight = '18px'
      }else{
        this.$refs.des.style.fontSize = '12px'
        this.$refs.btn.children[1].style.fontSize = '18px'
        this.$refs.btn.children[1].style.lineHeight = '48px'
        this.$refs.btn.children[2].style.fontSize = '18px'
        this.$refs.btn.children[2].style.lineHeight = '48px'
      }
  },
  mounted (){
      let lang = window.localStorage.getItem('language')
      if (lang === 'ru') {
        console.log(this.$refs.des);
        this.$refs.btn.children[1].style.fontSize = '12px'
        this.$refs.btn.children[1].style.lineHeight = '18px'
        this.$refs.btn.children[2].style.fontSize = '12px'
        this.$refs.btn.children[2].style.lineHeight = '48px'
        this.$refs.des.style.fontSize = '12px'
      }else if(lang === 'en'){
        this.$refs.btn.children[1].style.lineHeight = '18px'
      }else{
        this.$refs.des.style.fontSize = '12px'
        this.$refs.btn.children[1].style.fontSize = '18px'
        this.$refs.btn.children[1].style.lineHeight = '48px'
        this.$refs.btn.children[2].style.fontSize = '18px'
        this.$refs.btn.children[2].style.lineHeight = '48px'
      }
  }
}
</script>
<style lang="less">
    .center-write{
        width: 100%;
        height: 1300px;
        .text-title{
            width: 100%;
            height: 67px;
            font: 20px/67px "微软雅黑";
            color: #8995a1;
            text-indent: 10px;
            margin-bottom:30px; 
        }
        .write-tag{
            width: 100%;
            height: 27px;
            margin-bottom: 32px;
            .tag-title{
                width: 78px;
                font: 18px/27px "微软雅黑";
                float: left;
                margin-right: 28px;
            }
            input{
                width: 106px;
                font: 16px/27px "微软雅黑";
                float: left;
                margin-right: 23px;
                border: 1px solid #adb6bd;
            }
            .tag-add{
                font: 25px/27px "微软雅黑";
                float: left;
                margin-right: 23px;
                color: #83b2ff;
            }
            .tag-des{
                font: 14px/27px "微软雅黑";
                float: right;
                color: red;
                
            }
        }
        .write-abs{
            width: 100%;
            height: 90px;
            margin-bottom: 43px;
             .tag-title{
                width: 78px;
                font: 18px/27px "微软雅黑";
                float: left;
                margin-right: 28px;
            }
            textarea{
                width: 656px;
                height: 88px;
                border: 1px solid #adb6bd;
                font: 14px/34px "微软雅黑";
                color: #adb6bd;
                padding-left: 10px;
            }
        }
        .write-ups{
            width: 100%;
            height: 162px;
            margin-bottom: 43px;
             .tag-title{
                width: 78px;
                font: 18px/27px "微软雅黑";
                float: left;
                margin-right: 28px;
            }
            .ups-kuang{
                width: 260px;
                height: 160px;
                float: left;
                color: #afcdff;
                text-align: center;
                font: 60px/160px "微软雅黑";
                border: 1px dashed #c0c3cc;
            }
        }
        .write-statement{
            width: 100%;
            height: 160px;
            margin-bottom: 20px;
            margin-bottom: 43px;
            .tag-title{
                width: 78px;
                font: 18px/27px "微软雅黑";
                float: left;
                margin-right: 28px;
            }
            .statement-txt{
                width: 656px;
                float: left;
                font: 14px/34px "微软雅黑";
                color: #adb6bd;
            }
        }
        .write-btn{
            width: 100%;
            height: 48px;
            .bule{
                width: 120px;
                height: 100%;
                float: left;
                margin-left: 234px;
                margin-right: 57px;
                font: 18px/48px "微软雅黑";
                background: #78acff;
                text-align: center;
                color: #fff;
                border-radius: 5px;
            }
            .one{
                width: 100px;
                height: 100%;
                float: left;
                color: #89969f;
                margin-right: 86px;
                text-align: center;
                position: relative;
                font: 18px/48px "微软雅黑";
                span{
                    width: 20px;
                    height: 2px;
                    position: absolute;
                    left: 40px;
                    bottom: 2px;
                    background: #8b95a1;
                }
            }
            .two{
                width: 100px;
                height: 100%;
                float: left;
                color: #89969f;
                text-align: center;
                position: relative;
                font: 18px/48px "微软雅黑";
                span{
                    width: 20px;
                    height: 2px;
                    position: absolute;
                    left: 40px;
                    bottom: 2px;
                    background: #8b95a1;
                }
            }
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .person-wrap  .content textarea{
            width: 500px;
        }
        #app .person-wrap  .content .bule{
            margin-left: 150px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .person-wrap  .content textarea {
            width: 410px;   
        }
        #app .person-wrap  .content .statement-txt{
            width: 410px;
        }
        #app .person-wrap  .content .bule{
            margin-left: 50px;
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .person-wrap  .content .text-title {
            margin-bottom: 0;
        }
        #app .person-wrap  .content textarea {
            width: 70%;   
        }
        #app .person-wrap  .content .statement-txt{
            width: 410px;
        }
        #app .person-wrap  .content .bule{
            margin-left: 5%;
            margin-right: 5%;
        }
        #app .person-wrap  .content .one{
            margin-right: 5%;
        }
    }
</style>