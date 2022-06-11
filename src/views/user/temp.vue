<template>
  <div id="personpage">
    <div class="body">
      <el-dialog title="上传头像" :visible.sync="uploadIcon" width="220px">
        <div id="avator-box">
          <input type="file" id="saveimage" @change="handleChange">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </div>
        <span slot="footer" class="dialog-footer">
          <button @click="uploadUserIcon()">确定</button>
          >
        </span>
      </el-dialog>
      <div class="infopanel">
        <div class="icon">
          <img :style="styleOfIcon" :src="userIcon"/>
          <div class="upload-button">
            <el-button type="text" @click="uploadIcon = true"
              >上传头像</el-button
            >
          </div>
        </div>
        <div class="username">{{userName}}</div>
      </div>
      <div class="collection">
        <div class="book-collection collection-1">
          <div class="title">
            <img src="@/assets/guide/book_collection.png" />已收藏书籍
          </div>
          <div
            class="collection-list"
            v-for="book in collections"
            :key="book.id"
          >
            <a class="collection-item">
              <img class="collection-img" :src="book.image" />
              <div class="collection-info">
                《{{ book.name }}》
                <el-rate
                  v-model="book.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  disabled-void-color="ffffff"
                >
                </el-rate>
                {{ book.author }}
              </div>
            </a>
          </div>
          <div class="page-number">
            <el-pagination
              @next-click="changeBook()"
              :page-size="9"
              layout="prev, pager, next, jumper"
              :total="30"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="collection">
        <div class="bookpage-title" >
          <div class="title">
            <img src="@/assets/guide/book_collection.png" />我加入的小组
          </div>
        </div>
        <div class="collection-list" v-for="group in addgroup" :key="group.id">
          
          <a class="collection-item" @click="usetogroupdetail(group.id)">
            <img class="collection-img" :src="group.img" />
            <div class="collection-info">
              {{ group.name }}
              <el-rate
                  v-model="group.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  disabled-void-color="ffffff"
              >
              </el-rate>
              {{ group.member }}人参与
            </div>
          </a>
        </div>
      </div>
      <div class="collection">
        <div class="videopage-title">
          <div class="title">
            <img id="collection-guide" src="@/assets/guide/movie_collection.png" />我的收藏
          </div>
        </div>
        <div
            class="collection-list"
            v-for="(video, index) in collectionst"
            :key="video.id"
        >
          <a class="collection-item" @click="usetocolloction(index)">
            <img class="collection-img" :src="video.image" />
            <div class="collection-info">
              《{{ video.name }}》({{ video.year }})
              <el-rate
                  v-model="video.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  disabled-void-color="ffffff"
              >
              </el-rate>
              {{ video.info }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs';
export default {
  data() {
    var book = {
      id: 1,
      name: "焦虑的人",
      star: 5.0,
      author: "xxxxx",
      image: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
    };
    var addgroup = [];
    var collections = [];
    var collectionst = [];
    var i = 0;
    for (i = 0; i < 9; i++) collections.push(book);
    return {
      addgroup,
      collections,
      collectionst,
      imageUrl: "",
      tempUrl: "",
      userIcon:"https://i.imgtg.com/2022/05/08/zDzsM.png",
      uploadIcon: false,
      styleOfIcon:"height:110px;",
      userName:''
    }
  },
  mounted(){
    this.updateUser();
  },
  methods: {
    getaddgroup() {
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
          .post("/group/mygroup", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              console.log("13215645646");
              this.addgroup = [];
              var i = 0;
              for (i = 0; i < 6 && i < res.data.data.length; i++) {
                this.addgroup.push(res.data.data[i]);
              }
            }
            else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
      updateUser(){
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
        .post("/user/detail", qs.stringify(params))
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data);
            var user = res.data.data;
            var len=this.$axios.defaults.baseURL.length;
            this.userName = user.name;
            if(user.image !== "")
              this.userIcon =this.$axios.defaults.baseURL.substring(0,len-4)+user.image
            else 
            this.userIcon = "https://i.imgtg.com/2022/05/08/zDzsM.png";
            console.log(this.userIcon)
            var img = new Image();
            img.src = this.userIcon;
             if(img.width>img.height)
              this.styleOfIcon = "height:110px;position: relative; top:0px; left:-"+(img.width-img.height)/img.height*55+"px";
            else  
              this.styleOfIcon = "width:110px;position: relative;  left:0px;top:-"+(img.height-img.width)/img.width*55+"px";
            user.admin = parseInt(user.admin);
            switch(user.admin){
              case 1:
                this.isAdmin=true;
                break;
              default:
                this.isAdmin=false;
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
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleChange() {
      var file = document.getElementById('saveimage').files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    uploadUserIcon() {
      console.log('update');
      var params = new FormData();
      var img = document.getElementById('saveimage').files[0];
      params.append("photo", img);
      params.append('name',img.name);
      params.append("resource_id", this.$store.getters.getUser.user.id);
      params.append("resource_type", 1);
      this.$axios
        .post("/photo/upload_photo", params)
        .then((res) => {
          if (res.data.errno === 0) {
            console.log(res.data);
            this.$message({
              message: res.data.msg,
              type: "success",
            });
            
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
        this.uploadIcon = false;
        this.imageUrl = null;
    },
    async updateCollection() {
      if(!this.$store.getters.getUser || this.$store.getters.getUser.user.id===-1) return;
      var params = {
        user_id: this.$store.getters.getUser.user.id,
      };
      this.$axios
          .post("/book/collection", qs.stringify(params))
          .then((res) => {
            console.log(res);
            if (res.data.errno === 0) {
              this.collections = [];
              var i = 0;
              for (i = 0; i < 3 && i < res.data.data.length; i++) {
                res.data.data[i].star = parseFloat(res.data.data[i].star);
                this.collections.push(res.data.data[i]);
                if(this.collections[i].author.length>11)
                  this.collections[i].author = this.collections[i].author.substring(0,10)+'…'
              }
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });

      this.collectionst = [];
      this.$axios
          .post("/tele/collection", qs.stringify(params))
          .then((res) => {
            console.log("查询到已收藏的电视剧");
            if (res.data.errno === 0) {
              var i = 0;
              if (res.data.data.length !== 0)
                for (i = 0; i < 1 && i < res.data.data.length; i++) {
                  this.collectionst.push(res.data.data[i]);
                }
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });

      this.$axios
          .post("/movie/collection", qs.stringify(params))
          .then((res) => {
            console.log("查询到已收藏的电影");
            if (res.data.errno === 0) {
              var i = 0;
              if (res.data.data.length !== 0)
                for (i = 0; i < 2 && i < res.data.data.length; i++) {
                  this.collectionst.push(res.data.data[i]);
                }
            } else {
              this.$message.error("查询失败");
            }
          })
          .catch((error) => {
            console.log(error);
          });
    },
    usetocolloction(index) {
      if (this.collections[index].year != null) {
        this.$router.push({
          name: "teledetail",
          query: { id: this.collections[index].id },
        });
      } else {
        this.$router.push({
          name: "moviedetail",
          query: { id: this.collections[index].id },
        });
      }
    },
  },
  mounted() {
    this.updateCollection();
    this.getaddgroup();
  },
};
</script>

<style scoped>
.collection-img {
  width: 150px;
  height: 150px;
}
.videopage-title {
  width: 300px;
}
.bookpage-title{
  width: 300px;
  height: 100px;
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
  padding-bottom: 20px;
}
.page-nav{
  height: 60px;
  width:100%;
  line-height: 60px;
  text-align: center;
  overflow: hidden;
}
.page-nav>ul{
  overflow: hidden;
  margin: 0 30%;
  width:80%;
}
.page-nav>ul>li{
  float: left;
  list-style-type: none;
  margin-right:20px;
}


.title{
  width: 600px;
  font-weight: bold;
  font-family: "Adobe 宋体 Std L",serif;
  font-size: 30px;
}
#group-body{
  position: absolute;
  top: 150px;
  height: 700px;
  width: 1590px;
  left: 100px;
}
.head_title{
  position: relative;
  width: 1590px;
  height: 70px;
}
.left{
  float: left;
  position: relative;
  width: 1050px;
  height: 100%;
  font-style: initial;
  top: 30px;
}
.right{
  float: left;
  position: relative;
  width: 400px;
  height: 100%;
  left: 50px;
}
.groupusually{
  float: left;
  position: relative;
  top: 30px;
  width: 100%;
}
.normal_active{
  height: 40px;
  overflow: hidden;
  transition: 0.5s;
}
.heigh_active {
  height: 300px;
  overflow: hidden;
  transition: 0.5s;
}
.heigh{
  height: 300px;
  overflow: hidden;
  transition: 0.5s;
}
.normal {
  height: 40px;
  overflow: hidden;
  transition: 0.5s;
}
.massage{
  font-size: 20px;
  font-family: "Adobe 宋体 Std L",serif;
  font-weight: bold;
}
.hidden_img{
  height: 300px;
  width: 200px;
}
.title_l{
  width: 525px;
  position: relative;
  float: left;
}
.group-name_l{
  width: 150px;
  position: relative;
  float: left;
}
.res_l{
  width: 125px;
  position: relative;
  float: left;
}
.time_l{
  width: 200px;
  position: relative;
  float: left;
}
.font_l{
  font-size: 20px;
  font-family: "Adobe 宋体 Std L",serif;
  font-weight: bold;
}
.blue{
  color: #2C8DF4;
}
.m_div{
  float: left;
  position: relative;
  height: 50px;
}
.m_nothead{
  position: relative;
  float: left;
}
#personpage {
  width: 1600px;
  padding-left: 100px;
}
.body {
  width: 1580px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
.infopanel {
  margin-top: 100px;
  margin-left: 100px;
  width: 1200px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
  display: flex;
}
.icon img{
  position: relative;
  left:-40px;
}
.icon {
  width: 110px;
  height: 110px;
  overflow: hidden;
  border-style: solid;
  border-color: rgb(244, 244, 244);
  border-radius: 120px;
}
.upload-button {
  position: absolute;
  left:322px;
  top:255px;
  font-size: 17px;
}
.upload-button button {
  color: black;
  border: none;
  outline: none;
}
.upload-button button:hover {
  color: rgb(0, 166, 255);
}
.upload-button button:active {
  text-decoration: none;
  border: none;
}
.username {
  font-size: 30px;
  position: absolute;
  left: 420px;
  top: 170px;
}
.collection {
  margin-top: 20px;
  margin-left: 100px;
  width: 1200px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
  display: flex;
}
.collection-1 {
  display: flex;
  flex-wrap: wrap;
}
.title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
  width: 1200px;
}
.title img {
  height: 37px;
  vertical-align: -20%;
  margin-right: 5px;
}
.collection a {
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: #dfdede55;
  margin-top: 10px;
  width: 300px;
}
.collection-list a:hover {
  background-color: #91919155;
}
.collection .title {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection-img {
  width: 85px;
  margin-right: 20px;
}
.collection-item {
  display: flex;
}
.collection-info {
  margin-top: 20px;
  font-size: 16px;
  line-height: 30px;
  font-family: Source Han Sans CN Normal;
}
.page-number {
  margin-left: 300px;
}
.avator-box {
  border-style: dashed;
  border-width: 1px;
  border-color: black;
  border-radius: 6px;
  width: 178px;
  height: 178px;
}
.avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
