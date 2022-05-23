<template>
  <div id = "body">
    <div class="head_title">
      <h1 style="text-align: left;  font-weight: bolder;">我的小组</h1>
    </div>

    <div class = "left">
      <div class = "title_Second">
        <a href = "./main">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 200px; text-align: left">创建的小组</span>
        </a>
        <a href="./addgroup">
          <span class = "title_second_head" style="position:relative; float: left; width: 200px; text-align: left">加入的小组</span>
        </a>
        <a href="./commit">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 200px; text-align: left">发起的讨论</span>
        </a>
        <a href="./reply">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 200px; text-align: left">收到的回复</span>
        </a>
      </div>
      <div style="border-top: 3px solid #d3dce6;width: 1000px ;height: 0; float: left;left: 0px; position:relative;"></div>
      
      <div class = "vertical" style="position: relative; float: left;">
        <div class="group_div" v-for="mes in message" :key = "mes.id">
        <img :src="mes.img" class = "group_div_img" alt="">
        <div class = "group_div_m">
          <span>&nbsp;</span>
          <span class="group_div_m_font_title">{{mes.name}}</span>
          <span class = "group_div_m_font_num">({{mes.number}})</span>
        </div>
      </div>
      </div>  
      
    </div>

    <div class = "right vertical">
      <groupPerson></groupPerson>
      <div class = "group_my">
        <el-button>
        <a href="../group" style="  text-decoration: none;">
          <span style="color: #444444; text-align: left" class = "aside-font">创建小组</span>
        </a>
        </el-button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <el-button>
        <a href="../group" style=" text-decoration: none;">
          <span style="color: #444444; text-align: right" class = "aside-font">解散小组</span>
        </a>
        </el-button>  
        <h5>&nbsp;</h5>
        <h5 class = "title_second_head">小组时间</h5>
        <div class="group_div_aside" v-for="mes in grouptime" :key = "mes.id">
            <img :src="mes.img" class = "group_div_img_div" alt="">
            <div class = "group_div_m">
              <span>&nbsp;</span>
              <span class="group_div_m_font_title">{{mes.name}}</span>
              <span class = "group_div_m_font_num">({{mes.number}})</span>
            </div>
          </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import groupPerson from "@/components/GroupReturn";
export default {
  name: "groupmain",
  components: {
    groupPerson,
  },
  data() {
    var message = [
      {
        name: "原神",
        id: 1,
        img: "https://i.imgtg.com/2022/05/23/hgcSD.jpg",
        number: 1440,
      },
      {
        name: "龙族",
        id: 2,
        img: "https://i.imgtg.com/2022/05/23/hgdwF.jpg",
        number: 1337,
      },
      {
        name: "洛圣都",
        id: 3,
        img: "https://i.imgtg.com/2022/05/23/hgVn6.jpg",
        number: 204,
      },
      {
        name: "山水之间",
        id: 4,
        img: "https://i.imgtg.com/2022/05/23/hgYDP.jpg ",
        number: 785,
      },
      {
        name: "高考",
        id: 5,
        img: "https://i.imgtg.com/2022/05/23/hgf8b.jpg",
        number: 7556,
      },
      {
        name: "于此诀别世界",
        id: 6,
        img: "https://i.imgtg.com/2022/05/23/hg9kl.jpg",
        number: 451,
      },
      {
        name: "八月",
        id: 7,
        img: "https://i.imgtg.com/2022/05/23/hg9kl.jpg",
        number: 41,
      },
      {
        name: "星空",
        id: 8,
        img: "https://i.imgtg.com/2022/05/23/hgC1N.jpg",
        number: 451,
      },
      {
        name: "茉莉花",
        id: 9,
        img: " https://i.imgtg.com/2022/05/23/hgwDC.jpg",
        number: 456,
      },
      {
        name: "书法",
        id: 10,
        img: " https://i.imgtg.com/2022/05/23/hmM8L.jpg",
        number: 982,
      },
    ];
    var grouptime = [
      {
        name: "樱岛",
        id: 13,
        img: "https://i.imgtg.com/2022/05/23/hmqft.jpg",
        number: 123,
      },
      {
        name: "喜羊羊与灰太狼",
        id: 14,
        img: "https://i.imgtg.com/2022/05/23/hmBBx.jpg",
        number: 10985,
      },
      {
        name: "我方不优先使用",
        id: 16,
        img: "https://i.imgtg.com/2022/05/23/hmU0p.jpg",
        number: 985,
      },

    ];
    return {
      message,
      grouptime,
    };
  }
}
</script>

<style>
.aside-font{
  font-size: 20px;
}
.vertical {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 35px;
  margin-top: 40px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
  padding-bottom: 20px;
}
.vertical-title {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 35px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.group_div{
  position: relative;
  float: left;
  width: 300px;
  top: 10px;
  border: 1px solid #d3dce6;
  height: 160px;
  margin-left: 20px;
  margin-top: 20px;

}
.group_div_aside{
  position: relative;
  float: left;
  width: 300px;
  top: -10px;
  height: 160px;
  margin-left: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
}
.group_div_img{
  position: relative;
  float: left;
  top: 20px;
  left: 20px;
  height: 120px;
  width: 80px;
}
.group_div_img_div{
  position: relative;
  float: left;
  top: 20px;
  height: 120px;
  width: 80px;
}
.group_div_m{
  position: relative;
  float: left;
  height: 150px;
  width: 180px;
  left: 20px;
  top: 20px;
}
.title{
  font-weight: bold;
  font-family: "Adobe 宋体 Std L",serif;
  font-size: 30px;
}
#body{
  position: absolute;
  top: 150px;
  height: 700px;
  width: 1690px;
  left: 100px;
}
.head_title{
  width: 1690px;
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
  left: 50px;
}
.group_my{
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
  font-size: 25px;
  font-family: "Adobe 宋体 Std L",serif;
  font-weight: bold;
}
.hidden_img{
  height: 300px;
  width: 200px;
}
.group_myself{
  position: relative;
  float: left;
  top: 55px;
}
.title_second_head{
  font-size: 26px;
  font-family: 华文细黑,sans-serif;
}
.title_Second{
  position: relative;
  float: left;
  height: 50px;
}
.group_div_m_font_title{
  font-size: 23px;
  font-family: "宋体",sans-serif;
  width: 100%;
  position: relative;
  float: left;
  height: 30px;
  left: 10px;
  line-height: 20px;
}
.group_div_m_font_num{
  font-size: 20px;
  font-family: "宋体",sans-serif;
  width: 100%;
  position: relative;
  float: left;
  height: 30px;
  left: 10px;
  color: #d3dce6;
}
</style>