<template>
  <div id="searchpage">
    <search-input></search-input>
    <div>
      <div id="search-book-result" class="search-result">
        <div class="search-result-title">相关书籍</div>
        <hr />
        <div class="bm-result">
          <div class="bm-result-text">
            <div class="result-origin">
              <a>《{{ book0.name }}》</a>
            </div>
            <div class="result-info">
              <div class="result-star">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
              <div>
                <span>{{ book0.readerNum }}人评价</span> &nbsp;&nbsp;
                <span>作者：{{ book0.writer }}</span
                >&nbsp;&nbsp;
                <span>出版社：{{ book0.publisher }}</span>
              </div>
            </div>
            <div class="result-intro">{{ book0.intro }}</div>
          </div>

          <div>
            <a class="book-img" href="javascript:void(0)"
              ><img class="result-img" :src="book0.img"
            /></a>
          </div>
        </div>
        <hr />
        <div class="bm-result">
          <div class="bm-result-text">
            <div class="result-origin">
              <a>《{{ book0.name }}》</a>
            </div>
            <div class="result-info">
              <div class="result-star">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
              <div>
                <span>{{ book0.readerNum }}人评价</span> &nbsp;&nbsp;
                <span>作者：{{ book0.writer }}</span
                >&nbsp;&nbsp;
                <span>出版社：{{ book0.publisher }}</span>
              </div>
            </div>
            <div class="result-intro">{{ book0.intro }}</div>
          </div>

          <div>
            <a class="book-img" href="javascript:void(0)"
              ><img class="result-img" :src="book0.img"
            /></a>
          </div>
        </div>
        <hr />
        <div class="bm-result">
          <div class="bm-result-text">
            <div class="result-origin">
              <a>《{{ book0.name }}》</a>
            </div>
            <div class="result-info">
              <div class="result-star">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
              <div>
                <span>{{ book0.readerNum }}人评价</span> &nbsp;&nbsp;
                <span>作者：{{ book0.writer }}</span
                >&nbsp;&nbsp;
                <span>出版社：{{ book0.publisher }}</span>
              </div>
            </div>
            <div class="result-intro">{{ book0.intro }}</div>
          </div>

          <div>
            <a class="book-img" href="javascript:void(0)"
              ><img class="result-img" :src="book0.img"
            /></a>
          </div>
        </div>
      </div>
      <div id="search-movie-result" class="search-result">
        <div class="search-result-title">相关电影</div>
        <hr />
        <div class="bm-result">
          <div class="bm-result-text">
            <div class="result-origin">
              <a>《{{ movie0.name }}》</a>
            </div>
            <div class="result-info">
              <div class="result-star">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
              <div>
                <span>({{ movie0.year }})</span>&nbsp;&nbsp;
                <span>{{ movie0.watchNum }}人评价</span> &nbsp;&nbsp;
                <span>导演：[{{ movie0.nation }}]</span>
                <span>{{ movie0.director }}</span>
              </div>
            </div>
            <div class="result-intro">{{ movie0.intro }}</div>
          </div>

          <div>
            <a class="movie-img" href="javascript:void(0)"
              ><img class="result-img" :src="movie0.img"
            /></a>
          </div>
        </div>
        <hr />
        <div class="bm-result">
          <div class="bm-result-text">
            <div class="result-origin">
              <a>《{{ movie0.name }}》</a>
            </div>
            <div class="result-info">
              <div class="result-star">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
              <div>
                <span>({{ movie0.year }})</span>&nbsp;&nbsp;
                <span>{{ movie0.watchNum }}人评价</span> &nbsp;&nbsp;
                <span>导演：[{{ movie0.nation }}]</span>
                <span>{{ movie0.director }}</span>
              </div>
            </div>
            <div class="result-intro">{{ movie0.intro }}</div>
          </div>

          <div>
            <a class="movie-img" href="javascript:void(0)"
              ><img class="result-img" :src="movie0.img"
            /></a>
          </div>
        </div>
        <hr />
        <div class="bm-result">
          <div class="bm-result-text">
            <div class="result-origin">
              <a>《{{ movie0.name }}》</a>
            </div>
            <div class="result-info">
              <div class="result-star">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
              <div>
                <span>({{ movie0.year }})</span>&nbsp;&nbsp;
                <span>{{ movie0.watchNum }}人评价</span> &nbsp;&nbsp;
                <span>导演：[{{ movie0.nation }}]</span>
                <span>{{ movie0.director }}</span>
              </div>
            </div>
            <div class="result-intro">{{ movie0.intro }}</div>
          </div>

          <div>
            <a class="movie-img" href="javascript:void(0)"
              ><img class="result-img" :src="movie0.img"
            /></a>
          </div>
        </div>
      </div>
      <div id="search-episode-result" class="search-result">
        <div class="search-result-title">相关电视剧</div>
        <hr />
        <div class="bm-result">
          <div class="bm-result-text">
            <div class="result-origin">
              <a>《{{ tele0.name }}》</a>
            </div>
            <div class="result-info">
              <div class="result-star">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
              <div>
                <span>({{ tele0.year }})</span>&nbsp;&nbsp;
                <span>{{ tele0.watchNum }}人评价</span> &nbsp;&nbsp;
                <span>导演：[{{ tele0.nation }}]</span>
                <span>{{ tele0.director }}</span>
              </div>
            </div>
            <div class="result-intro">{{ tele0.intro }}</div>
          </div>

          <div>
            <a class="movie-img" href="javascript:void(0)"
              ><img class="result-img" :src="tele0.img"
            /></a>
          </div>
        </div>
      </div>
      <div id="search-group-result"></div>
      <div></div>
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
    var book = [
      {
        name: "焦虑的人",
        id: 1,
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
        star: 3.7,
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
    var movie = [
      {
        name: "1917",
        id: 1,
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
    var tele = [
      {
        name: "半泽直树",
        id: 1,
        nation: "日本",
        year: 2013,
        img: "https://i.imgtg.com/2022/05/12/z9vVs.webp",
        watch: 300,
        star: 4.6,
        intro:
          "　20世纪90年代，背负着悲惨过去的大学毕业生半泽直树（堺雅人 饰）如愿进入产业中央银行，并与同期近藤直弼（泷藤贤一 饰）、\
        渡真利忍（及川光博 饰）朝着各自心中的目标而努力。看似光鲜的银行家们，在泡沫经济衰退前后身心经历着难以想象的折磨。进入21世纪，\
        产业中央银行与东京第 一银行合并为东京中央银行，此时半泽任大阪西分店的融资课课长，坚信人性本善的他在履行银行家职责的同时坚守\
        着普世的道义。高达5亿日元贷款诈骗事件，将半泽逼到事业的悬崖边，也促使他和只重明哲保身、趋炎附势、重利轻义的分行长乃至业内高层彻\
        底决裂，有如螳臂当车、逆流而上的战斗，半泽能否凭一己之力改变这冷漠腐化的现状？",
      },
    ];
    var value = 3.7;
    return {
      value,
      book,
      movie,
      book0: book[0],
      movie0: movie[0],
      tele0: tele[0],
    };
  },
  methods: {
    splitIntro() {
      this.book0.intro = this.book0.intro.substring(0, 170) + "(……)";
      this.movie0.intro = this.movie0.intro.substring(0, 170) + "(……)";
      this.tele0.intro = this.tele0.intro.substring(0, 170) + "(……)";
    },
    upDateLink() {
      document
        .getElementsByClassName("book-img")
        .item(0)
        .addEventListener("click", function () {
          router.push({
            name: "bookdetail",
            query: { id: this.book[0].id },
          });
        });
      document
        .getElementsByClassName("book-img")
        .item(0)
        .addEventListener("click", function () {
          router.push({
            name: "bookdetail",
            query: { id: this.book[0].id },
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
  width: 1600px;
  margin-left: 100px;
}
#selection_search {
  padding-left: 400px;
}
.search-result-title {
  font-weight: bold;
  font-size: 30px;
}
.search-result {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 20px;
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

.bm-result {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 20px;
}
.bm-result-text {
  width: 680px;
  margin-right: 20px;
}
.result-img {
  width: 110px;
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
</style>