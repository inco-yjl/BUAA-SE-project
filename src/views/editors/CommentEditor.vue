<template>
  <div id="comment-editor">
    <div class="content-info">
      <div class="content-img">
        <a href="../book/1">
        <img id="comment-pic" />
        </a>
        <el-rate v-model="value2" :colors="colors"> </el-rate>
      </div>
      <div id="content-intro">
        <span id="contentname"><br /></span>
        <span id="contentintro"></span>
        <span id="contentstar"></span>
      </div>
    </div>

    <!--2.这里id对应new Vditor('vditor',{...})的第一个参数vidtor-->
      <div id="editor" style="border: 1px solid #ccc;">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 600px; overflow-y: hidden;"
            v-model="html"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
        />
    </div>
  </div>
</template>
<style scoped>
#comment-editor {
  height: 1000px;
  padding-bottom: 200px;
  margin-bottom: 200px;
}
.contentinfo {
  position: absolute;
  left: 200px;
  right: 200px;
  top: 100px;
}
.content-img {
  position: absolute;
  left: 445px;
  top: 100px;
  padding-right: 400px;
  height: 150px;
  width: 800px;
}
#content-intro {
  position: absolute;
  font-family:  Source Han Sans CN Normal;
  width: 600px;
  height: 152px;
  left: 555px;
  top: 100px;
  background-color: rgb(242, 242, 242);
}
#comment-pic {
  width: 110px;
  height: 150px;
}
#contentname {
  position: absolute;
  top: 20px;
  left: 15px;
}
#contentintro {
  position: absolute;
  top: 60px;
  left: 20px;
}
#contentstar{
  position: absolute;
  top:100px;
  left:20px;
}
#editor {
  position: absolute;
  width:900px;
  left: 400px;
  right: 400px;
  top: 300px;
}
</style>
<script>
import bookImg from "@/assets/books/Jiaoldr.jpg";
import Vue from 'vue'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
  name: "editor",
  components: { Editor, Toolbar },
  data() {
    return {
        value2: 3,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        editor: null,
            html: '<p>hello</p>',
            toolbarConfig: { },
            editorConfig: { placeholder: '请输入内容...' },
            mode: 'default', // or 'simple'
    }
  },
  methods: {
    UpdateComment() {
      document.getElementById("comment-pic").setAttribute("src", bookImg);
      document.getElementById("contentname").innerHTML =
        "《" + "焦虑的人" + "》";
      document.getElementById("contentintro").innerHTML =
        "作者:" + "[" + "雅典" + "]" + "弗雷德里克·巴克曼";
        document.getElementById("contentstar").innerHTML="评分:"+this.value2;
    },
    onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
  },
  mounted() {
    this.UpdateComment();
     setTimeout(() => {
            this.html = '<p>修改内容</p>'
        }, 1500)
  },
  beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    }
};
</script>