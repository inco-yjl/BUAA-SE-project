<template>
  <div id="login">
    <div class="wrap">
      <h1 id="login-title">登 录</h1>
      <el-form :model="form" ref="form" class="form">
        <el-form-item prop="username">
          <el-input
            placeholder="用户名"
            type="username"
            v-model="form.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item id="password" prop="password">
          <el-input
            placeholder="密码"
            show-password
            type="password"
            v-model="form.password"
            autocomplete="off"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn_login">
          <el-button type="primary" @click="login">登&nbsp;&nbsp;录</el-button>
        </el-form-item>
        <el-form-item class="btn_login">
          <el-button onclick="window.location.href='../register'"
            >注&nbsp;&nbsp;册</el-button
          >
        </el-form-item>
        <button @click="passanger" class="pass-button">游客进入</button>
      </el-form>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Login",

  data() {
    var form = {
      username: "",
      password: "",
    };
    return {
      form,
    };
  },

  methods: {
    addNavigation() {
      this.$parent.navigate = true;
    },
    removeNavigation() {
      this.$parent.navigate = false;
    },
    passanger() {
      this.addNavigation();
      const _this = this;
      this.$store.getters.getUser.user.id = -1;
      this.$router.replace({
        path: "/home",
      });
    },
    login() {
      this.$axios
        .post("/login", qs.stringify(this.form))
        .then((res) => {
          if (res.data.msg === '登录成功') {
            console.log("获取到登录信息", res);
            this.$message({
              message: "登录成功",
              type: "success",
            });
            console.log(res.data.data);
            this.$store.dispatch('saveUserInfo', {
                user: res.data.data
              });
              console.log(res.data.data+'已登录');
              window.open('/home', '_self');
          }
          else{
             this.$message.error(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.removeNavigation();
  },
};
</script>

<style scoped>
#login {
  position: absolute;
  top: 0;
  left:0;
  font-family: "Noto Serif SC", serif;
  width: 100%;
  height: 100vh;
  background: url("../../assets/bg/login.jpg") no-repeat;
  overflow: hidden;
}
#login >>> .el-input__inner {
  font-family: "Noto Serif SC", serif;
  height: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}
#login-title {
  position: relative;
  left: 130px;
}
#login .wrap {
  position: absolute;
  left: 680px;
  padding: 10px 25px 0 25px;
  color: #303133;
  transition: 0.3s;
  background-color: rgba(255, 255, 255, 0.749);
  border-radius: 20px;
  width: 400px;
  height: 360px;
  margin: 215px auto;
  overflow: hidden;
  line-height: 40px;
}
#login .btn_login {
  margin-top: 10px;
  text-align: center;
}
#login .btn_login button {
  line-height: 10px;
  font-family: "Noto Serif SC", serif;
  width: 100%;
  height: 38px;
}
#login .suffix {
  font-size: 14px;
  line-height: 10px;
  color: #999;
  cursor: pointer;
  float: right;
}
.pass-button {
  margin-top: 0;
  padding-left: 140px;
  border: none;
  background: none;
  left: 100px;
  outline: none;
}
</style>