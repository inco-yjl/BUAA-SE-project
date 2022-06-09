<template>
  <div class = "body">
    <div class = "body-box">
      <div class = "title">
        <h2>举报审理</h2>
      </div>
      <div v-if = noreportFormVisible class = "repoet-mes vertical">
        <el-empty description="目前没有需要审核的举报哦，明天再来探索吧！"></el-empty>
      </div>
      <div class = "vertical body-all" v-if = !noreportFormVisible>
      <div v-for="(mes,index) in message"  :key = "index" class = "repoet-mes">
        <div v-if="mes.result === 0" class = "vertical-t mes-body" >
          <img src = "../assets/user/int.jpg" class = "repoet-img">
          <div class = "div-report">
            <span style="position: relative; top: 10px">&nbsp;&nbsp;&nbsp;{{mes.reporter_name}}&nbsp;</span>
            <el-button class = "el-button--primary bo-re" @click = "dialogFormVisible = true">驳回</el-button>
            <el-button class = "el-button--primary bo-re" @click = "dialogFormVisiblere = true">通过</el-button>
            <el-dialog title="致举报人" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="反馈标题" :label-width="formLabelWidth">
                  <el-input v-model="form.date1" autocomplete="off" type="textarea" :rows = "1" style="font-family: 思源雅黑,sans-serif; font-size: 16px">
                  </el-input>
                </el-form-item>
                <el-form-item label="反馈内容" :label-width="formLabelWidth">
                  <el-input v-model="form.date2" autocomplete="off" type="textarea" :rows = "3" style="font-family: 思源雅黑,sans-serif; font-size: 16px">
                  </el-input>
                </el-form-item>
              </el-form>

              <div slot="footer" class="dialog-footer">
                <el-button @click="reload">取 消</el-button>
                <el-button type="primary" @click="open(index)">确 定</el-button>
              </div>
            </el-dialog>
            
            
            <el-dialog title="致被举报人" :visible.sync="dialogFormVisiblere">
              <el-form :model="form">
                <el-form-item label="反馈标题" :label-width="formLabelWidth">
                  <el-input v-model="form.date1" autocomplete="off" type="textarea" :rows = "1" style="font-family: 思源雅黑,sans-serif; font-size: 16px">
                  </el-input>
                </el-form-item>
                <el-form-item label="反馈内容" :label-width="formLabelWidth">
                  <el-input v-model="form.date2" autocomplete="off" type="textarea" :rows = "3" style="font-family: 思源雅黑,sans-serif; font-size: 16px">
                  </el-input>
                </el-form-item>
              </el-form>

              <div slot="footer" class="dialog-footer">
                <el-button @click="reload">取 消</el-button>
                <el-button type="primary" @click="open(index)">确 定</el-button>
              </div>
            </el-dialog>  
          </div>
          <div class = "report-mes">
            <el-button class = "" style="margin-left: 500px" @click = "topassage(index)">点此查看原文</el-button>
            <div class = "div-title-mes">
            </div>
          </div>
          <div class = "report-m">
            <h5>{{mes.report_title}}</h5>
            <a class="commenttext-origin" @click="Tobookcomment">{{mes.report_reason}}</a>
          </div>  
        </div>
      </div>  
      </div>  
    </div>
  </div>  
</template>

