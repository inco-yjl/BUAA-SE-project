<template>
  <div id="topicpage">
    <search></search>
    <div class="body">
      <div class="flex_box">
        <div class="topic_circle">
          <div class="title">
            <span class="topic_cirle_title">话题广场</span
            ><button onclick="">
              <img id="change_topic" src="@/assets/guide/change_topic.png" />
            </button>
          </div>
          <div class="boxesOfTopic">
            <div>
              寻找春日气息<br /><a class="topicboxes-route" href="/1"
                >参与话题</a
              >
            </div>
            <div>
              今天是立秋<br /><a class="topicboxes-route" href="/1">参与话题</a>
            </div>
            <div>
              你最爱的海上电影镜头<br /><a class="topicboxes-route" href="/1"
                >参与话题</a
              >
            </div>
            <div>
              老家记忆<br /><a class="topicboxes-route" href="/1">参与话题</a>
            </div>
            <div>
              后疫情时代的旅行<br /><a class="topicboxes-route" href="/1"
                >参与话题</a
              >
            </div>
            <div>
              你拍过的最搞笑的照片<br /><a class="topicboxes-route" href="/1"
                >参与话题</a
              >
            </div>
            <div>
              寻找春日气息<br /><a class="topicboxes-route" href="/1"
                >参与话题</a
              >
            </div>
            <div>
              寻找春日气息<br /><a class="topicboxes-route" href="/1"
                >参与话题</a
              >
            </div>
          </div>
        </div>
        <div class="aside">
          <div class="collection">
            <div class="title">
              <a href="../user/topics">
                <img src="@/assets/guide/star_topic.png" />已关注话题
              </a>
            </div>
            <ul class="collection-list hotlist palebluestyle">
              <li><a>老家记忆</a></li>
              <li><a>这是在干嘛</a></li>
              <li><a>再写一个</a></li>
            </ul>
            <div id="more-collection-topic" class="hotlist">
              <a>……</a>
            </div>
          </div>
          <div></div>
          <br />
          <div class="hotlist topic_page palebluestyle">
            <div class="title topic_page">
              <img src="@/assets/guide/topic_trend.png" /><span>话题趋势</span>
            </div>
            <ol>
              <li>&ensp;<a href="/1">我的世界读书日</a></li>
              <li>&ensp;<a href="/2">今天吃什么？</a></li>
              <li>&ensp;<a href="/2">你每天都有哪些突如其来的感悟</a></li>
              <li>&ensp;<a href="/2">和新冠肺炎疫情有关的记忆</a></li>
              <li>&ensp;<a href="/2">热爱生活的一万个理由</a></li>
              <li>&ensp;<a href="/2">今天吃什么？</a></li>
              <li>&ensp;<a href="/2">今天吃什么？</a></li>
              <li>&ensp;<a href="/2">今天吃什么？</a></li>
              <li>&ensp;<a href="/2">今天吃什么？</a></li>
              <li><a href="/2">今天吃什么？</a></li>
            </ol>
          </div>
        </div>
      </div>
      <div class="diarylist">
        <div class="title diary-hit">
          <span
            ><img src="@/assets/title/topic-hit.png" />

            <button
              class="selection_un"
              id="select-hot-topic-dt"
              onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
              @click="hotTopicdt()"
            >
              话题精选动态</button
            >/
            <button
              class="selection_un"
              id="select-follow-topic-dt"
              onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
              @click="specifyTopicdt()"
            >
              我关注的话题动态
            </button>
          </span>
        </div>
        <div class="topic-display">
          <div class="block">
            <span class="demonstration">
              <diary></diary>
              <diary></diary>
              <diary></diary>
            </span>
          </div>
        </div>
        <div class="topic-page-number">
          <el-pagination
            @next-click="handleCurrentChange(this.currentPage+1)"
            :page-size="3"
            @current-change="handleCurrentChange"
            layout="prev, pager, next, jumper"
            :total="dtamount"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>


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
#topicpage {
  padding-left: 100px;
}
div.body {
  padding-bottom: 100px;
}
.topic_circle button {
  border-radius: 40px;
  background-color: white;
  border-color: rgba(128, 128, 128, 0.498);
  outline: none;
  position: relative;
  z-index: 0;
}
.topic_circle button::before {
  position: absolute;
  content: "";
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: -1;
}
.topic_circle button:hover::before {
  top: 0;
  height: 100%;
}

