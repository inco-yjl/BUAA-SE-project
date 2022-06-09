<template>
  <div id="editor"></div>
</template>
<script>
import Editor from "wangeditor";
export default {
  data() {
    return {
      editor: "",
    };
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    async initEditor() {
      this.editor = new Editor("#editor"); /* 括号里面的对应的是html里div的id */
      /* 配置菜单栏 */
      this.editor.config.menu = [
        "head", // 标题
        "bold", // 粗体
        "fontSize", // 字号
        "fontName", // 字体
        "italic", // 斜体
        "underline", // 下划线
        "strikeThrough", // 删除线
        "foreColor", // 文字颜色
        "backColor", // 背景颜色
        "link", // 插入链接
        "list", // 列表
        "justify", // 对齐方式
        "quote", // 引用
        "emoticon", // 表情
        "image", // 插入图片
        "table", // 表格
        "code", // 插入代码
        "undo", // 撤销
        "redo", // 重复
      ];
      this.editor.config.uploadImgMaxLength = 5;
      this.editor.config.uploadImgMaxSize =
        3 * 1024 * 1024; /* 将图片大小限制为 3M 默认为5M / 
        /* 自定义图片上传（支持跨域和非跨域上传，简单操作）*/
      this.editor.config.UploadImg = async (files, insert) => {
        /* files 是 input 中选中的文件列表 */
        let formData = new FormData();
        formData.append("file", files[0]);
        let data = await this.upload(formData);
        /* upload方法是后台提供的上传图片的接口 */
        /* insert 是编辑器自带的 获取图片 url 后，插入到编辑器的方法 上传代码返回结果之后，将图片插入到编辑器中*/
        insert(data.imgUrl);
      };
      this.editor.config.onchange = (html) => {
        /* html 即变化之后的内容 */
      };
      this.editor.create(); /* 创建编辑器 */
    },
  },
};
</script>
