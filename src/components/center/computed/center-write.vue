<template>
    <div>
        <div class="center-write">
            <input  type="text" class="text-title" placeholder="请输入标题，1至60个字。">
            <quill-editor></quill-editor>
            <div class="write-tag">
                <span class="tag-title">TAG标签</span>
                <input type="text" name="" id="">
                <span class="tag-add">+</span>
                <span class="tag-des">至少三个tag，每个tag2-5个汉字</span>
            </div>
            <div class="write-abs">
                <span class="tag-title">内容摘要</span>
                <textarea type="text"  placeholder="一句话描述文章内容，突出核心观点。文字数量在30-60字之间。" name=""></textarea>
            </div>
            <div class="write-ups">
                <span class="tag-title">上传封面</span>
                <div class="ups-kuang">+</div>
            </div>
            <div class="write-statement">
                <span class="tag-title">权利声明</span>
                <div class="statement-txt">考虑到用户浏览体验，所有投稿到金钱报的稿件，金钱报均有权对文章的标题，头图进行调整，这些调整并不会应向正文内容，如果需要进行内容调整，编辑会与作者进行联系，不会直接修改。</div>
            </div>
            <div class="write-btn">
                <span class="bule">提交</span>
                <span class="one">存稿<span></span></span>
                <span class="two">预览<span></span></span>
            </div>
        </div>
    </div>
</template>
<script>
import QuillEditor from './quill'
export default {
  name: 'CenterWrite',
  components:{
      QuillEditor
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
            height: 90px;
            margin-bottom: 43px;
            .tag-title{
                font: 18px/27px "微软雅黑";
                float: left;
                margin-right: 28px;
            }
            .statement-txt{
                width: 656px;
                height: 90px;
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
                font: 20px/48px "微软雅黑";
                background: #78acff;
                text-align: center;
                color: #fff;
                border-radius: 5px;
            }
            .one{
                width: 60px;
                height: 100%;
                float: left;
                color: #89969f;
                margin-right: 86px;
                text-align: center;
                position: relative;
                font: 19px/48px "微软雅黑";
                span{
                    width: 20px;
                    height: 2px;
                    position: absolute;
                    left: 20px;
                    bottom: 2px;
                    background: #8b95a1;
                }
            }
            .two{
                width: 60px;
                height: 100%;
                float: left;
                color: #89969f;
                text-align: center;
                position: relative;
                font: 19px/48px "微软雅黑";
                span{
                    width: 20px;
                    height: 2px;
                    position: absolute;
                    left: 20px;
                    bottom: 2px;
                    background: #8b95a1;
                }
            }
        }
    }
</style>