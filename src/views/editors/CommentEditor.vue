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
    <div id="editor">
      <vditor></vditor>
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
</style>
<script>
import bookImg from "@/assets/books/Jiaoldr.jpg";
import vditor from "@/components/Editor.vue";
export default {
  name: "editor",
  components: {
    vditor,
  },
  data() {
    return {
        value2: 3,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
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
  },
  mounted() {
    this.UpdateComment();
  },
};
</script>