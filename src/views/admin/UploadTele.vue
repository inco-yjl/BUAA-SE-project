<template>
  <div>
    <admin></admin>
    <div id="teleupload">
    <div class="wrap">
      <h1 id="upload-title">上传电视剧</h1>
      <el-form :model="form" ref="form" class="form">
        <el-form-item prop="name">
          <el-input
            placeholder="剧集名"
            v-model="form.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="year">
          <el-input
            placeholder="年份"
            v-model="form.year"
            autocomplete="off"
          ></el-input>
        </el-form-item>
       <el-form-item prop="nation">
          <el-input
            placeholder="国家"
            v-model="form.nation"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="img">
          <el-input
            type="textarea"
            placeholder="剧集海报"
            autosize
            v-model="form.img"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        
         <el-form-item prop="actor">
          <el-input
            placeholder="演员"
            type="textarea"
            autosize
            v-model="form.actor"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="intro">
          <el-input
            type="textarea"
            placeholder="剧集简介"
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
      nation: "",
      year:"",
      actor: "",
      intro: "",
    };
    return {
      form,
    };
  },

  methods: {
    upload() {
      if (this.form.name === "" || this.form.name === undefined)
      { this.$message.error({ message: "请填入剧集名称" }); return;}
       if (this.form.year === "" || this.form.year === undefined)
      { this.$message.error({ message: "请填入放映年份" }); return;}
      if (this.form.nation === "" || this.form.nation === undefined)
      { this.$message.error({ message: "请填入制片国家" }); return;}
       if (this.form.img === "" || this.form.img === undefined)
      { this.$message.error({ message: "请填入海报链接" }); return;}
     
      if (this.form.actor === "" || this.form.actor === undefined)
      { this.$message.error({ message: "请填入演员名单" }); return;}
      if (this.form.intro === "" || this.form.intro === undefined)
      { this.$message.error({ message: "请填入简介" }); return;}
      this.$axios
        .post("/uploadtele", qs.stringify(this.form))
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
#teleupload {
  position: absolute;
  top: 0;
  font-family: "Noto Serif SC", serif;
  width: 100%;
  height: 100vh;
}
#teleupload >>> .el-input__inner {
  font-family: "Noto Serif SC", serif;
  height: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}
#upload-title {
  position: relative;
  left: 70px;
}
#teleupload .wrap {
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
#teleupload .btn_login {
  margin-top: 10px;
  text-align: center;
}
#teleupload .btn_login button {
  line-height: 10px;
  font-family: "Noto Serif SC", serif;
  width: 100%;
  height: 38px;
}
#teleupload .suffix {
  font-size: 14px;
  line-height: 10px;
  color: #999;
  cursor: pointer;
  float: right;
}
</style>