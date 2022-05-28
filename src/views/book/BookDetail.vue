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
                  <div>123人评价</div>
                </div>
              </div>
              <div>
                <div class="rate-number">
                  5星
                  <div class="distribute" style="width: 150px"></div>
                </div>
                <div class="rate-number">
                  4星
                  <div class="distribute" style="width: 100px"></div>
                </div>
                <div class="rate-number">
                  3星
                  <div class="distribute" style="width: 96px"></div>
                </div>
                <div class="rate-number">
                  2星
                  <div class="distribute" style="width: 5px"></div>
                </div>
                <div class="rate-number">
                  1星
                  <div class="distribute" style="width: 18px"></div>
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
            <a class="collection-item">
              <img class="collection-img" :src="book.img" />
              <div class="collection-info">
                《{{ book.bookname }}》
                <el-rate
                  v-model="book.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  disabled-void-color="ffffff"
                >
                </el-rate>
                [{{ book.nation }}]{{ book.writer }}
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
            <li v-for="passage in passages" :key="passage.id">
              <a>{{ passage.title }}</a>
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
              @click="hotTopicdt()"
            >
              热门评论</button
            >/
            <button
              class="selection_un"
              id="select-new-comment"
              onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
              @click="newTopicdt()"
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
                <a class="userOfcomment" href="/otherusers/1">
                  <img class="iconOfuser" :src="comment.usericon" /><span
                    class="nameOfuser"
                    >{{ comment.username }}</span
                  >
                </a>
                <span class="publish-info">{{ comment.date }}</span>
              </div>
              <div class="commenttext">
                <a class="commenttext-origin" @click="Tobookcomment">{{
                  comment.content
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/components/common.vue";
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
    var item = {
      bookname: "焦虑的人",
      bookid: 1,
      star: 4.5,
      nation: "瑞典",
      writer: "xxx·xxx",
      img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
      press: "天津人民出版社",
      intro:
        "&ensp;&ensp;&ensp;&ensp;究竟是何种程度的无奈和绝望，迫使一个中年人在新年来临前的早晨，用一把玩具枪抢劫一家无现金银行。\
        行动失败的劫匪仓皇之中逃进一间位于大楼顶层的待售公寓，里面全都是正在看房子的潜在买家。由此开始，抢劫案变成了劫持人质案。\
        <br><br>&ensp;&ensp; &ensp;&ensp;然而事情的发展出乎预料，没有警匪对峙、没有致命一击，漫长的一天过后，八名人质安然无恙得到释放，\
        劫匪却完全不见踪影。警察对人质逐一展开讯问，却发现他们每个人都有一肚子的抱怨和疑问，可是谁也说不清楚并且不关心劫匪究竟去了哪里。\
        <br>&ensp;&ensp; &ensp;&ensp;婚姻、工作、家庭、育儿、投资、医疗、人际关系，现如今的生活，任何事情都会引发焦虑，没有人敢说自己一点\
        儿都不焦虑。我们都是辛苦又脆弱的小人物，一边吐槽，一边还在咬牙坚持过下去。小说《焦虑的人》关照的正是平凡的你我。<br><br>&ensp;\
        &ensp; &ensp;&ensp;作者巴克曼，写治愈暖心小说真的是一把好手，他的小说一大特点就是又好笑又好哭，不会刻意卖惨，但是在阅读中又不知不觉被\
        感动、被温暖、被戳中。他的作品非常关注底层人群、弱势人群，关照平凡大众的喜怒哀乐。比如暴躁但正义的外婆、刻板但坚强的布里特-玛丽、\
        臭脸但温柔的欧维。这些人都有缺点、遭遇困境，很容易让我们联想到身边人甚至是自己。<br><br>&ensp;&ensp;&ensp;&ensp;《焦虑的人》\
        主角是一个愚蠢的银行抢劫犯和一群正在看房子的奇葩买家，本以为这个故事应该惊险刺激，但剧情的走向完全出乎预料。这群人共处一室带来一场闹剧，\
        嬉笑怒骂背后却是令人唏嘘的人情冷暖和现代社会问题。不仅如此，故事的后半段，还有一个巨大的秘密等着读者去发现。<br><br>&ensp;&ensp;\
        &ensp;&ensp;在《焦虑的人》里，面对艰难的人生之路，有些人放弃了，\
        有些人还在尽力而为。而巴克曼的故事唤醒我们的同理心和共情力，在任何时候，爱、理解、宽恕和希望都能拯救我们。",
    };
    var bookcomments = [
      {
        id: 1,
        date: "2022-5-4",
        userId: 1,
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "yjl",
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
        content: "testtest",
      },
      {
        id: 3,
        date: "2022-5-4",
        userId: 2,
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "看看中文",
        content: "多搞点",
      },
      {
        id: 4,
        date: "2022-5-4",
        userId: 2,
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        username: "还有好多没写",
        content: "多搞点",
      },
    ];
    var loadSuccess = false;
    var collections = [
      {
        bookname: "焦虑的人",
        bookid: 1,
        star: 4.5,
        nation: "瑞典",
        writer: "xxx·xxx",
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
      },
      {
        bookname: "焦虑的人",
        bookid: 2,
        star: 4.5,
        nation: "瑞典",
        writer: "xxx·xxx",
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
      },
      {
        bookname: "焦虑的人",
        bookid: 3,
        star: 4.5,
        nation: "瑞典",
        writer: "xxx·xxx",
        img: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
      },
    ];
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
    var collect = false;
    return {
      collections,
      passages,
      book,
      collect,
      id,
      bookcomments,
      loadSuccess,
    };
  },
  methods: {
    clickcollect() {
      if (global.currentUserId === -1) {
        this.$message.error("请先登录");
        return;
      }
      var params = {
        book_id: this.id,
        user_id: global.currentUserId,
      };
      console.log("user:" + global.currentUserId);
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
      if (global.currentUserId === -1) {
        this.$message.error("请先登录");
        return;
      }
      var params = {
        book_id: this.id,
        user_id: global.currentUserId,
      };
      console.log("user:" + global.currentUserId);
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
    Tobookcomment() {
      this.$router.push({ name: "bookcomment" });
    },
    async UpdateContent() {
      var params = {
        book_id: this.id,
        user_id: global.currentUserId,
      };
      console.log("user:" + global.currentUserId);
      this.$axios
        .post("/book/detail", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("书籍查询成功");
            this.book = res.data.data;
            this.loadSuccess = true;
            switch(res.data.collect)
            {
                case 1:
                    this.collect = true;
                    break;
                case 0:
                    this.collect = false;
                    break;
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
    newCommentdt() {
      //获取新的数据
      document
        .getElementById("select-hot-comment")
        .setAttribute("class", "selection_un");
      this.dt = this.newdt;
      this.Updatediary();
    },
    hotCommentcdt() {
      //更换标签时获取数据
      document
        .getElementById("select-new-comment")
        .setAttribute("class", "selection_un");
      this.dt = this.topic.hotdt;
      this.Updatediary();
    },
  },
  mounted() {
    this.UpdateContent();
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
  height:auto;
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
  color: gray;
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
  color: gray;
  text-decoration: none;
}
</style>