<template>
        <!--2.这里id对应new Vditor('vditor',{...})的第一个参数vidtor-->
        <div id="vditor" name="description" ></div> 
</template>
<style scoped>
#vditor{
  position: absolute;
  left:400px;
  right:400px;
  top:300px;
}
</style>
    <script>
    import Vditor from "vditor";  //1.import一下vditor组件
    import "vditor/src/assets/scss/index.scss"; //1.import一下vditor组件样式

    export default {
        data(){
            return{
                contentEditor: {},//3.声明一个变量
            }
        },
        mounted(){
            this.contentEditor = new Vditor('vditor', { //4.刚刚声明的变量contentEditor被赋值为一个Vditor实例,
              height: 650,       
              width:800,                        
              placeholder: '此处为正文内容……',             
              theme: 'classic',
              counter: {
                enable: true,
                type: 'markdown'
              },
              preview: {
                delay: 0,
                hljs: {
                  style: 'monokai',
                  lineNumber: true
                }
              },
              tab: '\t',
              typewriterMode: true,
              toolbarConfig: {
                pin: true
              },
              cache: {
                enable: false
              },
              mode: 'sv',
              toolbar: [
                'emoji',
                'headings',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'list',
                'ordered-list',
                'check',
                'outdent',
                'indent',
                '|',
                'quote',
                'line',
                'insert-before',
                'insert-after',
                '|',
                // 'record',
                'table',
                '|',
                'undo',
                'redo',
                '|',
                'edit-mode',
                // 'content-theme',
                'export',
               ],
            })
        },
      methods: {
      // 我的提交表单代码大致如下,这段代码核心是this.ruleForm.content = this.contentEditor.getValue()
      /*
        submitForm(formName) {
			            this.$refs[formName].validate((valid) => {
			              if (valid) {
			                if (
			                  this.contentEditor.getValue().length === 1 ||
			                  this.contentEditor.getValue() == null ||
			                  this.contentEditor.getValue() === ''
			                ) {
			                  alert('话题内容不可为空')
			                  return false
			                }
			  		              
                                         //5.通过this.contentEditor.getValue()获取编辑器内容
			                this.ruleForm.content = this.contentEditor.getValue()
					    
			                ......//调用api把this.ruleForm传给后端
			            })
			   }
		}
      }
    */
    //后续从后端传回来的数据会面临一个##标题仍然显示为##标题的问题，这篇文章后面有使用renderMarkdown()来解决的具体代码
    }
    }
    </script>
