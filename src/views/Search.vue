<template>
  <div id="searchpage">
    <search-input></search-input>
    <div>
      <div id="search-book-result" class="search-result">
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
                <span>作者：{{ book.writer }}</span
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
            @next-click="changeSearchBook()"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="bookNum"
          >
          </el-pagination>
        </div>
      </div>
      <div id="search-movie-result" class="search-result">
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
                <span>导演：[{{ movie.nation }}]</span>
                <span>{{ movie.director }}</span>
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
            @next-click="changeSearchMovie()"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="movieNum"
          >
          </el-pagination>
        </div>
      </div>
      <div id="search-episode-result" class="search-result">
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
            @next-click="changeSearchTele()"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="teleNum"
          >
          </el-pagination>
        </div>
      </div>
      <div id="search-group-result" class="search-result">
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
      <div id="search-topic-result" class="search-result">
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
export default {
  name: "search",
  components: {
    searchInput,
  },
  data() {
    var bookNum;
    var movieNum;
    var teleNum;
    var groupNum;
    var topicNum;
    var books = [
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        star: 3.5,
        readerNum: 100,
        writer: "xxx·xxx",
        publisher: "某个出版社",
        intro:
          "究竟是何种程度的无奈和绝望，迫使一个中年人在新年来临前的早晨，用一把玩具枪抢劫一家无现金银行。\
        行动失败的劫匪仓皇之中逃进一间位于大楼顶层的待售公寓，里面全都是正在看房子的潜在买家。由此开始，\
        抢劫案变成了劫持人质案。\n然而事情的发展出乎预料，没有警匪对峙、没有致命一击，漫长的一天过后，八名人质安然无恙得到释放，\
        劫匪却完全不见踪影。警察对人质逐一展开讯问，却发现他们每个人都有一肚子的抱怨和疑问，\
        可是谁也说不清楚并且不关心劫匪究竟去了哪里。",
      },
      {
        name: "焦虑的人",
        id: 2,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        star: 3.5,
        readerNum: 100,
        writer: "xxx·xxx",
        publisher: "某个出版社",
        intro:
          "究竟是何种程度的无奈和绝望，迫使一个中年人在新年来临前的早晨，用一把玩具枪抢劫一家无现金银行。\
        行动失败的劫匪仓皇之中逃进一间位于大楼顶层的待售公寓，里面全都是正在看房子的潜在买家。由此开始，\
        抢劫案变成了劫持人质案。\n然而事情的发展出乎预料，没有警匪对峙、没有致命一击，漫长的一天过后，八名人质安然无恙得到释放，\
        劫匪却完全不见踪影。警察对人质逐一展开讯问，却发现他们每个人都有一肚子的抱怨和疑问，\
        可是谁也说不清楚并且不关心劫匪究竟去了哪里。",
      },
    ];
    var movies = [
      {
        name: "1917",
        id: 2,
        nation: "美国",
        director: "萨姆·门德斯",
        year: 2019,
        img: "https://i.imgtg.com/2022/05/12/z9ZmB.webp",
        watchNum: 2000,
        star: 4.2,
        intro:
          "1917年，第一次世界大战进入最激烈之际，两个年仅16岁的英国士兵接到的命令，需立即赶往死亡前线，向那里的将军传达一个“立刻停止进攻”讯息。\
         时间只有八小时，武器弹药有限，无人知晓前方敌况：死亡寂静之地、布满尸体的铁丝网、突如其来的敌军、随时毙命的危险境况…… \
         这一次两 个少年为救1600个人的性命，不完成，毋宁死！",
      },
    ];
    var teles = [
      {
        name: "半泽直树",
        id: 1,
        nation: "日本",
        year: 2013,
        actor: ["堺雅人", "福泽克雄", "松木彩"],
        img: "https://i.imgtg.com/2022/05/12/z9vVs.webp",
        watchNum: 300,
        star: 4.6,
        intro:
          "20世纪90年代，背负着悲惨过去的大学毕业生半泽直树（堺雅人 饰）如愿进入产业中央银行，并与同期近藤直弼（泷藤贤一 饰）、\
        渡真利忍（及川光博 饰）朝着各自心中的目标而努力。看似光鲜的银行家们，在泡沫经济衰退前后身心经历着难以想象的折磨。进入21世纪，\
        产业中央银行与东京第 一银行合并为东京中央银行，此时半泽任大阪西分店的融资课课长，坚信人性本善的他在履行银行家职责的同时坚守\
        着普世的道义。高达5亿日元贷款诈骗事件，将半泽逼到事业的悬崖边，也促使他和只重明哲保身、趋炎附势、重利轻义的分行长乃至业内高层彻\
        底决裂，有如螳臂当车、逆流而上的战斗，半泽能否凭一己之力改变这冷漠腐化的现状？",
      },
    ];
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
    var value = 3.7;
    return {
      value,
      books,
      movies,
      teles,
      topics,
      groups,
      bookNum: 24,
      movieNum: 24,
      teleNum: 24,
      groupNum: 24,
      topicNum: 24,
    };
  },
  methods: {
    splitIntro() {
      var i, j;
      for (i = 0; i < this.books.length; i++) {
        if (this.books[i].intro.length > 170)
          this.books[i].intro = this.books[i].intro.substring(0, 170) + "(……)";
      }
      for (i = 0; i < this.movies.length; i++) {
        if (this.movies[i].intro.length > 170)
          this.movies[i].intro =
            this.movies[i].intro.substring(0, 170) + "(……)";
      }
      for (i = 0; i < this.teles.length; i++) {
        if (this.teles[i].intro.length > 170)
          this.teles[i].intro = this.teles[i].intro.substring(0, 170) + "(……)";
          var actor = "";
        for (j = 0; j < this.teles[i].actor.length; j++) {
          if (j != 0) actor = actor + "/";
          actor = actor + this.teles[i].actor[j];
        }
        this.teles[i].actor = actor;
      }
      for (i = 0; i < this.groups.length; i++) {
        if (this.groups[i].intro.length > 80)
          this.groups[i].intro = this.groups[i].intro.substring(0, 80) + "(……)";
      }
      for (i = 0; i < this.topics.length; i++) {
        if (this.topics[i].intro.length > 50)
          this.topics[i].intro = this.topics[i].intro.substring(0, 50) + "(……)";
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
    this.splitIntro();
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