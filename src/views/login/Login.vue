<template>
  <div class="login" clearfix>
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form
          ref="loginForm"
          :model="user"
          :rules="rules"
          status-icon
          label-width="80px"
        >
          <h3>登录</h3>
          <hr />
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="user.username"
              placeholder="请输入用户名"
              prefix-icon
            ></el-input>
          </el-form-item>
          <el-form-item id="password" prop="password" label="密码">
            <el-input
              v-model="user.password"
              show-password
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <router-link to="/">找回密码</router-link>
          <router-link to="/register">注册账号</router-link>
          <el-form-item>
            <el-button
              id="login-button"
              type="primary"
              icon="el-icon-upload"
              @click="doLogin()"
              >登 录</el-button
            >
            <button id="pass-button">游客进入</button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    doLogin() {
      if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.password) {
        this.$message.error("请输入密码！");
        return;
      } else {
        //校验用户名和密码是否正确;
        // this.$router.push({ path: "/personal" });
        axios
          .post("/login/", {
            name: this.user.username,
            password: this.user.password,
          })
          .then((res) => {
            // console.log("输出response.data.status", res.data.status);
            if (res.data.status === 200) {
              this.$router.push({ path: "/personal" });
            } else {
              alert("您输入的用户名或密码错误！");
            }
          });
      }
    },
  },
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/bg/login.jpg") no-repeat;
  overflow: hidden;
}
.login-wrap {
  background-color: rgba(255, 255, 255, 0.749);
  border-radius: 20px;
  width: 400px;
  height: 300px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
}
#password {
  margin-bottom: 5px;
}
h3 {
  font-family: YouSheBiaoTiHei;
  color: #000000b8;
  font-size: 30px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #aaa;

  margin-left: 60px;
  font-size: 15px;
}
a:hover {
  color: rgb(255, 0, 0);
}
#login-button {
  position: absolute;
  width: 100px;
  left: 0px;
}
#pass-button {
  position: absolute;
  border: none;
  background: none;
  width: 100px;
  left: 100px;
}
</style>