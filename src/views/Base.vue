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
            <img :src="userIcon" :style="styleOfIcon" />
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
                <a href="/person"
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
                <el-dropdown-item icon="el-icon-switch-button" @click="logout"
                  >退出账号</el-dropdown-item
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
          <div v-for="per in messages" :key="per.index">
            <a herf="">
              <img class="el-drawer-img" src="../assets/user/int.jpg" />
              <span>{{ per.name }} @了你</span>
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
    var messages = [
      {
        img: "../assets/user/int.jpg",
        name: "owwo",
      },
      {
        img: "../assets/user/int.png",
        name: "owwo",
      },
      {
        img: "../assets/user/int.png",
        name: "owwo",
      },
      {
        img: "../assets/user/int.png",
        name: "owwo",
      },
      {
        img: "../assets/user/int.png",
        name: "owwo",
      },
      {
        img: "../assets/user/int.png",
        name: "owwo",
      },
      {
        img: "../assets/user/int.png",
        name: "owwo",
      },
      {
        img: "../assets/user/int.png",
        name: "owwo",
      },
      {
        img: "../assets/user/int.png",
        name: "owwo",
      },
      {
        img: "../assets/user/int.png",
        name: "owwo",
      },
    ];
    var navigate = true;
    return {
      navigate,
      userIcon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
      messages,
      drawer: false,
      isAdmin: false,
      direction: "rtl",
      userName: "游客",
      styleOfIcon: "height:36px",
      user_id: -1,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.updateUser();
    });
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.updateUser();
    });
  },
  methods: {
    updateUser() {
      var user = this.$store.getters.getUser.user;
      console.log(user);
      if (!user || user.id === -1) {
        this.userIcon = "https://i.imgtg.com/2022/05/08/zDzsM.png";
        var passenger = {
          id: -1,
          usenam: '游客'
        };
        this.$store.dispatch("saveUserInfo", {
          user: passenger,
        });
        this.user_id = -1;
        return;
      }
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
            var img = new Image();
            img.src = this.userIcon;
            if (img.width > img.height)
              this.styleOfIcon =
                "height:36px;width:auto;position: relative; top:0px; left:-" +
                ((img.width - img.height) / img.height) * 18 +
                "px";
            else
              this.styleOfIcon =
                "width:36px;heigh:auto;position: relative;  left:0px;top:-" +
                ((img.height - img.width) / img.width) * 18 +
                "px";
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
      this.$router.replace({ path: "/login" });
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
  border-color: rgb(192, 192, 192);
  border-style: solid;
  border-radius: 20px;
  overflow: hidden;
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


