<template>
  <div id="home">
    <search></search>
    <powerpoint></powerpoint>
    <div class="body">
      <div id="vertical">
        <div class="books hothit">
          <span class="homepage-title">
            <img class="hot books" src="@/assets/title/books.png" />流行图书
            <a href="http://localhost:8080/book" class="Fordetail">
              &ensp;>&ensp;
            </a>
          </span>
          <div class="hit-ppt">
            <VueSlickCarousel
              :dots="true"
              :useCSS="true"
              :infinite="false"
              :speed="500"
              :slidesToShow="8"
              :slidesToScroll="8"
              :touchThreshold="5"
            >
              <div v-for="book in hotbooks" :key="book.id">
                <div>
                  <div class="hot-display-line">
                    <a @click="ToBookDetail(book.id)">
                      <img class="hot-display" :src="book.image" />
                      <div class="display-info">
                        <span class="display-title">《{{ book.name }}》</span
                        ><br v-if="book.name.length < 9" />
                        <span>{{ book.author }}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
        <div class="movies hothit">
          <span class="homepage-title"
            ><img class="hot" src="@/assets/title/movie.png" />精彩电影<a
              href="http://localhost:8080/video"
              class="Fordetail"
              >&ensp;>&ensp;</a
            ></span
          >
          <div class="hit-ppt">
            <VueSlickCarousel
              :dots="true"
              :useCSS="true"
              :infinite="false"
              :speed="500"
              :slidesToShow="8"
              :slidesToScroll="8"
              :touchThreshold="5"
            >
              <div v-for="movie in hotmovies" :key="movie.id">
                <div>
                  <div class="hot-display-line">
                    <a @click="ToMovieDetail(movie.id)">
                      <img class="hot-display" :src="movie.image" />
                      <div class="display-info">
                        <span class="display-title">《{{ movie.name }}》</span
                        ><br v-if="movie.name.length < 9" />
                        <span>[导演]{{ movie.director }}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
        <div class="tv hothit">
          <span class="homepage-title"
            ><img class="hot" src="@/assets/title/tv.png" />推荐电视剧<a
              href="http://localhost:8080/video"
              class="Fordetail"
              >&ensp;>&ensp;</a
            ></span
          >
          <div class="hit-ppt">
            <VueSlickCarousel
              :dots="true"
              :useCSS="true"
              :infinite="false"
              :speed="500"
              :slidesToShow="8"
              :slidesToScroll="8"
              :touchThreshold="5"
            >
              <div v-for="tele in hotteles" :key="tele.id">
                <div>
                  <div class="hot-display-line">
                    <a @click="ToTeleDetail(tele.id)">
                      <img class="hot-display" :src="tele.image" />
                      <div class="display-info">
                        <span class="display-title">《{{ tele.name }}》</span
                        ><br v-if="tele.name.length < 9" />
                        <span>({{ tele.year }})[{{ tele.nation }}]</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
      <div class="homepage aside">
        <div class="topics hotlist">
          <span class="homepage-title">
            <img class="hot" src="@/assets/title/fire.png" />热点话题
          </span>
          <ul class="topics hotlist">
            <li v-for="(topic, index) in hottopics" 
            :key="index">
              <span
              class="topic-list-item" 
              :class="{
              rank1: index === 0, 
              rank2: index === 1, 
              rank3: index === 2
              }">
              {{index+1}}.
              <span v-if="index < 10">&ensp;</span></span
              ><a @click="ToTopicDetail(topic.id)">{{topic.name}}</a>
            </li>
          </ul>
        </div>
        <br />
        <div class="groups hotlist">
          <div>
            <span class="homepage-title"
              ><img class="hot" src="@/assets/title/groups.png" />发现小组</span
            >
          </div>
          <ul>
            <li v-for="group in hotgroups" :key="group.id"><a>{{group.name}}</a></li>
          </ul>
        </div>
      </div>
      <br />
      <div class="comments">
        <div id="bookcomment">
          <span class="homepage-title">
            <img class="hot" src="@/assets/title/book_comment.png" />热门书评
            <a href="http://localhost:8080/book" class="Fordetail">
              &ensp;>&ensp;
            </a>
          </span>

          <div
            v-for="comment in bookcomments"
            :key="comment.id"
            class="comment"
          >
            <hr />
            <a class="userOfcomment" href="../views/user/otherusers.vue">
              <img class="iconOfuser" :src="comment.usericon" /><span
                class="nameOfuser"
                >{{ comment.username }}</span
              >
            </a>
            <br />
            <div class="comments-content">
              <div>
                <a class="comment-origin" href="/book/1"
                  ><img class="comments-pic" :src="comment.img"
                /></a>
              </div>
              <div class="comments-text">
                <a class="commentlist" href="/book/1/comments/1">{{
                  comment.content
                }}</a>
              </div>
              <!-- 路径问题 -->
            </div>
            <div class="origin">
              >><a href="http://localhost:8080/group">查看原帖</a>
            </div>
          </div>
        </div>

        <div id="moviecomment">
          <span class="homepage-title">
            <img class="hot" src="@/assets/title/movie_comment.png" />热门影评
            <a href="http://localhost:8080/book" class="Fordetail">
              &ensp;>&ensp;
            </a>
          </span>
          <div
            v-for="comment in moviecomments"
            :key="comment.id"
            class="comment"
          >
            <hr />
            <a class="userOfcomment" href="../views/user/otherusers.vue">
              <img class="iconOfuser" :src="comment.usericon" /><span
                class="nameOfuser"
                >{{ comment.username }}</span
              >
            </a>
            <br />
            <div class="comments-content">
              <div>
                <a class="comment-origin" href="/book/1"
                  ><img class="comments-pic" :src="comment.img"
                /></a>
              </div>
              <div class="comments-text">
                <a class="commentlist" href="/book/1/comments/1">{{
                  comment.content
                }}</a>
              </div>
              <!-- 路径问题 -->
            </div>
            <div class="origin">
              >><a href="http://localhost:8080/group">查看原帖</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home {
  width: 1600px;
  padding-left: 100px;
}
div.body {
  width: 1580px;
  display: flex;
  flex-wrap: wrap;
}
#vertical {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 35px;
  padding-bottom: 60px;
  margin-top: 80px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
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
}
.homepage-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;
}
li {
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.hotlist {
  padding-top: 10px;
  width: 320px;
}
.hotlist ul {
  padding-top: 10px;
}
.hotlist a {
  color: rgb(2, 98, 182);
  font-weight: 500;
}
.hotlist a:hover {
  background-color: rgb(213, 230, 245);
  font-weight: 600;
}
.comments {
  width: 1550px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: nowrap;
}
#bookcomment {
  width: 750px;
  margin-top: 50px;
  margin-right: 10px;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 25px;
  padding-bottom: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
#moviecomment {
  width: 750px;
  margin-top: 50px;
  margin-right: 10px;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 25px;
  padding-bottom: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
.comments .homepage-title {
  font-size: 30px;
  font-weight: 600;
}
.aside .homepage-title {
  margin-left: 70px;
}
div.hothit {
  text-align: left;
}
.topics li {
  list-style: none;
}
.topic-list-item{
  &.rank1{
    color: red;
  }
  &.rank2{
    color: rgb(255, 128, 0);
  }
  &.rank3{
    color: rgb(255, 195, 44);
  }
}
div.topics.hotlist {
  border-style: solid;
  border-width: 4px;
  background-color: rgb(255, 250, 244);
  border-top-color: rgb(255, 247, 238);
  border-left-color: rgb(255, 247, 238);
  border-bottom-color: rgb(250, 239, 224);
  border-right-color: rgb(250, 239, 224);
  border-radius: 20px;
  box-shadow: 0px 1px 1px #888888a6;
}

ul.topics.hotlist {
  padding-left: 20px;
}
div.groups.hotlist {
  border-style: solid;
  border-width: 4px;
  background-color: rgb(244, 250, 255);
  border-top-color: rgb(244, 250, 255);
  border-left-color: rgb(244, 250, 255);
  border-bottom-color: rgb(224, 238, 250);
  border-right-color: rgb(224, 238, 250);
  border-radius: 20px;
  box-shadow: 0px 1px 1px #888888a6;
}
img.hot {
  height: 40px;
  vertical-align: -30%;
}
#bookcomment img {
  vertical-align: -10%;
}
#moviecomment img {
  vertical-align: -20%;
}
img.hot.books {
  height: 37px;
}
.Fordetail {
  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
  color: rgb(90, 88, 88);
  font-weight: 600;
  margin-left: 5px;
  vertical-align: -2%;
}
.comments .Fordetail {
  font-size: 40px;
  margin-left: 0px;
}
.homepage-title a:hover {
  text-decoration: none;
  font-weight: 600;
  border-radius: 40px;
  background-color: rgb(227, 239, 250);
}
.comment {
  padding-bottom: 0;
  margin-bottom: 0;
}
.nameOfuser {
  font-size: 17px;
  font-family: Source Han Sans CN Normal;
}
.comments-pic {
  height: 120px;
  width: 90px;
}
.comments-content {
  display: flex;
  flex-wrap: nowrap;
}
.comment a {
  font-weight: 500;
  font-size: 22px;
  color: rgb(0, 0, 0);
  text-decoration: none;
}
.comment a:hover {
  text-decoration: none;
  color: rgb(0, 166, 255);
}
div.origin {
  text-align: right;
}
.origin a {
  color: rgb(121, 121, 121);
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
}
.origin a:hover {
  text-decoration: underline;
  color: rgb(121, 121, 121);
}
.iconOfuser {
  height: 30px;
  margin-right: 5px;
  vertical-align: sub;
}
.comments-text {
  margin-left: 20px;
  margin-right: 10px;
}
a.commentlist {
  font-size: 16px;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: black;
  transition: 0.2s ease;
}
a.commentlist:hover {
  color: gray;
  text-decoration: none;
}
.hot-display-line {
  margin-left: 10px;
  margin-right: 10px;
}
.hot-display {
  height: 170px;
  width: 120px;
  border-style: solid;
  border-color: aliceblue;
  border-width: 3px;
}
.display-info {
  font-size: 12px;
}
.hit-ppt {
  width: 1070px;
  margin-bottom: 20px;
}
</style>
<script>
// @ is an alias to /src
import powerpoint from "@/components/PowerPoint";
import search from "@/components/SelectSearch.vue";
import commentDisplay from "@/components/ComDisplay.vue";
//load the img needed
import bookImg1 from "@/assets/books/Zissc.jpg";
import bookImg2 from "@/assets/books/Jiaoldr.jpg";
import "element-ui/lib/theme-chalk/index.css";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "@/styles/comment.css";
import qs from "qs";
export default {
  name: "home",
  data() {
    var loaddata = false;
    var bookcomments = [
      {
        id: 1,
        userId: 1,
        title: "标题",
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "yjl",
        img: bookImg1,
        content:
          "听Jpop不听King Gnu，\
        就像四大名著不看红楼梦，说明这个人文学造诣和自我修养不足，\
        他理解不了这种内在的阳春白雪的高雅艺术，他只能看到外表的辞藻堆砌，\
        参不透其中深奥的精神内核，他整个人的层次就卡在这里了，只能度过一个相对失败的人生。",
      },
      {
        id: 2,
        userId: 2,
        title: "标题",
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "IntP",
        img: bookImg2,
        content: "testtest",
      },
    ];
    var moviecomments = [
      {
        id: 1,
        userId: 1,
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "yjl",
        img: "https://i.imgtg.com/2022/05/12/z9ZmB.webp",
        content: "没什么可说的",
      },
      {
        id: 2,
        userId: 2,
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "IntP",
        img: bookImg2,
        content: "testtest",
      },
    ];
    var hotbooks = [{}];
    var hotmovies = [{}];
    var hotteles = [{}];
    var hottopics = [{}];
    var hotgroups = [{}];
    return {
      bookcomments,
      moviecomments,
      hotbooks,
      hotmovies,
      hotteles,
      hottopics,
      hotgroups,
      loaddata,
    };
  },
  components: {
    powerpoint,
    search,
    commentDisplay,
    VueSlickCarousel,
  },
  methods: {
    //this is the function to update the images of books
    logout() {
      this.$router.replace({ path: "/login" });
    },
    async updateHotBook() {
      var params = {
        num: 10,
      };
      this.$axios
        .post("/book/hot", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("书籍查询成功");
            //console.log(res.data.data)
            this.hotbooks = res.data.data;
            var i = 0;
            for (i = 0; i < 10; i++) {
              var length = 17 - this.hotbooks[i].name.length;
              if (this.hotbooks[i].name.length>=9 && this.hotbooks[i].author.length > length)
                this.hotbooks[i].author =
                  this.hotbooks[i].author.substring(0, length) + "…";
              if (this.hotbooks[i].author.length > 10)
                this.hotbooks[i].author =
                  this.hotbooks[i].author.substring(0, 10) + "…";
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
    async updateHotMovies() {
      var params = {
        num: 10,
      };
      this.$axios
        .post("/movie/hot", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("电影查询成功");
            console.log(res.data.data)
            this.hotmovies = res.data.data;
            var i = 0;
            for (i = 0; i < 10; i++) {
              var length = 12 - this.hotmovies[i].name.length;
              if (this.hotmovies[i].director.length > length)
                this.hotmovies[i].director =
                  this.hotmovies[i].director.substring(0, length) + "…";
              if (this.hotmovies[i].director.length > 6)
                this.hotmovies[i].director =
                  this.hotmovies[i].director.substring(0, 6) + "…";
            }
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateHotTeles() {
      var params = {
        num: 10,
      };
      this.$axios
        .post("/tele/hot", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("电视剧查询成功");
            //console.log(res.data.data)
            this.hotteles = res.data.data;
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
        num: 15,
      };
      this.$axios
        .post("/topic/hot", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("话题查询成功");
            console.log(res.data.data)
            this.hottopics = res.data.data;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateHotGroups() {
      var params = {
        num: 12,
      };
      this.$axios
        .post("/group/hot", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("小组查询成功");
            console.log(res.data.data)
            this.hotgroups = res.data.data;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ToBookDetail(id) {
      this.$router.push({
        name: "bookdetail",
        query: { id: id },
      });
    },
    ToMovieDetail(id) {
      this.$router.push({
        name: "moviedetail",
        query: { id: id },
      });
    },
    ToTeleDetail(id) {
      this.$router.push({
        name: "teledetail",
        query: { id: id },
      });
    },
    ToTopicDetail(id) {
      const _this = this;
      _this.$router.push({
        name: "topicdetail",
        query: { id: id },
      });
    },
  },
  mounted() {
    this.$parent.updateUser();
    this.updateHotBook();
    this.updateHotMovies();
    this.updateHotTeles();
    this.updateHotTopics();
    this.updateHotGroups();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.updateHotBook();
    });
  },
};
</script>

