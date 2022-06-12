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
          <el-dropdown-item><a @click="jubaoForm()">举报</a></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dialog
        title="发起举报"
        :visible.sync="dialogFormVisible"
        width="800px"
        @close="closeForm()"
      >
        <el-form :model="jubao">
          <el-form-item label="标题">
            <el-input v-model="jubao.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="正文">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入举报理由"
              v-model="jubao.content"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="commitjubao()">确 定</el-button>
        </div>
      </el-dialog>
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
      <div v-if="loadSuccess" class="content-body">
        <div class="title">{{ passage.title }}</div>
        <div class="passage-info">
          <div>
            <a class="userOfpassage" @click="ToUser(passage.user_id)">
              <img class="iconOfuser" :src="userIcon" />
              <span class="nameOfuser">{{ passage.username }}</span>
            </a>
            <span class="normal">&ensp;评论了</span>
            <a class="comment-group-name">《{{ source.name }}》 </a>
            <span class="normal">{{ passage.date }}</span>
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
            <span>{{ passage.like }}</span>
          </div>
          <div id="reply-button">
            <button @click="clickreply()">
              <img src="@/assets/guide/reply.png" />
            </button>
            <span>{{ passage.reply }}</span>
          </div>
          <button @click="share">
            <img id="like" src="@/assets/guide/share.png" />
          </button>
        </div>
      </div>
      <div class="aside">
        <div class="collection-list">
          <a class="collection-item" @click="usetogroupdetail(source.id)">
            <div class="img-block">
              <img class="collection-img" :src="source.img" />
            </div>
            <div class="collection-info">
              {{ source.name }}
              <div></div>
              {{ source.member }}人参与
            </div>
          </a>
        </div>
        <div class="collection">
          <div class="grouppage-title">
            <a href="../GroupHome">
              <img src="@/assets/group/collect.png" />我加入的小组
            </a>
          </div>
          <div
            class="collection-list"
            v-for="group in addgroup"
            :key="group.id"
          >
            <div class="groupusually"></div>
            <a class="collection-item" @click="usetogroupdetail(group.id)">
              <img class="collection-img" :src="group.img" />
              <div class="collection-info">
                {{ group.name }}
                <br />
                {{ group.member }}人参与
              </div>
            </a>
          </div>
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
            <a class="userOfreply" @click="ToUser(reply.author_id)">
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
                <a class="userOfreply" @click="ToUser(sreply.author_id)">
                  <img
                    style="width: 24px; height: 24px; border-radius: 24px"
                    :src="displayIcon(sreply.usericon)"
                  /><span class="nameOfuser">{{ sreply.author_name }}</span>
                </a>
              </div>
              <div class="reply-content">
                <a class="replied-user" @click="ToUser(sreply.replyed_userid)">
                  @{{ sreply.replyed_username }}
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
    var jubao = {
      title: "",
      content: "",
    };
    var like = false;
    var Toreply = false;
    var loadSuccess = false;
    return {
      id,
      userIcon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
      passage,
      recommends: [],
      passages: [],
      like,
      Toreply,
      replys,
      text: "",
      textarea: "",
      source,
      loadSuccess,
      trydelete: false,
      replyinput: [],
      jubao,
      textarea2: "",
      addgroup: [],
      dialogFormVisible: false,
    };
  },
  methods: {
    ToUser(id) {
      this.$router.push({ name: "users", query: { id: id } });
    },
    ToComment(id) {
      this.$router.push({ name: "groupcomment", query: { id: id } });
    },
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
            this.passage.reply = this.passage.reply + 1;
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
        for (var i = 0; i < this.replyinput.length; i++) {
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
          this.passage.reply = this.passage.reply + 1;
          this.textarea = "";
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    ToGroupDetail(id) {
      this.$router.push({
        name: "groupdetail",
        query: { id: id },
      });
    },
    getaddgroup() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/group/mygroup", qs.stringify(params))
        .then((res) => {
          console.log(res);
          if (res.data.errno === 0) {
            console.log("13215645646");
            this.addgroup = [];
            var i = 0;
            for (i = 0; i < 6 && i < res.data.data.length; i++) {
              this.addgroup.push(res.data.data[i]);
            }
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ToUser(id) {
      this.$router.push({ name: "users", query: { id: id } });
    },
    ToText(HTML) {
      var input = HTML;
      return input
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/[ ]|[&ensp;]/g, "")
        .replace(/[ ]|[&nbsp;]/g, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
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
            this.$router.push({ name: "group" });
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    commitjubao() {
      if (!this.jubao.title) {
        this.$message.error("请输入标题");
        return;
      }
      if (this.jubao.content.length < 15) {
        this.$message.error("举报理由不得少于15字");
        return;
      }
      var params = {
        report_title: this.jubao.title,
        report_reason: this.jubao.content,
        user_id: this.$store.getters.getUser.user.id,
        article_id: this.id,
      };
      console.log(params);
      this.$axios
        .post("/addreport", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("查询到详情");
            this.dialogFormVisible = false;
            this.$message({
              type: "success",
              message:
                "举报成功，感谢您对维护美好环境做出的贡献，举报信息上传中",
            });
          } else {
            this.$message.error("举报失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeForm() {
      this.dialogFormVisible = false;
      console.log("close");
    },
    jubaoForm() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.$message.error("请先登录！");
        return;
      }
      this.dialogFormVisible = true;
      console.log("open");
    },
    updateIcon() {
      if (this.passage.icon === "") return;
      var len = this.$axios.defaults.baseURL.length;
      this.userIcon =
        this.$axios.defaults.baseURL.substring(0, len - 4) + this.passage.icon;
    },
    async updateComment() {
      var params = {
        article_id: this.$route.query.id,
      };
      this.$axios
        .post("/passage/grouppassage", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data.data);
            this.passage = res.data.data.passage;
            console.log(this.passage);
            this.source = res.data.data.resource;
            this.passage.star = parseFloat(this.passage.star);
            this.passage.date = this.passage.date.substring(0, 10);
            this.passage.like = parseInt(this.passage.like);
            this.passage.reply = parseInt(this.passage.reply);
            this.updateIcon();
            this.getaddgroup();
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
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.$message.error("请先登录");
        return;
      }
      if (this.Toreply === false) this.Toreply = true;
      else this.Toreply = false;
    },
    updateLike() {
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
  mounted() {
    this.updateComment();
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
  padding-left: 80px;
  padding-right: 35px;
  margin-top: 80px;
  width: 1160px;
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
  height: 30px;
  width: 30px;
  border-radius: 20px;
  margin-right: 5px;
  vertical-align: sub;
}
.nameOfuser {
  font-family: Source Han Sans CN Normal;
  font-size: 17px;
}
.passage-info {
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
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 60px;
}
.passage-text >>> img {
  display: block;
  margin-left: 12px;
  width: 920px;
  border-radius: 3px;
}
.passage-text >>> span {
  font-size: 17px !important;
  line-height: 32px !important;
  color: black !important;
}
#collect-button {
  position: absolute;
  left: 400px;
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
  margin-left: 150px;
  margin-right: 150px;
  border-radius: 6px;
  box-shadow: 0px 2px 3px #888888a6;
}
.reply-block {
  margin-top: 60px;
  width: 1160px;
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
  left: 1260px;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
  height: 550px;
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
  height: 550px;
  position: fixed;
  left: 1260px;
  top: -50px;
}
.source-item {
  display: flex;
}
.source-img {
  width: 85px;
  margin-right: 20px;
}
.source-info {
  margin: auto;
  font-size: 15px;
  line-height: 30px;
  font-family: Source Han Sans CN Normal;
}
.source-group a {
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: #dfdede55;
  margin-top: 10px;
  width: 300px;
  height: 140px;
}
.source-group a:hover {
  background-color: #91919155;
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
</style>
<style>
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
.more-action {
  position: absolute;
  left: 1165px;
  top: 315px;
}
.more-action img {
  height: 30px;
  width: 30px;
}
.collection {
  height: 530px;
}
.collection-list a {
  position: relative;
  float: left;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: #dfdede55;
  margin-top: 10px;
  width: 300px;
  overflow: hidden;
}
.collection-list a:hover {
  background-color: #91919155;
}
.collection .videopage-title a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection .videopage-title a:hover {
  color: rgb(2, 98, 182);
}
.collection .videopage-title a:hover::after {
  opacity: 1;
}
.collection .videopage-title a:active {
  color: rgb(0, 166, 255);
}
.collection-img {
  width: 85px;
  height: 100px;
  margin-right: 20px;
  overflow: hidden;
}
.collection-item {
  display: flex;
}
.collection-info {
  margin-top: 20px;
  font-size: 16px;
  line-height: 30px;
  font-family: Source Han Sans CN Normal;
}
.grouppage-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
}
.collection-list a:hover {
  background-color: #91919155;
}
.collection .grouppage-title a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection .grouppage-title a:hover {
  color: rgb(2, 98, 182);
}
.collection .grouppage-title a:hover::after {
  opacity: 1;
}
.collection .grouppage-title a:active {
  color: rgb(0, 166, 255);
}
.title {
  font-weight: bold;
  font-family: "Adobe 宋体 Std L", serif;
  font-size: 30px;
}
.group_div_img {
  position: relative;
  float: left;
  top: 20px;
  left: 20px;
  height: 120px;
  width: 80px;
}
.group_div_m {
  position: relative;
  float: left;
  height: 150px;
  width: 180px;
  left: 20px;
  top: 20px;
}
.group_div_m_font_title {
  font-size: 23px;
  font-family: "宋体", sans-serif;
  width: 100%;
  position: relative;
  float: left;
  height: 30px;
  left: 10px;
  line-height: 20px;
}
.group_div_m_font_num {
  font-size: 20px;
  font-family: "宋体", sans-serif;
  width: 100%;
  position: relative;
  float: left;
  height: 30px;
  left: 10px;
  color: #d3dce6;
}
.groupusually {
  float: left;
  position: relative;
  top: 30px;
  width: 100%;
}
.normal_active {
  height: 40px;
  overflow: hidden;
  transition: 0.5s;
}
.heigh_active {
  height: 300px;
  overflow: hidden;
  transition: 0.5s;
}
.heigh {
  height: 300px;
  overflow: hidden;
  transition: 0.5s;
}
.normal {
  height: 40px;
  overflow: hidden;
  transition: 0.5s;
}
.massage {
  font-size: 20px;
  font-family: "Adobe 宋体 Std L", serif;
  font-weight: bold;
}
.hidden_img {
  height: 300px;
  width: 200px;
}
.title_l {
  width: 525px;
  position: relative;
  float: left;
}
.group-name_l {
  width: 150px;
  position: relative;
  float: left;
}
.res_l {
  width: 125px;
  position: relative;
  float: left;
}
.time_l {
  width: 200px;
  position: relative;
  float: left;
}
.font_l {
  font-size: 20px;
  font-family: "Adobe 宋体 Std L", serif;
  font-weight: bold;
}
.blue {
  color: #2c8df4;
}
.m_div {
  float: left;
  position: relative;
  height: 50px;
}
.m_nothead {
  position: relative;
  float: left;
}
</style>