<template>
     <quill-editor 
      v-model="content" 
      ref="myQuillEditor" 
      :options="editorOption" 
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
</template> 
<script>
    import { quillEditor } from 'vue-quill-editor'
    export default{
        data(){
            return {
                content:"输入文章内容",
                editorOption:{
                    modules:{
                        toolbar:[
                          ['bold', 'italic', 'underline', 'strike'],
                          [{ 'list': 'ordered'}, { 'list': 'bullet' }], // toggled buttons
                           ['blockquote', 'code-block'],
                           ['link','image'],
                           [{ 'indent': '-1'}, { 'indent': '+1' }]
                        ]
                    }
                }
            }
        },
        methods:{
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            }
        }
    }
</script> 
<style lang="less">
    .quill-editor{
        width: 100%;
        margin-bottom: 95px;
        .ql-toolbar{
            height: 50px;
            padding-top: 13px;
            padding-left: 20px;
            font: 16px "微软雅黑";
            button{
                margin-right: 10px;
            }
        }
        .ql-container{
            height: 310px;
            font: 16px/24px "微软雅黑";
            color: #c2c5ca;
        }
    }
</style> 
