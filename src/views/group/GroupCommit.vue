<template>
  <div id = "body">
    <div class="head_title">
      <h1 style="text-align: left;  font-weight: bolder;">我的小组</h1>
    </div>

    <div class = "left">
      <div class = title_Second>
        <a href = "./main">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 200px; text-align: left">创建的小组</span>
        </a>
        <a href="./addgroup">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 200px; text-align: left">加入的小组</span>
        </a>
        <a href="./commit">
          <span class = "title_second_head" style=" position:relative; float: left; width: 200px; text-align: left">发起的讨论</span>
        </a>
        <a href="./reply">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 200px; text-align: left">收到的回复</span>
        </a>
      </div>
      <div style="border-top: 3px solid #d3dce6;width: 1000px ;height: 0; float: left;left: 0px; position:relative;"></div>
      <div class = "vertical" style="position:relative; float: left; width: 1050px">
        <div class = "m_div m_nothead ver" v-for="mes in message" :key = "mes.id">
          <span class = "title_l font_l" style="color: #444444;">{{mes.name}}</span>
          <span class = "res_l font_l">{{mes.replynumber}}回复</span>
          <span class = "time_l font_l">{{mes.time}}</span>
          <span class = "group-name_l font_l" style="color: #444444;">{{mes.groupname}}</span>
          <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
        </div>
        <report :papapa = 5></report>
        <span>&nbsp;</span>
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
            <span class="group_div_m_font_title" >{{mes.name}}</span>
            <span class = "group_div_m_font_num">({{mes.number}})</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import groupPerson from "@/components/GroupReturn";
import groupUsuallyCome from "@/components/GroupUsuallyCome";
import Report from "@/components/report";
export default {
  name: "groupcommit",
  components: {
    Report,
    groupPerson,
    groupUsuallyCome,
  },
  data() {
    var message = [
      {
        name: "lab3 2小时 0分！",
        id: 2,
        replynumber: 1,
        time: "2022-4-13",
        groupname: "se学习小组",
      },
      {
        name: "软工遇到no match",
        id: 3,
        replynumber: 534,
        time: "2022-4-12",
        groupname: "os学习小组",
      },
      {
        name: "oslab4只得51分可能是因为什么",
        id: 4,
        replynumber: 5,
        time: "2022-4-10",
        groupname: "os学习小组",
      },
    ];
    var grouptime = [
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


    ];
    return {
      message,
      grouptime,
    };
  },

}
</script>

<style>
.title{
  font-weight: bold;
  font-family: "Adobe 宋体 Std L",serif;
  font-size: 30px;
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
.group_div_m{
  position: relative;
  float: left;
  height: 150px;
  width: 180px;
  left: 20px;
  top: 20px;
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
.group_div_img_div{
  position: relative;
  float: left;
  top: 20px;
  height: 120px;
  width: 80px;
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
  font-size: 24px;
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
  top: 10px
}
.m_nothead{
  position: relative;
  float: left;
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