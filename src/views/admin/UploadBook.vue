<template>
  <div>
    <admin></admin> 
  <div id="bookupload">
    <div class="wrap">
      <h1 id="upload-title">上传书籍</h1>
      <el-form :model="form" ref="form" class="form">
        <el-form-item prop="name">
          <el-input
            placeholder="书名"
            v-model="form.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="author">
          <el-input
            placeholder="作者"
            v-model="form.author"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="img">
          <el-input
            type="textarea"
            placeholder="书籍封面"
            autosize
            v-model="form.img"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="press">
          <el-input
            placeholder="出版社"
            v-model="form.press"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="intro">
          <el-input
            type="textarea"
            placeholder="书籍简介"
            :autosize="{ minRows: 2, maxRows: 4 }"
            v-model="form.intro"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item class="btn_login">
          <el-button type="primary" @click="upload">上&nbsp;&nbsp;传</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  </div>  
</template>
<script>
import qs from "qs";
import admin from "@/components/admin.vue";
export default {
  name: "Login",
  components: {
    admin,
  },
  data() {
    var form = {
      name: "",
      img: "",
      author: "",
      press: "",
      intro: "",
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
    upload() {
      if (this.form.name === "" || this.form.name === undefined)
      { this.$message.error({ message: "请填入书名" }); return;}
      if (this.form.author === "" || this.form.author === undefined)
      { this.$message.error({ message: "请填入作者" }); return;}
       if (this.form.img === "" || this.form.img === undefined)
      { this.$message.error({ message: "请填入封面链接" }); return;}
      if (this.form.press === "" || this.form.press === undefined)
      { this.$message.error({ message: "请填入出版社" }); return;}
      if (this.form.intro === "" || this.form.intro === undefined)
      { this.$message.error({ message: "请填入简介" }); return;}
      this.$axios
        .post("/uploadbook", qs.stringify(this.form))
        .then((res) => {
          console.log(res);
          if (res.data.errno === 0) {
            console.log("获取到上传信息", res.data.data.id);
            this.$message({
              message: "上传成功",
              type: "success",
            });
            this.$refs['form'].resetFields();
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#bookupload {
  position: absolute;
  top: 0;
  font-family: "Noto Serif SC", serif;
  width: 100%;
  height: 100vh;
}
#bookupload >>> .el-input__inner {
  font-family: "Noto Serif SC", serif;
  height: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}
#upload-title {
  position: relative;
  left: 100px;
}
#bookupload .wrap {
  position: absolute;
  left: 680px;
  padding: 10px 25px 0 25px;
  color: #303133;
  transition: 0.3s;
  background-color: rgba(255, 255, 255, 0.749);
  border-radius: 20px;
  width: 400px;

  margin: 215px auto;
  overflow: hidden;
  line-height: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
#bookupload .btn_login {
  margin-top: 10px;
  text-align: center;
}
#bookupload .btn_login button {
  line-height: 10px;
  font-family: "Noto Serif SC", serif;
  width: 100%;
  height: 38px;
}
#bookupload .suffix {
  font-size: 14px;
  line-height: 10px;
  color: #999;
  cursor: pointer;
  float: right;
}
</style>