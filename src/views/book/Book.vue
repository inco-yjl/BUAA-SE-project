<template>
  <div id="bookpage">
    <search></search>
    <div id="bookpage-body">
      <div class="bookpage-vertical">
        <div class="bookpage-hit">
          <div class="bookpage-title">
            <img src="@/assets/title/books.png" />热门图书
          </div>
          <VueSlickCarousel
            :dots="true"
            :useCSS="true"
            :arrows="true"
            :infinite="false"
            :speed="500"
            :slidesToShow="7"
            :slidesToScroll="7"
            :touchThreshold="5"
          >
            <div
              v-for="book in hotbooks"
              class="bookpage-hit-box"
              :key="book.id"
            >
              <div class="flex-book-display">
                <div class="book-display-line">
                  <a @click="ToBookDetail(book.book1.id)">
                    <img class="book-display" :src="book.book1.image" />
                    <div class="book-display-info">
                      <span class="book-display-title"
                        >《{{ book.book1.name }}》</span
                      ><br v-if="book.book1.name.length < 7" />
                      <span class="book-display-writer">{{
                        book.book1.author
                      }}</span>
                    </div>
                  </a>
                </div>
                <div class="book-display-line">
                  <a @click="ToBookDetail(book.book2.id)">
                    <img class="book-display" :src="book.book2.image" />
                    <div class="book-display-info">
                      <span class="book-display-title"
                        >《{{ book.book2.name }}》</span
                      ><br v-if="book.book2.name.length < 7" />
                      <span class="book-display-writer">{{
                        book.book2.author
                      }}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="bookpage-hit">
          <div class="bookpage-title">
            <img src="@/assets/title/star.png" />高分榜单
          </div>
          <VueSlickCarousel
            :dots="true"
            :useCSS="true"
            :infinite="false"
            :speed="500"
            :slidesToShow="7"
            :slidesToScroll="7"
            :touchThreshold="5"
          >
            <div
              v-for="book in highbooks"
              class="bookpage-hit-box"
              :key="book.id"
            >
              <div class="flex-book-display">
                <div class="book-display-line">
                  <a @click="ToBookDetail(book.book1.id)">
                    <img class="book-display" :src="book.book1.image" />
                    <div class="over-star">{{ book.book1.star }}</div>
                    <div class="book-display-info">
                      <span class="book-display-title"
                        >《{{ book.book1.name }}</span
                      ><br />
                    </div>
                  </a>
                </div>
                <div class="book-display-line">
                  <a @click="ToBookDetail(book.book2.id)">
                    <img class="book-display" :src="book.book2.image" />
                    <div class="over-star">{{ book.book2.star }}</div>
                    <div class="book-display-info">
                      <span class="book-display-title"
                        >《{{ book.book2.name }}</span
                      ><br />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="bookpage-comments">
          <div class="bookpage-title">
            <img src="@/assets/title/book_comment.png" />热门书评
          </div>
          <div
            class="book-comments-display"
            v-for="comment in bookcomments"
            :key="comment.id"
          >
            <hr />
            <div class="comment-display-body">
              <div class="display-publisher">
                <a class="userOfcomment" href="/otherusers/1">
                  <img
                    class="iconOfuser"
                    :src="comment.usericon"
                  /><span class="nameOfuser">{{ comment.username }}</span>
                </a>
                <span class="publish-info"
                  >{{ comment.date }}&ensp;评论了<a class="comment-book-name"
                    >《{{ comment.bookname }}》</a
                  ></span
                >
              </div>
              <div class="comment-origin-pic">
                <a class="comment-origin" @click="ToBookDetail(comment.bookid)"
                  ><img class="comment-pic" :src="comment.img" />
                </a>
              </div>
              <div class="commenttext">
                <a class="commenttext-origin" @click="ToComment(comment.id)">
                <span class="comment-title">
                  {{comment.title}}
                </span><br>
                  {{ comment.content }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="collection">
          <div class="bookpage-title">
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
          <div class="bookpage-title">
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
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import search from "@/components/SelectSearch.vue";
import qs from "qs";
export default {
  name: "MyComponent",
  data() {
    var hotbooks = [{}];
    var highbooks = [{}];
    var bookcomments = [];
    var collections = [{}];
    var passages = [{}];
    var loadSuccess = false;
    return {
      hotbooks,
      highbooks,
      bookcomments,
      collections,
      passages,
      loadSuccess,
    };
  },
  components: {
    VueSlickCarousel,
    search,
  },
  methods: {
    ToBookDetail(id) {
      this.$router.push({
        name: "bookdetail",
        query: { id: id },
      });
    },
    ToComment(id) {
      this.$router.push({ name: "bookcomment", query: { id: id } });
    },
    async updateCollection() {
      if(!this.$store.getters.getUser || this.$store.getters.getUser.user.id===-1) return;
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/book/collection", qs.stringify(params))
        .then((res) => {
          console.log(res);
          if (res.data.errno === 0) {
            this.collections = [];
            var i = 0;
            for (i = 0; i < 3 && i < res.data.data.length; i++) {
              res.data.data[i].star = parseFloat(res.data.data[i].star);
              this.collections.push(res.data.data[i]);
              if(this.collections[i].author.length>11)
              this.collections[i].author = this.collections[i].author.substring(0,10)+'…'
            }
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      this.loaddata = true;
    },
    async updatePassage() {
      if(!this.$store.getters.getUser || this.$store.getters.getUser.user.id===-1) return;
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/book/mypassage", qs.stringify(params))
        .then((res) => {
          console.log(res);
          if (res.data.errno === 0) {
            this.passages = [];
            var i;
            var length = 3;
            if (res.data.data.length < 3) length = res.data.data.length;
            for (i = 0; i < length; i++) this.passages.push(res.data.data[i]);
            this.loadSuccess = true;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateComment() {
      this.$axios.post("/book/hotpassage").then((res) => {
        if (res.data.errno === 0) {
          console.log("获取到热门书评");
          this.bookcomments = res.data.data;
          var i;
          for (i = 0; i < this.bookcomments.length; i++) {
            this.bookcomments[i].content = this.ToText(
              this.bookcomments[i].content
            );
            if (this.bookcomments[i].content.length > 170) {
              this.bookcomments[i].content =
                this.bookcomments[i].content.substring(0, 170) + "…";
              var img = this.displayIcon(this.bookcomments[i].usericon);
              console.log(img);
              this.bookcomments[i].usericon = img.icon;
              console.log(this.bookcomments[i].content);
            }
          }
        }
      });
    },
    displayIcon(url) {
      var icon = "https://i.imgtg.com/2022/05/08/zDzsM.png";
      if (url !== "") {
        var len = this.$axios.defaults.baseURL.length;
        icon = this.$axios.defaults.baseURL.substring(0, len - 4) + url;
      }
      return { icon: icon  };
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
    async updateHotBook() {
      var params = {
        num: 20,
      };
      this.$axios
        .post("/book/hot", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("获取到热门图书");
            var books = [];
            books = res.data.data;
            var i = 0;
            for (i = 0; i < 20; i++) {
              books[i].star = i / 4;
              var length = 14 - books[i].name.length;
              if (books[i].name.length > 7 && books[i].author.length > length)
                books[i].author = books[i].author.substring(0, length) + "…";
              if (books[i].author.length > 8)
                books[i].author = books[i].author.substring(0, 9) + "…";
            }
            this.hotbooks = [];
            for (i = 0; i < 20; i = i + 2) {
              this.hotbooks.push({
                book1: books[i],
                book2: books[i + 1],
                id: i,
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
    async updateHighBook() {
      this.$axios
        .post("/book/high")
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("获取到高分图书");
            var books = [];
            books = res.data.data;
            var i = 0;
            for (i = 0; i < 20; i++) {
              books[i].name = books[i].name + "》";
              if (books[i].name.length > 6)
                books[i].name = books[i].name.substring(0, 6) + "…";
            }
            this.highbooks = [];
            for (i = 0; i < 20; i = i + 2) {
              this.highbooks.push({
                book1: books[i],
                book2: books[i + 1],
                id: i,
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
  },
  mounted() {
    this.updateCollection();
    this.updateHotBook();
    this.updateHighBook();
    this.updatePassage();
    this.updateComment();
    window.onscroll = function (e) {
      var vertical = document
        .getElementsByClassName("bookpage-vertical")
        .item(0);
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
#bookpage {
  width: 1600px;
  padding-left: 100px;
}
#bookpage-body {
  width: 1580px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
.bookpage-vertical {
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
.bookpage-hit {
  width: 1000px;
  margin-top: 30px;
  margin-bottom: 50px;
}

.book-display {
  height: 170px;
  width: 120px;
  border-style: solid;
  border-color: aliceblue;
  border-width: 3px;
}
.book-display-line {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.book-display-info {
  width: 120px;
  font-size: 14px;
}
.over-star {
  position: relative;
  margin-bottom: -55px;
  top: -52px;
  left: 68px;
  color: rgb(255, 230, 0);
  font-size: 40px;
  font-family: "Patrick Hand", cursive;
  text-shadow: 3px 1px 1px rgb(0, 0, 0);
}
.bookpage-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
}
.bookpage-title img {
  height: 37px;
  vertical-align: -20%;
  margin-right: 5px;
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
  position: fixed;
  left: 1260px;
  top: -50px;
  width: 352px;
}
.bookpage-comments {
  margin-bottom: 50px;
}
.book-comments-display {
  width: 1000px;
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
.comment-pic {
  height: 150px;
}
div.comment-origin-pic {
  position: relative;
  height: 200px;
  left: 0;
  top: 20px;
  margin-left: 5px;
}
.nameOfuser {
  font-family: Source Han Sans CN Normal;
  font-size: 17px;
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
  height:30px;
  width:30px;
  border-radius: 20px;
  margin-right: 5px;
  vertical-align: sub;
}
.commenttext {
  width: 800px;
  margin-left: 30px;
}
a.commenttext-origin {
  position: relative;
  top: 20px;
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
a.comment-book-name {
  font-weight: 400;
  font-size: 17px;
  color: rgb(157, 157, 157);
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
  height:140px;
}
.collection-list a:hover {
  background-color: #91919155;
}
.collection .bookpage-title a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection .bookpage-title a:hover {
  color: rgb(2, 98, 182);
}
.collection .bookpage-title a:hover::after {
  opacity: 1;
}
.collection .bookpage-title a:active {
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
  margin:auto;
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
.search-number {
  margin-top:50px;
  margin-left: 300px;
}
</style>