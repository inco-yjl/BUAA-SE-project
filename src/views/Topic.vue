<template>
  <div>
    <search></search>

    <div class="topic_circle">
      <div class="title">
        <span class="topic_cirle_title">话题广场</span
        ><button onclick="">
          <img id="change_topic" src="@/assets/guide/change_topic.png" />
        </button>
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
              <img src="@/assets/guide/star_topic.png" />已关注话题
            </a>
          </div>
          <div></div>
          <br />
          <div class="hotlist topic_page">
            <div class="title topic_page">
              <img src="@/assets/guide/topic_trend.png" /><span>话题趋势</span>
            </div>
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
    <div class="diarylist">
      <div class="title diary-hit">
        <span><img src="@/assets/title/topic-hit.png" />话题精选动态</span>
      </div>
      <div class="topic-display">
        <diary></diary>
        <diary></diary>
        <diary></diary>
      </div>
    </div>
  </div>
</template>


<style scoped>
button {
  border-radius: 40px;
  background-color: white;
  border-color: rgba(128, 128, 128, 0.498);
  outline: none;
  position: relative;
  z-index: 0;
}
button::before {
  position: absolute;
  content: "";
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: -1;
}
button:hover::before {
  top: 0;
  height: 100%;
}
button:active {
  top: 2px;
}
.topic_cirle_title {
  margin-right: 30px;
}

.flex_box {
  display: flex;
}
#change_topic {
  padding-left: 0;
  margin-right: 0;
  height: 37px;
}
div.title {
  text-align: left;
  margin-left: 40px;
  font-size: 25px;
  color: rgb(52, 52, 52);
}
.topic_circle {
  margin-top: 30px;
  margin-left: 70px;
}
.boxesOfTopic {
  display: flex;
  flex-wrap: wrap;
  width: 1150px;
  margin-left: 20px;
}
.boxesOfTopic > div {
  height: 230px;
  background-color: #c7e9ff04;
  border-style: solid;
  position: relative;
  border-radius: 4px;
  border-color: rgb(213, 230, 245);
  width: 230px;
  margin: 20px;
  padding-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: rgb(53, 53, 53);
  font-family: "Noto Serif SC", serif;
}
.topicboxes-route {
  font-size: 22px;
  text-decoration: none;
  border: solid;
  position: absolute;
  bottom: 20px;
  left: 40px;
  right: 40px;
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
.collection a:active {
  color: orange;
}
.topic_page.title img {
  height: 35px;
  margin-left: 27px;
}
.topic_page.hotlist {
  line-height: 26px;
  font-size: 17px;
  text-align: left;
  border-radius: 20px;
  border-width: 3px;
  padding: 15px;
  width: 340px;
  background-color: rgb(255, 250, 244);
  border-top-color: rgb(255, 247, 238);
  border-left-color: rgb(255, 247, 238);
  border-bottom-color: antiquewhite;
  border-right-color: antiquewhite;
  border-style: solid;
}
.topic_page.title {
  padding-bottom: 10px;
  font-size: 23px;
}
.topic_page.hotlist ol {
  margin: 0;
  padding: 0;
  list-style-position: inside;
}
.diarylist {
  width: 1580px;
}
.topic-display {
  margin-left: 100px;
}
.diary-hit {
  padding-left: 60px;
  margin-top: 10px;
}
.diary-hit img {
  height: 45px;
}
</style>
<script>
import search from "../components/SelectSearch.vue";
import diary from "../components/TopicDisplay.vue";
import usericon from "@/assets/user/int.png";
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
        .item(4)
        .setAttribute("class", "selection_ed");
    },
    Updatediary() {
      document
        .getElementsByClassName("iconOfuser")
        .item(0)
        .setAttribute("src", usericon);
      document.getElementsByClassName("nameOfuser").item(0).innerHTML =
        "yjlintp" + ":";
      document
        .getElementsByClassName("diarytext")
        .item(0)
        .getElementsByClassName("diarylist")
        .item(0).innerHTML = "?";
    },
  },
  mounted() {
    this.Updatediary();
    this.updateButton();
  },
};
</script>
