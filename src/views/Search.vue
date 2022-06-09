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
        <div class="search-number">
          <el-pagination
            @current-change="changeSearchBook"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="bookNum"
          >
          </el-pagination>
          <div>{{bookText}}</div>
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
                <span>导演：
                {{ movie.director }}</span>
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
        <div class="search-number">
          <el-pagination
            @current-change="changeSearchMovie"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="movieNum"
          >
          </el-pagination>
          <div>{{movieText}}</div>
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
        <div class="search-number">
          <el-pagination
            @current-change="changeSearchTele"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="teleNum"
          >
          </el-pagination>
        </div>
        <div>{{teleText}}</div>
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
              <a>《{{ group.name }}》</a>
            </div>
            <div class="result-info">
              <div>
                <span>{{ group.member }}名小组成员</span> &nbsp;&nbsp;
              </div>
            </div>
            <div class="result-intro">{{ group.intro }}</div>
          </div>

          <div class="search-img">
            <a class="group-img" href="javascript:void(0)"
              ><img class="result-img" :src="group.img"
            /></a>
          </div>
        </div>
        <div class="search-number">
          <el-pagination
            @next-click="changeSearchGroup()"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="groupNum"
          >
          </el-pagination>
        </div>
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
            <div class="result-info">
              <div>
                <span
                  >{{ topic.browsetime }}次浏览·{{ topic.dtnum }}篇动态·{{
                    topic.peoplenum
                  }}人关注</span
                >
                &nbsp;&nbsp;
              </div>
            </div>
            <div class="result-intro">{{ topic.intro }}</div>
          </div>
        </div>
        <div class="search-number">
          <el-pagination
            @next-click="changeSearchTopic()"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="topicNum"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchInput from "@/components/SelectSearch.vue";
import qs from 'qs';
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
    var groups = [
      {
        name: "我们喜欢逛公园",
        id: 1,
        img: "https://i.imgtg.com/2022/05/16/zwYOl.jpg",
        member: 100,
        intro:
          "公园，心天地。凑字数看看多少字合适哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
      },
    ];
    var topics = [
      {
        name: "寻找春日气息",
        id: 1,
        intro:
          "哈哈，春天来了！为了让画面好看，这里要写长一点，但是不能写的太长，",
        browsetime: 1000,
        peoplenum: 22,
        dtnum: 20,
      },
    ];
    var allBooks= [];
    var allMovies = [];
    var allTeles = [];
    var value = 3.7;
    var hasMovie = false;
    return {
      content: "",
      movieText:"",
      bookText:"",
      teleText:"",
      hasBook: false,
      hasMovie,
      hasTele: false,
      hasTopic: false,
      hasGroup: false,
      value,
      allBooks,
      allMovies,
      allTeles,
      books: [],
      movies:[],
      teles: [],
      topics,
      groups,
      bookNum: 0,
      movieNum: 24,
      teleNum: 24,
      groupNum: 24,
      topicNum: 24,
    };
  },
  methods: {
    updatecontent() {
      var input = this.$route.query;
      this.content = input.content;
      this.hasBook = input.hasBook;
      this.hasMovie = input.hasMovie;
      this.hasTele = input.hasTele;
      this.hasTopic = input.hasTele;
      this.hasGroup = input.hasTele;
      this.updateBook();
      this.updateMovie();
      this.updateTele();
    },
    ToText(HTML) {
      var input = HTML;
      return input
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/[ ]|[&ensp;]/g, '')
        .replace(/[ ]|[&nbsp;]/g, '')
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
    },
    updateBook(){
      if(!this.hasBook)
        return;
      this.allBooks= [];
      var params = {
        search_id: '11',
        search_content: this.content
      }
      this.$axios
        .post("/search/book_search", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.bookText = "";
            console.log(res.data);
            this.bookNum = res.data.data.length;
            this.allBooks = res.data.data;
            var i=0;
            for(i=0;i<this.bookNum;i++) {
              var text = this.ToText(this.allBooks[i].intro);
              if(text.length>170)
                text=text.substring(0,170)+'…';
              this.allBooks[i].intro = text;
              console.log(this.allBooks[i].intro)
              this.allBooks[i].star = parseFloat(this.allBooks[i].star);
              if(this.allBooks[i].author.length>16)
                this.allBooks[i].author =this.allBooks[i].author.substring(0,16)+'…';
            }
            this.changeSearchBook(1);
          } else {
            this.bookText=res.data.msg
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeSearchBook(currentPage){
      this.books = [];
      var length = this.bookNum - (currentPage - 1)*3;
      if(length > 3)
      length = 3;
      var i=0;
      for (i=0;i<length;i++){
        this.books.push(this.allBooks[currentPage*3-3+i]);
      }
    },
    updateMovie(){
      if(!this.hasMovie)
        return;
      this.allMovies = [];
      var params = {
        search_id: '21',
        search_content: this.content
      }
      this.$axios
        .post("/search/movie_search", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.movieText = "";
            console.log('movie')
            console.log(res.data);
            this.movieNum = res.data.data.length;
            this.allMovies = res.data.data;
            var i=0;
            for(i=0;i<this.movieNum ;i++) {
              var text = this.ToText(this.allMovies[i].intro);
              if(text.length>170)
                text=text.substring(0,170)+'…';
              this.allMovies[i].intro = text;
              this.allMovies[i].star = parseFloat(this.allMovies[i].star);
            }
            this.changeSearchMovie(1);
          } else {
            this.movieText=res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeSearchMovie(currentPage){
      this.movies = [];
      var length = this.movieNum - (currentPage - 1)*3;
      if(length > 3)
      length = 3;
      var i=0;
      for (i=0;i<length;i++){
        this.movies.push(this.allMovies[currentPage*3-3+i]);
      }
    },
    updateTele(){
      if(!this.hasTele)
        return;
      this.allTeles = [];
      var params = {
        search_id: '31',
        search_content: this.content
      }
      this.$axios
        .post("/search/tele_search", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.teleText = "";
            this.teleNum = res.data.data.length;
            this.allTeles = res.data.data;
            var i=0;
            for(i=0;i<this.teleNum ;i++) {
              var text = this.ToText(this.allTeles[i].intro);
              if(text.length>170)
                text=text.substring(0,170)+'…';
              this.allTeles[i].intro = text;
              this.allTeles[i].star = parseFloat(this.allTeles[i].star);
              if(this.allTeles[i].actor.length>16)
                this.allTeles[i].actor = this.allTeles[i].actor.substring(0,16)+'…';
            }
            this.changeSearchTele(1);
          } else if (res.data.errno === 200 ){
            this.teleText = res.data.msg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeSearchTele(currentPage){
      this.teles = [];
      var length = this.teleNum - (currentPage - 1)*3;
      if(length > 3)
      length = 3;
      var i=0;
      for (i=0;i<length;i++){
        this.teles.push(this.allTeles[currentPage*3-3+i]);
      }
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
</style>