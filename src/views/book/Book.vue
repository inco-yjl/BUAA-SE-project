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
            :infinite="false"
            :speed="500"
            :slidesToShow="7"
            :slidesToScroll="7"
            :touchThreshold="5"
          >
            <div
              v-for="book in hotbooks"
              class="bookpage-hit-box"
              :key="book.book1.id"
            >
              <div class="flex-book-display">
                <div class="book-display-line">
                  <img class="book-display" :src="book.book1.img" />
                  <div class="book-display-info">
                    <span class="book-display-title"
                      >《{{ book.book1.name }}》</span
                    ><br />
                    <span class="book-display-writer"
                      >[{{ book.book1.nation }}]{{ book.book1.writer }}</span
                    >
                  </div>
                </div>
                <div class="book-display-line">
                  <img class="book-display" :src="book.book2.img" />
                  <div class="book-display-info">
                    <span class="book-display-title"
                      >《{{ book.book2.name }}》</span
                    ><br />
                    <span class="book-display-writer"
                      >[{{ book.book2.nation }}]{{ book.book2.writer }}</span
                    >
                  </div>
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
            :slidesToShow="8"
            :slidesToScroll="8"
            :touchThreshold="5"
          >
            <div
              v-for="book in hotbooks"
              class="bookpage-hit-box"
              :key="book.book1.id"
            >
              <div class="flex-book-display">
                <div class="book-display-line">
                  <img class="book-display" :src="book.book1.img" />
                  <div class="book-display-info">
                    <span class="book-display-title"
                      >《{{ book.book1.name }}》</span
                    ><br />
                    <span class="book-display-writer"
                      >[{{ book.book1.nation }}]{{ book.book1.writer }}</span
                    >
                  </div>
                </div>
                <div class="book-display-line">
                  <img class="book-display" :src="book.book2.img" />
                  <div class="book-display-info">
                    <span class="book-display-title"
                      >《{{ book.book2.name }}》</span
                    ><br />
                    <span class="book-display-writer"
                      >[{{ book.book2.nation }}]{{ book.book2.writer }}</span
                    >
                  </div>
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
                  <img class="iconOfuser" :src="comment.usericon" /><span
                    class="nameOfuser"
                    >{{ comment.username }}</span
                  >
                </a>
                <span class="publish-info"
                  >{{ comment.date }}&ensp;评论了<a class="comment-book-name"
                    >《{{ comment.bookname }}》</a
                  ></span
                >
              </div>
              <div class="comment-origin-pic">
                <a class="comment-origin" href="javascript:void(0)"
                  ><img class="comment-pic" :src="comment.img" />
                </a>
              </div>
              <div class="commenttext">
                <a class="commenttext-origin" @click="bookcomment">{{
                  comment.content
                }}</a>
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
            <a class="collection-item">
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
            <li v-for="passage in passages" :key="passage.id">
              <a>{{ passage.title }}</a>
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
import global from "@/components/common.vue";
import qs from 'qs';
export default {
  name: "MyComponent",
  data() {
    var hotbooks = [
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        writer: "xxx·xxx",
        nation: "瑞典",
      },
    ];
    var i;
    var books = [];
    for (i = 0; i < 20; i = i + 2) {
      books.push({ book1: hotbooks[i], book2: hotbooks[i + 1] });
    }
    var bookcomments = [
      {
        id: 1,
        date: "2022-5-4",
        userId: 1,
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "yjl",
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        bookname: "焦虑的人",
        bookid: 1,
        content:
          "听Jpop不听King Gnu，\
        就像四大名著不看红楼梦，说明这个人文学造诣和自我修养不足，\
        他理解不了这种内在的阳春白雪的高雅艺术，他只能看到外表的辞藻堆砌，\
        参不透其中深奥的精神内核，他整个人的层次就卡在这里了，只能度过一个相对失败的人生。",
      },
      {
        id: 2,
        date: "2022-5-4",
        userId: 2,
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "IntP",
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        bookname: "焦虑的人",
        bookid: 1,
        content: "testtest",
      },
      {
        id: 3,
        date: "2022-5-4",
        userId: 2,
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "看看中文",
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        bookname: "焦虑的人",
        bookid: 1,
        content: "多搞点",
      },
      {
        id: 4,
        date: "2022-5-4",
        userId: 2,
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "还有好多没写",
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        bookname: "焦虑的人",
        bookid: 1,
        content: "多搞点",
      },
    ];
    var collections = [{}];
    var passages = [
      {
        id: 1,
        title: "彗星",
      },
      {
        id: 2,
        title: "化作繁星",
      },
      {
        id: 3,
        title: "My nonfiction",
      },
    ];
    return {
      hotbooks: books,
      bookcomments,
      collections,
      passages,
    };
  },
  components: {
    VueSlickCarousel,
    search,
  },
  methods: {
    bookcomment() {
      this.$router.push({ name: "bookcomment" });
    },
    async updateCollection() {
      var params = {
        user_id: global.currentUserId,
      };
      this.$axios
        .post("/book/collection", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data.data);
            this.collections = [];
            var i=0;
            for(i=0;i<3 && i<res.data.data.length;i++)
              this.collections.push(res.data.data[i]);
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      this.loaddata = true;
    },
  },
  mounted() {
    this.updateCollection();
    window.onscroll = function (e) {
      var vertical = document
        .getElementsByClassName("bookpage-vertical")
        .item(0);
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
  height: 30px;
  margin-right: 5px;
  vertical-align: sub;
}
.commenttext {
  width: 800px;
  margin-left: 30px;
}
a.commenttext-origin {
  position: relative;
  top: 36px;
  font-size: 17px;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: black;
  transition: 0.3s ease;
}
a.commenttext-origin:hover {
  color: gray;
  text-decoration: none;
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
  margin-top: 20px;
  font-size: 16px;
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
</style>