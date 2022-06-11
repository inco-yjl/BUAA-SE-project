<template>
  <div id="topicdetail">
    <search></search>
    <div id="topic-detail-body">
      <div>
        <div class="introOfTopic">
          <div class="title">
            <img src="@/assets/title/topic-intro.png" />
            <span :v-if="loadSuccess" class="topic-name">
              {{ topic.name }}
              <button
                :v-if="loadSuccess"
                @click="favor"
                class="topic-button"
                :style="{ backgroundColor: bg_color, color: ft_color }"
                @mouseenter="change()"
                @mouseleave="goback()"
              >
                {{ content }}
              </button></span
            >
          </div>
          <div class="boxesOfTopic" :v-if="loadSuccess">
            <p id="topic-intro-info">
              {{ topic.passage }}篇内容·{{ topic.people }}人关注
            </p>
            <p id="topic-intro-content" v-html="topic.intro"></p>
          </div>
          <div class="topic-detail-interact">
            <button @click="share" class="share-topic">
              <img src="@/assets/guide/share.png" /><span>分享话题</span>
            </button>
            <button class="write-dt" @click="writeTopicDt">
              <img src="@/assets/guide/write_dt.png" /><span>发布动态</span>
            </button>
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
                热门</button
              >/
              <button
                class="selection_un"
                id="select-new-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="newTopicdt()"
              >
                最新
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
                      <span class="publishtime">{{ dt.date }}</span>
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
              @current-change="changeTopicdt"
              :page-size="3"
              layout="prev, pager, next, jumper"
              :total="dtNum"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="collection">
          <div class="colletion-list-1">
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
          </div>
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
        <div></div>
        <br />
      </div>
    </div>
  </div>
</template>


<style scoped>
#topic-detail-body {
  width: 1580px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
.topic-name {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
}
button.selection_un {
  background: none;
  outline: none;
  color: rgb(96, 94, 94);
  font-size: 20px;
  border: none;
  transition: opacity 0.2s;
}
.topic-detail-interact button {
  position: relative;
  left: 750px;
  background: none;
  outline: none;
  font-size: 18px;
  border: none;
  transition: opacity 0.2s;
}
.topic-detail-interact button :hover {
  text-decoration: underline;
}
button.selection_ed {
  background: none;
  outline: none;
  font-size: 20px;
  border: none;
  color: black;
  font-weight: bold;
}
.title img {
  vertical-align: -10px;
  margin-right: 5px;
  height: 40px;
}
#topicdetail {
  width: 1600px;
  padding-left: 100px;
}

.hotlist a {
  color: rgb(2, 98, 182);
  font-weight: 500;
}

