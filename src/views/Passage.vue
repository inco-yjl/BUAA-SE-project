<template>
  <div class="passage">
    <search></search>
    <div class="passage-body">
      <div class="content-body">
        <div class="title">{{ passage.title }}</div>
        <div class="passage-info">
          <div>
            <a class="userOfpassage" href="/otherusers/1">
              <img class="iconOfuser" :src="passage.usericon" />
              <span class="nameOfuser">{{ passage.username }}</span>
            </a>
            <span class="normal">&ensp;评论了</span>
            <a class="comment-book-name">《{{ passage.bookname }}》 </a>
            <span class="normal">{{ passage.date }}</span>
          </div>
          <div class="rate">
            <el-rate
              v-model="passage.star"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
              disabled-void-color="ffffff"
            >
            </el-rate>
          </div>
        </div>
        <div class="passage-text" v-html="passage.content"></div>
        <div class="user-buttons">
          <div id="like-button">
            <button v-if="like" @click="clickunlike()">
              <img src="@/assets/guide/liked.png" />
            </button>
            <button v-else @click="clicklike()">
              <img src="@/assets/guide/like.png" />
            </button>
            <span>{{ passage.like }}</span>
          </div>
          <div id="reply-button">
            <button @click="clickreply()">
              <img src="@/assets/guide/reply.png" />
            </button>
            <span>{{ passage.reply }}</span>
          </div>
          <button>
            <img id="like" src="@/assets/guide/share.png" />
          </button>
        </div>
      </div>
      <div v-if="reply===true" class="reply-input">
        <el-input
          type="textarea"
          placeholder="请输入回复"
          rows="6"
          v-model="textarea"
          maxlength="100"
          show-word-limit
        >
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
import search from "@/components/SelectSearch.vue";
export default {
  components: {
    search,
  },
  data() {
    var passage = {
      userid: 1,
      username: "Lilac",
      usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
      star: 5,
      bookname: "焦虑的人",
      writer: "Fredrik Backman",
      date: "2021-04-04",
      title: "因为爱，我愿意接纳anxiety(从豆瓣抄的一份)",
      content:
        '<p>这本书开头让人一头雾水，读来有些食之寡淡弃之可惜，随着故事慢慢展开，人物悉数登场，最后你会捂着小心脏，满心幸福的发现，这是一个关于一群傻瓜互相救赎的故事。我一开始还疑惑，这样简短的一宗绑架案要如何撑满一个故事，其实不然，每个角色，从人质，到警察，到绑匪，甚至到人质的心理医生，都是活生生有灵魂的个体，而这个故事就是在讲述这样一群毫不起眼，你每天都可以在人群中擦肩而过一百次而不会注意到一次的人，他们如何阴差阳错的相遇，他们内心实际上充斥着不为人知的焦虑彷徨，以及他们之间如何建立起如此奇妙温暖的羁绊，互相救赎，以及自我救赎的傻乎乎的小故事。\
这篇小说让我非常着迷的一点是它的叙事模式 - 审讯室口供记录、公寓里发生的事、曾经发生在每个人物身上的故事 - 相互交织层层递进，既完全没有打乱故事节奏，又轻描淡写之间将一切缘起娓娓道来，视角切换之间又穿插着作者自己的人生小体悟和解读，让我的心情随着故事发展一度起落。尤其是zara女士，她是第一位被记录口供的角色，我真的一开始对她咬牙切齿恨不得钻进书里教她做人哈哈哈，但在知道了她内心的苦楚迷茫，发现她冰冷盔甲下一颗怯懦柔软的心后，就会成功对她产生共情，一切行为就顺势合理化了。\
作者让我觉得非常有意思的一个写作特征就是他在本书中经常使用“虚拟时态”+问句，以及“将来时态”+陈述，例如频繁的抛出“如果xxx没有发生会xxx吗？”抑或是在文章末尾章节一切尘埃落地后用一连串的will展示了各位角色即将迎来的美好生活（这段让我几欲落泪描写得实在太棒！），这种行文手法让我觉得读来十分有趣。我或许可以理解为这是作者自身的思考描摹习惯，对于一切事物都保留着三分不确定性，like we will see what happens then, but before that i will hold the most hope as i can to step into the future. 同时也能激起我身为读者对于角色的想象，增强代入感，不自觉的就产生了一种希冀感，毕竟这是一个幸福的小故事嘛。</p>\
最后回到这本书给我带来的一些思考。\
<img src="https://i.imgtg.com/2022/05/08/zDhaG.jpg">\
我一直都记得在我申请国外研究生期间，一位中介的姐姐曾经和我说过的一句话，大意是，成长意味着越来越不去在乎别人的看法，而是更关注自己的内心需求。我深以为然。',
      like: 100,
      reply: 0,
    };
    var like = false;
    var reply = false;
    return {
      passage,
      like,
      reply,
      text: "",
      textarea: "",
    };
  },
  methods: {
    clicklike() {
      // 数据post
      this.passage.like++;
      this.like = true;
    },
    clickunlike() {
      //
      this.passage.like--;
      this.like = false;
    },
    clickreply() {
      this.reply = true;
    },
  },
};
</script>
<style scoped>
.passage {
  width: 1600px;
  padding-left: 100px;
}
.passage-body {
  width: 1580px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
.content-body {
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
.title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.iconOfuser {
  height: 30px;
  margin-right: 5px;
  vertical-align: sub;
}
.nameOfuser {
  font-family: Source Han Sans CN Normal;
  font-size: 17px;
}
.passage-info {
  color: rgb(157, 157, 157);
  display: flex;
}
.rate {
  position: relative;
  top: 8px;
  margin-left: 20px;
}
.passage-info a {
  font-weight: 500;
  font-size: 16px;
  color: black;
  text-decoration: none;
}
.passage-info a:hover {
  color: rgb(0, 166, 255);
}
.passage-text {
  margin-top: 10px;
  padding-bottom: 100px;
  padding-left: 30px;
  padding-right: 60px;
}
.passage-text >>> img {
  display: block;
  margin-left: 12px;
  width: 920px;
  border-radius: 3px;
}
.passage-text >>> {
  font-size: 17px;
  line-height: 32px;
}
.user-buttons {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-left: 700px;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
#like-button {
  width: 100px;
  display: flex;
}
#reply-button {
  width: 100px;
  display: flex;
}
.reply-input{
    margin-top:30px;
    width:860px;
    margin-left: 150px;
    margin-right: 150px;
    border-radius: 6px;
    box-shadow: 0px 2px 3px #888888a6;
}
</style>