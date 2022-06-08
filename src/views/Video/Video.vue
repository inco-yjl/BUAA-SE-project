<template>
  <div id="bookpage">
    <search></search>
    <div id="videopage-body">
      <div class="videopage-vertical">
        <div class="videopage-hit">
          <div class="videopage-title">
            <img src="@/assets/title/books.png" />
            <button
                class="selection_ed"
                id="select-hot-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="hotTopicdt()"
            >
              热门电影</button
            >/<button
                class="selection_un"
                id="select-follow-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="specifyTopicdt()"
            >热门电视剧
            </button>  
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
                v-for="book in hotmes"
                class="videopage-hit-box"
                :key="book.id"
            >
              <div class="flex-video-display">
                <div class="video-display-line">
                  <a @click="ToVideoDetail(book.book1.id)">
                    <img class="book-display" :src="book.book1.image" />
                    <div class="book-display-info">
                      <span class="book-display-title"
                      >《{{ book.book1.name }}》</span
                      ><br v-if="book.book1.name.length < 7" />
                      <span class="book-display-writer">{{
                          book.book1.director
                        }}{{book.book1.nation}}</span>
                    </div>
                  </a>
                </div>
                <div class="video-display-line">
                  <a @click="ToVideoDetail(book.book2.id)">
                    <img class="book-display" :src="book.book2.image" />
                    <div class="book-display-info">
                      <span class="book-display-title"
                      >《{{ book.book2.name }}》</span
                      ><br v-if="book.book2.name.length < 7" />
                      <span class="book-display-writer">{{
                          book.book2.director
                        }}{{book.book2.nation}}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="videopage-hit">
          <div class="videopage-title">
            <img src="@/assets/title/star.png" />
            <button
                class="selection_ed"
                id="select-hot-topic-dt-point"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="hotTopicdtpoint()"
            >
              高分电影</button
            >/<button
              class="selection_un"
              id="select-follow-topic-dt-point"
              onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
              @click="specifyTopicdtpoint()"
          >高分电视剧
          </button>
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
                v-for="book in highmes"
                class="bookpage-hit-box"
                :key="book.id"
            >
              <div class="flex-book-display">
                <div class="video-display-line">
                  <a @click="ToVideoDetailpoint(book.book1.id)">
                    <img class="book-display" :src="book.book1.image" />
                    <div class="book-display-info">
                       <span class="book-display-title"
                       >《{{ book.book1.name }}》</span
                       ><br v-if="book.book1.name.length < 7" />
                      <span class="book-display-writer">{{
                          book.book1.director
                        }}
                      {{book.book1.nation}}</span>
                    </div>
                  </a>
                </div>
                <div class="video-display-line">
                  <a @click="ToVideoDetailpoint(book.book2.id)">
                    <img class="book-display" :src="book.book2.image" />
                    <div class="book-display-info">
                       <span class="book-display-title"
                       >《{{ book.book2.name }}》</span
                       ><br v-if="book.book2.name.length < 7" />
                      <span class="book-display-writer">{{
                          book.book2.director
                        }}
                      {{book.book2.nation}}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="bookpage-comments">
          <div class="videopage-title">
            <img src="@/assets/title/book_comment.png" />热门评论
          </div>
          <div
              class="book-comments-display"
              v-for="comment in videocomments"
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
          <div class="videopage-title">
            <a href="../user/books">
              <img src="@/assets/guide/book_collection.png" />我的收藏
            </a>
          </div>
          <div
              class="collection-list"
              v-for="(video,index) in collections"
              :key="video.id"
          >
            <a class="collection-item" @click = "usetocolloction(index)">
              <img class="collection-img" :src="video.image" />
              <div class="collection-info">
                《{{ video.name }}》
                <el-rate
                    v-model="video.star"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                    disabled-void-color="ffffff"
                >
                </el-rate>
                {{ video.director }}
                {{video.year}}&nbsp;{{ video.nation }}
              </div>
            </a>
          </div>
        </div>
        <div class="collection">
          <div class="videopage-title">
            <a href="../user/books">
              <img src="@/assets/guide/mycomment.png" />我的评论
            </a>
          </div>
          <ul class="book-comment-list hotlist">
            <li
                :v-if="passages.length > 0"
                v-for="(passage,index) in passages"
                :key="passage.id"
            >
              <a @click="ToComment(index)">{{ passage.title }}</a>
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
import usericon from "@/assets/user/int.png";
import router from "@/router";
export default {
  name: "MyComponent",
  data() {
    var hotmes;
    var hotmoives = [{}];
    var hottele = [{}];
    var highmes;
    var highmoives = [{}];
    var hightele = [{}];
    var highbooks = [{}];
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
    var passages = [{}];
    var loadSuccess = false;
    var telecollections = [{}];
    var moviecollections = [{}];
    var ismovie;
    return {
      hotmes,
      hotmoives,
      hottele,
      highmes,
      highmoives,
      hightele,
      hotbooks: hotmoives,
      highbooks,
      videocomments: bookcomments,
      collections,
      passages,
      loadSuccess,
      telecollections,
      moviecollections,
      ismovie,
    };
  },
  components: {
    VueSlickCarousel,
    search,
  },
  methods: {
    usetocolloction(index) {
      if(this.collections[index].year != null) {
        this.$router.push({
          name: "teledetail",
          query: { id: this.collections[index].id },
        }); 
      }
      else {
        this.$router.push({
          name: "moviedetail",
          query: { id: this.collections[index].id },
        });
      }
    },
    getcommit() {
      
    },
    hotTopicdt() {
      //获取数据
      document
          .getElementById("select-follow-topic-dt")
          .setAttribute("class", "selection_un");
      this.hotmes = this.hotmoives;
    },
    specifyTopicdt() {
      document
          .getElementById("select-hot-topic-dt")
          .setAttribute("class", "selection_un");
      this.hotmes = this.hottele;
      
    },
    hotTopicdtpoint() {
      //获取数据
      document
          .getElementById("select-follow-topic-dt-point")
          .setAttribute("class", "selection_un");
      this.highmes = this.highmoives;
    },
    specifyTopicdtpoint() {
      document
          .getElementById("select-hot-topic-dt-point")
          .setAttribute("class", "selection_un");
      this.highmes = this.hightele;
    },
    //this is the function to update the images of books
    updateButton() {
      document
          .getElementsByClassName("selection_un")
          .item(4)
          .setAttribute("class", "selection_ed");
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
    ToVideoDetail(id) {
      if(this.hotmes === this.hotmoives) {
        this.$router.push({
        name: "moviedetail",
        query: { id: id },
      }); 
        this.hotmes = this.hotmoives;
      }
      else if(this.hotmes === this.hottele) {
        this.$router.push({
          name: "teledetail",
          query: { id: id },
        });
        this.hotmes = this.hottele;
      }
    },
    ToVideoDetailpoint(id) {
      if(this.highmes === this.highmoives) {
        this.$router.push({
          name: "moviedetail",
          query: { id: id },
        });
        this.highmes = this.highmoives;
      }
      else if(this.highmes === this.hightele) {
        this.$router.push({
          name: "teledetail",
          query: { id: id },
        });
        this.highmes = this.hightele;
      }
    },
    ToComment(index) {
      if(index < this.ismovie)
        this.$router.push({ name: "moviecomment", query: { id: this.passages[index].id } });
      else
        this.$router.push({ name: "telecomment", query: { id: this.passages[index].id } });
    },
    bookcomment() {
      this.$router.push({ name: "bookcomment" });
    },
    async updateCollection() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.collections = [];
      this.$axios
          .post("/tele/collection", qs.stringify(params))
          .then((res) => {
            console.log(res);
            console.log("查询到已收藏的电视剧")
            if (res.data.errno === 0) {
              this.telecollections = [];
              var i = 0;
              if(res.data.data.length !== 0)
              for (i = 0; i < 1 && i < res.data.data.length; i++) {
                this.collections.push(res.data.data[i]);
              }
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      this.$axios
          .post("/movie/collection", qs.stringify(params))
          .then((res) => {
            console.log(res);
            console.log("查询到已收藏的电影")
            if (res.data.errno === 0) {
              var i = 0;
              if(res.data.data.length !== 0)
              for (i = 0; i < 2 && i < res.data.data.length; i++) {
                this.collections.push(res.data.data[i]);
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
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.passages = [];
      this.$axios
          .post("/movie/mypassage", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              var i;
              var length = 3;
              if (res.data.data.length < 3) length = res.data.data.length;
              this.ismovie = length;
              for (i = 0; i < length; i++) this.passages.push(res.data.data[i]);
              this.loadSuccess = true;
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      this.$axios
          .post("/tele/mypassage", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
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
    async updateHotVideo() {
      var params = {
        num: 20,
      };
      this.$axios
          .post("/movie/hot", qs.stringify(params))
          .then((res) => {
            if (res.data.errno === 0) {
              console.log("获取到热门电影");
              console.log(res);
              var movie = [];
              movie = res.data.data;
              var i = 0;
              for (i = 0; i < 10; i++) {
                var length = 14 - movie[i].name.length;
                if (movie[i].name.length > 7 && movie[i].director.length > length)
                  movie[i].director = movie[i].director.substring(0, length - 2) + "…";
                if (movie[i].director.length > 8)
                  movie[i].director = movie[i].director.substring(0, 7) + "…";
              }
              this.hotmoives = [];
              for (i = 0; i < 10; i = i + 2) {
                this.hotmoives.push({
                  book1: movie[i],
                  book2: movie[i + 1],
                  id: i,
                });
              }
              this.hotmes = this.hotmoives;
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      this.$axios
          .post("/tele/hot", qs.stringify(params))
          .then((res) => {
            if (res.data.errno === 0) {
              console.log("获取到热门电视剧");
              console.log(res);
              var tele = [];
              tele = res.data.data;
              var i = 0;
              for (i = 0; i < 10; i++) {
                var length = 14 - tele[i].name.length;
                if (tele[i].name.length > 7 && tele[i].nation.length > length)
                  tele[i].nation = tele[i].nation.substring(0, length - 2) + "…";
                if (tele[i].nation.length > 8)
                  tele[i].nation = tele[i].nation.substring(0, 7) + "…";
              }
              this.hottele = [];
              for (i = 0; i < 10; i = i + 2) {
                this.hottele.push({
                  book1: tele[i + 1],
                  book2: tele[i],
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
    async updateHighvideo() {
      var params = {
        num: 20,
      };
      this.$axios
          .post("/movie/high",qs.stringify(params))
          .then((res) => {
            if (res.data.errno === 0) {
              console.log("获取到高分电影");
              console.log(res);
              var movie = [];
              movie = res.data.data;
              var i = 0;
              for (i = 0; i < 10; i++) {
                var length = 14 - movie[i].name.length;
                if (movie[i].name.length > 7 && movie[i].director.length > length)
                  movie[i].director = movie[i].director.substring(0, length - 2) + "…";
                if (movie[i].director.length > 8)
                  movie[i].director = movie[i].director.substring(0, 7) + "…";
              }
              this.highmoives = [];
              for (i = 0; i < 10; i = i + 2) {
                this.highmoives.push({
                  book1: movie[i],
                  book2: movie[i + 1],
                  id: i,
                });
              }
              this.highmes = this.highmoives;
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      this.$axios
          .post("/tele/high",qs.stringify(params))
          .then((res) => {
            if (res.data.errno === 0) {
              console.log("获取到高分电视剧");
              console.log(res);
              var tele = [];
              tele = res.data.data;
              var i = 0;
              for (i = 0; i < 10; i++) {
                var length = 14 - tele[i].name.length;
                if (tele[i].name.length > 7 && tele[i].nation.length > length)
                  tele[i].nation = tele[i].nation.substring(0, length - 2) + "…";
                if (tele[i].nation.length > 8)
                  tele[i].nation = tele[i].nation.substring(0, 7) + "…";
              }
              this.hightele = [];
              for (i = 0; i < 10; i = i + 2) {
                this.hightele.push({
                  book1: tele[i],
                  book2: tele[i + 1],
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
    this.updateHotVideo();
    this.updateHighvideo();
    this.updatePassage();
    window.onscroll = function (e) {
      var vertical = document
          .getElementsByClassName("videopage-vertical")
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
#bookpage {
  width: 1600px;
  padding-left: 100px;
}
#videopage-body {
  width: 1580px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
.videopage-vertical {
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
.videopage-hit {
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
.video-display-line {
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
.videopage-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
}
.videopage-title img {
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
  width:352px;
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
  width:352px;
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
  height: 530px;
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