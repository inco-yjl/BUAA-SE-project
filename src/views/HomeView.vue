<template>
  <div id="home">
    <search></search>
    <powerpoint></powerpoint>
    <div class="body">
      <div id="vertical">
        <div class="books hothit">
          <span class="title">
            <img class="hot books" src="@/assets/title/books.png" />流行图书
            <a href="http://localhost:8080/book" class="Fordetail">
              &ensp;>&ensp;
            </a>
          </span>
          <hit></hit>
        </div>
        <div class="movies hothit">
          <span class="title"
            ><img class="hot" src="@/assets/title/movie.png" />精彩电影<a
              href="http://localhost:8080/video"
              class="Fordetail"
              >&ensp;>&ensp;</a
            ></span
          >
          <hit></hit>
        </div>
        <div class="tv hothit">
          <span class="title"
            ><img class="hot" src="@/assets/title/tv.png" />推荐电视剧<a
              href="http://localhost:8080/video"
              class="Fordetail"
              >&ensp;>&ensp;</a
            ></span
          >
          <hit></hit>
        </div>
      </div>
      <div class="homepage aside">
        <div class="topics hotlist">
          <span class="title">
            <img class="hot" src="@/assets/title/fire.png" />热点话题
          </span>
          <ul class="topics hotlist">
            <li id="topic1">
              <span>1.&ensp;</span
              ><a href="../topic">影史上有哪些你不喜欢的致敬？</a>
            </li>
            <li id="topic2">
              <span>2.&ensp;</span>
              <a href="../topic">我家的应急物资储备方案</a>
            </li>
            <li id="topic3">
              <span>3.&ensp;</span>
              <a href="../topic">哪一刻感到大自然在对你说话？</a>
            </li>
            <li>
              <span>4.&ensp;</span> <a href="../topic">居家阳台观鸟计划</a>
            </li>
            <li>
              <span>5.&ensp;</span>
              <a href="../topic">和新冠肺炎疫情有关的记忆</a>
            </li>
            <li>
              <span>6.&ensp;</span>
              <a href="../topic">用一张照片🖼️证明春天来了</a>
            </li>
            <li>
              <span>7.&ensp;</span><a href="../topic">2022年第一季度读书总结</a>
            </li>
            <li>
              <span>8.&ensp;</span><a href="../topic">用一句话记录今天 </a>
            </li>
            <li>
              <span>9.&ensp;</span
              ><a href="../topic">生命中意识到自己是独立个体的时刻</a>
            </li>
            <li>
              <span>10.</span
              ><a href="../topic">电影中那些值得珍藏的浪漫镜头</a>
            </li>
            <li>
              <span>11.</span
              ><a href="../topic">给我凋谢的鲜花🥀建一座赛博坟墓</a>
            </li>
            <li><span>12.</span><a href="../topic">收集美的书籍内封</a></li>
            <li><span>13.</span><a href="../topic">如果只剩下一首歌🎶</a></li>
            <li><span>14.</span><a href="../topic">小而真实的快乐</a></li>
            <li>
              <span>15.</span><a href="../topic">日常生活的食品安全隐患</a>
            </li>
          </ul>
        </div>
        <br />
        <div class="groups hotlist">
          <div>
            <span class="title"
              ><img class="hot" src="@/assets/title/groups.png" />发现小组</span
            >
          </div>
          <ul>
            <li><a href="../group">公园旅行家协会</a></li>
            <li><a href="../group">原神</a></li>
            <li><a href="../group">操作系统互助小组</a></li>
            <li><a href="../group">列车文化爱好者</a></li>
            <li><a href="../group">爱猫生活</a></li>
            <li><a href="../group">收集下雨天</a></li>
            <li><a href="../group">我爱·旅游</a></li>
            <li><a href="../group">哈利波特迷</a></li>
            <li><a href="../group">映像北京</a></li>
            <li><a href="../group">switch交流基地</a></li>
            <li><a href="../group">985废物引进计划</a></li>
            <li><a href="../group">这个要拍下来</a></li>
          </ul>
        </div>
      </div>
      <br />
      <div class="comments">
        <div id="bookcomment">
          <span class="title">
            <img class="hot" src="@/assets/title/book_comment.png" />热门书评
            <a href="http://localhost:8080/book" class="Fordetail">
              &ensp;>&ensp;
            </a>
          </span>

          <comment-display></comment-display>
          <comment-display></comment-display>
        </div>

        <div id="moviecomment">
          <span class="title">
            <img class="hot" src="@/assets/title/movie_comment.png" />热门影评
            <a href="http://localhost:8080/book" class="Fordetail">
              &ensp;>&ensp;
            </a>
          </span>
          <comment-display></comment-display>
          <comment-display></comment-display>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#home {
  width:1600px;
  padding-left: 100px;
}
div.body {
  width: 1580px;
  display: flex;
  flex-wrap: wrap;
}
#vertical {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 35px;
  margin-top: 80px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
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
}
.title {
  text-align: left;
  font-size: 20px;
  padding-left: 10px;
}
li {
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.hotlist {
  padding-top: 10px;
  width: 320px;
}
.hotlist ul {
  padding-top: 10px;
}
.hotlist a {
  color: rgb(2, 98, 182);
  font-weight: 500;
}
.hotlist a:hover {
  background-color: rgb(213, 230, 245);
  font-weight: 600;
}
.comments {
  width: 1550px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: nowrap;
}
#bookcomment {
  width: 750px;
  margin-top: 50px;
  margin-right: 10px;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 25px;
  padding-bottom: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
#moviecomment {
  width: 750px;
  margin-top: 50px;
  margin-right: 10px;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 25px;
  padding-bottom: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
.comments .title {
  font-size: 30px;
  font-weight: 600;
}
div.hothit {
  text-align: left;
}
.topics li {
  list-style: none;
}
#topic1 span {
  color: red;
}
#topic2 span {
  color: rgb(255, 128, 0);
}
#topic3 span {
  color: rgb(255, 195, 44);
}

