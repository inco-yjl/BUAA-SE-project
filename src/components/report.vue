<template>
  <div class="login-put">
    <el-button type="primary"  @click="open">举报信息</el-button>
  </div>
</template>

<script>
export default {
  name: "report",
  methods: {
    open() {
      this.$prompt('举报信息', '发起举报', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[\u4e00-\u9fa5\S]{15,300}$/,
        inputErrorMessage: '少于15字'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '举报信息已发送！感谢您对维护美好环境所做出的贡献'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    show() {
      var value = document.getElementById("div1");
      if(value.style.display === "none")
      {
        value.style.display="block";
      }
      else
        value.style.display="none";
    }
  }
}
</script>

<style scoped>
p{ margin:0; padding:0;}
.text01 {
  font-family: 思源雅黑;
  font-size: 18px;
  height: 300px;
}
.login-put {
  line-height: 36px;
  margin-bottom: 20px;
  position: relative;
}

.login-put label {
  color: #8c8686;
  float: left;
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  text-align: right;
  width: 120px;
}

#form1{ float:left; width:320px}
#form1 label {
  float: left;
  text-align: left;
  width: 80px;
}

input {
  cursor: pointer;
  vertical-align: text-top;
}

.login-put #div1 {
  height: 476px;
  left: 50%;
  position: fixed;
  top: 50%;
  width: 700px;
  margin-top: -238px;
  margin-left: -350px;
  z-index: 100;
}

.login-put #div1 input {
  position: relative;
  border: 1px solid #dddddd;
  color: #999999;
  float: left;
  height: 309px;
  line-height: 36px;
  margin-right: 10px;
  padding: 0 5px;
  width: 500px;

}

.vertical {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 35px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
</style>