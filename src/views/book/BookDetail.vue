<template>
  <div id="book-detail">
    <search></search>
    <div id="detail-body">
      <div :v-if="loadSuccess" class="detail-vertical">
        <div class="detail-header">
          <div class="detail-title">《{{ book.name }}》</div>
          <div id="collect-button" class="user-buttons">
            <button v-if="collect" @click="clickuncollect()">
              <img src="@/assets/guide/collected.png" />
            </button>
            <button v-else @click="clickcollect()">
              <img src="@/assets/guide/collect.png" />
            </button>
          </div>
        </div>
        <div class="book-detail-interact">
          <div class="evaluate">打个分吧！</div>
          <el-rate
            :show-score="true"
            class="star-button"
            style="width: 150px"
            v-model="evaluate"
            :colors="colors"
            @change="starTheBook"
          >
          </el-rate>
          <button @click="share">
            <img src="@/assets/guide/share.png" /><span>分享书籍</span>
          </button>
          <button @click="writeComment()">
            <img src="@/assets/guide/write_dt.png" /><span>撰写评论</span>
          </button>
        </div>
        <div clas="detail-content">
          <div class="detail-info">
            <div><img class="detail-img" :src="book.image" /></div>
            <div class="info-text">
              <span class="pl">作者：</span
              ><span class="pl2">{{ book.author }}</span> <br />
              <span class="pl">出版社：</span
              ><span class="pl2">{{ book.press }}</span> <br />
              <div class="book-rank">
                <div class="rank-score">
                  评分
                  <div class="score">
                    <strong class="num">{{ book.score }}</strong>
                  </div>
                  <div>{{ peoplenum }}人评价</div>
                </div>
              </div>
              <div>
                <div class="rate-number">
                  5星
                  <div class="distribute" :style="style5"></div>
                  &ensp;{{ rankList[4] }}人
                </div>
                <div class="rate-number">
                  4星
                  <div class="distribute" :style="style4"></div>
                  &ensp;{{ rankList[3] }}人
                </div>
                <div class="rate-number">
                  3星
                  <div class="distribute" :style="style3"></div>
                  &ensp;{{ rankList[2] }}人
                </div>
                <div class="rate-number">
                  2星
                  <div class="distribute" :style="style2"></div>
                  &ensp;{{ rankList[1] }}人
                </div>
                <div class="rate-number">
                  1星
                  <div class="distribute" :style="style1"></div>
                  &ensp;{{ rankList[0] }}人
                </div>
              </div>
            </div>
          </div>
          <div class="detail-intro">
            <span class="intro-title">内容简介···</span>
            <div v-html="book.intro"></div>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="collection">
          <div class="bookdetail-title">
            <a href="../user/books">
              <img src="@/assets/guide/book_collection.png" />已收藏书籍
            </a>
          </div>
          <div
            class="collection-list"
            v-for="book in collections"
            :key="book.id"
          >
            <a class="collection-item" @click="ToBookDetail(book.id)">
              <img class="collection-img" :src="book.image" />
              <div class="collection-info">
                《{{ book.name }}》
                <el-rate
                  v-model="book.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  disabled-void-color="ffffff"
                >
                </el-rate>
                {{ book.author }}
              </div>
            </a>
          </div>
        </div>
        <div class="collection">
          <div class="bookdetail-title">
            <a href="../user/books">
              <img src="@/assets/guide/mycomment.png" />我的书评
            </a>
          </div>
          <ul class="book-comment-list hotlist">
            <li
              :v-if="passages.length > 0"
              v-for="passage in passages"
              :key="passage.id"
            >
              <a @click="ToComment(passage.id)">{{ passage.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="comment-block">
        <div class="title comment-hit">
          <span
            ><img src="@/assets/title/book_comment.png" />
            <button
              class="selection_ed"
              id="select-hot-comment"
              onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
              @click="hotComment()"
            >
              热门评论</button
            >/
            <button
              class="selection_un"
              id="select-new-comment"
              onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
              @click="newComment()"
            >
              最新评论
            </button>
          </span>
          <div
            class="book-comments-display"
            v-for="comment in bookcomments"
            :key="comment.id"
          >
            <hr />
            <div class="comment-display-body">
              <div class="display-publisher">
                <a class="userOfcomment" @click="ToUser(comment.userid)">
                  <img class="iconOfuser" :src="comment.usericon" /><span
                    class="nameOfuser"
                    >{{ comment.username }}</span
                  >
                </a>
                <span class="publish-info">{{ comment.date }}</span>
              </div>
              <div class="commenttext">
                <a class="commenttext-origin" @click="ToComment(comment.id)">
                  <span class="comment-title"> {{ comment.title }} </span><br />
                  {{ comment.content }}</a
                >
              </div>
            </div>
          </div>
          <div class="search-number">
            <el-pagination
              @current-change="changeComment"
              :page-size="7"
              layout="prev, pager, next, jumper"
              :total="commentNum"
            >
            </el-pagination>
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
  name: "BookDetail",
  components: {
    search,
  },
  setup() {
    const goPublish = () => {};
    return {
      goPublish,
    };
  },
  data() {
    var id = this.$route.query.id;
    var book = {};
    var peoplenum = 0;
    var bookcomments = [{}];
    var allComments = [];
    var loadSuccess = false;
    var collections = [];
    var passages = [];
    var collect = false;
    var style1;
    var style2;
    var style3;
    var style4;
    var style5;
    var rankList = [];
    return {
      collections,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      evaluate: 0,
      passages,
      book,
      style1,
      style2,
      style3,
      style4,
      style5,
      peoplenum,
      allComments,
      commentNum: 0,
      collect,
      rankList,
      id,
      bookcomments,
      loadSuccess,
    };
  },
  methods: {
    ToUser(id) {
      this.$router.push({ name: "users", query: { id: id } });
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
    ToComment(id) {
      console.log(id);
      this.$router.push({ name: "bookcomment", query: { id: id } });
    },
    ToBookDetail(id) {
      this.$router.push({
        name: "bookdetail",
        query: { id: id },
      });
    },
    clickcollect() {
      if (this.$store.getters.getUser.user.id === -1) {
        this.$message.error("请先登录");
        return;
      }
      var params = {
        book_id: this.id,
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/book/collect", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.$message({
              message: res.data.msg,
              type: "success",
            });
            this.collect = true;
          } else {
            this.$message.error("收藏失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clickuncollect() {
      if (this.$store.getters.getUser.user.id === -1) {
        this.$message.error("请先登录");
        return;
      }
      var params = {
        book_id: this.id,
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/book/uncollect", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.$message({
              message: res.data.msg,
              type: "success",
            });
            this.collect = false;
          } else {
            this.$message.error("取消收藏失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    writeComment() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.$message.error("请先登录！");
        return;
      } else {
        this.$router.push({
          name: "bookeditor",
          query: { id: this.id },
        });
      }
    },
    async updateCollection() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        return;
      }
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      console.log(this.$store.getters.getUser.user.id);
      this.$axios
        .post("/book/collection", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data.data);
            this.collections = [];
            var i = 0;
            for (i = 0; i < 3 && i < res.data.data.length; i++) {
              res.data.data[i].star = parseFloat(res.data.data[i].star);
              this.collections.push(res.data.data[i]);
              if (this.collections[i].author.length > 11)
                this.collections[i].author =
                  this.collections[i].author.substring(0, 10) + "…";
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
        book_id: this.id,
        user_id: this.$store.getters.getUser.user.id,
      };
      console.log("user:" + this.$store.getters.getUser.user.id);
      this.$axios
        .post("/book/detail", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("书籍查询成功");
            this.book = res.data.data;
            switch (res.data.collect) {
              case 1:
                this.collect = true;
                break;
              case 0:
                this.collect = false;
                break;
            }
            this.rankList = res.data.list;
            this.evaluate = parseFloat(res.data.evaluate);
            this.peoplenum = parseInt(res.data.people);
            var length;
            length = (res.data.list[0] * 200) / this.peoplenum + 5;
            this.style1 = "width:" + length + "px";
            length = (res.data.list[1] * 200) / this.peoplenum + 5;
            this.style2 = "width:" + length + "px";
            length = (res.data.list[2] * 200) / this.peoplenum + 5;
            this.style3 = "width:" + length + "px";
            length = (res.data.list[3] * 200) / this.peoplenum + 5;
            this.style4 = "width:" + length + "px";
            length = (res.data.list[4] * 200) / this.peoplenum + 5;
            this.style5 = "width:" + length + "px";

            this.loadSuccess = true;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
    changeComment(currentPage) {
      this.bookcomments = [];
      var length = this.commentNum - (currentPage - 1) * 7;
      if (length > 7) length = 7;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.bookcomments.push(this.allComments[currentPage * 7 - 7 + i]);
      }
    },
    newComment() {
      //获取新的数据
      document
        .getElementById("select-hot-comment")
        .setAttribute("class", "selection_un");
      var params = {
        book_id: this.id,
      };
      this.$axios
        .post("/book/article/new", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data.data);
            this.bookcomments = [];
            var i;
            var comments = res.data.data;
            this.commentNum = res.data.data.length;
            for (i = 0; i < this.commentNum; i++) {
              comments[i].content = this.ToText(comments[i].content);
              comments[i].date = comments[i].date.substring(0, 10);
              if (comments[i].content.length > 170) {
                comments[i].content =
                  comments[i].content.substring(0, 170) + "…";
              }
              var url = comments[i].usericon;
              var img = this.displayIcon(url);

              comments[i].usericon = img.icon;
            }
            this.allComments = comments;
            this.changeComment(1);
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    displayIcon(url) {
      var icon = "https://i.imgtg.com/2022/05/08/zDzsM.png";
      if (url !== "") {
        var len = this.$axios.defaults.baseURL.length;
        icon = this.$axios.defaults.baseURL.substring(0, len - 4) + url;
      }
      return { icon: icon };
    },
    hotComment() {
      //更换标签时获取数据
      document
        .getElementById("select-new-comment")
        .setAttribute("class", "selection_un");
      var params = {
        book_id: this.id,
      };
      this.$axios
        .post("/book/article/hot", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data.data);
            this.bookcomments = [];
            var i;
            var comments = res.data.data;
            this.commentNum = res.data.data.length;
            for (i = 0; i < this.commentNum; i++) {
              comments[i].content = this.ToText(comments[i].content);
              comments[i].date = comments[i].date.substring(0, 10);
              if (comments[i].content.length > 170) {
                comments[i].content =
                  comments[i].content.substring(0, 170) + "…";
              }
              var url = comments[i].usericon;
              var img = this.displayIcon(url);

              comments[i].usericon = img.icon;
            }
            this.allComments = comments;
            this.changeComment(1);
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updatePassage() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/book/mypassage", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.passages = [];
            var i;
            var length = 3;
            if (res.data.data.length < 3) length = res.data.data.length;
            for (i = 0; i < length; i++) this.passages.push(res.data.data[i]);
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    starTheBook() {
      if (
        !this.$store.getters.getUser ||
        this.$store.getters.getUser.user.id === -1
      ) {
        this.evaluate = 0;
        this.$message.error("请先登录！");
        return;
      }
      var params = {
        user_id: this.$store.getters.getUser.user.id,
        book_id: this.id,
        score: this.evaluate,
      };
      this.$axios
        .post("/book/star", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data);
            this.$message({
              message: res.data.msg,
              type: "success",
            });
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    console.log("user" + this.$store.getters.getUser.user.id);
    this.updateContent();
    this.updateCollection();
    this.updatePassage();
    this.hotComment();
    window.onscroll = function (e) {
      var vertical = document.getElementsByClassName("detail-vertical").item(0);
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
#book-detail {
  width: 1600px;
  padding-left: 100px;
}
#detail-body {
  width: 1580px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
.detail-vertical {
  padding-top: 20px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 100px;
  margin-top: 80px;
  width: 1160px;
  height: auto;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.detail-header {
  display: flex;
}
.detail-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.detail-content {
  display: flex;
  flex-wrap: wrap;
}
#collect-button {
  position: absolute;
  left: 1100px;
}
.detail-img {
  width: 150px;
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
.detail-info {
  margin-top: 20px;
  display: flex;
}
.info-text {
  margin-left: 50px;
}
.pl {
  margin-top: 1px;
  display: inline;
  color: rgb(124, 124, 124);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.pl2 {
  display: inline;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.book-rank {
  width: 200px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.num {
  font-size: 20px;
}
.rate-number {
  display: flex;
  font-size: 15px;
  color: rgb(101, 101, 101);
  line-height: 22px;
  flex-wrap: nowrap;
}
.distribute {
  height: 15px;
  margin-top: 3px;
  margin-left: 5px;
  background-color: rgba(255, 238, 0, 0.769);
}
.score-rate {
  width: 400px;
}
.score {
  display: inline;
}
.star {
  display: inline;
}

.detail-intro {
  margin-top: 20px;
  font-family: Source Han Sans CN Normal;
}
.intro-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 80px;
  color: rgb(76, 76, 76);
}

.bookdetail-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
}
.bookdetail-title img {
  height: 37px;
  vertical-align: -20%;
  margin-right: 5px;
}
.book-detail-interact button {
  position: relative;
  left: 700px;
  top: 280px;
  background: none;
  outline: none;
  font-size: 18px;
  border: none;
  transition: opacity 0.2s;
}
.book-detail-interact button :hover {
  text-decoration: underline;
}
.book-detail-interact img {
  height: 20px;
}
.star-button {
  position: absolute;
  left: 740px;
  top: 672px;
}
.evaluate {
  position: absolute;
  left: 660px;
  top: 672px;
  color: rgb(101, 101, 101);
}
.aside {
  margin-top: 80px;
  margin-left: 10px;
  margin-right: 0;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;
  border-style: solid;
  border-width: 1px;
  position: absolute;
  left: 1260px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
  height: 750px;
  width: 352px;
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
  height: 750px;
  width: 352px;
  position: fixed;
  left: 1260px;
  top: -50px;
}
.collection {
  height: 550px;
}
.collection-list a {
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
.collection-list a:hover {
  background-color: #91919155;
}
.collection .bookdetail-title a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection .bookdetail-title a:hover {
  color: rgb(2, 98, 182);
}
.collection .bookdetail-title a:hover::after {
  opacity: 1;
}
.collection .bookdetail-title a:active {
  color: rgb(0, 166, 255);
}
.collection-img {
  width: 85px;
  margin-right: 20px;
}
.collection-item {
  display: flex;
}
.collection-info {
  margin: auto;
  font-size: 15px;
  line-height: 30px;
  font-family: Source Han Sans CN Normal;
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
.book-comment-list a {
  font-size: 18px;
  font-family: Source Han Sans CN Normal;
}
.book-comment-list a:hover {
  font-weight: 600;
  color: rgb(2, 98, 182);
}
.comment-block {
  margin-top: 20px;
  width: 1160px;
  padding-left: 100px;
  padding-top: 50px;
  padding-right: 100px;
  padding-bottom: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
button.selection_ed {
  background: none;
  outline: none;
  font-size: 20px;
  border: none;
  color: black;
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
.comment-block.title {
  padding-bottom: 10px;
  font-size: 23px;
}
.title img {
  vertical-align: -6px;
  margin-right: 5px;
  height: 40px;
}
.book-comments-display {
  width: 1000px;
  padding-right: 100px;
}
.comment-display-body {
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
}
.display-publisher {
  margin-top: 0;
  padding-top: 0;
  width: 920px;
}
.publish-info {
  padding-left: 20px;
  font-weight: 400;
  color: rgb(157, 157, 157);
}
.nameOfuser {
  font-family: Source Han Sans CN Normal;
  font-size: 20px;
}
.comment-content {
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
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 5px;
  vertical-align: sub;
}
.commenttext {
  margin-left: 30px;
}
a.commenttext-origin {
  position: relative;
  top: 5px;
  font-size: 17px;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: black;
  transition: 0.3s ease;
}
a.commenttext-origin:hover {
  color: rgb(101, 101, 101);
  text-decoration: none;
}
a.commenttext-origin span {
  font-size: 20px;
  font-weight: 600;
  color: black;
  transition: 0.3s ease;
}
a.commenttext-origin span:hover {
  text-decoration: underline;
}
.search-number {
  margin-top: 50px;
  margin-left: 300px;
}
</style>