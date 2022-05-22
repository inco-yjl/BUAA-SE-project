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
          <span class = "title_second_head" style=" position:relative; float: left; width: 100px; text-align: left">回复</span>
        </a>
        <a href="./recommend">
          <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 100px; text-align: left">推荐</span>
        </a>
      </div>
      <div style="border-top: 3px solid #d3dce6;width: 1000px ;height: 0; float: left;left: 0px; position:relative;"></div>
      <div class = "m_div m_nothead">
        <span class = "title_l font_l blue">oop网课，查询os状态</span>
        <span class = "res_l font_l">352回应</span>
        <span class = "time_l font_l">昨天22：59</span>
        <span class = "group-name_l font_l blue">super2021</span>
        <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
      </div>
      <div class = "m_div m_nothead">
        <span class = "title_l font_l blue">全员核酸！</span>
        <span class = "res_l font_l">155回应</span>
        <span class = "time_l font_l">前天8：59</span>
        <span class = "group-name_l font_l blue">校医院</span>
        <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
      </div>
      <div class = "m_div m_nothead">
        <span class = "title_l font_l blue">软工遇到no match</span>
        <span class = "res_l font_l">1回应</span>
        <span class = "time_l font_l">今天8：24</span>
        <span class = "group-name_l font_l blue">se学习小组</span>
        <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
      </div>
      <div class = "m_div m_nothead">
        <span class = "title_l font_l blue">平顶山市创建全国法治政府示范市</span>
        <span class = "res_l font_l">1034回应</span>
        <span class = "time_l font_l">4月19日</span>
        <span class = "group-name_l font_l blue">观察者网</span>
        <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
      </div>
    </div>
    <div style="border-left: 3px solid #d3dce6;width: 0;height:500px; float: left;left: 25px; position:relative;"></div>
    <div class = "right">
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
    groupUsuallyCome,
  }

}
</script>

<style>
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