<script>
import qs from "qs";
export default {
  name: "report-reply",
  data() {
    var message = [
      {
        reporterimg: "../assert/user/int.jpg",
        reporterid: "owo",
        reporttitle: "os上机永不取消",
        reportmes: "啊很奇怪，很奇怪啊，咱就是说，os选周四真是诀绝子，一整个大无语住了家人们，放假这么多次，居然一次上机都没被放假弄没，气得我跺脚脚，要玉玉了",
        reportermes:"os下周四考5.2",
        flag: 0,
      },
      {
        reporterimg: "../assert/user/int.jpg",
        reporterid: "owo",
        reporttitle: "os上机永不取消",
        reportmes: "啊很奇怪，很奇怪啊，咱就是说，os选周四真是诀绝子，一整个大无语住了家人们，放假这么多次，居然一次上机都没被放假弄没，气得我跺脚脚，要玉玉了",
        reportermes:"os下周四考5",
        flag: 0,
      },  
    ];
    return {
      message,
      dialogTableVisible: false,
      dialogFormVisible: false,
      noreportFormVisible: false,
      dialogFormVisiblere: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '取消后信息将不被保存',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods:
  {
    Tobookcomment() {
      this.$router.push({ name: "bookcomment" });
    },
    open(index) {
      if(this.form.date2.length < 5) {
        this.$message({
          type: 'info',
          message: '反馈内容至少5字'
        });
        return;
      }
      this.$message({
        type: 'success',
        message: '处理成功'
      });
      this.form.date1 = '';
      this.form.date2 = '取消后信息将不被保存';
      this.dialogFormVisible = false;
      this.message[index].result = 1;
      var special = 0;
      var i;
      for(i = 0;i < this.message.length;i++) {
        if(this.message[i].flag === 0) {
          special = 1;
          break; 
        }
      }
      if(special === 0) {
       this.noreportFormVisible = true; 
      }
      var params = {
        type: 1,
        report_id: this.message[index].reporterid,
      };
      if(this.dialogFormVisible === true) {
        params.type = 1;
      }
      else {
        params.type = 2;
      }
      this.$axios
          .post("/deal_report", qs.stringify(params))
          .then((res) => {
            if (res.data.errno === 0) {
              this.$message({
                message: "处理成功",
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
    reload() {
      this.dialogFormVisible = false;
      this.form.date1 = '';
      this.form.date2 = '取消后信息将不被保存';
    },
    updatereport() {
      var params = {
      };
      this.$axios.get("/getreport").then((res) => {
          console.log(res.data.data);
          var i = 0;
          this.message = [];
          for (i = 0; i < res.data.data.length; i++) {
            this.message.push(res.data.data[i]);
          }
          console.log(this.message);
      }
      ).catch((error) => {
        console.log(error);
      });
    },
    topassage(index) {
      this.$router.push({
        name: "bookdetail",
        query: { id: this.message[index].article_id },
      });
    }
  },
  mounted() {
    this.updatereport();
  },
}
</script>

<style scoped>
.body-all {
  width: 800px;
  position: relative;
  float: left;
}
.noreport {
  font-family:思源雅黑 sans-serif;
  font-size: 20px;
}
.body {
  width: 1000px;
  position: absolute;
}
.body-box {
  width: 800px;
  position: relative;
  float: left;
  left: 100px;
  margin-top: 150px;
}
.vertical {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 35px;
  margin-top: 20px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.vertical-t {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 35px;
  margin-top: 20px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);

}
.title{
  position: relative;
  float: left;
  width: 800px;
  text-align: left;
}
.repoet-mes {
  width: 800px;
  float: left;
  position: relative;
}
.commenttext-origin {
  position: relative;
  top: 5px;
  font-size: 17px;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: black;
  transition: 0.3s ease;
}
.repoet-img {
  position: relative;
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.div-report {
  font-family: 思源雅黑,sans-serif;
  font-size: 20px;
  width: 750px;
  height: 50px;
  margin-top: 10px;
}
.div-title {
  font-family: 思源雅黑,sans-serif;
  font-size: 20px;
  height: 33px;
}
.report-m {
  position: relative;
  float: left;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.repoet-mes {
  position: relative;
  float: left;
}
.div-title-mes {
  position: relative;
  float: left;
  font-size: 18px;
  margin-bottom: 20px;
}
.mes-body {
  position: relative;
  float: left;
  width: 700px;
  margin-bottom: 30px;
}
.bo-re {
  position: relative;
  left: 200px;
}
</style>