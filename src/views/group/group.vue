<template>
<div id = "group-body">
  <div class="head_title">
    <h1 style="text-align: left;  font-weight: bolder;">我的小组讨论</h1>
  </div>
  
  <div class = "left">
    <div class = "m_div">
      <span class = "title_l font_l blue">这个bug是因为什么呢</span>
      <span class = "res_l font_l">25回应</span>
      <span class = "time_l font_l">今天14：59</span>
      <span class = "group-name_l font_l blue">os学习小组</span>
      <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
    </div>
    <div class = "m_div m_nothead">
      <soan class = "title_l font_l blue">oslab4只得51分可能是因为什么</soan>
      <span class = "res_l font_l">0回应</span>
      <span class = "time_l font_l">今天11：59</span>
      <span class = "group-name_l font_l blue">os学习小组</span>
      <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
    </div>
    <div class = "m_div m_nothead">
      <span class = "title_l font_l blue">绿园的鸭鸭</span>
      <span class = "res_l font_l">122回应</span>
      <span class = "time_l font_l">今天11：58</span>
      <span class = "group-name_l font_l blue">唐博园！</span>
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
      <span class = "title_l font_l blue">oop网课，查询os状态</span>
      <span class = "res_l font_l">352回应</span>
      <span class = "time_l font_l">昨天22：59</span>
      <span class = "group-name_l font_l blue">super2021</span>
      <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
    </div>
    <div class = "m_div m_nothead">
      <span class = "title_l font_l blue">体育网课！？</span>
      <span class = "res_l font_l">18回应</span>
      <span class = "time_l font_l">昨天18：59</span>
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
      <span class = "title_l font_l blue">蹲在新北的小伙子</span>
      <span class = "res_l font_l">103回应</span>
      <span class = "time_l font_l">5月4日</span>
      <span class = "group-name_l font_l blue">观察者网</span>
      <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
    </div>
    <div class = "m_div m_nothead">
      <span class = "title_l font_l blue">平顶山市创建全国法治政府示范市</span>
      <span class = "res_l font_l">1034回应</span>
      <span class = "time_l font_l">4月19日</span>
      <span class = "group-name_l font_l blue">观察者网</span>
      <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
    </div>
    <div class = "m_div m_nothead">
      <span class = "title_l font_l blue">鸭鸭需要送到合一改造</span>
      <span class = "res_l font_l">203回应</span>
      <span class = "time_l font_l">4月18日</span>
      <span class = "group-name_l font_l blue">唐博园</span>
      <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
    </div>
    <div class = "m_div m_nothead">
      <span class = "title_l font_l blue">lab3 2小时 0分！</span>
      <span class = "res_l font_l">534回应</span>
      <span class = "time_l font_l">4月16日</span>
      <span class = "group-name_l font_l blue">os学习小组</span>
      <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
    </div>
  </div>
  <div style="border-left: 3px solid #d3dce6;width: 0;height: 500px; float: left;left: 25px; position:relative;"></div>
  <div class = "right">
    <groupPerson></groupPerson>
    <div class = "groupusually">
      <h2 style="text-align: left" class = "title">常去的小组</h2>
      <div>
        <ul>
          <li>
            <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
              <div class="normal_active"> <span class="massage">能看看你的os吗</span> </div>
              <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/1.jpg"> </div>
            </div>
          </li>
          <li>
            <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
              <div class="normal_active"> <span class="massage">原神</span> </div>
              <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/2.jpg"> </div>
            </div>
          </li>
          <li>
            <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
              <div class="normal_active"> <span class="massage">龙斗士</span> </div>
              <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/3.jpg"> </div>
            </div>
          </li>
          <li>
            <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
              <div class="normal_active"> <span class="massage">双人成行</span> </div>
              <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/4.jpg"> </div>
            </div>
          </li>
          <li>
            <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
              <div class="normal_active"> <span class="massage">想养花花草草</span> </div>
              <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/5.jpg"> </div>
            </div>
          </li>
          <li>
            <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
              <div class="normal_active"> <span class="massage">最伟大的人</span> </div>
              <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/6.jpg"></div>
            </div>
          </li>
          <li>
            <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
              <div class="normal_active"> <span class="massage">希望得到认可</span> </div>
              <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/1.jpg"> </div>
            </div>
          </li>
          <li>
            <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
              <div class="normal_active"> <span class="massage">你也讨厌上课吗</span> </div>
              <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/2.jpg"></div>
            </div>
          </li>
          <li>
            <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
              <div class="normal_active"> <span class="massage">哈哈大笑</span> </div>
              <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/3.jpg"> </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>  
</div>
</template>

<script>
import groupPerson from "@/components/GroupPerson";
export default {
  name: "group",
  components: {
    groupPerson,
  }
  
}
</script>

<style>
.title{
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
  left: 100px;
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
  font-size: 25px;
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
}
.m_nothead{
  position: relative;
  float: left;
}
</style>