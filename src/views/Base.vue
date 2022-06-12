<template>
  <div id="base">
    <template v-if="navigate">
      <div id="navigation">
        <router-link id="Tohome" to="/home"
          ><span id="icon"
            ><img
              id="sitelogo"
              alt="logo"
              src="@/assets/icon/logo.png"
              width="50px" /></span
        ></router-link>
        <router-link to="/book"
          ><span class="guide"
            ><img
              id="bookimg"
              src="@/assets/icon/book.png"
              width="30px"
            />图书</span
          ></router-link
        >
        <router-link to="/video"
          ><span class="guide"
            ><img src="@/assets/icon/video.png" width="30px" />影视</span
          ></router-link
        >
        <router-link to="/GroupHome"
          ><span class="guide"
            ><img src="@/assets/icon/group.png" width="30px" />小组</span
          ></router-link
        >
        <router-link to="/topic"
          ><span class="guide"
            ><img
              id="videoimg"
              src="@/assets/icon/topic.png"
              width="30px"
            />话题</span
          ></router-link
        >

        <div id="login">
          <div class="demonstration">
            <img :src="userIcon" />
          </div>
          <div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link"
                >{{ userName }}<i class="el-icon-arrow-down el-icon--right"></i
              ></span>
              <el-dropdown-menu slot="dropdown" v-if="user_id === -1">
                <a href="/login"
                  ><el-dropdown-item icon="el-icon-user-solid"
                    >登录</el-dropdown-item
                  ></a
                >
              </el-dropdown-menu>
              <el-dropdown-menu slot="dropdown" v-else>
                <a href="/admin/uploadbook"
                  ><el-dropdown-item v-if="isAdmin"
                    >管理员页面</el-dropdown-item
                  ></a
                >
                <a href="/person"
                  ><el-dropdown-item icon="el-icon-user-solid"
                    >个人主页</el-dropdown-item
                  ></a
                >
                <el-dropdown-item
                  icon="el-icon-chat-line-round"
                  @click.native="drawer = true"
                  >我的消息
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-switch-button" 
                  ><a @click="logout">退出账号</a></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>

        <el-drawer
          title="我的消息"
          :visible.sync="drawer"
          :direction="direction"
        >
          <div v-for="(per,index) in messages" :key="index">
            <a @click="ToArticle(per.column,per.article_id)">
              <img class="el-drawer-img" :src="displayIcon(per.usericon)" />
              <span>{{ per.author_name }} @了你</span>
            </a>
          </div>
        </el-drawer>
      </div>
    </template>
    <router-view :key="$router.currentRoute.fullPath"></router-view>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    var messages = [];
    var navigate = true;
    return {
      navigate,
      userIcon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
      messages,
      drawer: false,
      isAdmin: false,
      direction: "rtl",
      userName: "游客",
      user_id: -1,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.updateUser();
      this.updateMess();
    });
  },
  methods: {
    ToArticle(column,id){
      if(column === 1)
      this.ToBookComment(id);
      if(column === 2)
      this.ToMovieComment(id);
      if(column===3)
      this.ToTelecomment(id);
      if(column===4)
      this.ToTopicDt(id);

    },
        ToBookComment(id) {
      console.log(id);
      this.$router.push({ name: "bookcomment", query: { id: id } });
    },
    ToMovieComment(id) {
      console.log(id);
      this.$router.push({ name: "moviecomment", query: { id: id } });
    },
        ToTelecomment(id) {
      this.$router.push({ name: "telecomment", query: { id: id } });
    },
        ToTopicDt(id) {
      this.$router.push({
        name: "topicdt",
        query: { id: id },
      });
    },
     displayIcon(url) {
      var icon = "https://i.imgtg.com/2022/05/08/zDzsM.png";
      if (url !== "") {
        var len = this.$axios.defaults.baseURL.length;
        icon = this.$axios.defaults.baseURL.substring(0, len - 4) + url;
      }
      console.log(icon);
      return icon;
    },
    updateMess(){
      if(!this.$store.getters.getUser || this.$store.getters.getUser.user.id===-1)
      return;
      var user = this.$store.getters.getUser.user;
      var params = {
        user_id: user.id,
      };
      this.$axios
        .post("/passage/get_message", qs.stringify(params))
        .then((res) => {
          console.log(res);
          if (res.data.errno === 0) {
            for(var i=res.data.data.length-1;i>=0;i--)
            {
              this.messages.push(res.data.data[i]);
            }
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateUser() {
      if(!this.$store.getters.getUser || this.$store.getters.getUser.user.id===-1)
      {
        this.userIcon = "https://i.imgtg.com/2022/05/08/zDzsM.png";
        var passenger = {
          id: -1,
          username: '游客'
        };
        this.$store.dispatch("saveUserInfo", {
          user: passenger,
        });
        this.user_id = -1;
        return;
      }
      var user = this.$store.getters.getUser.user;
      var params = {
        user_id: user.id,
      };
      this.user_id = user.id;
      this.$axios
        .post("/user/detail", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data);
            var user = res.data.data;
            var len = this.$axios.defaults.baseURL.length;
            this.userName = user.name;
            if (user.image !== "")
              this.userIcon =
                this.$axios.defaults.baseURL.substring(0, len - 4) + user.image;
            console.log(this.userIcon);
            user.admin = parseInt(user.admin);
            switch (user.admin) {
              case 1:
                this.isAdmin = true;
                break;
              default:
                this.isAdmin = false;
                break;
            }
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 初始化
    isLogin(msg) {
      this.navigate = false;
    },
    logout() {
      this.$store.dispatch("clearUserInfo");
      this.$router.push({ name: "login" });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&display=swap");
#navigation {
  position: absolute;
  width: 100%;
  height: 70px;
  margin-bottom: 0px;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  font-weight: bolder;
  box-shadow: 0px 2px 4px #888888;
}
#line {
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
}
#login {
  position: absolute;
  top: 20px;
  left: 1500px;
  display: flex;
  flex-wrap: nowrap;
}
.demonstration {
  width: 35px;
  height: 35px;
  margin-right: 5px;
  border-radius: 20px;
  overflow: hidden;
}
.demonstration img{
  height:36px;
  width:36px;
}
#icon {
  position: relative;
  top: 15px;
  left: 30px;
  margin-right: 200px;
  float: left;
}
.el-dropdown-link {
  font-size: 15px;
  font-weight: 600;
}
span.guide {
  position: relative;
  top: 14px;
  margin-right: 200px;
  float: left;
  font-family: "Noto Serif SC", serif;
  font-size: 30px;
  transition: opacity 0.2s;
}
a {
  color: black;
  transition: all 0.5s ease;
}
a.router-link-active {
  color: rgb(130, 130, 130);
}
a:hover {
  color: rgb(111, 184, 186);
}
a:hover::after {
  opacity: 1;
}
img {
  vertical-align: -10%;
}
</style>
<style>
div {
  cursor: default;
}
a {
  cursor: pointer;
}
button {
  cursor: pointer;
}
.el-drawer-img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
}
</style>


