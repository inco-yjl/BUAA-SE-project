<template>
  <div id="moviepage">
    <search></search>
    <div id="videopage-body">
      <div class="videopage-vertical">
        <div class="videopage-hit">
          <div class="videopage-title">
            <img src="@/assets/title/movie.png" />
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
            >
              热门电视剧
            </button>
          </div>
          <VueSlickCarousel
            :dots="true"
            :arrows="true"
            :useCSS="true"
            :infinite="false"
            :speed="500"
            :slidesToShow="7"
            :slidesToScroll="7"
            :touchThreshold="5"
          >
            <div
              v-for="movie in hotmes"
              class="videopage-hit-box"
              :key="movie.id"
            >
              <div class="flex-video-display">
                <div class="video-display-line">
                  <a @click="ToVideoDetail(movie.movie1.id)">
                    <img class="movie-display" :src="movie.movie1.image" />
                    <div class="movie-display-info">
                      <span class="movie-display-title"
                        >《{{ movie.movie1.name }}》</span
                      ><br v-if="movie.movie1.name.length < 7" />
                      <span class="movie-display-writer"
                        >{{ movie.movie1.director
                        }}{{ movie.movie1.nation }}</span
                      >
                    </div>
                  </a>
                </div>
                <div class="video-display-line">
                  <a @click="ToVideoDetail(movie.movie2.id)">
                    <img class="movie-display" :src="movie.movie2.image" />
                    <div class="movie-display-info">
                      <span class="movie-display-title"
                        >《{{ movie.movie2.name }}》</span
                      ><br v-if="movie.movie2.name.length < 7" />
                      <span class="movie-display-writer"
                        >{{ movie.movie2.director
                        }}{{ movie.movie2.nation }}</span
                      >
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
            >
              高分电视剧
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
              v-for="movie in highmes"
              class="moviepage-hit-box"
              :key="movie.id"
            >
              <div class="flex-movie-display">
                <div class="video-display-line">
                  <a @click="ToVideoDetailpoint(movie.movie1.id)">
                    <img class="movie-display" :src="movie.movie1.image" />
                    <div class="over-star">{{ movie.movie1.star }}</div>
                    <div class="movie-display-info">
                      <span class="movie-display-title"
                        >《{{ movie.movie1.name }}</span
                      ><br />
                    </div>
                  </a>
                </div>
                <div class="video-display-line">
                  <a @click="ToVideoDetailpoint(movie.movie2.id)">
                    <img class="movie-display" :src="movie.movie2.image" />
                    <div class="over-star">{{ movie.movie2.star }}</div>
                    <div class="movie-display-info">
                      <span class="movie-display-title"
                        >《{{ movie.movie2.name }}</span
                      ><br />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="moviepage-comments">
          <div class="moviepage-title">
            <img src="@/assets/title/movie_comment.png" />热门影评
          </div>
          <div
            class="movie-comments-display"
            v-for="comment in moviecomments"
            :key="comment.id"
          >
            <hr />
            <div class="comment-display-body">
              <div class="display-publisher">
                <a class="userOfcomment" @click="ToUser(comment.user_id)">
                  <img class="iconOfuser" :src="comment.usericon" /><span
                    class="nameOfuser"
                    >{{ comment.username }}</span
                  >
                </a>
                <span class="publish-info"
                  >{{ comment.date }}&ensp;评论了<a class="comment-movie-name"
                    >《{{ comment.moviename }}》</a
                  ></span
                >
              </div>
              <div class="comment-origin-pic">
                <a
                  class="comment-origin"
                  @click="ToMovieDetail(comment.movieid)"
                  ><img class="comment-pic" :src="comment.img" />
                </a>
              </div>
              <div class="commenttext">
                <a class="commenttext-origin" @click="ToComment(comment.id)">
                  <span class="comment-title">
                    {{ comment.title }} </span
                  ><br />
                  {{ comment.content }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="collection">
          <div class="videopage-title">
            <a href="../user/movies">
              <img
                id="collection-guide"
                src="@/assets/guide/movie_collection.png"
              />我的收藏
            </a>
          </div>
          <div
            class="collection-list"
            v-for="(video, index) in collections"
            :key="video.id"
          >
            <a class="collection-item" @click="usetocolloction(index)">
              <img class="collection-img" :src="video.image" />
              <div class="collection-info">
                《{{ video.name }}》({{ video.year }})
                <el-rate
                  v-model="video.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  disabled-void-color="ffffff"
                >
                </el-rate>
                {{ video.info }}
              </div>
            </a>
          </div>
        </div>
        <div class="collection">
          <div class="videopage-title">
            <a href="../user/movies">
              <img src="@/assets/guide/mycomment.png" />我的评论
            </a>
          </div>
          <ul class="movie-comment-list hotlist">
            <li
              :v-if="passages.length > 0"
              v-for="(passage, index) in passages"
              :key="index"
            >
              <a @click="ToWhichComment(index)">{{ passage.title }}</a>
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
    var hotmes = [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ]; //我也没办法，加载好慢
    var hotmovies = [{}];
    var hottele = [{}];
    var highmes = [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ];
    var highmovies = [];
    var hightele = [];
    var moviecomments = [];
    var collections = [];
    var passages = [];
    var loadSuccess = false;
    var telecollections = [];
    var moviecollections = [];
    var ismovie;
    return {
      hotmes,
      hotmovies,
      hottele,
      highmes,
      highmovies,
      hightele,
      hotmovies: hotmovies,
      moviecomments,
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
      if (index < this.ismovie) {
        this.$router.push({
          name: "teledetail",
          query: { id: this.collections[index].id },
        });
      } else {
        this.$router.push({
          name: "moviedetail",
          query: { id: this.collections[index].id },
        });
      }
    },
    ToComment(id) {
      this.$router.push({
        name: "moviecomment",
        query: { id: id },
      });
    },
    getcommit() {},
    hotTopicdt() {
      //获取数据
      document
        .getElementById("select-follow-topic-dt")
        .setAttribute("class", "selection_un");
      this.hotmes = this.hotmovies;
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
      this.highmes = this.highmovies;
    },
    specifyTopicdtpoint() {
      document
        .getElementById("select-hot-topic-dt-point")
        .setAttribute("class", "selection_un");
      this.highmes = this.hightele;
    },
    //this is the function to update the images of movies
    updateButton() {
      document
        .getElementsByClassName("selection_un")
        .item(4)
        .setAttribute("class", "selection_ed");
    },
    async updateComment() {
      this.$axios.post("/movie/hotpassage").then((res) => {
        if (res.data.errno === 0) {
          console.log("获取到热门影评");
          console.log(res.data);
          this.moviecomments = res.data.data;
          var i;
          for (i = 0; i < this.moviecomments.length; i++) {
            this.moviecomments[i].content = this.ToText(
              this.moviecomments[i].content
            );
            if (this.moviecomments[i].content.length > 170) {
              this.moviecomments[i].content =
                this.moviecomments[i].content.substring(0, 170) + "…";
              var img = this.displayIcon(this.moviecomments[i].usericon);
              this.moviecomments[i].usericon = img.icon;
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
      return { icon: icon };
    },
    ToMovieDetail(id) {
      this.$router.push({
        name: "moviedetail",
        query: { id: id },
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
    ToVideoDetail(id) {
      if (this.hotmes === this.hotmovies) {
        this.$router.push({
          name: "moviedetail",
          query: { id: id },
        });
        this.hotmes = this.hotmovies;
      } else if (this.hotmes === this.hottele) {
        this.$router.push({
          name: "teledetail",
          query: { id: id },
        });
        this.hotmes = this.hottele;
      }
    },
    ToVideoDetailpoint(id) {
      if (this.highmes === this.highmovies) {
        this.$router.push({
          name: "moviedetail",
          query: { id: id },
        });
        this.highmes = this.highmovies;
      } else if (this.highmes === this.hightele) {
        this.$router.push({
          name: "teledetail",
          query: { id: id },
        });
        this.highmes = this.hightele;
      }
    },
    ToWhichComment(index) {
      if (index < this.ismovie)
        this.$router.push({
          name: "moviecomment",
          query: { id: this.passages[index].id },
        });
      else
        this.$router.push({
          name: "telecomment",
          query: { id: this.passages[index].id },
        });
    },
    ToUser(id) {
      this.$router.push({ name: 'users', query: { id: id } });
    },
    async updateCollection() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.collections = [];
      this.$axios
        .post("/tele/collection", qs.stringify(params))
        .then((res) => {
          console.log("查询到已收藏的电视剧");
          if (res.data.errno === 0) {
            this.telecollections = [];
            var i = 0;
            if (res.data.data.length !== 0)
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
          console.log("查询到已收藏的电影");
          if (res.data.errno === 0) {
            var i = 0;
            if (res.data.data.length !== 0)
              for (i = 0; i < 2 && i < res.data.data.length; i++) {
                res.data.data[i].star = parseFloat(res.data.data[i].star);
                this.collections.push(res.data.data[i]);
                console.log(this.collections[i].star);
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
          if (res.data.errno === 0) {
            var i;
            var length = 2;
            if (res.data.data.length < 2) length = res.data.data.length;
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
          console.log("查询到我的剧评");
          if (res.data.errno === 0) {
            var i;
            var length = 2;
            if (res.data.data.length < 2) length = res.data.data.length;
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
            var movie = [];
            movie = res.data.data;
            var i = 0;
            for (i = 0; i < 20; i++) {
              var length = 14 - movie[i].name.length;
              movie[i].director = "[导演]" + movie[i].director;
              if (movie[i].name.length > 14) {
                movie[i].name = movie[i].name.substring(0, 14) + "…";
                movie[i].director = "";
                continue;
              }
              if (movie[i].name.length > 7 && movie[i].director.length > length)
                movie[i].director =
                  movie[i].director.substring(0, length - 2) + "…";
              if (movie[i].director.length > 10)
                movie[i].director = movie[i].director.substring(0, 9) + "…";
            }
            this.hotmovies = [];
            for (i = 0; i < 20; i = i + 2) {
              this.hotmovies.push({
                movie1: movie[i],
                movie2: movie[i + 1],
                id: i,
              });
            }
            this.hotmes = this.hotmovies;
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
            var tele = [];
            tele = res.data.data;
            var i = 0;
            for (i = 0; i < 20; i++) {
              var length = 14 - tele[i].name.length;
              if (tele[i].name.length > 14) {
                tele[i].name = tele[i].name.substring(0, 14) + "…";
                tele[i].nation = "";
                continue;
              }
              if (tele[i].name.length > 7 && tele[i].nation.length > length)
                tele[i].nation = tele[i].nation.substring(0, length - 2) + "…";
              if (tele[i].nation.length > 8)
                tele[i].nation = tele[i].nation.substring(0, 7) + "…";
            }
            this.hottele = [];
            for (i = 0; i < 20; i = i + 2) {
              this.hottele.push({
                movie1: tele[i + 1],
                movie2: tele[i],
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
        .post("/movie/high", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("获取到高分电影");
            var movie = [];
            movie = res.data.data;
            var i = 0;
            for (i = 0; i < 20; i++) {
              movie[i].name = movie[i].name + "》";
              if (movie[i].name.length > 6)
                movie[i].name = movie[i].name.substring(0, 6) + "…";
              movie.star = parseFloat(movie.star);
            }
            this.highmovies = [];
            for (i = 0; i < 20; i = i + 2) {
              this.highmovies.push({
                movie1: movie[i],
                movie2: movie[i + 1],
                id: i,
              });
            }
            this.highmes = this.highmovies;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      this.$axios
        .post("/tele/high", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("获取到高分电视剧");
            var tele = [];
            tele = res.data.data;
            var i = 0;
            for (i = 0; i < 20; i++) {
              tele[i].name = tele[i].name + "》";
              if (tele[i].name.length > 6)
                tele[i].name = tele[i].name.substring(0, 6) + "…";
              tele.star = parseFloat(tele.star);
            }
            this.hightele = [];
            for (i = 0; i < 20; i = i + 2) {
              this.hightele.push({
                movie1: tele[i],
                movie2: tele[i + 1],
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
    this.updateComment();
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
#moviepage {
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

.movie-display {
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
.movie-display-info {
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
#collection-guide {
  height: 37px;
  vertical-align: -30%;
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
.moviepage-comments {
  margin-bottom: 50px;
}
.movie-comments-display {
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
.moviepage-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
}
.moviepage-title img {
  height: 37px;
  vertical-align: -20%;
  margin-right: 5px;
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
.commenttext {
  width: 800px;
  margin-left: 30px;
}
a.commenttext-origin {
  position: relative;
  top: 26px;
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
a.comment-movie-name {
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
  height: 140px;
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
.movie-comment-list a {
  font-size: 18px;
  font-family: Source Han Sans CN Normal;
}
.movie-comment-list a:hover {
  font-weight: 600;
  color: rgb(2, 98, 182);
}
</style>
