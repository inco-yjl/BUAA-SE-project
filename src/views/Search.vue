<template>
  <div id="searchpage">
    <search-input></search-input>
    <div>
      <div id="search-book-result" v-if="hasBook" class="search-result">
        <div class="search-result-title">相关书籍</div>
        <div v-for="book in books" :key="book.id" class="search-detail-result">
          <div class="search-result-text">
            <div class="result-origin">
              <a>《{{ book.name }}》</a>
            </div>
            <div class="result-info">
              <div class="result-star">
                <el-rate
                  v-model="book.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
              <div>
                <span>{{ book.readerNum }}人评价</span> &nbsp;&nbsp;
                <span>作者：{{ book.author }}</span
                >&nbsp;&nbsp;
                <span>出版社：{{ book.publisher }}</span>
              </div>
            </div>
            <div class="result-intro">{{ book.intro }}</div>
          </div>

          <div>
            <a class="book-img" href="javascript:void(0)"
              ><img class="result-img" :src="book.img"
            /></a>
          </div>
        </div>
        <div>{{ bookText }}</div>
        <div class="search-number">
          <el-pagination
            @current-change="changeSearchBook"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="bookNum"
          >
          </el-pagination>
        </div>
      </div>
      <div id="search-movie-result" v-if="hasMovie" class="search-result">
        <div class="search-result-title">相关电影</div>
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="search-detail-result"
        >
          <div class="search-result-text">
            <div class="result-origin">
              <a>《{{ movie.name }}》</a>
            </div>
            <div class="result-info">
              <div class="result-star">
                <el-rate
                  v-model="movie.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
              <div>
                <span>({{ movie.year }})</span>&nbsp;&nbsp;
                <span>{{ movie.watchNum }}人评价</span> &nbsp;&nbsp;
                <span>导演： {{ movie.director }}</span>
              </div>
            </div>
            <div class="result-intro">{{ movie.intro }}</div>
          </div>

          <div>
            <a class="movie-img" href="javascript:void(0)"
              ><img class="result-img" :src="movie.img"
            /></a>
          </div>
        </div>
        <div>{{ movieText }}</div>
        <div class="search-number">
          <el-pagination
            @current-change="changeSearchMovie"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="movieNum"
          >
          </el-pagination>
        </div>
      </div>
      <div id="search-episode-result" v-if="hasTele" class="search-result">
        <div class="search-result-title">相关电视剧</div>
        <div v-for="tele in teles" :key="tele.id" class="search-detail-result">
          <div class="search-result-text">
            <div class="result-origin">
              <a>《{{ tele.name }}》</a>
            </div>
            <div class="result-info">
              <div class="result-star">
                <el-rate
                  v-model="tele.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
              <div>
                <span>({{ tele.year }})</span>&nbsp;&nbsp;
                <span>{{ tele.watchNum }}人评价</span> &nbsp;&nbsp;
                <span>[{{ tele.nation }}]</span>&nbsp;&nbsp;
                <span>主演：{{ tele.actor }}</span>
              </div>
            </div>
            <div class="result-intro">{{ tele.intro }}</div>
          </div>
          <div>
            <a class="movie-img" href="javascript:void(0)"
              ><img class="result-img" :src="tele.img"
            /></a>
          </div>
        </div>
        <div>{{ teleText }}</div>
        <div class="search-number">
          <el-pagination
            @current-change="changeSearchTele"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="teleNum"
          >
          </el-pagination>
        </div>
      </div>
      <div id="search-group-result" v-if="hasGroup" class="search-result">
        <div class="search-result-title">相关小组</div>
        <div
          v-for="group in groups"
          :key="group.id"
          class="search-detail-result"
        >
          <div class="search-result-text">
            <div class="result-origin">
              <a> 《{{ group.name }}》 </a>
            </div>
            <div class="result-info">
              <div>
                <span>{{ group.member }}名小组成员</span> &nbsp;&nbsp;
              </div>
            </div>
          </div>

          <div class="search-img">
            <a class="group-img" href="javascript:void(0)"
              ><img class="result-img" :src="group.img"
            /></a>
          </div>
        </div>
        <div>{{ groupText }}</div>
        <div class="search-number">
          <el-pagination
            @current-change="changeSearchGroup()"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="groupNum"
          >
          </el-pagination>
          <div
            class="passage-block"
            v-for="passage in topmes"
            :key="passage.id"
          >
            <hr />
            <div class="passage-display-body">
              <div class="display-publisher">
                <a class="userOfdiary" href="/otherusers/1">
                  <img class="iconOfuser" :src="passage.usericon" /><span
                    class="nameOfuser"
                    >{{ passage.username }}</span
                  >
                </a>
                <span class="publishtime">{{ passage.date }}</span>
              </div>
              <div class="passage-content">
                <a>{{ passage.title }}</a>
              </div>
            </div>
          </div>
        </div>
        <div>{{ tieText }}</div>
        <el-pagination
          @current-change="changeSearchTie()"
          :page-size="3"
          layout="prev, pager, next, jumper"
          :total="tieNum"
        >
        </el-pagination>
      </div>
      <div id="search-topic-result" v-if="hasTopic" class="search-result">
        <div class="search-result-title">相关话题</div>
        <div
          v-for="topic in topics"
          :key="topic.id"
          class="search-detail-result"
        >
          <div class="search-result-text">
            <div class="result-origin">
              <a>《{{ topic.name }}》</a>
            </div>
            <div class="result-intro">{{ topic.intro }}</div>
          </div>
        </div>
        <div>{{ topicText }}</div>
        <div class="search-number">
          <el-pagination
            @current-change="changeSearchTopic"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="topicNum"
          >
          </el-pagination>
        </div>
        <div class="search-result-title">相关动态</div>
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
                      ></span
                    >
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
        <div>{{ dtText }}</div>
        <div class="search-number">
          <el-pagination
            @current-change="changeSearchDt"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="dtNum"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchInput from "@/components/SelectSearch.vue";
