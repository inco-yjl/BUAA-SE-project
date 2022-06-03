<template>
  <div id="groupupload">
    <div class="wrap">
      <h1 id="upload-title">创建小组</h1>
      <el-form :model="form" ref="form" class="form">
        <el-form-item prop="name">
          <el-input
            placeholder="小组名"
            v-model="form.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="img">
          <el-input
            type="textarea"
            placeholder="小组封面"
            autosize
            v-model="form.img"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        </el-form-item>
        <el-form-item class="btn_login">
          <el-button type="primary" @click="upload">上&nbsp;&nbsp;传</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import global from "@/components/common.vue";
import qs from "qs";
export default {
  name: "Login",

  data() {
    var form = {
      name: "",
      img: "",
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
      global.currentUserId = -1;
      this.$router.replace({
        path: "/home",
      });
    },
    upload() {
      if (this.form.name === "" || this.form.name === undefined)
      { this.$message.error({ message: "请填入小组名" }); return;}
       if (this.form.img === "" || this.form.img === undefined)
      { this.$message.error({ message: "请填入封面链接" }); return;}
      this.$axios
        .post("/uploadgroup", qs.stringify(this.form))
        .then((res) => {
          console.log(res);
          if (res.data.errno === 0) {
            console.log("获取到上传信息" + res.data.data.id);
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
#groupupload {
  position: absolute;
  top: 0;
  font-family: "Noto Serif SC", serif;
  width: 100%;
  height: 100vh;
}
#groupupload >>> .el-input__inner {
  font-family: "Noto Serif SC", serif;
  height: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}
#upload-title {
  position: relative;
  left: 100px;
}
#groupupload .wrap {
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
}groupupload .btn_login {
  margin-top: 10px;
  text-align: center;
}
#groupupload .btn_login button {
  line-height: 10px;
  font-family: "Noto Serif SC", serif;
  width: 100%;
  height: 38px;
}
#groupupload .suffix {
  font-size: 14px;
  line-height: 10px;
  color: #999;
  cursor: pointer;
  float: right;
}
</style>