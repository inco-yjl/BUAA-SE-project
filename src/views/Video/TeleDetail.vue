<template>
  <div id="tele-detail">
    <search></search>
    <div id="detail-body">
      <div :v-if="loadSuccess" class="detail-vertical">
        <div class="detail-header">
          <div class="name-title">《{{ tele.name }}》</div>
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
            <div><img class="detail-img" :src="tele.image" /></div>
            <div class="info-text">
              <span class="pl">年份：</span
              ><span class="pl2">{{ tele.year }}</span> <br />
              <span class="pl">国家：</span
              ><span class="pl2">{{ tele.nation }}</span> <br />
              <span class="pl">演员：</span
              ><span class="pl2">{{ tele.actor }}</span> <br />
              <div class="rank">
                <div class="rank-score">
                  评分
                  <div class="score">
                    <strong class="num">{{ tele.score }}</strong>
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
          <button  @click="writeComment()" style="position: relative; float: right; right: 100px;">
            <img src="@/assets/guide/write_dt.png" /><span>撰写评论</span>
          </button>
          <div class="detail-intro">
            <span class="intro-title">内容简介···</span>
            <div v-html="tele.intro"></div>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="collection">
          <div class="detail-title">
            <a href="../user/teles">
              <img src="@/assets/guide/tele_collection.png" />已收藏电视剧
            </a>
          </div>
          <div
            class="collection-list"
            v-for="tele in collections"
            :key="tele.id"
          >
            <a class="collection-item" @click = "usetocollde(tele.id)">
              <img class="collection-img" :src="tele.image" />
              <div class="collection-info">
                《{{ tele.name }}》
                <el-rate
                  v-model="tele.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  disabled-void-color="ffffff"
                >
                </el-rate>
                ({{tele.year}})[{{ tele.nation }}]
              </div>
            </a>
          </div>
        </div>
        <div class="collection">
          <div class="detail-title">
            <a href="../user/teles">
              <img src="@/assets/guide/mycomment.png" />我的影评
            </a>
          </div>
          <ul class="comment-list hotlist">
            <li v-for="passage in passages" :key="passage.id">
              <a>{{ passage.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="comment-block">
        <div class="title comment-hit">
          <span
            ><img src="@/assets/title/movie_comment.png" />
            <button
              class="selection_ed"
              id="select-hot-comment"
              onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
              @click="hotComment()"
            >
              热门评论</button
            >/
            <button
              class="selection_un"
              id="select-new-comment"
              onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
              @click="newComment()"
            >
              最新评论
            </button>
          </span>
          <div
            class="comments-display"
            v-for="comment in telecomments"
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
                {{
                  comment.content
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/SelectSearch.vue";
import qs from "qs";
export default {
  name: "teledetail",
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
    var tele = {};
    var telecomments = [
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
    var newdt = [];
    var hotdt = [];
    var db = [];
    var collect = false;
    return {
      collections,
      passages,
      tele,
      collect,
      id,
      telecomments,
      loadSuccess,
      newdt,
      hotdt,
      db,
    };
  },
  methods: {
    usetocollde(id) {
      this.$router.push({
        name: "teledetail",
        query: { id: id },
      });
    },
    writeComment() {
      if (this.$store.getters.getUser.user.id === -1) {
        this.$message.error("请先登录");
        return;
      }
      else {
        this.$router.push({
          name: "teleeditor",
          query: { id: this.id },
        });
      }
    },
    clickcollect() {
      if (this.$store.getters.getUser.user.id === -1) {
        this.$message.error("请先登录");
        return;
      }
      var params = {
        tele_id: this.id,
        user_id: this.$store.getters.getUser.user.id,
      };
      console.log("user:" + this.$store.getters.getUser.user.id);
      this.$axios
        .post("/tele/collect", qs.stringify(params))
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
      if (this.$store.getters.getUser.user.id === -1) {
        this.$message.error("请先登录");
        return;
      }
      var params = {
        tele_id: this.id,
        user_id: this.$store.getters.getUser.user.id,
      };
      console.log("user:" + this.$store.getters.getUser.user.id);
      this.$axios
        .post("/tele/uncollect", qs.stringify(params))
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
    Totelecomment() {
      this.$router.push({ name: "telecomment" });
    },
    async updateCollection() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/tele/collection", qs.stringify(params))
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
    async updateContent() {
      var params = {
        tele_id: this.id,
        user_id: this.$store.getters.getUser.user.id,
      };
      console.log("user:" + this.$store.getters.getUser.user.id);
      this.$axios
        .post("/tele/detail", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log("电视剧查询成功");
            this.tele = res.data.data;
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
    newComment() {
      //获取新的数据
      document
        .getElementById("select-hot-comment")
        .setAttribute("class", "selection_un");
      this.db = this.newdt;
      this.Updatediary();
    },
    hotComment() {
      //更换标签时获取数据
      document
        .getElementById("select-new-comment")
        .setAttribute("class", "selection_un");
      this.db = this.hotdt;
      this.Updatediary();
    },
  },
  getdt() {
    var params = {
      tele_id: this.id,
    };
    this.$axios
        .post("/tele/hot_article", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.hotdt = [];
            console.log(res.data.data);
            var i=0;
            for(i=0;i<5 && i<res.data.data.length;i++)
              this.hotdt.push(res.data.data[i]);
            this.db = this.hotdt;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    this.$axios
        .post("/tele/new_article", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            this.hotdt = [];
            console.log(res.data.data);
            var i=0;
            for(i=0;i<5 && i<res.data.data.length;i++)
              this.hotdt.push(res.data.data[i]);
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
  },
  
  mounted() {
    this.updateContent();
    this.updateCollection();
    this.getdt();
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
#tele-detail {
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
.name-title {
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
.rank {
  width: 200px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.num {
  font-size: 20px;
}
.rate-number {
  display: flex;
  font-size: 15px;
  color: rgb(101, 101, 101);
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

.detail-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
}
.detail-title img {
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
  width:352px;
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
.collection .detail-title a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection .detail-title a:hover {
  color: rgb(2, 98, 182);
}
.collection .detail-title a:hover::after {
  opacity: 1;
}
.collection .detail-title a:active {
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
.-comment-list a {
  font-size: 18px;
  font-family: Source Han Sans CN Normal;
}
.comment-list a:hover {
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
.comments-display {
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
  color: rgb(101, 101, 101);
  text-decoration: none;
}
</style>