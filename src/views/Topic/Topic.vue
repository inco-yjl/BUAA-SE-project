<template>
  <div id="topicpage">
    <search></search>
    <div class="body">
      <div class="flex_box">
        <div class="topic_circle">
          <div class="title">
            <span class="topic_cirle_title">话题广场</span
            ><button @click="randomTopic()">
              <img id="change_topic" src="@/assets/guide/change_topic.png" />
            </button>
          </div>
          <div class="boxesOfTopic">
            <div v-for="topic in topic_circle" :key="topic.id">
              {{ topic.name }}<br /><a
                class="topicboxes-route"
                @click="ToTopicDetail(topic.id)"
                >参与话题</a
              >
            </div>
          </div>
        </div>

        <div class="diarylist">
          <div class="title diary-hit">
            <span
              ><img src="@/assets/title/topic-hit.png" />

              <button
                class="selection_ed"
                id="select-hot-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="hotTopicdt()"
              >
                话题精选动态</button
              >/
              <button
                class="selection_un"
                id="select-follow-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="specifyTopicdt()"
              >
                我关注的话题动态
              </button>
            </span>
          </div>
          <div class="topic-display">
            <div class="block">
              <span class="demonstration">
                <div class="topicdiary">
                  <hr />
                  <div class="diary-display-body">
                    <div class="display-publisher">
                      <a class="userOfdiary" href="/otherusers/1">
                        <img class="iconOfuser" /><span
                          class="nameOfuser"
                        ></span>
                      </a>
                      <span class="publishtime"></span>
                    </div>
                    <div class="topic-origin">
                      <button
                        @click="favor"
                        class="topic-button"
                        :style="{ backgroundColor: bg_color, color: ft_color }"
                        @mouseenter="change()"
                        @mouseleave="goback()"
                      >
                        {{ content }}
                      </button>
                      来自话题<a
                        class="topic-origin-name"
                        href="javascript:void(0)"
                      ></a>
                    </div>
                    <div class="diary-origin-pic">
                      <a class="diary-origin" href="javascript:void(0)"
                        ><img class="diary-pic" />
                      </a>
                    </div>
                    <div class="diarytext">
                      <a
                        class="diarytext-origin"
                        href="/topic/1/comments/1"
                      ></a>
                    </div>
                  </div>
                </div>
                <diary></diary>
                <diary></diary>
              </span>
            </div>
          </div>
          <div class="topic-page-number">
            <el-pagination
              @next-click="handleCurrentChange(this.currentPage + 1)"
              :page-size="3"
              @current-change="handleCurrentChange"
              layout="prev, pager, next, jumper"
              :total="dtamount"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="collection">
          <div class="title">
            <a href="../user/topics">
              <img src="@/assets/guide/star_topic.png" />已关注话题
            </a>
          </div>
          <ul v-if="collection.length > 0" class="collection-list hotlist">
            <li v-for="collect in collection" :key="collect.id">
              <a @click="ToTopicDetail(collect.id)">{{ collect.name }}</a>
            </li>
          </ul>
          <br />
          <div class="title">
            <a href="../user/topics">
              <img src="@/assets/guide/mycomment.png" />已发布动态
            </a>
          </div>
          <ul
            class="collection-list hotlist"
            id="passage-list"
            v-if="passages.length > 0"
          >
            <li v-for="passage in passages" :key="passage.id">
              <a @click="ToTopicDt(passage.id)">{{ passage.text }}</a>
            </li>
          </ul>
        </div>
        <div class="hotlist topic_page">
          <div class="title topic_page">
            <img src="@/assets/guide/topic_trend.png" /><span>话题趋势</span>
          </div>
          <ol>
            <li v-for="(topic, index) in hottopics" :key="topic.id">
              <span v-if="index < 10">&ensp;</span>
              <a @click="ToTopicDetail(topic.id)">{{ topic.name }}</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
button.selection_un {
  background: none;
  outline: none;
  color: rgb(96, 94, 94);
  font-size: 20px;
  border: none;
  transition: opacity 0.2s;
}
button.selection_ed {
  background: none;
  outline: none;
  font-size: 20px;
  border: none;
  color: black;
  font-weight: bold;
}
#topicpage {
  padding-left: 100px;
}
div.body {
  padding-bottom: 100px;
  display: flex;
}
.topic_circle button {
  border-radius: 40px;
  background-color: white;
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
}
.topic_circle button::before {
  position: absolute;
  content: "";
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: -1;
}
.topic_circle button:hover::before {
  top: 0;
  height: 100%;
}

