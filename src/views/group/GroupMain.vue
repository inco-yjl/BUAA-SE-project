<template>
  <div id = "body">
    <div class="head_title">
      <h1 style="text-align: left;  font-weight: bolder;">我的小组</h1>
    </div>

    <div class = "left">
      <div class = title_Second>
      <a href = "./main">  
        <span class = "title_second_head" style="position:relative; float: left; width: 150px; text-align: left">小组主页</span>
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
        <span class = "title_second_head" style="color: #444444; position:relative; float: left; width: 100px; text-align: left">推荐</span>
      </a>
      </div>
      <div style="border-top: 3px solid #d3dce6;width: 1000px ;height: 0; float: left;left: 0px; position:relative;"></div>
      <div class="group_div">
        <img src="../../assets/img/1.jpg" class = "group_div_img">
        <div class = "group_div_m">
          <span>&nbsp;</span>
          <span class="group_div_m_font_title">os学习小组</span>
          <span class = "group_div_m_font_num">(504)</span>
        </div>  
      </div>
      <div class="group_div">
        <img src="../../assets/img/3.jpg" class = "group_div_img">
        <div class = "group_div_m">
          <span>&nbsp;</span>
          <span class="group_div_m_font_title">se开摆天团</span>
          <span class = "group_div_m_font_num">(5)</span>
        </div>
      </div>
      <div class="group_div">
        <img src="../../assets/img/2.jpg" class = "group_div_img">
        <div class = "group_div_m">
          <span>&nbsp;</span>
          <span class="group_div_m_font_title">来点胡桃</span>
          <span class = "group_div_m_font_num">(15)</span>
        </div>
      </div>
      <div class="group_div">
        <img src="../../assets/img/4.jpg" class = "group_div_img">
        <div class = "group_div_m">
          <span>&nbsp;</span>
          <span class="group_div_m_font_title">睡觉摸鱼之城</span>
          <span class = "group_div_m_font_num">(504)</span>
        </div>
      </div>
      <div class="group_div">
        <img src="../../assets/img/6.jpg" class = "group_div_img">
        <div class = "group_div_m">
          <span>&nbsp;</span>
          <span class="group_div_m_font_title">时代落幕</span>
          <span class = "group_div_m_font_num">(12)</span>
        </div>
      </div>
      <div class="group_div">
        <img src="../../assets/img/3.jpg" class = "group_div_img">
        <div class = "group_div_m">
          <span>&nbsp;</span>
          <span class="group_div_m_font_title">欧嘉斯汀</span>
          <span class = "group_div_m_font_num">(156)</span>
        </div>
      </div>
      <div class="group_div">
        <img src="../../assets/img/5.jpg" class = "group_div_img">
        <div class = "group_div_m">
          <span>&nbsp;</span>
          <span class="group_div_m_font_title">我是蒂法的狗</span>
          <span class = "group_div_m_font_num">(456)</span>
        </div>
      </div>
    </div>
    <div style="border-left: 3px solid #d3dce6;width: 0;height:500px; float: left;left: 25px; position:relative;"></div>
    <div class = "right">
      <groupPerson></groupPerson>
      <div class = "group_my">
        <a href="../group">
        <h2 style="text-align: left" class = "title">创建小组+</h2>
        </a>
        <div style="border-top: 3px solid #d3dce6;width: 400px ;height: 0; float: left;left: 25px; position:relative; top: 5px"></div>
        <h2 style="text-align: left; position: relative; top: 20px" class = "title">我创建的小组</h2>
      </div>
      <div class = "group_myself">
        <ul>
        <li>
          <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
            <div class="normal_active"> <span class="massage">能看看你的os吗</span> </div>
            <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/1.jpg"> </div>
          </div>
        </li>
        </ul>
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
  }

}
</script>

<style>
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
.group_div_img{
  position: relative;
  float: left;
  top: 20px;
  left: 20px;
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
  height: 100%;
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