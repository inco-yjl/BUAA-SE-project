<template>
  <div id="topic-dt-editor">
    <div id="topiceditor-header">
      <div class="return-to-topic">
        <button @click="backToTopic">返回话题</button>
      </div>
      <div class="topic-header-logo"></div>
      <div class="post-topic-dt"><button @click="UploadDt">发布</button></div>
    </div>
    <div id="topic-info" v-if="loadSuccess">
      <span
        >此动态将被发布到<span class="topic-name">{{ topic.name }}</span
        >话题下</span
      >
      <p class="topic-intro">简介:{{ topic.intro }}</p>
    </div>
    <!--2.这里id对应new Vditor('vditor',{...})的第一个参数vidtor-->
    <div id="editor" style="border: 1px solid #ccc">
      <div id="toolbar-container"></div>
      <div id="editor-container">
        <div id="editor-text-area"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#topic-dt-editor {
  height: 1000px;
  padding-bottom: 200px;
  margin-bottom: 200px;
}
#topiceditor-header {
  padding-top: 10px;
  height: 50px;
  width: 1690px;
  background-color: rgb(216, 216, 216);
}
.topic-header-logo {
  position: absolute;
  left: 820px;
  top: 0;
  right: 800px;
  height: 50px;
  width: 50px;
  background-size: 50px 50px;
  background-image: url("@/assets/icon/logo.png");
}
#topic-info {
  padding: 20px;
  color: rgb(56, 56, 56);
  padding-bottom: 20px;
  position: absolute;
  font-family: Source Han Sans CN Normal;
  width: 600px;
  height: auto;
  left: 555px;
  top: 100px;
  background-color: rgb(242, 242, 242);
}
.topic-name {
  font-weight: bold;
}
.topic-intro {
  margin-top: 20px;
}
.return-to-topic button {
  background: none;
  outline: none;
  border: none;
  color: black;
}
.return-to-topic button:hover {
  outline: none;
  font-weight: bold;
}

.post-topic-dt button {
  background: none;
  position: absolute;
  top: 5px;
  right: 5px;
  margin-top: 0;
  height: 40px;
  transition: all 0.2s ease;
  border: none;
  color: black;
}
#editor {
  position: relative;
  width: 900px;
  left: 400px;
  right: 400px;
  top: 300px;
  height: 800px;
  background-color: white;
}
</style>
<script>
import { createEditor, createToolbar } from "@wangeditor/editor";
import qs from "qs";
const editorConfig = {};

// 工具栏配置
const toolbarConfig = {
  excludeKeys: ["insertVideo", "fullScreen", "codeBlock", "bgColor", "color"],
};

export default {
  name: "editor",
  data() {
    var id = this.$route.query.id;
    var passage = "";
    var topic;
    var loadSuccess = false;
    return {
      id,
      passage,
      topic,
      loadSuccess,
    };
  },
  methods: {
    backToTopic() {
      this.addNavigation();
      this.$router.push({
        name: "topicdetail",
        query: { id: this.id },
      });
    },
    UploadDt() {
      if (this.passage.length > 10000) {
        this.$message.error("字数过多！不得超过10000字");
        return;
      }
      if (this.passage.length === 0) {
        this.$message.error("请输入动态内容！");
        return;
      }
      var params = {
        user_id: this.$store.getters.getUser.user.id,
        topic_id: this.id,
        text: this.passage,
      };
      this.$axios
        .post("/topic/passage", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data);
            this.$message({
              message: res.data.msg,
              type: "success",
            });
            this.backToTopic();
            console.log(res.data.data);
          } else {
            this.$message.error("发布失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateContent() {
      var params = {
        topic_id: this.id,
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/topic/detail", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("详情查询成功");
            this.topic = res.data.data;
            this.loadSuccess = true;
            switch (res.data.collect) {
              case 1:
                this.liked = true;
                break;
              case 0:
                this.liked = false;
                break;
            }
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addNavigation() {
      this.$parent.navigate = true;
    },
    removeNavigation() {
      this.$parent.navigate = false;
    },
    customCheckImageFn(src, alt, url) {
      if (!src) {
        return;
      }
      return true;

      // 返回值有三种选择：
      // 1. 返回 true ，说明检查通过，编辑器将正常插入图片
      // 2. 返回一个字符串，说明检查未通过，编辑器会阻止插入。会 alert 出错误信息（即返回的字符串）
      // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止插入。但不会提示任何信息
    },
    async uploadPic(img) {
      console.log("update");
      var params = new FormData();
      params.append("photo", img);
      params.append("name", img.name);
      params.append("resource_id", this.$store.getters.getUser.user.id);
      params.append("resource_type", 2);
      this.$axios.post("/photo/upload_photo", params);
    },
    changeUrl(url) {
      var len = this.$axios.defaults.baseURL.length;
     return this.$axios.defaults.baseURL.substring(0, len - 4) + url;
    },
    createEditor() {
      editorConfig.onChange = (editor) => {
        // 当编辑器选区、内容变化时，即触发
        console.log("html", editor.getHtml());
        this.passage = editor.getHtml();
      };
      editorConfig.onchangeTimeout = 500;
      editorConfig.customUploadImg = async function (resultFiles, insertImgFn) {
        const result = await this.uploadPic(resultFiles[0]);
        // 上传图片成功后，将图片地址传入到insertImgFn方法中即可
        if (result.data.errno === 0) insertImgFn(changeUrl(result.data.data.url));
      };
      const editor = createEditor({
        selector: document.querySelector("#editor-container"),
        config: editorConfig,
        mode: "simple", // 或 'simple' 参考下文
      });

      // 创建工具栏
      const toolbar = createToolbar({
        editor,
        selector: document.querySelector("#toolbar-container"),
        config: toolbarConfig,
        mode: "simple", // 或 'simple' 参考下文
      });
      console.log(toolbar.getConfig().toolbarKeys);
      document
        .getElementById("editor-text-area")
        .addEventListener("click", (e) => {
          if (e.target.id === "editor-text-area") {
            editor.blur();
            editor.focus(true); // focus 到末尾
          }
        });
    },
  },
  mounted() {
    this.removeNavigation();
    this.updateContent();
    this.createEditor();
  },
};
</script>