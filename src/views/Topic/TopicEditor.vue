<template>
  <div id="topic-dt-editor">
    <div id="topiceditor-header">
      <div class="return-to-topic">
        <button @click="backToTopic">返回话题</button>
      </div>
      <div class="topic-header-logo"></div>
      <div class="post-topic-dt"><button>发布</button></div>
    </div>
    <div id="topic-info">
      <span
        >此动态将被发布到<span class="topic-name">{{ topicName }}</span
        >话题下</span
      >
      <p class="topic-intro">简介:{{ topicIntro }}</p>
    </div>

    <!--2.这里id对应new Vditor('vditor',{...})的第一个参数vidtor-->
    <div id="editor">
      <vditor></vditor>
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
  height: 150px;
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
.post-topic-dt button:hover {
}
</style>
<script>
import vditor from "@/components/Editor.vue";
export default {
  name: "editor",
  components: {
    vditor,
  },
  data() {
    var topicName = this.$route.params.topic_name;
    var topicIntro = this.$route.params.topic_intro;
    var id = this.$route.params.id;
    return {
      topicName,
      topicIntro,
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
    addNavigation() {
      this.$parent.navigate = true;
    },
    removeNavigation() {
      this.$parent.navigate = false;
    },
  },
  mounted() {
    this.removeNavigation();
  },
};
</script>