.topic_circle button:active {
  top: 2px;
}
.topic_cirle_title {
  font-weight: bold;
  margin-right: 30px;
}
.hotlist a {
  color: rgb(2, 98, 182);
  font-weight: 500;
}
.hotlist a:hover {
  background-color: rgb(213, 230, 245);
  font-weight: 600;
}
.flex_box {
  display: flex;
}
.aside {
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
  padding-bottom: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
#change_topic {
  padding-left: 0;
  margin-right: 0;
  height: 37px;
}
div.title {
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-left: 20px;
  font-size: 25px;
  color: rgb(52, 52, 52);
}
.topic_circle {
  margin-left: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  width: 1100px;
  margin-top: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.boxesOfTopic {
  display: flex;
  flex-wrap: wrap;
  width: 1150px;
}
.boxesOfTopic > div {
  height: 230px;
  background-color: #c7e9ff04;
  border-style: solid;
  position: relative;
  border-radius: 4px;
  border-color: rgb(201, 201, 201);
  width: 230px;
  margin: 20px;
  padding-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: rgb(53, 53, 53);
  font-family: "Noto Serif SC", serif;
}
.boxesOfTopic a {
  border-radius: 5px;
  color: rgb(77, 157, 243);
  transition: all 0.2s ease;
}
.boxesOfTopic a:hover {
  background: rgb(77, 157, 243);
  border-color: rgb(77, 157, 243);
  color: white;
}
.topicboxes-route {
  font-size: 22px;
  text-decoration: none;
  border: solid;
  position: absolute;
  bottom: 20px;
  left: 40px;
  right: 40px;
}
.collection {
  text-align: left;
  padding-bottom: 30px;
}
.collection img {
  height: 30px;
  vertical-align: -20%;
}
.collection .title a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection .title a:hover {
  color: rgb(255, 132, 0);
}
.collection a:hover::after {
  opacity: 1;
}
.collection a:active {
  color: orange;
}
.collection-list a {
  font-size: 18px;
  font-family: Source Han Sans CN Normal;
}
.collection-list a:hover {
  font-weight: 600;
  color: rgb(2, 98, 182);
}
#more-collection-topic {
  position: absolute;
  line-height: 40px;
  top: 440px;
  left: 1280px;
}
.topic_page.title img {
  height: 35px;
  margin-left: 27px;
}
.topic_page.hotlist {
  line-height: 28px;
  font-size: 17px;
  text-align: left;
  border-radius: 20px;
  border-width: 4px;
  padding: 15px;
  width: 310px;
  background-color: rgb(255, 250, 244);
  border-top-color: rgb(255, 247, 238);
  border-left-color: rgb(255, 247, 238);
  border-bottom-color: antiquewhite;
  border-right-color: antiquewhite;
  border-style: solid;
  box-shadow: 0px 1px 1px #888888a6;
}
.topic_page.title {
  padding-bottom: 10px;
  font-size: 23px;
}
.topic_page.hotlist ol {
  margin: 0;
  padding: 0;
  list-style-position: inside;
}
.diarylist {
  padding-left: 100px;
  padding-top: 50px;
  width: 1460px;
  margin-left: 20px;
  margin-top: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
.topic-display {
  margin-left: 20px;
}
.diary-hit {
  margin-top: 10px;
}
.diary-hit img {
  height: 45px;
}

.topic_circle button {
  border-radius: 40px;
  background-color: white;
  border-color: rgba(128, 128, 128, 0.498);
  outline: none;
  position: relative;
  z-index: 0;
}
.topic_circle button::before {
  position: absolute;
  content: "";
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: -1;
}
.topic_circle button:hover::before {
  top: 0;
  height: 100%;
}

.topic_circle button:active {
  top: 2px;
}
.topic-page-number {
  margin-left: 400px;
  padding-bottom: 40px;
}
</style>
<style>
.el-pager li {
  font-size: 20px;
}
.el-pagination button,
.el-pagination span:not([class*="suffix"]) {
  font-size: 18px;
}
</style>
<script>
import search from "@/components/SelectSearch.vue";
import diary from "@/components/TopicDisplay.vue";
import usericon from "@/assets/user/int.png";
import router from "@/router";
export default {
  name: "topic",
  components: {
    search,
    diary,
  },

  data() {
    var dtamount = 18;
    var dt = [
      {
        user: "yjl",
        passage:
          "既然如何， 我们都知道，只要有意义，那么就必须慎重考虑。\
         所谓前端，关键是前端需要如何写。 一般来讲，我们都必须务必慎重的考虑考虑。\
          前端因何而发生?这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 \
          培根在不经意间这样说过，深窥自己的心，而后发觉一切的奇迹在你自己。带着这句话，我们还要更加慎重的审视这个问题：\
           总结的来说， 我认为， 那么， 一般来讲，我们都必须务必慎重的考虑考虑。 我们不得不面对一个非常尴尬的事实，那就是，\
            本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 现在，解决前端的问题，是非常非常重要的。",
        date: "2022-4-30",
        topic: "寻找春日气息",
        id: 1,
        img: "https://i.imgtg.com/2022/05/10/zSkWF.jpg",
      },
      {
        user: "intp",
        passage: "懒得想了",
        date: "2022-5-10",
        topic: "一起去看海",
        id: 2,
        img: "https://i.imgtg.com/2022/05/10/zSxy6.jpg",
      },
      {
        user: "bot",
        passage: "testtest",
        date: "2002-6-7",
        topic: "游戏中的难忘瞬间",
        id: 3,
        img: "https://i.imgtg.com/2022/05/10/zShob.jpg",
      },
    ];
    return {
      dt,
      dtamount,
    };
  },
  methods: {
    ToTopicDetail(p) {
      const _this = this;
      _this.$router.push({
        name: "topicdetail",
        params: { id: p },
      });
    },
    hotTopicdt() {
      //获取数据
      document
        .getElementById("select-follow-topic-dt")
        .setAttribute("class", "selection_un");
    },
    specifyTopicdt() {
      document
        .getElementById("select-hot-topic-dt")
        .setAttribute("class", "selection_un");
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
          .getElementsByClassName("diarylist")
          .item(0).innerText = dtText;
        document.getElementsByClassName("publishtime").item(i).innerText =
          this.dt[i].date;
        document
          .getElementsByClassName("topic-origin")
          .item(i)
          .getElementsByClassName("topic-origin-name")
          .item(0).innerText = this.dt[i].topic;
        document
          .getElementsByClassName("topic-origin")
          .item(i)
          .getElementsByClassName("topic-origin-name")
          .item(0)
          .setAttribute("href", "topic/" + this.dt[i].topic);
        document
          .getElementsByClassName("diary-origin-pic")
          .item(i)
          .getElementsByClassName("diary-pic")
          .item(0)
          .setAttribute("src", this.dt[i].img);
      }
      document
        .getElementsByClassName("diary-origin")
        .item(0)
        .addEventListener("click", function () {
          router.push({
            name: "topicdetail",
            query: { id: topic_detail_link[0] },
          });
        });
      document
        .getElementsByClassName("diary-origin")
        .item(1)
        .addEventListener("click", function () {
          router.push({
            name: "topicdetail",
            query: { id: topic_detail_link[1] },
          });
        });
      document
        .getElementsByClassName("diary-origin")
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
  },
  mounted() {
    this.Updatediary();
    this.updateButton();
  },
};
</script>