import qs from "qs";
export default {
  name: "search",
  components: {
    searchInput,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.updatecontent();
    });
  },
  data() {
    var allBooks = [];
    var allMovies = [];
    var allTeles = [];
    var allTopics = [];
    var allDts = [];
    var allGroups = [];
    var allTies = [];
    var value = 3.7;
    return {
      content: "",
      movieText: "",
      bookText: "",
      teleText: "",
      dtText: "",
      topicText: "",
      groupText: "",
      tieText: "",
      hasBook: false,
      hasMovie:false,
      hasTele: false,
      hasTopic: false,
      hasGroup: false,
      value,
      allBooks,
      allDts,
      allMovies,
      allTeles,
      allTopics,
      allGroups,
      allTies,
      books: [],
      movies: [],
      teles: [],
      topics: [],
      groups: [],
      dts: [],
      ties: [],
      bookNum: 0,
      movieNum: 24,
      teleNum: 24,
      groupNum: 24,
      topicNum: 24,
      dtNum: 0,
      tieNum: 0,
    };
  },
  methods: {
    updatecontent() {
      this.content = this.$route.query.content;
      this.hasBook = this.$route.query.hasBook;
      this.hasMovie = this.$route.query.hasMovie;
      this.hasTele = this.$route.query.hasTele;
      this.hasTopic = this.$route.query.hasTopic;
      this.hasGroup = this.$route.query.hasGroup;
      this.updateBook();
      this.updateMovie();
      this.updateTele();
      this.updateTopic();
      this.updateDt();
      this.updateGroup();
      this.updateTie();
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
    updateBook() {
      if (!this.hasBook) return;
      this.allBooks = [];
      var params = {
        search_id: "11",
        search_content: this.content,
      };
      this.$axios
        .post("/search/book_search", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.bookText = "";
            this.bookNum = res.data.data.length;
            this.allBooks = res.data.data;
            var i = 0;
            for (i = 0; i < this.bookNum; i++) {
              var text = this.ToText(this.allBooks[i].intro);
              if (text.length > 170) text = text.substring(0, 170) + "…";
              this.allBooks[i].intro = text;
              this.allBooks[i].star = parseFloat(this.allBooks[i].star);
              if (this.allBooks[i].author.length > 16)
                this.allBooks[i].author =
                  this.allBooks[i].author.substring(0, 16) + "…";
            }
            this.changeSearchBook(1);
          } else {
            this.bookText = res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeSearchBook(currentPage) {
      this.books = [];
      var length = this.bookNum - (currentPage - 1) * 3;
      if (length > 3) length = 3;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.books.push(this.allBooks[currentPage * 3 - 3 + i]);
      }
    },
    updateMovie() {
      if (!this.hasMovie) return;
      this.allMovies = [];
      var params = {
        search_id: "21",
        search_content: this.content,
      };
      this.$axios
        .post("/search/movie_search", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.movieText = "";
            console.log("movie");
            this.movieNum = res.data.data.length;
            this.allMovies = res.data.data;
            var i = 0;
            for (i = 0; i < this.movieNum; i++) {
              var text = this.ToText(this.allMovies[i].intro);
              if (text.length > 170) text = text.substring(0, 170) + "…";
              this.allMovies[i].intro = text;
              this.allMovies[i].star = parseFloat(this.allMovies[i].star);
            }
            this.changeSearchMovie(1);
          } else {
            this.movieText = res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeSearchMovie(currentPage) {
      this.movies = [];
      var length = this.movieNum - (currentPage - 1) * 3;
      if (length > 3) length = 3;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.movies.push(this.allMovies[currentPage * 3 - 3 + i]);
      }
    },
    updateTele() {
      if (!this.hasTele) return;
      this.allTeles = [];
      var params = {
        search_id: "31",
        search_content: this.content,
      };
      this.$axios
        .post("/search/tele_search", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.teleText = "";
            this.teleNum = res.data.data.length;
            this.allTeles = res.data.data;
            var i = 0;
            for (i = 0; i < this.teleNum; i++) {
              var text = this.ToText(this.allTeles[i].intro);
              if (text.length > 170) text = text.substring(0, 170) + "…";
              this.allTeles[i].intro = text;
              this.allTeles[i].star = parseFloat(this.allTeles[i].star);
              if (this.allTeles[i].actor.length > 16)
                this.allTeles[i].actor =
                  this.allTeles[i].actor.substring(0, 16) + "…";
            }
            this.changeSearchTele(1);
          } else if (res.data.errno === 200) {
            this.teleText = res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeSearchTele(currentPage) {
      this.teles = [];
      var length = this.teleNum - (currentPage - 1) * 3;
      if (length > 3) length = 3;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.teles.push(this.allTeles[currentPage * 3 - 3 + i]);
      }
    },
    updateTopic() {
      if (!this.hasTopic) return;
      this.allTopics = [];
      var params = {
        search_id: "41",
        search_content: this.content,
      };
      this.$axios
        .post("/search/topic_search", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.topicText = "";
            console.log(res.data.data);
            this.topicNum = res.data.data.length;
            this.allTopics = res.data.data;
            var i = 0;
            for (i = 0; i < this.topicNum; i++) {
              var text = this.ToText(this.allTopics[i].intro);
              if (text.length > 170) text = text.substring(0, 170) + "…";
              this.allTopics[i].intro = text;
            }
            this.changeSearchTopic(1);
          } else {
            this.topicText = res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeSearchTopic(currentPage) {
      this.topics = [];
      var length = this.topicNum - (currentPage - 1) * 3;
      if (length > 3) length = 3;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.topics.push(this.allTopics[currentPage * 3 - 3 + i]);
      }
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
    updateDt() {
      if (!this.hasTopic) return;
      this.allDts = [];
      var params = {
        search_id: "61",
        search_content: this.content,
      };
      this.$axios
        .post("/search/article_search", qs.stringify(params))
        .then((res) => {
          console.log(res.data);
          if (res.data.errno === 0) {
            console.log("dt");
            console.log(res.data);
            this.dtNum = res.data.data.length;
            var passages = res.data.data;
            var i = 0;
            for (var i = 0; i < this.dtNum; i++) {
              var hasimg = true;
              var imgs = this.getimgsrc(passages[i].content);
              if (imgs.length == 0) hasimg = false;
              passages[i].content = this.ToText(passages[i].content);
              if (passages[i].content.length > 170) {
                passages[i].content =
                  passages[i].content.substring(0, 170) + "…";
              }
              this.allDts.push({
                usericon: this.displayIcon(passages[i].usericon),
                user: passages[i].username,
                userid: passages[i].userid,
                date: passages[i].date.substring(0, 10),
                hasimg: hasimg,
                img: imgs[0],
                topic: passages[i].topic,
                topicid: passages[i].topicid,
                thestyle: this.getStyle(imgs[0]),
                id: passages[i].id,
                passage: passages[i].content,
              });
              this.changeSearchDt(1);
            }
          } else {
            this.dtText = res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeSearchDt(currentPage) {
      this.dts = [];
      var length = this.dtNum - (currentPage - 1) * 3;
      if (length > 3) length = 3;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.dts.push(this.allDts[currentPage * 3 - 3 + i]);
      }
    },
    updateGroup() {
      if (!this.hasGroup) return;
      this.allGroups = [];
      var params = {
        search_id: "51",
        search_content: this.content,
      };
      this.$axios
        .post("/search/group_search", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.groupTextText = "";
            this.groupNum = res.data.data.length;
            this.allGroups = res.data.data;
            this.changeSearchGroup(1);
          } else {
            this.bookText = res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeSearchGroup(currentPage) {
      this.groups = [];
      var length = this.groupNum - (currentPage - 1) * 3;
      if (length > 3) length = 3;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.groups.push(this.allGroups[currentPage * 3 - 3 + i]);
      }
      console.log(this.groups);
    },
    changeSearchTie() {
      this.ties = [];
      var length = this.tieNum - (currentPage - 1) * 3;
      if (length > 3) length = 3;
      var i = 0;
      for (i = 0; i < length; i++) {
        this.groups.push(this.allTies[currentPage * 3 - 3 + i]);
      }
      console.log(this.ties);
    },
    updateTie() {
      if (!this.hasGroup) return;
      this.allGroups = [];
      var params = {
        search_id: "62",
        search_content: this.content,
      };
      this.$axios
        .post("/search/article_search", qs.stringify(params))
        .then((res) => {
          console.log(res.data);
          if (res.data.errno === 0) {
            this.tieText = "";
            console.log("tie");
            console.log(res.data);
            this.tieNum = res.data.data.length;
            var passages = res.data.data;
            var i = 0;
            for (var i = 0; i < this.tieNum; i++) {
              this.allDts.push({
                usericon: this.displayIcon(passages[i].usericon),
                username: passages[i].username,
                userid: passages[i].userid,
                date: passages[i].date.substring(0, 10),
                title: passages[i].title,
                id: passages[i].id,
              });
              this.changeSearchTie(1);
            }
          } else {
            this.tieText = res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    upDateLink() {
      document
        .getElementsByClassName("book-img")
        .item(0)
        .addEventListener("click", function () {
          router.push({
            name: "bookdetail",
            query: { id: this.books[0].id },
          });
        });
      document
        .getElementsByClassName("book-img")
        .item(0)
        .addEventListener("click", function () {
          router.push({
            name: "bookdetail",
            query: { id: this.books[0].id },
          });
        });
    },
  },
  mounted() {
    this.updatecontent();
  },
};
</script>
<style scoped>
#searchpage {
  width: 1590px;
  margin-left: 100px;
}
#selection_search {
  padding-left: 400px;
}
.search-result-title {
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
}
.search-result {
  padding-left: 80px;
  padding-right: 100px;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 1000px;
  margin-left: 270px;
  margin-top: 50px;
  margin-bottom: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
.result-origin {
  position: relative;
  font-weight: 600;
  font-size: 18px;
  text-align: left;
  width: 1000px;
}
.result-origin a {
  font-family: Source Han Sans CN Normal;
  color: black;
  text-decoration: none;
  padding-left: 5px;
  text-decoration: none;
}
.result-origin a:hover {
  font-family: Source Han Sans CN Normal;
  color: rgb(31, 169, 255);
}

.search-detail-result {
  padding-top: 20px;
  padding-left: 10px;
  width: 830px;
  border-top-style: solid;
  border-width: 1.2px;
  padding-right: 50px;
  border-top-color: rgb(225, 225, 225);
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 20px;
}
.search-result-text {
  width: 680px;
  margin-right: 20px;
}
.result-img {
  margin-top: 10px;
  width: 110px;
}
.search-img {
  height: 110px;
  width: 110px;
  overflow: hidden;
}
.search-img .result-img {
  height: 100%;
  width: auto;
}
.result-info {
  display: flex;
  flex-wrap: nowrap;
  font-size: 15px;
  font-weight: 400;
  color: rgb(157, 157, 157);
}
.result-star {
  margin-right: 20px;
}
.result-intro {
  font-size: 16px;
  text-decoration: none;
  color: black;
  transition: 0.3s ease;
  margin-top: 10px;
}
.search-number {
  margin-left: 150px;
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
.display-publisher {
  color: rgb(157, 157, 157);
  margin-bottom: 10px;
  margin-bottom: 10px;
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
  font-size: 16px;
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
</style>