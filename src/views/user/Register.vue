<template>
  <div id="register" class="register">
    <div class="wrap">
      <h1>注 册</h1>
      <el-form :model="user" ref="user" class="userRegister">
        <el-form-item prop="username">
          <el-input placeholder="用户名" type="username" v-model="user.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password_1">
          <el-input placeholder="密码" type="password" v-model="user.password_1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password_2">
          <el-input
              placeholder="确认密码"
              show-password
              type="password"
              v-model="user.password_2"
              autocomplete="off"
              @keyup.enter.native="register"
          ></el-input>
        </el-form-item>
         <el-form-item prop="email">
            <el-input
              v-model="user.email"
              placeholder="请输入邮箱"
              prefix-icon
            ></el-input>
          </el-form-item>
           <el-form-item prop="validword">
            <el-input
              v-model="user.validword"
              placeholder="请输入邮箱验证码"
              prefix-icon
            ></el-input>
          </el-form-item>
        <el-form-item class="btn_register">
          <el-button type="primary" @click="register">注&nbsp;&nbsp;册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Register",
  data() {
    return {
      user: {
        username: "",
        password_1: "",
        password_2: "",
        email:"",
        validword:""
      }
    }
  },
  methods: {
    removeNavigation(){
            this.$parent.notLogin=false;
      console.log(this.$parent.notLogin);
    },
    register: function () {
      this.$axios.post('/user/register', qs.stringify(this.form))
        .then(res => {
          if (res.data.errno === 0) {
            this.$message.success("注册成功");
            setTimeout(() => {
              window.open('/login', '_self');
            }, 1000);
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  mounted(){
    this.removeNavigation();
  }
}
</script>

<style scoped>
#register {
  font-family: "Noto Serif SC", serif;
  width: 100%;
  height: 100vh;
  background: url("../../assets/bg/login.jpg") no-repeat;
}
#register >>> .el-input__inner {
  font-family: "Noto Serif SC", serif;
  height: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}
#register .wrap {
  position: absolute;
  left: 680px;
  padding: 10px 25px 0 25px;
  color: #303133;
  transition: 0.3s;
  background-color: rgba(255, 255, 255, 0.749);
  border-radius: 20px;
  width: 400px;
  height: 460px;
  margin: 215px auto;
  overflow: hidden;
  line-height: 40px;
}
#register .btn_register {
  margin-top: 25px;
  text-align: center;
}
#register .btn_register button{
  line-height: 10px;
  font-family: 'Noto Serif SC', serif;
  width: 100%;
  height: 38px;
}
#register .suffix {
  font-size:14px;
  line-height:10px;
  color:#999;
  cursor: pointer;
  float:right;
}
</style>