div.topics.hotlist {
  border-style: solid;
  border-width: 4px;
  background-color: rgb(255, 250, 244);
  border-top-color: rgb(255, 247, 238);
  border-left-color: rgb(255, 247, 238);
  border-bottom-color: rgb(250, 239, 224);
  border-right-color: rgb(250, 239, 224);
  border-radius: 20px;
  box-shadow: 0px 1px 1px #888888a6;
}

ul.topics.hotlist {
  padding-left: 20px;
}
div.groups.hotlist {
  border-style: solid;
  border-width: 4px;
  background-color: rgb(244, 250, 255);
  border-top-color: rgb(244, 250, 255);
  border-left-color: rgb(244, 250, 255);
  border-bottom-color: rgb(224, 238, 250);
  border-right-color: rgb(224, 238, 250);
  border-radius: 20px;
  box-shadow: 0px 1px 1px #888888a6;
}
img.hot {
  height: 40px;
  vertical-align: -30%;
}
#bookcomment img {
  vertical-align: -10%;
}
#moviecomment img {
  vertical-align: -20%;
}
img.hot.books {
  height: 37px;
}
.Fordetail {
  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
  color: rgb(90, 88, 88);
  font-weight: 600;
  margin-left: 5px;
  vertical-align: -2%;
}
.comments .Fordetail {
  font-size: 40px;
  margin-left: 0px;
}
.title a:hover {
  text-decoration: none;
  font-weight: 600;
  border-radius: 40px;
  background-color: rgb(227, 239, 250);
}
</style>
<script>
// @ is an alias to /src
import powerpoint from "@/components/PowerPoint";
import hit from "@/components/Hit";
import search from "@/components/SelectSearch.vue";
import commentDisplay from "@/components/ComDisplay.vue";
//load the img needed
import bookImg1 from "@/assets/books/Zissc.jpg";
import bookImg2 from "@/assets/books/Jiaoldr.jpg";
import usericon from "@/assets/user/int.png";


export default {
  name: "home",
  components: {
    powerpoint,
    hit,
    search,
    commentDisplay,
  },
  methods: {
    //this is the function to update the images of books
    UpdateBookImg() {
      document
        .getElementsByClassName("item1")
        .item(0)
        .setAttribute("src", bookImg1);
      document
        .getElementsByClassName("item2")
        .item(0)
        .setAttribute("src", bookImg2);
    },
    UpdateComments() {
      document
        .getElementsByClassName("iconOfuser")
        .item(0)
        .setAttribute("src", usericon);
      document
        .getElementById("bookcomment")
        .getElementsByClassName("nameOfuser")
        .item(0).innerHTML = "yjlintp" + ":";
      document.getElementsByClassName("commentlist").item(0).innerHTML =
        "<span>听Jpop不听King Gnu，\
        就像四大名著不看红楼梦，说明这个人文学造诣和自我修养不足，\
        他理解不了这种内在的阳春白雪的高雅艺术，他只能看到外表的辞藻堆砌，\
        参不透其中深奥的精神内核，他整个人的层次就卡在这里了，只能度过一个相对失败的人生。</span>";
      document
        .getElementsByClassName("iconOfuser")
        .item(1)
        .setAttribute("src", usericon);
      document.getElementsByClassName("nameOfuser").item(1).innerHTML =
        "yjlintp" + ":";
      document.getElementsByClassName("commentlist").item(1).innerHTML =
        "testtest";
    },
  },
  mounted() {
    this.UpdateBookImg();
    this.UpdateComments();
  },
  data() {
    return {
      input: "",
    };
  },
};
</script>

