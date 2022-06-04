<template>
<div id = "group-body">
  <div class="head_title">
    <h1 style="text-align: left;  font-weight: bolder;">我的小组讨论</h1>
  </div>
  <div class = "left vertical" style="top: 0px;">
    <div  style="position:relative; float: left; width: 1450px; margin-top: 30px;">
      <div class = "m_div m_nothead " v-for="mes in message[nowpage-1]" :key = "mes.id">
        <span class = "title_l font_l" style="color: #444444;">{{mes.name}}</span>
        <span class = "res_l font_l">{{mes.replynumber}}回复</span>
        <span class = "time_l font_l">{{mes.time}}</span>
        <span class = "group-name_l font_l" style="color: #444444;">{{mes.groupname}}</span>
        <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
        <report></report>
      </div>
      <span>&nbsp;</span>
    </div>
    <div class="page-nav">
      <el-pagination
          id = page
          @current-change="tochange"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="maxpage*10"
      >
      </el-pagination>
    </div>  

  </div>
  
  <div class = "right vertical">
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
import report from "@/components/report";
export default {
  name: "group",
  components: {
    groupPerson,
    report,
  },
  data() {
    var message = [
        [
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
      {
        name: "oop网课，查询os状态",
        id: 5,
        replynumber: 12,
        time: "2022-4-02",
        groupname: "面向奶奶",
      },
      {
        name: "平顶山市创建全国法治政府示范市",
        id: 6,
        replynumber: 1042,
        time: "2022-4-02",
        groupname: "平顶上山",
      },
      {
        name: "全员核酸！",
        id: 7,
        replynumber: 102,
        time: "2022-4-01",
        groupname: "校医院",
      },
      {
        name: "蹲在新北的小虎子",
        id: 9,
        replynumber: 52,
        time: "2022-2-12",
        groupname: "观察者网",
      },
      {
        name: "绿园的鸭鸭",
        id: 10,
        replynumber: 15552,
        time: "2022-2-12",
        groupname: "唐博湖",
      },
      {
        name: "软工大作业",
        id: 9,
        replynumber: 256,
        time: "2022-2-12",
        groupname: "se小组",
      },],
      [
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
        {
          name: "oop网课，查询os状态",
          id: 5,
          replynumber: 12,
          time: "2022-4-02",
          groupname: "面向奶奶",
        },
        {
          name: "平顶山市创建全国法治政府示范市",
          id: 6,
          replynumber: 1042,
          time: "2022-4-02",
          groupname: "平顶上山",
        },
        {
          name: "全员核酸！",
          id: 7,
          replynumber: 102,
          time: "2022-4-01",
          groupname: "校医院",
        }, 
      ],
    ];
    
    var nowpage = 1;
    var maxpage = 2;
    return{
      message,
      maxpage,
      nowpage,
    }
  },
  methods: {
    first() {
      this.nowpage = 1;
      document.getElementById("1")
              .setAttribute("class","blue");
    },
    last() {
      this.nowpage = 2;
      document.getElementById("1")
          .setAttribute("class","blue");
    },
    next() {
      if(nowpage != maxpage)
      this.nowpage++;
      document.getElementById("{{this.nowpage}}")
          .setAttribute("class","blue");
    },
    before() {
      if(this.nowpage != 1)
      this.nowpage--;
      document.getElementById("{{this.nowpage}}")
          .setAttribute("class","blue");
    },
    topage(e) {
      this.nowpage = e;
      document.getElementById(e)
          .setAttribute("class","blue");
    },
    tochange(Page) {
      this.nowpage = Page;
      document.getElementById(Page)
          .setAttribute("class","blue");
    }
  }
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
</style>