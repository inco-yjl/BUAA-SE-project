<template>
  <div class="passage">
    <search></search>
    <div class="passage-body">
      <div v-if="loadSuccess" class="content-body">
          <div id="collect-button" class="user-buttons">
            <button v-if="collect" @click="clickuncollect()">
              <img src="@/assets/guide/collected.png" />
            </button>
            <button v-else @click="clickcollect()">
              <img src="@/assets/guide/collect.png" />
            </button>
          </div>
        <div class="title">{{ passage.title }}</div>
        <div class="passage-info">
          <div>
            <a class="userOfpassage" href="/otherusers/1">
              <img class="iconOfuser" :src="userIcon" :style="styleOfIcon"/>
              <span class="nameOfuser">{{ passage.username }}</span>
            </a>
            <span class="normal">&ensp;评论了</span>
            <a class="comment-book-name">《{{ source.name }}》 </a>
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
      <div class="aside">
        <div class="source-book">
          <a class="source-item">
            <img class="source-img" :src="source.img" />
            <div v-if="loadSuccess" class="source-info">
              《{{ source.name }}》
              <el-rate
                v-model="source.star"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
                disabled-void-color="ffffff"
              >
              </el-rate>
                {{ source.writer }}
            </div>
          </a>
        </div>
        <div class="recommend-passage">
            <div class="title">本书推荐书评</div>
            <ul class="recommend-list">
              <li><a>焦虑它如影随形</a></li>
              <li><a> 不对抗的人生</a></li>
              <li><a>再写一个</a></li>
            </ul>
        </div>
        <div class="recommend-passage">
            <div class="title">该用户其他书评</div>
            <ul class="recommend-list">
              <li><a>我们不再爱电影</a></li>
              <li><a> 满船清梦压星河</a></li>
              <li><a>再写一个</a></li>
            </ul>
        </div>
      </div>
      <div v-if="Toreply === false" class="reply-input">
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
      <div class="reply-block">
        <div class="title">回复</div>
        <div class="reply-display" v-for="reply in replys" :key="reply.id">
          <hr />
          <div class="display-publisher">
            <a class="userOfreply" @click="toUser(reply.userid)">
              <img class="iconOfuser" :src="reply.userIcon" /><span
                class="nameOfuser"
                >{{ reply.username }}</span
              >
            </a>
            <span class="publishtime">{{ reply.date }}</span>
          </div>
          <div class="reply-content">
            {{ reply.content }}
            <div
              class="sreply-display"
              v-for="sreply in reply.reply"
              :key="sreply.id"
            >
              <div class="display-publisher">
                <a class="userOfreply" @click="toUser(sreply.userid)">
                  <img class="iconOfuser" :src="reply.userIcon" /><span
                    class="nameOfuser"
                    >{{ sreply.username }}</span
                  >
                </a>
                <span class="publishtime">{{ reply.date }}</span>
              </div>
              <div class="reply-content">
                <a class="replied-user" @click="toUser(sreply.replyed_userid)">
                  @{{ sreply.replyed_username }}
                </a>
                {{ sreply.content }}
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
  components: {
    search,
  },
  data() {
    var id = this.$route.query.id;
    var source = {};
    var passage = {};
    var replys = [
      {
        id: 1,
        username: "Puff",
        userIcon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        userid: 1,
        date: "2020-1-1",
        content: "说了一段很有才华的话，好多人点赞",
        reply: [
          {
            id: 3,
            username: "是我呀",
            userIcon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
            userid: 3,
            date: "2022-4-1",
            replyed_username: "Puff",
            replyed_userid: 1,
            content:
              "正确的，直接的，中肯的，雅致的，客观的，完整的，立体的，全面的，辩证的，形而上学的，雅俗共赏的，一针见血‌‌​​‌‌​​​​‌‌‌​​​‌‌​​的，直击要害的",
          },
        ],
      },
      {
        id: 2,
        username: "哈哈",
        userIcon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        userid: 2,
        date: "2002-4-1",
        content:
          "凑一百字废话哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈凑一百字废话哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\
凑一百字废话哈哈哈哈哈哈",
        reply: [
          {
            id: 4,
            username: "嗨呀",
            userIcon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
            userid: 4,
            date: "2022-4-1",
            replyed_username: "哈哈",
            replyed_userid: 1,
            content:
              "正确的，直接的，中肯的，雅致的，客观的，完整的，立体的，全面的，辩证的，形而上学的，雅俗共赏的，一针见血‌‌​​‌‌​​​​‌‌‌​​​‌‌​​的，直击要害的",
          },
          {
            id: 5,
            username: "是我呀",
            userIcon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
            userid: 3,
            date: "2022-4-1",
            replyed_username: "哈哈",
            replyed_userid: 1,
            content: "确实",
          },
        ],
      },
    ];
    var like = false;
    var Toreply = false;
    var collect = false;
    var loadSuccess = false;
    return {
      id,
      userIcon:"https://i.imgtg.com/2022/05/08/zDzsM.png",
      passage,
      like,
      Toreply,
      replys,
      text: "",
      textarea: "",
      source,
      collect,
      loadSuccess,
      styleOfIcon: "width:30px;"
    };
  },
  methods: {
    updateIcon(){
      if(this.passage.icon === "")
      return;
      var len=this.$axios.defaults.baseURL.length;
      this.userIcon =this.$axios.defaults.baseURL.substring(0,len-4)+this.passage.icon;
      var img = new Image();
      img.src = this.userIcon;
      if(img.width>img.height)
        this.styleOfIcon = "height:30px;position: relative; top:0px; left:-"+(img.width-img.height)/img.height*15+"px";
      else  
        this.styleOfIcon = "width:30px;position: relative;  left:0px;top:-"+(img.height-img.width)/img.width*15+"px";
    },
    async updateComment() {
      var params = {
        article_id: this.$route.query.id
      };
      this.$axios
        .post("/passage/bookcomment",qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data.data)
            this.passage=res.data.data.passage;
            this.source=res.data.data.resource;
            this.passage.star=parseFloat(this.passage.star);
            this.passage.date=this.passage.date.substring(0,10);
            this.source.star=parseFloat(this.source.star);
            this.passage.like = parseInt(this.passage.like);
            this.passage.reply = parseInt(this.passage.reply);
            this.updateIcon();
            this.loadSuccess=true;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
    clickcollect(){
        this.collect = true;
    },
    clickuncollect(){
        this.collect =false;
    },
    clickreply() {
      if (this.Toreply === false) this.Toreply = true;
      else this.Toreply = false;
    },
    toUser(id) {
      this.$router.push({
        name: "user",
        query: { id: id },
      });
    },
  },
  mounted() {
    this.updateComment();
    window.onscroll = function (e) {
      console.log("slide");
      var vertical = document.getElementsByClassName("content-body").item(0);
        var pos = vertical.getBoundingClientRect();
        console.log(pos.top);
        if (pos.top < 29) {
          var aside = document.getElementsByClassName("aside").item(0);
          if(aside!=null)
          aside.setAttribute("class", "aside-slide");
        }
        else{
           var aside = document.getElementsByClassName("aside-slide").item(0);
          if(aside!=null)
          aside.setAttribute("class", "aside");
        }
    };
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
#collect-button{
    position: absolute;
    left:400px;
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
.reply-input {
  margin-top: 30px;
  width: 860px;
  margin-left: 150px;
  margin-right: 150px;
  border-radius: 6px;
  box-shadow: 0px 2px 3px #888888a6;
}
.reply-block {
  margin-top: 60px;
  width: 1160px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.reply-block a:hover {
  color: rgb(0, 166, 255);
}
a.replied-user {
  color: rgb(0, 166, 255);
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
.reply-content {
  margin-left: 20px;
  padding-bottom: 20px;
}
.sreply-display {
  margin-top: 5px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  background-color: #dfdede55;
}
.aside {
  margin-top: 80px;
  margin-left: 10px;
  margin-right: 0;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;
  border-style: solid;
  position: absolute;
  left: 1260px;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
  height: 550px;
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
  height: 550px;
  position: fixed;
  left: 1260px;
  top: -50px;
}
.source-item {
  display: flex;
}
.source-img {
  width: 85px;
  margin-right: 20px;
}
.source-info {
  margin-top: 20px;
  font-size: 16px;
  line-height: 30px;
  font-family: Source Han Sans CN Normal;
}
.source-book a {
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
.source-book a:hover {
  background-color: #91919155;
}
.recommend-list a {
  color: rgb(2, 98, 182);
  font-weight: 500;
}
.recommend-list a:hover {
  background-color: rgb(213, 230, 245);
  color: rgb(2, 98, 182);
  font-weight: 600;
}
</style>
<style>
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
</style>