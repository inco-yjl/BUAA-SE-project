<template>
  <div id="groupdetail-page">
    <search></search>
    <div class="group-detail-body">
      <div id="groupdetail-vertical">
        <div class="group-intro">
          <div class="group-img"><img :src="group.image" /></div>
          <div class="group-info">
            <span class="group-title">{{ group.name }}</span>
            <br />
            <span class="member-num">{{ group.member }}人已加入</span>
            <br />
            <span class="passage-num">{{ passageNum }}篇发帖</span>
          </div>
          <div class="user-buttons">
            <div id="join-button">
              <button v-if = "!flag" @click="join">
                <img src="@/assets/group/join.png" />
              </button>
              <button v-if = "flag" @click="quit()">
                <img src="@/assets/group/quit.png" />
              </button>
            </div>
           
            <div class="group-detail-interact">
              <button v-if="!isadmin" @click = "toadmin()">
                <img src="@/assets/group/apply.png" /><span
                  >申请成为管理员</span
                >
              </button>
              <button class="share-topic" @click="share">
                <img src="@/assets/guide/share.png" /><span>分享小组</span>
              </button>
              <button class="write-dt" @click = "usetonewpassage()">
                <img src="@/assets/guide/write_dt.png" /><span>发布帖子</span>
              </button>
            </div>
          </div>
        </div>
        <div class="group-passage">
          <div class="title diary-hit">
            <span
              ><img src="@/assets/group/passage.png" />

              <button
                class="selection_ed"
                id="select-hot-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_ed'"
                @click="hotPassage()"
              >
                热门</button
              >/
              <button
                class="selection_un"
                id="select-new-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_ed'"
                @click="newPassage()"
              >
                最新</button
              >/
              <button
                class="selection_un"
                id="select-star-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_ed'"
                @click="starPassage()"
              >
                精华
              </button>
            </span>
          </div>
          <div class="display-passage">
            <el-empty v-if = "(inhot && topempty && hotempty) || (innew && newempty && topempty) || (inval && valempty)"></el-empty>
            <div
              class="passage-block"
              v-for="passage in topmes"
              :key="passage.id"
              v-if = "inhot && !(topempty && hotempty)">
              <hr />
              <div class="passage-display-body">
                <div class="display-publisher">
                  <a class="userOfdiary" href="/otherusers/1">
                    <img class="iconOfuser" :src="displayIcon(passage.usericon)" /><span
                      class="nameOfuser"
                      >{{ passage.username }}</span
                    >
                  </a>
                  <span class="publishtime">{{ changedate(passage.date) }}</span>
                </div>
                <div class="passage-content">
                  <a>{{ passage.title }}</a>
                </div>
                <button
                    v-if = "isadmin"
                    class="topic-button"
                    :style="{ backgroundColor: bg_color, color: ft_color }"
                    @click="delmes(passage.id,1)"
                >
                  取消置顶
                </button>
                <div class="top-icon" style="margin-left: 50px; margin-right: 20px"><img src="@/assets/group/top.png" /></div>
              </div>
            </div>
            <div
                class="passage-block"
                v-for="passage in hotpassage"
                :key="passage.id"
                v-if = "inhot && !(topempty && hotempty)">
              <hr />
              <div class="passage-display-body">
                <div class="display-publisher">
                  <a class="userOfdiary" href="/otherusers/1">
                    <img class="iconOfuser" :src="displayIcon(passage.usericon)" /><span
                      class="nameOfuser"
                  >{{ passage.username }}</span
                  >
                  </a>
                  <span class="publishtime">{{ changedate(passage.date) }}</span>
                </div>
                <div class="passage-content">
                  <a>{{ passage.title }}</a>
                </div>
                <button
                    v-if = "isadmin"
                    class="topic-button"
                    :style="{ backgroundColor: bg_color, color: ft_color }"
                    @click="addmes(passage.id,1)"
                >
                  置顶
                </button>
                <button
                    v-if = "isadmin"
                    class="topic-button"
                    :style="{ backgroundColor: bg_color, color: ft_color }"
                    @click="addmes(passage.id,2)"
                >
                  精华
                </button>
                <div class="top-icon"></div>
              </div>
            </div>
            <div
                class="passage-block"
                v-for="passage in topmes"
                :key="passage.id"
                v-if = "innew && !(newempty && topempty)">
              <hr />
              <div class="passage-display-body">
                <div class="display-publisher">
                  <a class="userOfdiary" href="/otherusers/1">
                    <img class="iconOfuser" :src="displayIcon(passage.usericon)" /><span
                      class="nameOfuser"
                  >{{ passage.username }}</span
                  >
                  </a>
                  <span class="publishtime">{{ changedate(passage.date)}}</span>
                </div>
                <div class="passage-content">
                  <a>{{ passage.title }}</a>
                </div>
                <button
                    v-if = "isadmin"
                    class="topic-button"
                    :style="{ backgroundColor: bg_color, color: ft_color }"
                    @click="delmes(passage.id,1)"
                >
                  取消置顶
                </button>
                <div class="top-icon" style="margin-left: 50px; margin-right: 20px"><img src="@/assets/group/top.png" /></div>
              </div>
       
            </div>
            <div
                class="passage-block"
                v-for="passage in newpassage"
                :key="passage.id"
                v-if = "innew && !(topempty && newempty)">
              <hr />
              <div class="passage-display-body">
                <div class="display-publisher">
                  <a class="userOfdiary" href="/otherusers/1">
                    <img class="iconOfuser" :src="displayIcon(passage.usericon)" /><span
                      class="nameOfuser"
                  >{{ passage.username }}</span
                  >
                  </a>
                  <span class="publishtime">{{ changedate(passage.date) }}</span>
                </div>
                <div class="passage-content">
                  <a>{{ passage.title }}</a>
                </div>
                <button
                    v-if = "isadmin"
                    class="topic-button"
                    :style="{ backgroundColor: bg_color, color: ft_color }"
                    @click="addmes(passage.id,1)"
                >
                  置顶
                </button>
                <button
                    v-if = "isadmin"
                    class="topic-button"
                    :style="{ backgroundColor: bg_color, color: ft_color }"
                    @click="addmes(passage.id,2)"
                >
                  精华
                </button>
                <div class="top-icon"></div>
              </div>
            </div>
            <div
                class="passage-block"
                v-for="passage in valmes"
                :key="passage.id"
                v-if = "inval && !valempty">
              <hr />
              <div class="passage-display-body">
                <div class="display-publisher">
                  <a class="userOfdiary" href="/otherusers/1">
                    <img class="iconOfuser" :src="displayIcon(passage.usericon)" /><span
                      class="nameOfuser"
                  >{{ passage.username }}</span
                  >
                  </a>
                  <span class="publishtime">{{ changedate(passage.date) }}</span>
                </div>
                <div class="passage-content">
                  <a>{{ passage.title }}</a>
                </div>
                <button
                    v-if = "isadmin"
                    class="topic-button"
                    :style="{ backgroundColor: bg_color, color: ft_color }"
                    @click="delmes(passage.id,2)"
                >
                  取消精华
                </button>
                <div class="top-icon" style="margin-right: 20px;margin-left: 50px"><img src="@/assets/group/star.png" /></div>
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
            <a class="collection-item" @click="usetogroupdetail(group.id)">
              <img class="collection-img" :src="group.img" />
              <div class="collection-info">
                {{ group.name }}
                <div></div>
                {{ group.member }}人参与
              </div>
            </a>
          </div>
        </div>
        <div class="collection">
          <div class="bookpage-title">
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import search from "@/components/SelectSearch.vue";
import qs from "qs";
import admin from "@/components/admin.vue"
export default {
  components: {
    search,
    admin,
  },
  data() {
    var id = this.$route.query.id;
    var isadmin = false;
    var group = {
      peoplenum: 20,
      name: "龙族",
      image: "https://i.imgtg.com/2022/05/23/hmqft.jpg",
      member: 10,
      join: false,
      manager: [
        {
          user_id: 1,
          user_name: "yjl",
        },
      ],
    };
    var topPassage = [
      {
        title: "体育网课！？",
        id: 2,
        userid: 1,
        username: "yjl",
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        date: "2022-4-13",
      },
      {
        title: "上午核酸人数查询",
        id: 2,
        userid: 1,
        username: "yjl",
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        date: "2022-4-13",
      },
      {
        title: "上午核酸人数查询",
        id: 2,
        userid: 1,
        username: "yjl",
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        date: "2022-4-13",
      },
    ];
    var allPassages = [];
    var flag = group.join;
    var inhot = true;
    var innew = false;
    var inval = false;
    var topmes = [{}];
    var valmes = [{}];
    var hotpassage = [{}];
    var newpassage = [{}];
    var topempty = false;
    var valempty = false;
    var newempty = false;
    var hotempty = false;
    var addgroup = [];
    var bg_color = "#f2fef0";
    var ft_color = "#6cf57c";
    var onefinish = false;
    return {
      bg_color,
      ft_color,
      isadmin,
      addgroup,
      id,
      inhot,
      innew,
      inval,
      flag,
      group,
      join:group.join,
      allPassages,
      topPassage,
      topmes,
      valmes,
      topempty,
      valempty,
      newempty,
      hotempty,
      hotpassage,
      newpassage,
      passageNum: 0,
      onefinish,
    };
  },
  methods: {
    share(){
            var domUrl = document.createElement("input");
            domUrl.value = window.location.href;
            domUrl.id = "creatDom";
            document.body.appendChild(domUrl);
            domUrl.select(); // 选择对象
            document.execCommand('Copy', 'false', null );
            let creatDom = document.getElementById("creatDom");
            creatDom.parentNode.removeChild(creatDom);
            this.$message({
                message: '复制成功',
                type: 'success'
            });
        },
    displayIcon(url) {
      console.log("testurl");
      console.log(url);
      var icon = "https://i.imgtg.com/2022/05/08/zDzsM.png";
      if (url !== "") {
        var len = this.$axios.defaults.baseURL.length;
        icon = this.$axios.defaults.baseURL.substring(0, len - 4) + url;
      }
      return icon;
    },
    toadmin() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
        group_id: this.id,
      }
      this.$axios
          .post("/group/group_manager", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              this.$message({
                message: "成功成为管理员",
                type: "success",
              });
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
    addgroupt() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
        group_id: this.id,
        type: '1',
      }
      this.$axios
          .post("/group/dealGroup", qs.stringify(params))
          .then((res) => {
            console.log("测试加入小组");
            console.log(res);
            if (res.data.errno === 0) {
              this.$message({
                message: "加入成功",
                type: "success",
              });
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
    delgroup() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
        group_id: this.id,
        type: '2',
      }
      this.$axios
          .post("/group/dealGroup", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              this.$message({
                message: "退出成功",
                type: "success",
              });
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
    usetonewpassage() {
      this.$router.push({
        name: "groupcomment",
        query: { id: this.id },
      });
    },
    usetogroupdetail(id) {
      this.$router.push({
        name: "groupdetail",
        query: { id: this.id },
      });
i   },
    hotPassage() {
      document
          .getElementById("select-new-topic-dt")
          .setAttribute("class", "selection_un");
      document
          .getElementById("select-star-topic-dt")
          .setAttribute("class", "selection_un");
      this.inhot = true;
      this.innew = false;
      this.inval = false;
    },
    newPassage() {
      document
          .getElementById("select-hot-topic-dt")
          .setAttribute("class", "selection_un");
      document
          .getElementById("select-star-topic-dt")
          .setAttribute("class", "selection_un");
      this.inhot = false;
      this.innew = true;
      this.inval = false;
    },
    starPassage() {
      document
          .getElementById("select-hot-topic-dt")
          .setAttribute("class", "selection_un");
      document
          .getElementById("select-new-topic-dt")
          .setAttribute("class", "selection_un");
      this.inhot = false;
      this.innew = false;
      this.inval = true;
    },
    getgroup() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
        group_id: this.id,
      }
      this.$axios
          .post("/group/detail", qs.stringify(params))
          .then((res) => {
            console.log("查询小组信息");
            console.log(res);
            var i = 0;
            if (res.data.errno === 0) {
              console.log("获取小组信息成功");
              console.log(res.data.data);
              this.group = res.data.data;
              for(i = 0;i < 2;i++) {
                console.log(this.$store.getters.getUser.user.id);
                console.log(res.data.data.manager[i].user_id);
                if(this.$store.getters.getUser.user.id === res.data.data.manager[i].user_id) {
                  this.isadmin = true;
                  break;
                }
              }
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
    srcmes() {
      console.log("11");
      var params = {
        group_id: this.id,
        kind: 1,
      };
      this.$axios
          .post("/group/search", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              console.log("获取置顶信息成功");
              this.topmes = [];
              var i = 0;
              for (i = 0; i < 6 && i < res.data.data.length; i++) {
                res.data.data[i].star = parseFloat(res.data.data[i].star);
                this.topmes.push(res.data.data[i]);
              }
              if(res.data.data.length === 0) {
                this.topmes = [];
                this.topempty = true;
              }
              this.passageNum += res.data.data.length;
            }
            else if(res.data.errno === 1002) {
              this.topmes = [];
              this.topempty = true;
            }
            else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      params = {
        group_id: this.id,
        kind: 2,
      };
      this.$axios
          .post("/group/search", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              console.log("获取精华信息成功");
              this.valmes = [];
              var i = 0;
              for (i = 0; i < 6 && i < res.data.data.length; i++) {
                res.data.data[i].star = parseFloat(res.data.data[i].star);
                this.valmes.push(res.data.data[i]);
              }
              if(res.data.data.length === 0) {
                this.valmes = [];
                this.valempty = true;
              }
              this.passageNum += res.data.data.length;
            }
            else if(res.data.errno === 1002) {
              this.valmes = [];
              this.valempty = true;
            }
            else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      var params = {
        group_id: this.id,
      }
      this.$axios
          .post("/group/hot_article", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              console.log("获取热门信息成功");
              this.hotpassage = [];
              var i = 0;
              var j = 0;
              var flag = 0;
              console.log("test");
              for (i = 0; i < 6 && i < res.data.data.length; i++) {
                flag = 0;
                for(j = 0;j < this.topmes.length;j++) {
                  if(this.topmes[j].id === res.data.data[i].id) {
                    flag = 1;
                    break;
                  }
                }
                for(j = 0;j < this.valmes.length;j++) {
                  if(this.valmes[j].id === res.data.data[i].id) {
                    flag = 1;
                    break;
                  }
                }
                if(!flag)
                  this.hotpassage.push(res.data.data[i]);
              }
              if(res.data.data.length === 0) {
                this.hotempty = true;
              }
              this.passageNum += this.hotpassage.length;
            }
            else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      var params = {
        group_id: this.id,
      }
      this.$axios
          .post("/group/new_article", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              console.log("获取热门信息成功");
              this.newpassage = [];
              var i = 0;
              for (i = 0; i < 6 && i < res.data.data.length; i++) {
                res.data.data[i].star = parseFloat(res.data.data[i].star);
                this.newpassage.push(res.data.data[i]);
              }
              if(res.data.data.length === 0) {
                this.newpassage = [];
                this.newempty = true;
              }
            }
            else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      this.onefinish = true;
    },
    changedate(date){
      return date.substring(0,10);
    },
    hotmes() {
      var params = {
        group_id: this.id,
      }
      this.$axios
          .post("/group/hot_article", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              console.log("获取热门信息成功");
              this.hotpassage = [];
              var i = 0;
              var j = 0;
              var flag = 0;
              console.log("test");
              console.log(this.topmes[0].id);
              for (i = 0; i < 6 && i < res.data.data.length; i++) {
                flag = 0;
                for(j = 0;j < this.topmes.length;j++) {
                  if(this.topmes[j].id === res.data.data[i].id) {
                    flag = 1;
                    break; 
                  }
                }
                for(j = 0;j < this.valmes.length;j++) {
                  if(this.valmes[j].id === res.data.data[i].id) {
                    flag = 1;
                    break;
                  }
                }
                if(!flag)
                  this.hotpassage.push(res.data.data[i]);
              }
              if(res.data.data.length === 0) {
                this.hotempty = true;
              }
              this.passageNum += this.hotpassage.length;
            }
            else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      var params = {
        group_id: this.id,
      }
      this.$axios
          .post("/group/new_article", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              console.log("获取热门信息成功");
              this.newpassage = [];
              var i = 0;
              var j = 0;
              var flag = 0;
              for (i = 0; i < 6 && i < res.data.data.length; i++) {
                flag = 0;
                for(j = 0;j < this.topmes.length;j++) {
                  if(this.topmes[j].id === res.data.data[i].id) {
                    flag = 1;
                    break;
                  }
                }
                for(j = 0;j < this.valmes.length;j++) {
                  if(this.valmes[j].id === res.data.data[i].id) {
                    flag = 1;
                    break;
                  }
                }
                if(!flag)
                  this.newpassage.push(res.data.data[i]);
              }
              if(res.data.data.length === 0) {
                this.newpassage = [];
                this.newempty = true;
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
    getaddgroup() {
      var params = {
        user_id: this.$store.getters.getUser.user.id, 
      };
      this.$axios
          .post("/group/mygroup", qs.stringify(params))
          .then((res) => {
            console.log("test.......");
            console.log(res);
            if (res.data.errno === 0) {
              console.log("13215645646");
              console.log(res.data.data);
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
    delmes(id,kind) {
      var params = {
        kind: kind,
        group_id: this.id,
        article_id: id,
      };
      this.$axios
          .post("/group/delete", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              console.log("取消成功");
              this.valmes = [];
              var i = 0;
              for (i = 0; i < 6 && i < res.data.data.length; i++) {
                res.data.data[i].star = parseFloat(res.data.data[i].star);
                this.valmes.push(res.data.data[i]);
              }
              this.$message({
                message: "取消成功",
                type: "success",
              });
            }
            else if(res.data.errno === 1002) {
              this.valmes = [];
              this.valempty = true;
            }
            else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
    addmes(id,kind) {
      var params = {
        kind: kind,
        group_id: this.id,
        article_id: id,
      };
      this.$axios
          .post("/group/add", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              console.log("申请成功");
              this.valmes = [];
              var i = 0;
              for (i = 0; i < 6 && i < res.data.data.length; i++) {
                res.data.data[i].star = parseFloat(res.data.data[i].star);
                this.valmes.push(res.data.data[i]);
              }
              this.$message({
                message: "申请成功",
                type: "success",
              });
            }
            else if(res.data.errno === 1002) {
              this.valmes = [];
              this.valempty = true;
            }
            else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
    join() {
      this.$set(this.group,'join',true);
      this.flag = true;
      this.group.member++;
      this.addgroupt();
      this.$forceUpdate();
    },
    quit() {
      this.$set(this.group,'join',false);
      console.log(this.group.join);
      this.flag = false;
      this.group.member--;
      this.delgroup();
      this.$forceUpdate();
    },
  },
  mounted() {
    this.getgroup();
    this.srcmes();
    this.getaddgroup();
    while(!this.onefinish);
    this.hotmes();
  },
};
</script>

<style scoped>
.topic-button {
  position: relative;
  height: 60px;
  width: 130px;
  color: #47ff5d;
  background: #f2fef0;
  border: #c4fbc9 solid;
  border-radius: 20px;
  padding: 10px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: -10px;
  margin-bottom: -10px;
  -webkit-transform: scale(0.7);
}
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
  color: rgb(2, 98, 182);
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

.collection-list a:hover {
  background-color: #91919155;
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
#groupdetail-page {
  width: 1600px;
  padding-left: 100px;
}
.group-detail-body {
  width: 1580px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
#groupdetail-vertical {
  padding-top: 50px;
  padding-left: 60px;
  padding-right: 35px;
  padding-bottom: 60px;
  margin-top: 80px;
  width: 1160px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.group-intro {
  display: flex;
  width: 1100px;
  flex-wrap: wrap;
}
.group-img {
  height: 100px;
  width: 100px;
  overflow: hidden;
  border-radius: 5px;
}
.group-img > img {
  width: 100px;
}

.group-info {
  width: 200px;
  margin-left: 30px;
}
.group-title {
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
}
.member-num {
  line-height: 35px;
  color: rgb(179, 179, 179);
}
.passage-num {
  color: rgb(179, 179, 179);
}
.group-passage {
  margin-top: 50px;
}
.passage-block {
  width: 1040px;
}
.passage-display-body {
  display: flex;
}
.iconOfuser {
  height: 30px;
  width: 30px;
  vertical-align: -30%;
}
.nameOfuser {
  font-size: 17px;
  font-family: Source Han Sans CN Normal;
  margin-right: 10px;
}
.display-publisher {
  margin-right: 20px;
}
.passage-content {
  width: 200px;
  margin-top: 2px;
}
.top-icon img{
    height:28px;
}
.star-icon img{
    height:30px;
    margin-left: 8px;
}
.passage-content a {
  font-size: 20px;
  font-weight: 400;
  color: black;
  transition: 0.3s ease;
}
.passage-content a:hover {
  text-decoration: underline;
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
  height: 900px;
}

.user-buttons {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 500px;
  margin-left: 200px;
  margin-top: 70px;
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
#join-button {
  position: absolute;
  left: 340px;
  top: 340px;
}
#join-button img {
  height: 40px;
}
.group-detail-interact button {
  position: relative;
  top: 0px;
  background: none;
  outline: none;
  font-size: 16px;
  border: none;
  transition: opacity 0.2s;
}
.group-detail-interact button :hover {
  text-decoration: underline;
}
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
</style>