.hotlist a:hover {
  background-color: rgb(213, 230, 245);
  color: rgb(2, 98, 182);
  font-weight: 600;
}
.aside {
  position: relative;
  margin-top: 80px;
  margin-left: 10px;
  margin-right: 0;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
  height: 350px;
  width: 400px;
}
.aside-slide {
  margin-top: 80px;
  margin-left: 10px;
  margin-right: 0;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
  height: 350px;
  position: fixed;
  left: 1200px;
  width: 400px;
  top: -50px;
}
div.title {
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-left: 20px;
  font-size: 25px;
  color: rgb(52, 52, 52);
}
.introOfTopic {
  padding-top: 20px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 20px;
  margin-top: 80px;
  width: 1100px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
#topic-intro-content {
  margin-top: 15px;
  margin-left: 20px;
  flex-wrap: wrap;
  width: 900px;
  font-family: Source Han Sans CN Normal;
  font-size: 20px;
}
#topic-intro-info {
  margin-left: 25px;
  margin-top: 10px;
  font-size: 18px;
  color: rgb(179, 179, 179);
}
.collection {
  text-align: left;
  padding-bottom: 30px;
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
.colletion-list-1{
  height:135px;
}
.collection-list a {
  font-size: 17.5px;
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
#passage-list a {
  font-size: 16px;
}
.topic_page.title img {
  height: 35px;
  margin-left: 27px;
}
.topic_page.hotlist {
  line-height: 28px;
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
  margin-top: 20px;
  width: 1100px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-right: 100px;
  padding-bottom: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.topic-display {
  margin-bottom: 50px;
}
.diary-hit {
  margin-top: 10px;
}
.diary-hit img {
  height: 45px;
}
.topic-detail-interact img {
  height: 20px;
}
.topic-page-number {
  margin-left: 400px;
  padding-bottom: 40px;
}

.topicdiary {
  text-align: left;
}
.diary-display-body {
  display: flex;
  flex-wrap: wrap;
  height: 220px;
  padding-left: 30px;
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
.diary-pic {
  align-content: middle;
}
div.diary-origin-pic {
  position: relative;
  left: 0;
  margin-top: 20px;
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
  width: 30px;
  border-radius: 20px;
  margin-right: 5px;
  vertical-align: sub;
}
.nameOfuser {
  font-size: 17px;
  font-family: Source Han Sans CN Normal;
}
.diarytext {
  width: 500px;
  margin-left: 30px;
}
a.diarytext-origin {
  position: relative;
  top: 36px;
  font-size: 17px;
  text-decoration: none;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: 600;
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
import qs from "qs";
export default {
  name: "topic",
  components: {
    search,
    diary,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.requestHotDt();
    });
  },
  data() {
    var id = this.$route.query.id; //根据id来询问
    var topic;
    var loadSuccess = false;
    var hotdt = [];
    var newdt = [];
    var collection = [];
    var dts = hotdt;
    var passages = [{}];
    return {
      id,
      dts,
      dtNum: 0,
      allDts: [],
      topic,
      newdt,
      hotdt,
      liked: false,
      loadSuccess,
      collection,
      passages,
      content: "+关注话题",
      bg_color: "#f2fef0",
      ft_color: "#47ff5d",
    };
  },
  methods: {
    share() {
      var domUrl = document.createElement("input");
      domUrl.value = window.location.href;
      domUrl.id = "creatDom";
      document.body.appendChild(domUrl);
      domUrl.select(); // 选择对象
      document.execCommand("Copy", "false", null);
      let creatDom = document.getElementById("creatDom");
      creatDom.parentNode.removeChild(creatDom);
      this.$message({
        message: "复制成功",
        type: "success",
      });
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
    favor() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.$message.error("请先登录！");
        return;
      }
      this.liked = !this.liked;
      if (this.liked) this.clickcollect();
      else this.clickuncollect();
      this.changeCollectButton();
    },
    changeTopicdt(currentPage) {
      this.dts = [];
      var length = this.dtNum - (currentPage - 1) * 3;
      if (length > 3) length = 3;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.dts.push(this.allDts[currentPage * 3 - 3 + i]);
      }
    },
    getStyle(url) {
      if (!url) return;
      var img = new Image();
      img.src = url;
      if (img.width / img.height > 1.5) return "height:180px;width:auto";
      else return "width:270px;height:auto";
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
              if (res.data.data[i].text.length === 0) continue;
              if (res.data.data[i].text.length > 18)
                res.data.data[i].text =
                  res.data.data[i].text.substring(0, 18) + "…";
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
    changeCollectButton() {
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
    clickcollect() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.$message.error("请先登录！");
        return;
      }
      var params = {
        topic_id: this.id,
        user_id: this.$store.getters.getUser.user.id,
      };
      console.log("user:" + this.$store.getters.getUser.user.id);
      this.$axios
        .post("/topic/collect", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.$message({
              message: res.data.msg,
              type: "success",
            });
            this.liked = true;
            this.topic.people++;
          } else {
            this.$message.error("收藏失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ToTopicDt(id) {
      this.$router.push({
        name: "topicdt",
        query: { id: id },
      });
    },
    clickuncollect() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.$message.error("请先登录！");
        return;
      }
      var params = {
        topic_id: this.id,
        user_id: this.$store.getters.getUser.user.id,
      };
      console.log("user:" + this.$store.getters.getUser.user.id);
      this.$axios
        .post("/topic/uncollect", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.$message({
              message: res.data.msg,
              type: "success",
            });
            this.liked = false;
            this.topic.people--;
          } else {
            this.$message.error("取消收藏失败");
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
    hotTopicdt() {
      //更换标签时获取数据
      document
        .getElementById("select-new-topic-dt")
        .setAttribute("class", "selection_un");
      this.allDts = this.hotdt;
      this.changeTopicdt(1);
    },
    requestHotDt() {
      var params = {
        topic_id: this.id,
      };
      this.$axios
        .post("/topic/hot_article", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("热动态查询成功");

            var passages = res.data.data;
            this.dtNum = passages.length;
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
                date: passages[i].date,
                hasimg: hasimg,
                img: imgs[0],
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
    requestNewDt() {
      var params = {
        topic_id: this.id,
      };
      this.$axios
        .post("/topic/new_article", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("详情查询成功");
            var passages = res.data.data;
            console.log(res.data.data);
            this.newdt = [];
            for (var i = 0; i < passages.length; i++) {
              var hasimg = true;
              var imgs = this.getimgsrc(passages[i].content);
              if (imgs.length == 0) hasimg = false;
              passages[i].content = this.ToText(passages[i].content);
              if (passages[i].content.length > 170) {
                passages[i].content =
                  passages[i].content.substring(0, 170) + "…";
              }
              this.newdt.push({
                usericon: this.displayIcon(passages[i].usericon),
                user: passages[i].username,
                userid: passages[i].userid,
                date: passages[i].date,
                hasimg: hasimg,
                img: imgs[0],
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
    async updateContent() {
      var params = {
        topic_id: this.id,
        user_id: this.$store.getters.getUser.user.id,
      };
      console.log("user:" + this.$store.getters.getUser.user.id);
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
    //this is the function to update the images of books
    updateButton() {
      document
        .getElementsByClassName("selection_un")
        .item(4)
        .setAttribute("class", "selection_ed");
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
    writeTopicDt() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.$message.error("请先登录！");
        return;
      }

      this.$router.push({
        name: "topicDtEditor",
        query: {
          id: this.id,
        },
      });
    },
    newTopicdt() {
      console.log("new");
      document
        .getElementById("select-hot-topic-dt")
        .setAttribute("class", "selection_un");
      this.allDts = this.newdt;
      this.changeTopicdt(1);
    },
  },
  mounted() {
    this.$parent.navigate = true;
    this.$nextTick(() => {
      this.updateContent();
      this.updateCollection();
      this.updatePassage();
      this.requestHotDt();
      this.requestNewDt();
    });
    window.onscroll = function (e) {
      var vertical = document.getElementsByClassName("introOfTopic").item(0);
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