.topic_circle button:active {
  top: 2px;
}
.topic_cirle_title {
  font-weight: bold;
  font-size: 30px;
  margin-left: 20px;
  margin-right: 10px;
}

.hotlist a {
  color: rgb(2, 98, 182);
  font-weight: 500;
  font-size: 16px;
}
.hotlist a:hover {
  background-color: rgb(213, 230, 245);
  font-weight: 600;
}
#passage-list a {
  font-size: 16px;
}
.aside {
  margin-top: 80px;
  margin-left: 10px;
  margin-right: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
  padding-bottom: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
  height:636px;
}
.aside-slide {
  margin-top: 80px;
  margin-left: 10px;
  margin-right: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
  padding-bottom: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
  height:636px;
  position: fixed;
  left: 1220px;
  top: -50px;
  height:636px;
}
#change_topic {
  padding-left: 0;
  margin-right: 0;
  vertical-align: -9px;
  height: 37px;
}
div.title {
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-left: 20px;
  font-size: 25px;
  color: #343434;
}
.hotlist .title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;
}
.boxesOfTopic {
  display: flex;
  flex-wrap: wrap;
  width: 1150px;
}
.boxesOfTopic > div {
  height: 230px;
  background-color: #c7e9ff04;
  border-style: solid;
  position: relative;
  border-radius: 4px;
  border-color: rgb(201, 201, 201);
  width: 230px;
  margin: 20px;
  padding-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  font-size: 26px;
  font-weight: 500;
  color: rgb(53, 53, 53);
  font-family: "Noto Serif SC", serif;
}
.boxesOfTopic a {
  border-radius: 5px;
  color: rgb(77, 157, 243);
  transition: all 0.2s ease;
}
.boxesOfTopic a:hover {
  background: rgb(77, 157, 243);
  border-color: rgb(77, 157, 243);
  color: white;
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
  height: 260px;
  padding-bottom: 0px;
}
.collection img {
  height: 30px;
  vertical-align: -20%;
}
.collection .title a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection .title a:hover {
  color: rgb(2, 98, 182);
}
.collection a:hover::after {
  opacity: 1;
}
.collection a:active {
  color: rgb(0, 166, 255);
}
.collection-list a {
  font-size: 18px;
  font-family: Source Han Sans CN Normal;
}
.collection-list a:hover {
  font-weight: 600;
  color: rgb(2, 98, 182);
}
#more-collection-topic {
  position: relative;
  line-height: 40px;
  top: -20px;
  left: 20px;
}
.topic_page.title img {
  height: 35px;
  margin-left: 27px;
}
.topic_page.hotlist {
  line-height: 24px;
  font-size: 17px;
  text-align: left;
  border-radius: 20px;
  border-width: 4px;
  padding: 15px;
  width: 310px;
  background-color: rgb(255, 250, 244);
  border-top-color: rgb(255, 247, 238);
  border-left-color: rgb(255, 247, 238);
  border-bottom-color: antiquewhite;
  border-right-color: antiquewhite;
  border-style: solid;
  box-shadow: 0px 1px 1px #888888a6;
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
  padding-left: 10px;
  padding-top: 50px;
  width: 1100px;
  margin-left: 20px;
  margin-top: 20px;
}
.topic-display {
  margin-left: 20px;
}
.diary-hit {
  margin-top: 10px;
}
.diary-hit img {
  height: 45px;
}

.topic_circle button {
  border-radius: 40px;
  background-color: white;
  border-color: rgba(128, 128, 128, 0.498);
  outline: none;
  position: relative;
  z-index: 0;
}
.topic_circle button::before {
  position: absolute;
  content: "";
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: -1;
}
.topic_circle button:hover::before {
  top: 0;
  height: 100%;
}

