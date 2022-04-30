<template>
  <div>
    <search></search>
    <div class="topic_circle">
      <div class="title">
        <span class="topic_cirle_title">话题广场</span><button onclick=""><img id="change_topic" src="../assets/guide/change_topic.png"></button>
      </div>
      
      <div class="flex_box">
        <div class="boxesOfTopic">
          <div>
            寻找春日气息<br /><a class="topicboxes-route" href="/1">参与话题</a>
          </div>
          <div>
            今天是立秋<br /><a class="topicboxes-route" href="/1">参与话题</a>
          </div>
          <div>
            你最爱的海上电影镜头<br /><a class="topicboxes-route" href="/1"
              >参与话题</a
            >
          </div>
          <div>
            老家记忆<br /><a class="topicboxes-route" href="/1">参与话题</a>
          </div>
          <div>
            后疫情时代的旅行<br /><a class="topicboxes-route" href="/1"
              >参与话题</a
            >
          </div>
          <div>
            你拍过的最搞笑的照片<br /><a class="topicboxes-route" href="/1"
              >参与话题</a
            >
          </div>
          <div>
            寻找春日气息<br /><a class="topicboxes-route" href="/1">参与话题</a>
          </div>
          <div>
            寻找春日气息<br /><a class="topicboxes-route" href="/1">参与话题</a>
          </div>
        </div>
        <div>
          <div class="collection">
            <a href="../user/topics">
              <img src="../assets/guide/star_topic.png" />已关注话题
            </a>
          </div>
          <div></div>
          <br />
          <div class="hotlist topic_page">
          <div class="title topic_page"><img src="../assets/guide/topic_trend.png"><span>话题趋势</span></div>
            <ol>
              <li>&ensp;<a href="/1">我的世界读书日</a></li>
              <li>&ensp;<a href="/2">今天吃什么？</a></li>
              <li>&ensp;<a href="/2">你每天都有哪些突如其来的感悟</a></li>
              <li>&ensp;<a href="/2">和新冠肺炎疫情有关的记忆</a></li>
              <li>&ensp;<a href="/2">热爱生活的一万个理由</a></li>
              <li>&ensp;<a href="/2">今天吃什么？</a></li>
              <li>&ensp;<a href="/2">今天吃什么？</a></li>
              <li>&ensp;<a href="/2">今天吃什么？</a></li>
              <li>&ensp;<a href="/2">今天吃什么？</a></li>
              <li><a href="/2">今天吃什么？</a></li>
              <li><a href="/2">今天吃什么？</a></li>
              <li><a href="/2">今天吃什么？</a></li>
              <li><a href="/2">今天吃什么？</a></li>
              <li><a href="/2">今天吃什么？</a></li>
              <li><a href="/2">今天吃什么？</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="topic-display">
       <diary></diary>
    </div>
  </div>
</template>


<style scoped>
button{

    border-radius: 40px;
    background-color: white;
    border-color:rgba(128, 128, 128, 0.498);
    outline: none;
    position: relative;
    z-index: 0;
}
button::before{
    position:absolute;
    content: '';
    transition: all 0.3s ease;
    border-radius: 10px;
    z-index: -1;
}
button:hover::before{
    top: 0;
    height: 100%;
}
button:active{
    top: 2px;
}
.topic_cirle_title{
  margin-right: 30px;
}

.flex_box {
  display: flex;
}
.title{
  width:60vw;
}
#change_topic{
  padding-left: 0;
  margin-right: 0;
  height:37px;
}
div.title {
  text-align: left;
  margin-left: 40px;
  font-size: 25px;
  color:rgb(52, 52, 52);
}
.topic_circle {
  margin-top: 30px;
  margin-left: 70px;
}
.boxesOfTopic {
  display: flex;
  flex-wrap: wrap;
  width: 68vw;
  margin-left: 20px;
  
}
.boxesOfTopic > div {
  height: 14vw;
  background-color: #c7e9ff04;
  border-style: solid;
  position: relative;
  border-radius: 4px;
  border-color: rgb(213, 230, 245);
  width: 14vw;
  margin: 20px;
  padding-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  font-size: 1.8vw;
  font-weight: 500;
  color: rgb(53, 53, 53);
  font-family: "Noto Serif SC", serif;
}

.topicboxes-route {
  font-size: 1.2vw;
  text-decoration: none;
  border: solid;
  position: absolute;
  bottom: 20px;
  left: 3vw;
  right: 3vw;
}
.collection {
  text-align: left;
}
.collection img {
  height: 30px;
  vertical-align: -20%;
}
.collection a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection a:hover {
  color: rgb(255, 132, 0);
}
.collection a:hover::after {
  opacity: 1;
}
.collection a:active{
  color:orange;
}
.topic_page.title img{
  height:35px;
}
.topic_page.hotlist {
  line-height: 30px;
  font-size: 17px;
  text-align: left;
  border-radius: 20px;
  border-width: 3px;
  padding: 15px;
  width:20vw;
  background-color:rgb(255, 250, 244);
  border-top-color:rgb(255, 247, 238);
  border-left-color:rgb(255, 247, 238);
  border-bottom-color:  antiquewhite;
  border-right-color: antiquewhite;
  border-style: solid;
}
.topic_page.title{
  padding-bottom: 10px;
  font-size: 23px;
}
.topic_page.hotlist ol{
  margin:0;padding:0;
  list-style-position:inside;
  }

</style>
<script>
import search from "../components/SelectSearch.vue";
import powerpoint from "../components/PowerPoint";
import diary from "../components/TopicDisplay.vue";
export default {
  name: "topic",
  components: {
    search,
    diary,
  },
  methods: {
    //this is the function to update the images of books
    updateButton() {
      document
        .getElementsByClassName("selection_un")
        .item(3)
        .setAttribute("class", "selection_ed");
    },
  },
  mounted() {
    this.updateButton();
  },
};
</script>
