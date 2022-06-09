<template>
  <div class="groupPagebody">
    <search></search>
    <div class="aside-left vertical">
      <div class="bookpage-hit">
        <div class="bookpage-title">
          <img src="@/assets/title/groups.png" />最受欢迎
        </div>

        <div class="collection-list" v-for="group in hotgroup" :key="group.id">
          <a class="collection-item" @click="usetogroupdetail(group.id)">
            <div class="img-block">
              <img class="collection-img" :src="group.img" />
            </div>
            <div class="collection-info">
              {{ group.name }}
              <div></div>
              {{ group.number }}人参与
            </div>
          </a>
        </div>
      </div>

      <div class="bookpage-hit">
        <div class="bookpage-title">
          <img src="@/assets/group/biggroup.png" />最多人在
        </div>
        <div class="collection-list" v-for="group in maxgroup" :key="group.id">
          <a class="collection-item" @click="usetogroupdetail(group.id)">
            <div class="img-block">
              <img class="collection-img" :src="group.img" />
            </div>
            <div class="collection-info">
              {{ group.name }}
              <div></div>
              {{ group.number }}人参与
            </div>
          </a>
        </div>
      </div>

      <div class="bookpage-hit">
        <div class="bookpage-title">
          <img src="@/assets/group/popular.png" />热门讨论
        </div>
        <div
          class="book-comments-display"
          v-for="comment in groupcommit"
          :key="comment.id"
        >
          <hr />
          <div class="comment-display-groupPage">
            <div class="display-publisher">
              <a class="userOfcomment" href="/otherusers/1">
                <img class="iconOfuser" :src="comment.usericon" /><span
                  class="nameOfuser"
                  >{{ comment.username }}</span
                >
              </a>
              <span class="publish-info"
                >{{ comment.date }}&ensp;发布于<a class="comment-book-name">{{
                  comment.groupname
                }}</a></span
              >
            </div>
            <div class="comment-origin-pic">
              <a class="comment-origin" href="javascript:void(0)"
                ><img class="comment-pic" :src="comment.img" />
              </a>
            </div>
            <div class="commenttext">
              <a class="commenttext-origin" >{{
                comment.content
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="aside">
      <div class="collection">
        <div class="bookpage-title">
          <a href="../GroupHome">
            <img src="@/assets/guide/book_collection.png" />我加入的小组
          </a>
        </div>
        <div class="collection-list" v-for="group in addgroup" :key="group.id">
          <div class="groupusually">
            <h5 style="text-align: left" class="title-aside">我加入的小组</h5>
            <!--<div v-for="group in addgroup">
              <ul>
                <li>
                  <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
                    <div class="normal_active"> <span class="massage">{{ group.name }}}</span> </div>
                    <div class="heigh_active"> <img class = "hidden_img" :src = "group.img"> </div>
                  </div>
                </li>
              </ul>
              <span>&nbsp;</span>
            </div>-->
          </div>
          <a class="collection-item" @click="usetogroupdetail(group.id)">
            <img class="collection-img" :src="group.img" />
            <div class="collection-info">
              {{ group.name }}
              <el-rate
                v-model="group.star"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
                disabled-void-color="ffffff"
              >
              </el-rate>
              {{ group.number }}人参与
            </div>
          </a>
        </div>
      </div>
      <div class="collection">
        <div class="bookpage-title">
          <a href="../user/books">
            <img src="@/assets/guide/mycomment.png" />我的讨论
          </a>
        </div>
        <ul class="book-comment-list hotlist">
          <li
            :v-if="passages.length > 0"
            v-for="passage in passages"
            :key="passage.id"
          >
            <a @click="ToComment(passage.id)">{{ passage.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import search from "@/components/SelectSearch.vue";
import groupPerson from "@/components/GroupPerson";
import qs from "qs";

export default {
  name: "GroupHome",
  data() {
    var hotgroup = [{}];
    var addgroup = [{}];
    var maxgroup = [
      {
        name: "星空",
        id: 8,
        img: "https://i.imgtg.com/2022/05/23/hgC1N.jpg",
        number: 451,
      },
      {
        name: "茉莉花",
        id: 9,
        img: " https://i.imgtg.com/2022/05/23/hgwDC.jpg",
        number: 456,
      },
      {
        name: "书法",
        id: 10,
        img: " https://i.imgtg.com/2022/05/23/hmM8L.jpg",
        number: 982,
      },
      {
        name: "修猫",
        id: 11,
        img: " https://i.imgtg.com/2022/05/23/hmaxi.jpg",
        number: 238,
      },
      {
        name: "奇观",
        id: 12,
        img: " https://i.imgtg.com/2022/05/23/hmopX.jpg",
        number: 2123,
      },
      {
        name: "樱岛",
        id: 13,
        img: "https://i.imgtg.com/2022/05/23/hmqft.jpg",
        number: 123,
      },
      {
        name: "喜羊羊与灰太狼",
        id: 14,
        img: "https://i.imgtg.com/2022/05/23/hmBBx.jpg",
        number: 10985,
      },
    ];
    var hopmessage = [
      {
        name: "星空",
        id: 8,
        number: 451,
      },
      {
        name: "茉莉花",
        id: 9,
        img: " https://i.imgtg.com/2022/05/23/hgwDC.jpg",
        number: 456,
      },
      {
        name: "书法",
        id: 10,
        img: " https://i.imgtg.com/2022/05/23/hmM8L.jpg",
        number: 982,
      },
      {
        name: "修猫",
        id: 11,
        img: " https://i.imgtg.com/2022/05/23/hmaxi.jpg",
        number: 238,
      },
      {
        name: "奇观",
        id: 12,
        img: " https://i.imgtg.com/2022/05/23/hmopX.jpg",
        number: 2123,
      },
      {
        name: "樱岛",
        id: 13,
        img: "https://i.imgtg.com/2022/05/23/hmqft.jpg",
        number: 123,
      },
      {
        name: "喜羊羊与灰太狼",
        id: 14,
        img: "https://i.imgtg.com/2022/05/23/hmBBx.jpg",
        number: 10985,
      },
    ];
    var groupcommit = [
      {
        name: "喜羊羊与灰太狼",
        id: 1,
        img: "https://i.imgtg.com/2022/05/23/hmBBx.jpg",
        content: "ababababababa",
        usericon: "https://i.imgtg.com/2022/05/23/hmBBx.jpg",
        username: "inty",
        date: "06.08",
      },
    ];
    return {
      hotgroup,
      maxgroup,
      groupcommit,
      addgroup,
    };
  },
  components: {
    VueSlickCarousel,
    search,
    groupPerson,
  },
  methods: {
    gethootgroupmes() {
      var params = {
        num: 6,
      };
      console.log("开始获取热门小组");
      this.$axios
        .post("/group/hot", qs.stringify(params))
        .then((res) => {
          console.log(res);
          if (res.data.errno === 0) {
            console.log("获取热门小组成功");
            this.hotgroup = [];
            var i = 0;
            for (i = 0; i < 6 && i < res.data.data.length; i++) {
              res.data.data[i].star = parseFloat(res.data.data[i].star);
              this.hotgroup.push(res.data.data[i]);
            }
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    usetogroupdetail(id) {
      this.$router.push({
        name: "groupdetail",
        query: { id: id },
      });
    },
    getaddgroup() {
      var params = {
      };
      this.$axios
          .post("/group/mygroup", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              console.log("13215645646");
              this.addgroup = [];
              var i = 0;
              for (i = 0; i < 6 && i < res.data.data.length; i++) {
                this.addgroup.push(res.data.data[i]);
              }
            }
            else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
  mounted() {
    this.gethootgroupmes();
    this.getaddgroup();
    window.onscroll = function (e) {
      console.log("slide");
      var vertical = document
        .getElementsByClassName("bookpage-vertical")
        .item(0);
      var pos = vertical.getBoundingClientRect();
      console.log(pos.top);
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
.groupPagebody {
  padding-left: 100px;
}
#vertical {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 35px;
  padding-bottom: 60px;
  margin-top: 80px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.aside {
  position: relative;
  float: left;
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
  width: 352px;
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
  width: 352px;
}
.bookpage-comments {
  margin-bottom: 50px;
}
.book-comments-display {
  width: 1000px;
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
.comment-pic {
  height: 150px;
}
div.comment-origin-pic {
  position: relative;
  height: 200px;
  left: 0;
  top: 20px;
  margin-left: 5px;
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
  border-radius: 20px;
  margin-right: 5px;
  vertical-align: sub;
}
.commenttext {
  width: 800px;
  margin-left: 30px;
}
a.commenttext-origin {
  position: relative;
  top: 20px;
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
a.commenttext-origin span {
  font-size: 20px;
  font-weight: 600;
  color: black;
  transition: 0.3s ease;
}
a.commenttext-origin span:hover {
  text-decoration: underline;
}
a.comment-book-name {
  font-weight: 400;
  font-size: 17px;
  color: rgb(157, 157, 157);
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
.collection .bookpage-title a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection .bookpage-title a:hover {
  color: rgb(2, 98, 182);
}
.collection .bookpage-title a:hover::after {
  opacity: 1;
}
.collection .bookpage-title a:active {
  color: rgb(0, 166, 255);
}
.img-block{
  display: inline;
  height:85px;
  width:85px;
  overflow: hidden;
  margin-right: 20px;
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
.search-number {
  margin-top: 50px;
  margin-left: 300px;
}
.title-aside {
  font-size: 26px;
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
.comment-pic {
  height: 150px;
}
div.comment-origin-pic {
  position: relative;
  height: 200px;
  left: 0;
  top: 20px;
  margin-left: 5px;
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
  width: 650px;
  margin-left: 30px;
}
a.commenttext-origin {
  position: relative;
  top: 36px;
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
a.comment-book-name {
  font-weight: 400;
  font-size: 17px;
  color: rgb(157, 157, 157);
}
.collection {
  height: 530px;
}
.collection-list {
  width: 960px;
}
.collection-list a {
  position: relative;
  float: left;
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
  overflow: hidden;
}
.collection-list a:hover {
  background-color: #91919155;
}
.collection .videopage-title a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection .videopage-title a:hover {
  color: rgb(2, 98, 182);
}
.collection .videopage-title a:hover::after {
  opacity: 1;
}
.collection .videopage-title a:active {
  color: rgb(0, 166, 255);
}
.collection-img {
  width: 85px;
  height: 100px;
  margin-right: 20px;
  overflow: hidden;
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

.title {
  font-weight: bold;
  font-family: "Adobe 宋体 Std L", serif;
  font-size: 30px;
}
.body {
  width: 1600px;
  height: 1000px;
  position: absolute;
  padding-left: 100px;
}
.aside-left {
  float: left;
  position: relative;
  width: 1100px;
}
.bookpage-title img {
  height: 37px;
  vertical-align: -20%;
  margin-right: 5px;
}
.bookpage-hit {
  position: relative;
  float: left;
  width: 1000px;
  margin-top: 30px;
  margin-bottom: 50px;
}
.aside-right {
  position: relative;
  float: left;
  width: 400px;
  left: 10px;
}
.vertical {
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
.bookpage-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
}
.group_div {
  position: relative;
  float: left;
  width: 300px;
  top: 10px;
  border: 1px solid #d3dce6;
  height: 160px;
  margin-left: 20px;
  margin-top: 20px;
}
.group_div_img {
  position: relative;
  float: left;
  top: 20px;
  left: 20px;
  height: 120px;
  width: 80px;
}
.group_div_m {
  position: relative;
  float: left;
  height: 150px;
  width: 180px;
  left: 20px;
  top: 20px;
}
.group_div_m_font_title {
  font-size: 23px;
  font-family: "宋体", sans-serif;
  width: 100%;
  position: relative;
  float: left;
  height: 30px;
  left: 10px;
  line-height: 20px;
}
.group_div_m_font_num {
  font-size: 20px;
  font-family: "宋体", sans-serif;
  width: 100%;
  position: relative;
  float: left;
  height: 30px;
  left: 10px;
  color: #d3dce6;
}
.groupusually {
  float: left;
  position: relative;
  top: 30px;
  width: 100%;
}
.normal_active {
  height: 40px;
  overflow: hidden;
  transition: 0.5s;
}
.heigh_active {
  height: 300px;
  overflow: hidden;
  transition: 0.5s;
}
.heigh {
  height: 300px;
  overflow: hidden;
  transition: 0.5s;
}
.normal {
  height: 40px;
  overflow: hidden;
  transition: 0.5s;
}
.massage {
  font-size: 20px;
  font-family: "Adobe 宋体 Std L", serif;
  font-weight: bold;
}
.hidden_img {
  height: 300px;
  width: 200px;
}
.title_l {
  width: 525px;
  position: relative;
  float: left;
}
.group-name_l {
  width: 150px;
  position: relative;
  float: left;
}
.res_l {
  width: 125px;
  position: relative;
  float: left;
}
.time_l {
  width: 200px;
  position: relative;
  float: left;
}
.font_l {
  font-size: 20px;
  font-family: "Adobe 宋体 Std L", serif;
  font-weight: bold;
}
.blue {
  color: #2c8df4;
}
.m_div {
  float: left;
  position: relative;
  height: 50px;
}
.m_nothead {
  position: relative;
  float: left;
}
</style>