.topic_circle button:active {
  top: 2px;
}
.topic-page-number {
  margin-left: 400px;
  padding-bottom: 40px;
}
.flex_box{
  margin-left: 20px;
  padding-top: 40px;
  padding-left: 10px;
  padding-bottom: 10px;
  width: 1100px;
  margin-top: 80px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.topicdiary {
  width: 980px;
  text-align: left;
}
.diary-display-body {
  display: flex;
  flex-wrap: wrap;
}
.display-publisher {
  margin-top: 0;
  padding-top: 0;
  width: 820px;
}
.publishtime {
  padding-left: 20px;
  font-weight: 400;
  color: rgb(157, 157, 157);
}
.topic-origin {
  position: relative;
  font-size: 18px;
  text-align: left;
  width: 900px;
}
.topic-origin a {
  font-family: Source Han Sans CN Normal;
  color: black;
  text-decoration: none;
  padding-left: 5px;
  text-decoration: none;
}
.topic-origin a:hover {
  font-family: Source Han Sans CN Normal;
  color: rgb(31, 169, 255);
}
.diary-pic {
  height: 200px;
  align-content: middle;
}
div.diary-origin-pic {
  position: relative;
  left: 0;
  margin-left: 20px;
  border-radius: 5px;
  height: 180px;
  width: 270px;
  overflow: hidden;
}
.diary-content {
  display: flex;
  flex-wrap: row;
}
.display-publisher a {
  font-weight: 500;
  font-size: 22px;
  color: black;
  text-decoration: none;
}
.display-publisher a:hover {
  color: rgb(0, 166, 255);
}
.iconOfuser {
  height: 30px;
  margin-right: 5px;
  vertical-align: sub;
}
.nameOfuser {
  font-size: 17px;
  font-family: Source Han Sans CN Normal;
}
.diarytext {
  position: relative;
  top: 0px;
  width: 620px;
  margin-left: 30px;
}
a.diarytext-origin {
  font-size: 16px;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: black;
  transition: 0.3s ease;
}
a.diarytext-origin:hover {
  color: rgb(101, 101, 101);
  text-decoration: none;
}
button {
  outline: none;
  margin-right: 0;
}

.topic-button {
  width: 150px;
  color: #47ff5d;
  background: #f2fef0;
  border: #c4fbc9 solid;
  border-radius: 20px;
  padding: 10px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  -webkit-transform: scale(0.7);
}
</style>
<style>
.el-pager li {
  font-size: 20px;
}
.el-pagination button,
.el-pagination span:not([class*="suffix"]) {
  font-size: 18px;
}
</style>
<script>
import search from "@/components/SelectSearch.vue";
import diary from "@/components/TopicDisplay.vue";
import usericon from "@/assets/user/int.png";
import router from "@/router";
import qs from "qs";
export default {
  name: "topic",
  components: {
    search,
    diary,
  },

  data() {
    var dtamount = 18;
    var dt = [
      {
        user: "yjl",
        passage:
          "既然如何， 我们都知道，只要有意义，那么就必须慎重考虑。\
         所谓前端，关键是前端需要如何写。 一般来讲，我们都必须务必慎重的考虑考虑。\
          前端因何而发生?这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 \
          培根在不经意间这样说过，深窥自己的心，而后发觉一切的奇迹在你自己。带着这句话，我们还要更加慎重的审视这个问题：\
           总结的来说， 我认为， 那么， 一般来讲，我们都必须务必慎重的考虑考虑。 我们不得不面对一个非常尴尬的事实，那就是，\
            本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 现在，解决前端的问题，是非常非常重要的。",
        date: "2022-4-30",
        topic: "寻找春日气息",
        id: 1,
        img: "https://i.imgtg.com/2022/05/10/zSkWF.jpg",
      },
      {
        user: "intp",
        passage: "懒得想了",
        date: "2022-5-10",
        topic: "一起去看海",
        id: 2,
        img: "https://i.imgtg.com/2022/05/10/zSxy6.jpg",
      },
      {
        user: "bot",
        passage: "testtest",
        date: "2002-6-7",
        topic: "游戏中的难忘瞬间",
        id: 3,
        img: "https://i.imgtg.com/2022/05/10/zShob.jpg",
      },
    ];
    var topic_circle = [{}];
    var hottopics = [{}];
    var passages = [{}];
    var collection = [];
    return {
      dt,
      collection,
      passages,
      dtamount,
      topic_circle,
      hottopics,
      liked: false,
      content: "+关注话题",
      bg_color: "#f2fef0",
      ft_color: "#47ff5d",
    };
  },
  methods: {
    favor(e) {
      this.liked = !this.liked;
      if (this.liked) {
        this.content = "已关注";
        this.bg_color = "#6cf57c";
        this.ft_color = "#f2fef0";
      } else {
        this.content = "+关注话题";
        this.bg_color = "#f2fef0";
        this.ft_color = "#6cf57c";
      }
    },
    change() {
      this.bg_color = "#45ff5b";
      this.ft_color = "#f2fef0";
    },
    goback() {
      if (this.liked) {
        this.bg_color = "#6cf57c;";
        this.ft_color = "#f2fef0";
      } else {
        this.bg_color = "#f2fef0";
        this.ft_color = "#6cf57c";
      }
    },
    ToText(HTML) {
      var input = HTML;
      return input
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/[ ]|[&ensp;]/g, '')
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
    },
    randomTopic() {
      this.$axios
        .post("/topic/random")
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("获取到随机话题");
            this.topic_circle = res.data.data;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ToTopicDetail(id) {
      this.$router.push({
        name: "topicdetail",
        query: { id: id },
      });
    },
    ToTopicDt(id) {
      this.$router.push({
        name: "topicdt",
        query: { id: id },
      });
    },
    async updatePassage() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/topic/mypassage", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.passages = [];
            var i;
            var length = 3;
            console.log(res.data.data);
            if (res.data.data.length < 3) length = res.data.data.length;
            for (i = 0; i < length; i++) {
              res.data.data[i].text = this.ToText(res.data.data[i].text);
              if (res.data.data[i].text.length > 14)
                res.data.data[i].text =
                  res.data.data[i].text.substring(0, 14) + "…";
              this.passages.push(res.data.data[i]);
            }
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateHotTopics() {
      var params = {
        num: 10,
      };
      this.$axios
        .post("/topic/hot", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("话题查询成功");
            this.hottopics = res.data.data;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    hotTopicdt() {
      //获取数据
      document
        .getElementById("select-follow-topic-dt")
        .setAttribute("class", "selection_un");
    },
    specifyTopicdt() {
      document
        .getElementById("select-hot-topic-dt")
        .setAttribute("class", "selection_un");
    },
    //this is the function to update the images of books
    updateButton() {
      document
        .getElementsByClassName("selection_un")
        .item(4)
        .setAttribute("class", "selection_ed");
    },
    updateCollection() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/topic/collection", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("收藏查询成功");
            this.collection = [];
            var i,
              l = 3;
            if (res.data.data.length < 3) l = res.data.data.length;
            for (i = 0; i < l; i++) this.collection.push(res.data.data[i]);
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Updatediary() {
      var i = 0;
      var topic_detail_link = [this.dt[0].id, this.dt[1].id, this.dt[2].id];
      for (i = 0; i < 3; i++) {
        document
          .getElementsByClassName("iconOfuser")
          .item(i)
          .setAttribute("src", usericon);
        document
          .getElementsByClassName("display-publisher")
          .item(i)
          .getElementsByClassName("nameOfuser")
          .item(0).innerText = this.dt[i].user;
        var dtText = this.dt[i].passage.substring(0, 300);
        if (this.dt[i].passage.length > 300) dtText = dtText.concat("(……)");
        document
          .getElementsByClassName("diarytext")
          .item(i)
          .getElementsByClassName("diarytext-origin")
          .item(0).innerText = dtText;
        document.getElementsByClassName("publishtime").item(i).innerText =
          this.dt[i].date;
        document
          .getElementsByClassName("topic-origin")
          .item(i)
          .getElementsByClassName("topic-origin-name")
          .item(0).innerText = this.dt[i].topic;
        document
          .getElementsByClassName("diary-origin")
          .item(i)
          .setAttribute("href", "topic/" + i);
        document
          .getElementsByClassName("diary-origin-pic")
          .item(i)
          .getElementsByClassName("diary-pic")
          .item(0)
          .setAttribute("src", this.dt[i].img);
      }
      document
        .getElementsByClassName("topic-origin-name")
        .item(0)
        .addEventListener("click", function () {
          router.push({
            name: "topicdetail",
            query: { id: topic_detail_link[0] },
          });
        });
      document
        .getElementsByClassName("topic-origin-name")
        .item(1)
        .addEventListener("click", function () {
          router.push({
            name: "topicdetail",
            query: { id: topic_detail_link[1] },
          });
        });
      document
        .getElementsByClassName("topic-origin-name")
        .item(2)
        .addEventListener("click", function () {
          router.push({
            name: "topicdetail",
            query: { id: topic_detail_link[2] },
          });
        });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.changeTopicdt();
    },
    changeTopicdt() {},
  },
  mounted() {
    this.Updatediary();
    this.updateButton();
    this.randomTopic();
    this.updateCollection();
    this.updatePassage();
    this.updateHotTopics();
    window.onscroll = function (e) {
      var vertical = document.getElementsByClassName("flex_box").item(0);
      var pos = vertical.getBoundingClientRect();
      console.log(pos.top);
      if (pos.top < 29) {
        var aside = document.getElementsByClassName("aside").item(0);
        if (aside != null) aside.setAttribute("class", "aside-slide");
      } else {
        var aside = document.getElementsByClassName("aside-slide").item(0);
        if (aside != null) aside.setAttribute("class", "aside");
      }
    };
  },
};
</script>
