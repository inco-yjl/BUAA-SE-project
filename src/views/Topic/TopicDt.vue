<template>
  <div class="passage">
    <search></search>
    <div class="passage-body">
      <el-dropdown class="more-action">
        <span class="el-dropdown-link">
          <img src="@/assets/guide/more.png" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><a @click="deleteArticle()">删除</a></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <el-dialog
        title="删除文章"
        :visible.sync="trydelete"
        width="300px"
        @close="trydelete = false"
      >
        <span>确认要删除？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="trydelete = false">取 消</el-button>
          <el-button type="primary" @click="deleteNow()">确 定</el-button>
        </span>
      </el-dialog>
      <div class="content-body">
        <div class="passage-info">
          <div v-if="loadSuccess">
            <a class="userOfpassage" href="/otherusers/1">
              <img class="iconOfuser" :src="userIcon" />
              <span class="nameOfuser">{{ passage.username }}</span>
            </a>
            <span class="normal">&ensp;在话题</span>
            <a class="comment-book-name">&ensp;⌈{{ source.name }}⌋&ensp;</a>
            <span class="normal">下发布了动态&ensp;{{ passage.date }}</span>
          </div>
        </div>
        <div class="passage-text" v-html="passage.content"></div>
        <div class="user-buttons">
          <div id="like-button">
            <button v-if="like" @click="clickunlike()">
              <img src="@/assets/guide/liked.png" />
            </button>
            <button v-else @click="clicklike()">
              <img src="@/assets/guide/like.png" />
            </button>
            <span v-if="loadSuccess">{{ passage.like }}</span>
          </div>
          <div id="reply-button">
            <button @click="clickreply()">
              <img src="@/assets/guide/reply.png" />
            </button>
            <span v-if="loadSuccess">{{ passage.reply }}</span>
          </div>
          <button @click="share">
            <img id="like" src="@/assets/guide/share.png" />
          </button>
        </div>
      </div>
      <div class="aside">
        <div class="source-dt">
          <a class="source-item" @click="ToTopicDetail(source.id)">
            <img class="source-img" src="@/assets/title/topic-intro.png" />
            <div class="source-info">
              <span>{{ source.name }}</span>
              <div id="topic-intro-info" v-if="loadSuccess">
                {{ source.num }}篇内容·{{ source.collect }}人关注
              </div>
            </div>
          </a>
        </div>
        <div class="recommend-passage">
          <div class="title">该话题推荐动态</div>
          <ul class="recommend-list">
            <li v-for="passage in recommends" :key="passage.id">
              <a @click="ToTopicDt(passage.id)">{{ passage.title }}</a>
            </li>
          </ul>
        </div>
        <div class="recommend-passage">
          <div class="title">该用户其他动态</div>
          <ul class="recommend-list">
            <li v-for="passage in passages" :key="passage.id">
              <a @click="ToTopicDt(passage.id)">{{ passage.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="Toreply === false" class="reply-input">
        <el-input
          type="textarea"
          placeholder="请输入回复"
          rows="6"
          v-model="textarea"
          maxlength="100"
          show-word-limit
        >
        </el-input>
        <el-button @click="Topreply()">提交</el-button>
      </div>
      <div class="reply-block">
        <div class="title">回复</div>
        <div
          class="reply-display"
          v-for="(reply, index) in replys"
          :key="reply.reply_id"
        >
          <hr />
          <div class="display-publisher">
            <a class="userOfreply" @click="toUser(reply.author_id)">
              <img class="iconOfuser" :src="displayIcon(reply.usericon)" /><span
                class="nameOfuser"
                >{{ reply.author_name }}</span
              >
            </a>
          </div>
          <div class="reply-content">
            {{ reply.text }}
            <button @click="replyTo(index, reply)">
              <img src="@/assets/guide/sreply.png" />
            </button>
            <div
              class="sreply-display"
              v-for="sreply in reply.children"
              :key="sreply.reply_id"
            >
              <div class="display-publisher">
                <a class="userOfreply" @click="toUser(sreply.author_id)">
                  <img
                    class="iconOfuser"
                    :src="displayIcon(sreply.usericon)"
                  /><span class="nameOfuser">{{ sreply.author_name }}</span>
                </a>
              </div>
              <div class="reply-content">
                <a class="replied-user" @click="toUser(sreply.author_id)">
                  @{{ sreply.author_name }}
                </a>
                {{ sreply.text
                }}<button @click="replyTo(index, sreply)">
                  <img src="@/assets/guide/sreply.png" />
                </button>
              </div>
            </div>
          </div>
          <div
            v-if="replyinput[index].ifreply === true"
            class="second-reply-input"
          >
            <el-input
              type="textarea"
              :placeholder="replyinput[index].replyed_name"
              rows="6"
              v-model="textarea2"
              maxlength="100"
              show-word-limit
            >
            </el-input>
            <el-button @click="Secondreply(replyinput[index].replyed_id)"
              >提交</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import search from "@/components/SelectSearch.vue";
import qs from "qs";
export default {
  components: {
    search,
  },
  data() {
    var id = this.$route.query.id;
    var source = {};
    var passage = {};
    var replys = [];
    var like = false;
    var Toreply = false;
    return {
      id,
      recommends: [],
      userIcon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
      passage,
      passages: [],
      source,
      like,
      trydelete: false,
      Toreply,
      replys,
      text: "",
      textarea: "",
      loadSuccess: false,
      replyinput: [],
      textarea2: "",
    };
  },
  mounted() {
    this.updateContent();
    this.updateLike();
    this.updateReply();
    window.onscroll = function (e) {
      var vertical = document.getElementsByClassName("content-body").item(0);
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
    Secondreply(replyed_id) {
      var params = {
        article_id: this.id,
        author_id: this.$store.getters.getUser.user.id,
        text: this.textarea2,
        reply_to: replyed_id,
      };
      console.log(replyed_id);
      this.$axios
        .post("/passage/reply", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.reply = res.data.data;
            this.updateReply();
            this.textarea2 = "";
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    replyTo(index, reply) {
      console.log(reply);
      if (
        this.replyinput[index].ifreply === true &&
        this.replyinput[index].replyed_id === reply.reply_id &&
        this.replyinput[index].replyed_name === "@" + reply.author_name
      ) {
        this.replyinput[index].ifreply = false;
      } else {
        for(var i=0;i<this.replyinput.length;i++){
          this.replyinput[i].ifreply = false;
        }
        this.replyinput[index].replyed_id = reply.reply_id;
        this.replyinput[index].replyed_name = "@" + reply.author_name;
        this.replyinput[index].ifreply = true;
      }
      console.log(this.replyinput[index]);
    },
    updateReply() {
      var params = {
        article_id: this.id,
      };
      this.$axios
        .post("/passage/get_reply", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data.data);
            this.replys = res.data.data;
            for (var i = 0; i < this.replys.length; i++)
              this.replyinput.push({
                ifreply: false,
                replyed_id: 0,
                replyed_name: "",
              });
          } else {
            this.$message.error(res.data.msg);
          }
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
    Topreply() {
      var params = {
        article_id: this.id,
        author_id: this.$store.getters.getUser.user.id,
        text: this.textarea,
        reply_to: 0,
      };
      this.$axios.post("/passage/reply", qs.stringify(params)).then((res) => {
        if (res.data.errno === 0) {
          this.reply = res.data.data;
          this.$message({
            type: "success",
            message: res.data.msg,
          });
          this.updateReply();
          this.textarea = "";
        } else {
          this.$message.error(res.data.msg);
        }
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
    deleteArticle() {
      var author = this.passage.user_id;
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.$message.error("请先登录！");
        return;
      }
      var user = this.$store.getters.getUser.user;
      var isadmin;
      var params = {
        user_id: user.id,
      };
      this.$axios
        .post("/user/isadmin", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            isadmin = parseInt(res.data.data);
            console.log(isadmin);
            if (user.id != author && isadmin === 0) {
              this.$message.error("你没有权限！");
              return;
            }
            this.trydelete = true;
          } else {
            this.$message.error("举报失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteNow() {
      var params = {
        article_id: this.id,
      };
      this.$axios
        .post("/passage/delete", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.$message({
              type: "success",
              message: res.data.msg,
            });
            this.$router.push({ name: "topic" });
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateRelate() {
      var params = {
        user_id: this.passage.user_id,
      };
      this.$axios
        .post("/topic/mypassage", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("other");
            console.log(res.data.data);
            this.passages = [];
            var i;
            var length = 3;
            if (res.data.data.length < 3) length = res.data.data.length;
            for (i = 0; i < length; i++) {
              if (res.data.data[i].id != this.id) {
                res.data.data[i].text = this.ToText(res.data.data[i].text);
                if (res.data.data[i].text.length > 18) {
                  res.data.data[i].text =
                    res.data.data[i].text.substring(0, 18) + "…";
                }
                this.passages.push(res.data.data[i]);
              }
            }
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      params = {
        topic_id: this.source.id,
      };

      this.$axios
        .post("/topic/recommend", qs.stringify(params))
        .then((res) => {
          console.log(res.data);
          if (res.data.errno === 0) {
            this.recommends = [];
            var i;
            var length = 3;
            if (res.data.data.length < 3) length = res.data.data.length;
            for (i = 0; i < length; i++) {
              if (res.data.data[i].id != this.id) {
                res.data.data[i].title = this.ToText(res.data.data[i].title);
                if (res.data.data[i].title.length > 18) {
                  res.data.data[i].title =
                    res.data.data[i].title.substring(0, 18) + "…";
                }
                this.recommends.push(res.data.data[i]);
              }
            }
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateIcon() {
      if (this.passage.icon === "") return;
      var len = this.$axios.defaults.baseURL.length;
      this.userIcon =
        this.$axios.defaults.baseURL.substring(0, len - 4) + this.passage.icon;
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
    async updateContent() {
      var params = {
        article_id: this.id,
      };
      this.$axios
        .post("/passage/dt", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data.data);
            this.passage = res.data.data.passage;
            this.source = res.data.data.resource;
            this.source.num = parseInt(this.source.num);
            this.source.collect = parseInt(this.source.collect);
            this.passage.date = this.passage.date.substring(0, 10);
            this.passage.like = parseInt(this.passage.like);
            this.passage.reply = parseInt(this.passage.reply);
            this.updateIcon();
            this.updateRelate();
            this.loadSuccess = true;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clicklike() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.$message.error("请先登录");
        return;
      }
      this.passage.like++;
      this.like = true;
      var user = this.$store.getters.getUser.user;
      var params = {
        user_id: user.id,
        article_id: this.id,
      };
      this.$axios
        .post("/passage/like", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data.msg);
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clickunlike() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.$message.error("请先登录");
        return;
      }
      this.passage.like--;
      this.like = false;
      var user = this.$store.getters.getUser.user;
      var params = {
        user_id: user.id,
        article_id: this.id,
      };
      this.$axios
        .post("/passage/unlike", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data.msg);
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clickreply() {
      if (this.Toreply === false) this.Toreply = true;
      else this.Toreply = false;
    },
    updateLike() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      )
        return;
      var user = this.$store.getters.getUser.user;
      var params = {
        user_id: user.id,
        article_id: this.id,
      };
      this.$axios
        .post("/passage/iflike", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            var iflike = parseInt(res.data.data);
            if (iflike === 1) this.like = true;
            else this.like = false;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toUser(id) {
      this.$router.push({
        name: "user",
        query: { id: id },
      });
    },
  },
};
</script>
<style scoped>
.passage {
  width: 1600px;
  padding-left: 100px;
}
.passage-body {
  width: 1580px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
.content-body {
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 35px;
  margin-top: 80px;
  width: 1100px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.iconOfuser {
  margin-right: 5px;
  vertical-align: sub;
}
.nameOfuser {
  font-family: Source Han Sans CN Normal;
  font-size: 17px;
}
.passage-info {
  margin-top: 30px;
  color: rgb(157, 157, 157);
  display: flex;
}
.rate {
  position: relative;
  top: 8px;
  margin-left: 20px;
}
.passage-info a {
  font-weight: 500;
  font-size: 16px;
  color: black;
  text-decoration: none;
}
.passage-info a:hover {
  color: rgb(0, 166, 255);
}
.passage-text {
  margin-top: 10px;
  padding-bottom: 100px;
  padding-left: 30px;
  padding-right: 60px;
}
.passage-text >>> img {
  display: block;
  margin-left: 12px;
  width: 920px;
  height: auto;
  border-radius: 3px;
}
.passage-text >>> * {
  font-size: 17px !important;
  line-height: 32px;
}

.source-item {
  display: flex;
  cursor: pointer;
}
.source-img {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}
.source-info {
  margin-top: 20px;
  font-size: 16px;
  line-height: 30px;
}
.source-info span {
  font-size: 20px;
  position: relative;
  top: -15px;
  font-weight: 800;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
#topic-intro-info {
  margin-left: 25px;
  font-size: 18px;
  color: rgb(150, 150, 150);
}
.source-dt a {
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: #dfdede55;
  margin-top: 10px;
  width: 340px;
}
.source-dt a:hover {
  background-color: #91919155;
}
.user-buttons {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-left: 700px;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.user-buttons img {
  height: 30px;
}
.user-buttons button {
  border-radius: 40px;
  background: none;
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
  margin-left: 20px;
}
.user-buttons button::before {
  position: absolute;
  content: "";
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: -1;
}
.user-buttons button:hover::before {
  top: 0;
  height: 100%;
}

.user-buttons button:active {
  top: 2px;
}
#like-button {
  width: 100px;
  display: flex;
}
#reply-button {
  width: 100px;
  display: flex;
}
.reply-input {
  margin-top: 30px;
  width: 860px;
  margin-left: 120px;
  margin-right: 150px;
  border-radius: 6px;
  box-shadow: 0px 2px 3px #888888a6;
}
.reply-block {
  margin-top: 60px;
  width: 1100px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.reply-block a:hover {
  color: rgb(0, 166, 255);
}
a.replied-user {
  color: rgb(0, 166, 255);
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
.reply-content {
  margin-left: 20px;
  padding-bottom: 20px;
}
.reply-content {
  margin-left: 20px;
  padding-bottom: 20px;
}

.reply-content img {
  height: 20px;
}
.reply-content button {
  border-radius: 40px;
  background: none;
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
  margin-left: 20px;
}
.reply-content button::before {
  position: absolute;
  content: "";
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: -1;
}
.reply-content button:hover::before {
  top: 0;
  height: 100%;
}

.reply-content button:active {
  top: 2px;
}
.sreply-display {
  margin-top: 5px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  background-color: #dfdede55;
}
.aside {
  margin-top: 80px;
  margin-left: 10px;
  margin-right: 0;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;
  border-style: solid;
  position: absolute;
  left: 1200px;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
  height: 490px;
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
  height: 490px;
  position: fixed;
  left: 1200px;
  top: -50px;
}
.recommend-list a {
  color: rgb(2, 98, 182);
  font-weight: 500;
}
.recommend-list a:hover {
  background-color: rgb(213, 230, 245);
  color: rgb(2, 98, 182);
  font-weight: 600;
}
.more-action {
  position: absolute;
  left: 1140px;
  top: 315px;
}
.more-action img {
  height: 30px;
  width: 30px;
}
</style>
<style>
/* table 样式 */
table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
table td,
table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}
/* blockquote 样式 */
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
/* code 样式 */
code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
pre code {
  display: block;
}
/* ul ol 样式 */
ul,
ol {
  margin: 10px 0 10px 20px;
}
</style>