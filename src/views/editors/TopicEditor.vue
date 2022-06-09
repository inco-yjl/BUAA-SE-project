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
    <div id="editor"></div>
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
.post-topic-dt button :hover {
  outline: none;
  font-weight: bold;
}
#editor {
  position: relative;
  width: 900px;
  left: 400px;
  right: 400px;
  top: 300px;
}
</style>
<script>
import Editor from "wangeditor";
import qs from "qs";
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
      editor: "",
      picture: [],
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
      this.passage = this.editor.txt.html();
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
            this.uploadImg(res.data.data);
            this.backToTopic();
          } else {
            this.$message.error("发布失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    uploadImg(id) {
      for (var i = 0; i < this.picture.length; i++) {
        var url = this.picture[i];
        var params = {
          article_id:id,
          url:url
        }
        if (this.passage.indexOf(url) !== -1) {
          this.$axios
            .post("/photo/saveinnerPhoto", qs.stringify(params))
            .then((res) => {
              if (res.data.errno === 0) {
                console.log(res);
              } else {
                this.$message.error("存储失败");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    },
    updateContent() {
      this.picture = [];
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
    changeurl(url) {
      var icon;
      if (url !== "") {
        var len = this.$axios.defaults.baseURL.length;
        icon = this.$axios.defaults.baseURL.substring(0, len - 4) + url;
      }
      this.picture.push(icon);
      return icon;
    },
    upload(params) {
      console.log("update");
    },
    async initEditor() {
      this.editor = new Editor("#editor"); /* 括号里面的对应的是html里div的id */
      /* 配置菜单栏 */
      this.editor.config.excludeMenus = [
        "emoticon",
        "video",
        "foreColor",
        "backColor",
        "table",
        "code",
        "fontSize",
        "fontName",
      ];
      this.editor.config.uploadImgMaxLength = 5;
      this.editor.config.uploadImgMaxSize =
        3 * 1024 * 1024; /* 将图片大小限制为 3M 默认为5M / 
        /* 自定义图片上传（支持跨域和非跨域上传，简单操作）*/
      this.editor.config.customUploadImg = async (files, insert) => {
        /* files 是 input 中选中的文件列表 */
        var params = new FormData();
        var img = files[0];
        params.append("photo", img);
        params.append("name", img.name);
        params.append("resource_id", this.$store.getters.getUser.user.id);
        params.append("resource_type", 2);
        var url;
        this.$axios
          .post("/photo/upload_photo", params)
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              url = this.changeurl(res.data.data.url);
              this.$message({
                message: res.data.msg,
                type: "success",
              });
              insert(url);
            } else {
              this.$message.error("上传失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
        /* upload方法是后台提供的上传图片的接口 */
        /* insert 是编辑器自带的 获取图片 url 后，插入到编辑器的方法 上传代码返回结果之后，将图片插入到编辑器中*/
      };
      this.editor.config.onchange = (html) => {
        /* html 即变化之后的内容 */
      };
      this.editor.create();
    },
  },
  mounted() {
    this.removeNavigation();
    this.updateContent();
    this.initEditor();
  },
};
</script>