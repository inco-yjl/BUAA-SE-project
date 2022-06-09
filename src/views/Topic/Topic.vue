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
          <div class="topic-display" v-for="(dt, index) in dts" :key="index">
            <div class="block">
              <span class="demonstration">
                <div class="topicdiary">
                  <hr />
                  <div class="diary-display-body">
                    <div class="display-publisher">
                      <a class="userOfdiary" href="/otherusers/1">
                        <img class="iconOfuser" :src="dt.usericon" /><span
                          class="nameOfuser"
                          >{{ dt.user }}</span
                        >
                      </a>
                      <span class="normal">&ensp;来自话题</span>
                      <span class="normal">
                      <a
                        class="topic-origin-name"
                        @click="ToTopicDetail(dt.topicid)"
                        >{{ dt.topic }}</a
                      ></span>
                      <span class="normal">{{ dt.date }}</span>
                    </div>
                    <div class="diarytext">
                      <a class="diarytext-origin" @click="ToTopicDt(dt.id)">{{
                        dt.passage
                      }}</a>
                    </div>
                    <div class="diary-origin-pic">
                      <a class="diary-origin" href="javascript:void(0)"
                        ><img
                          v-if="dt.hasimg"
                          class="diary-pic"
                          :style="dt.thestyle"
                          :src="dt.img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div class="topic-page-number">
            <el-pagination
              :page-size="3"
              @current-change="changeTopicdt"
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
  color: rgb(2, 98, 182);
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
  height: 700px;
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
  height: 636px;
  position: fixed;
  left: 1220px;
  top: -50px;
  height: 700px;
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
  position: relative;
  left: -17px;
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
  margin-top: 12px;
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
.flex_box {
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
  width: 500px;
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
  top: -50px;
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
.display-publisher{
  color: rgb(157, 157, 157);
    margin-bottom: 10px;  margin-bottom: 10px;
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
a.topic-origin-name {
  color: rgb(157, 157, 157);
  font-weight: 500;
  font-size:16px;
  color: black;
  text-decoration: none;
}
a.topic-origin-name :hover {
  color: rgb(0, 166, 255);
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
import qs from "qs";
export default {
  name: "topic",
  components: {
    search,
  },

  data() {
    var topic_circle = [{}];
    var hottopics = [{}];
    var passages = [{}];
    var collection = [];
    return {
      dts: [],
      collectDt: [],
      hotdt: [],
      allDts: [],
      collection,
      hotamount:0,
      collectamount:0,
      passages,
      dtamount:0,
      topic_circle,
      hottopics,
      liked: false,
      content: "+关注话题",
      bg_color: "#f2fef0",
      ft_color: "#47ff5d",
    };
  },
  methods: {
    changeTopicdt(currentPage) {
      this.dts = [];
      var length = this.dtNum - (currentPage - 1) * 3;
      if (length > 3) length = 3;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.dts.push(this.allDts[currentPage * 3 - 3 + i]);
      }
    },
    favor(id) {
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
        .replace(/[ ]|[&ensp;]/g, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
    },
    getimgsrc(htmlstr) {
      let reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/g;
      let arr = [];
      var tem;
      while ((tem = reg.exec(htmlstr))) {
        arr.push(tem[2]);
      }
      return arr;
    },
    displayIcon(url) {
      var icon = "https://i.imgtg.com/2022/05/08/zDzsM.png";
      if (url !== "") {
        var len = this.$axios.defaults.baseURL.length;
        icon = this.$axios.defaults.baseURL.substring(0, len - 4) + url;
      }
      console.log(icon);
      return icon;
    },
    getStyle(url) {
      if (!url) return;
      var img = new Image();
      img.src = url;
      if (img.width / img.height > 1.5) return "height:180px;width:auto";
      else return "width:270px;height:auto";
    },
    requestHotDt() {
      this.$axios
        .post("/topic/hotpassage")
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("热动态查询成功");
            console.log(res.data.data);
            var passages = res.data.data;
            this.hotamount = passages.length;
            this.dtamount = this.hotamount;
            this.hotdt = [];
            for (var i = 0; i < passages.length; i++) {
              var hasimg = true;
              var imgs = this.getimgsrc(passages[i].content);
              if (imgs.length == 0) hasimg = false;
              passages[i].content = this.ToText(passages[i].content);
              if (passages[i].content.length > 170) {
                passages[i].content =
                  passages[i].content.substring(0, 170) + "…";
              }
              this.hotdt.push({
                usericon: this.displayIcon(passages[i].usericon),
                user: passages[i].username,
                userid: passages[i].userid,
                date: passages[i].date.substring(0,10),
                hasimg: hasimg,
                img: imgs[0],
                topic: passages[i].topic,
                topicid: passages[i].topicid,
                thestyle: this.getStyle(imgs[0]),
                id: passages[i].id,
                passage: passages[i].content,
              });
            }
            this.allDts = this.hotdt;
            this.changeTopicdt(1);
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    requestCollectDt() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/topic/collectpassage",qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("关注查询成功");
            console.log(res.data.data);
            var passages = res.data.data;
            this.collectDt = [];
            this.collectamount = passages.length;
            for (var i = 0; i < passages.length; i++) {
              var hasimg = true;
              var imgs = this.getimgsrc(passages[i].content);
              if (imgs.length == 0) hasimg = false;
              passages[i].content = this.ToText(passages[i].content);
              if (passages[i].content.length > 170) {
                passages[i].content =
                  passages[i].content.substring(0, 170) + "…";
              }
              this.collectDt.push({
                usericon: this.displayIcon(passages[i].usericon),
                user: passages[i].username,
                userid: passages[i].userid,
                date: passages[i].date.substring(0,10),
                hasimg: hasimg,
                img: imgs[0],
                topic: passages[i].topic,
                topicid: passages[i].topicid,
                thestyle: this.getStyle(imgs[0]),
                id: passages[i].id,
                passage: passages[i].content,
              });
            }
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
      //更换标签时获取数据
      document
        .getElementById("select-follow-topic-dt")
        .setAttribute("class", "selection_un");
      this.allDts = this.hotdt;
      this.dtamount = this.hotamount;
      this.changeTopicdt(1);
    },
    specifyTopicdt() {
      document
        .getElementById("select-hot-topic-dt")
        .setAttribute("class", "selection_un");
      this.allDts = this.collectDt;
      this.dtamount =this.collectamount;
      this.changeTopicdt(1);
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

    changeTopicdt(currentPage) {
      this.dts = [];
      var length = this.dtamount - (currentPage - 1) * 3;
      if (length > 3) length = 3;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.dts.push(this.allDts[currentPage * 3 - 3 + i]);
      }
      console.log(this.dts)
    },
  },
  mounted() {
    this.updateButton();
    this.randomTopic();
    this.updateCollection();
    this.updatePassage();
    this.updateHotTopics();
    this.requestHotDt();
    this.requestCollectDt();
    window.onscroll = function (e) {
      var vertical = document.getElementsByClassName("flex_box").item(0);
      var pos = vertical.getBoundingClientRect();
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
