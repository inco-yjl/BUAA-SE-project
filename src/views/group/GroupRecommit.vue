<template>
  <div id = "body">
    <div class="head_title">
      <h1 style="text-align: left;  font-weight: bolder;">我的小组</h1>
    </div>

    <div class = "left">
      <div class = title_Second>
        <a href = "./main">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 150px; text-align: left">小组主页</span>
        </a>
        <a href="./addgroup">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 200px; text-align: left">加入的小组</span>
        </a>
        <a href="./commit">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 100px; text-align: left">发起</span>
        </a>
        <a href="./reply">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 100px; text-align: left">回复</span>
        </a>
        <a href="./recommend">
          <span class = "title_second_head" style="position:relative; float: left; width: 100px; text-align: left">推荐</span>
        </a>
      </div>
      <div style="border-top: 3px solid #d3dce6;width: 1000px ;height: 0; float: left;left: 0px; position:relative;"></div>
      <div class = "vertical" style="position:relative; float: left; width: 1050px">
      <div class = "m_div m_nothead ver" v-for="mes in message" :key = "mes.id">
        <span class = "title_l font_l blue">{{mes.name}}</span>
        <span class = "res_l font_l">{{mes.replynumber}}回复</span>
        <span class = "time_l font_l">{{mes.time}}</span>
        <span class = "group-name_l font_l blue">{{mes.groupname}}</span>
        <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
      </div>
        <span>&nbsp;</span>
      </div>  
    </div>
    <div class = "right vertical">
      <groupPerson></groupPerson>
      <div class = "group_my">
        <a href="../group">
          <h2 style="text-align: left" class = "title">创建话题+</h2>
        </a>
      </div>
      <group-usually-come></group-usually-come>
    </div>
  </div>
</template>

<script>
import groupPerson from "@/components/GroupReturn";
import groupUsuallyCome from "@/components/GroupUsuallyCome";
export default {
  name: "groupcommit",
  components: {
    groupPerson,
    groupUsuallyCome
  },
  data() {
    var message = [
      {
        name: "鸭鸭需要送到合一改造",
        id: 1,
        replynumber: 451,
        time: "2022-4-18",
        groupname: "唐博园",
      },
      {
        name: "lab3 2小时 0分！",
        id: 2,
        replynumber: 534,
        time: "2022-4-12",
        groupname: "os学习小组",
      },
    ];
    return {
      message,
    };
  },
}
</script>

<style>
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
  height: 100%;
  left: 50px;
}
.group_my{
  float: left;
  position: relative;
  top: 30px;
  width: 100%;
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
</style>