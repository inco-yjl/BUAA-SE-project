<template>
  <div id="topicdetail">
    <search></search>
    <div class="body">
      <div class="flex_box">
        <div class="introOfTopic">
          <div class="title">
            <img src="@/assets/title/topic-intro.png" /><span class="topic-name"
              >{{ topic.name
              }}<button
                @click="favor"
                class="topic-button"
                :style="{ backgroundColor: bg_color, color: ft_color }"
                @mouseenter="change()"
                @mouseleave="goback()"
              >
                {{ content }}
              </button></span
            >
          </div>
          <div class="boxesOfTopic">
            <p id="topic-intro-info">
              {{ topic.dtnum }}篇内容·{{ topic.peoplenum }}人关注
            </p>
            <p id="topic-intro-content">{{ topic.intro }}</p>
          </div>
          <div class="topic-detail-interact">
            <button class="share-topic">
              <img src="@/assets/guide/share.png" /><span>分享话题</span>
            </button>
            <button class="write-dt">
              <img src="@/assets/guide/write_dt.png" /><span>发布动态</span>
            </button>
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
              热门</button
            >/
            <button
              class="selection_un"
              id="select-follow-topic-dt"
              onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
              @click="specifyTopicdt()"
            >
              最新
            </button>
          </span>
        </div>

        <div class="topic-display">
          <div class="block">
            <span class="demonstration">
              <div class="topicdiary">
                <hr />
                <div class="diary-display-body">
                  <div class="display-publisher">
                    <a class="userOfdiary" href="/otherusers/1">
                      <img class="iconOfuser"/><span class="nameOfuser"></span>
                    </a>
                    <span class="publishtime"></span>
                  </div>
                  <div class="diary-origin-pic">
                    <a class="diary-origin" href="javascript:void(0)"
                      ><img class="diary-pic" :src="dt1.img"/>
                    </a>
                  </div>
                  <div class="diarytext">
                    <a class="diarytext-origin" href="/topic/1/comments/1"></a>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div class="topic-display">
          <div class="block">
            <span class="demonstration">
              <div class="topicdiary">
                <hr />
                <div class="diary-display-body">
                  <div class="display-publisher">
                    <a class="userOfdiary" href="/otherusers/1">
                      <img class="iconOfuser" /><span class="nameOfuser"></span>
                    </a>
                    <span class="publishtime"></span>
                  </div>
                  <div class="diary-origin-pic">
                    <a class="diary-origin" href="javascript:void(0)"
                      ><img class="diary-pic" />
                    </a>
                  </div>
                  <div class="diarytext">
                    <a class="diarytext-origin" href="/topic/1/comments/1"></a>
                  </div>
                </div>
              </div>
            </span>
          </div>
          
        </div><div class="topic-display">
          <div class="block">
            <span class="demonstration">
              <div class="topicdiary">
                <hr />
                <div class="diary-display-body">
                  <div class="display-publisher">
                    <a class="userOfdiary" href="/otherusers/1">
                      <img class="iconOfuser" /><span class="nameOfuser"></span>
                    </a>
                    <span class="publishtime"></span>
                  </div>
                  <div class="diary-origin-pic">
                    <a class="diary-origin" href="javascript:void(0)"
                      ><img class="diary-pic" />
                    </a>
                  </div>
                  <div class="diarytext">
                    <a class="diarytext-origin" href="/topic/1/comments/1"></a>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div class="topic-page-number">
          <el-pagination
            @next-click="changeTopicdt()"
            :page-size="3"
            layout="prev, pager, next, jumper"
            :total="topic.dtnum"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.topic-name {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
.topic-detail-interact button {
  position: relative;
  left: 900px;
  background: none;
  outline: none;
  font-size: 18px;
  border: none;
  transition: opacity 0.2s;
}
.topic-detail-interact button :hover {
  text-decoration: underline;
}
button.selection_ed {
  background: none;
  outline: none;
  font-size: 20px;
  border: none;
  color: black;
  font-weight: bold;
}
.title img {
  vertical-align: -10px;
  margin-right: 5px;
  height: 40px;
}
#topicdetail {
  padding-left: 100px;
}
div.body {
  padding-bottom: 100px;
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
  padding-right: 40px;
  padding-top: 25px;
  padding-bottom: 20px;
  width: 250px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
div.title {
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-left: 20px;
  font-size: 25px;
  color: rgb(52, 52, 52);
}
.introOfTopic {
  margin-left: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  width: 1200px;
  margin-top: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
#topic-intro-content {
  margin-top: 15px;
  margin-left: 20px;
  flex-wrap: wrap;
  width: 1150px;
  font-family: Source Han Sans CN Normal;
  font-size: 20px;
}
#topic-intro-info {
  margin-left: 25px;
  margin-top: 10px;
  font-size: 18px;
  color: rgb(179, 179, 179);
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
  left: 1380px;
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
  position: absolute;
  padding-left: 100px;
  padding-top: 50px;
  width: 1460px;
  margin-left: 20px;
  margin-top: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
.topic-display {
  margin-left: 20px;
  margin-bottom:50px;
}
.diary-hit {
  margin-top: 10px;
}
.diary-hit img {
  height: 45px;
}
.topic-detail-interact img {
  height: 20px;
}
.topic-page-number {
  margin-left: 400px;
  padding-bottom: 40px;
}

.topicdiary {
  width: 1200px;
  text-align: left;
}
.diary-display-body {
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
}
.display-publisher {
  margin-top: 0;
  padding-top: 0;
  width: 920px;
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
  width: 1000px;
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
  top:20px;
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
.diarytext {
  width: 800px;
  margin-left: 30px;
}
a.diarytext-origin {
  position: relative;
  top:36px;
  font-size: 17px;
  text-decoration: none;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: 600;
  color: black;
  transition: 0.3s ease;
}
a.diarytext-origin:hover {
  color: gray;
  text-decoration: none;
}
button {
  outline: none;
  margin-right: 0;
}
.topic-button {
  width: 150px;
  color: #47ff5d;
  background: #f2fef0;
  border: #c4fbc9 solid;
  border-radius: 20px;
  padding: 10px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  -webkit-transform: scale(0.7);
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
import App from "@/App.vue";
export default {
  name: "topic",
  components: {
    search,
    diary,
    App,
  },
  data() {
    var id = this.$route.params.id; //根据id来询问
    var topic = {
      name: "寻找春日气息",
      intro:
        "哈哈，春天来了！为了让画面好看，这里要写长一点，但是不能写的太长，",
      peoplenum: 22,
      dtnum: 20,
      new: [
        {
          user: "yjl",
          passage: "懒得想了",
          date: "2022-4-30",
          img: "https://i.imgtg.com/2022/05/10/zSkWF.jpg",
        },
        {
          user: "intp",
          passage: "懒得想了2",
          date: "2022-5-10",
          img: "https://i.imgtg.com/2022/05/10/zSxy6.jpg",
        },
        {
          user: "bot",
          passage: "懒得想了3",
          date: "2002-6-7",
          img: "https://i.imgtg.com/2022/05/10/zShob.jpg",
        },
      ],
    };
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
        img: "https://i.imgtg.com/2022/05/10/zSkWF.jpg",
      },
      {
        user: "intp",
        passage: "懒得想了",
        date: "2022-5-10",
        topic: "一起去看海",
        img: "https://i.imgtg.com/2022/05/10/zSxy6.jpg",
      },
      {
        user: "bot",
        passage: "testtest",
        date: "2002-6-7",
        topic: "游戏中的难忘瞬间",
        img: "https://i.imgtg.com/2022/05/10/zShob.jpg",
      },
    ];
    return {
      dt1:dt[0],
      topic,
      liked: false,
      content: "+关注话题",
      bg_color: "#f2fef0",
      ft_color: "#47ff5d",
    };
  },
  methods: {
    favor(e) {
      this.liked = !this.liked;
      if (this.liked) {
        this.content = "已关注";
        this.bg_color = "#6cf57c";
        this.ft_color = "#f2fef0";
      } else {
        this.content = "+关注话题";
        this.bg_color = "#f2fef0";
        this.ft_color = "#6cf57c";
      }
    },
    change() {
      this.bg_color = "#45ff5b";
      this.ft_color = "#f2fef0";
    },
    goback() {
      if (this.liked) {
        this.bg_color = "#6cf57c;";
        this.ft_color = "#f2fef0";
      } else {
        this.bg_color = "#f2fef0";
        this.ft_color = "#6cf57c";
      }
    },
    hotTopicdt() {
      //获取数据
      document
        .getElementById("select-follow-topic-dt")
        .setAttribute("class", "selection_un");
    },
    specifyTopicdt() {
      //获取数据
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
      //获取数据
      },
    
    changeTopicdt() {},
  },
  mounted() {
    this.Updatediary();
    this.updateButton();
  },
};
</script>
