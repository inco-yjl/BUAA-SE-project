<template>
  <div class = "body">
    <search></search>
    <div class = "aside-left vertical">
      <div class = "bookpage-hit">
        <div class="bookpage-title">
        <img src="@/assets/group/hotgroup.png" />最受欢迎
      </div>
      <div class="group_div" v-for="group in hotgroup">
        <img :src="group.img" class = "group_div_img" alt="">
        <div class = "group_div_m">
          <span>&nbsp;</span>
          <span class="group_div_m_font_title">{{group.name}}</span>
          <span class = "group_div_m_font_num">({{group.number}})</span>
        </div>
      </div>
      </div>
      
      <div class = "bookpage-hit">
        <div class="bookpage-title">
          <img src="@/assets/group/maxgroup.png" />最多人在
        </div>
        <div class="group_div" v-for="group in maxgroup">
          <img :src="group.img" class = "group_div_img" alt="">
          <div class = "group_div_m">
            <span>&nbsp;</span>
            <span class="group_div_m_font_title">{{group.name}}</span>
            <span class = "group_div_m_font_num">({{group.number}})</span>
          </div>
        </div>
      </div>
      
      <div class = "bookpage-hit">
        <div class="bookpage-title">
          <img src="@/assets/group/hotgroup.png" />热门讨论
        </div>
        <div class="group_div" v-for="group in hotgroup">
          <img :src="group.img" class = "group_div_img" alt="">
          <div class = "group_div_m">
            <span>&nbsp;</span>
            <span class="group_div_m_font_title">{{group.name}}</span>
            <span class = "group_div_m_font_num">({{group.number}})</span>
          </div>
        </div>
      </div>
      
    </div>
    <div class = "vertical aside-right">
      <group-person></group-person>
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
          <span>&nbsp;</span>
        </div>
      </div>
    </div>  
  </div>  
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import search from "@/components/SelectSearch.vue";
import groupPerson from "@/components/GroupPerson";

export default {
  name: "GroupHome",
  data() {
    var hotgroup = [
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
    ];
    var maxgroup = [
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
      {
        name: "修猫",
        id: 11,
        img: " https://i.imgtg.com/2022/05/23/hmaxi.jpg",
        number: 238,
      },
      {
        name: "奇观",
        id: 12,
        img: " https://i.imgtg.com/2022/05/23/hmopX.jpg",
        number: 2123,
      },
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
    ];
    var hopmessage = [
      {
        name: "星空",
        id: 8,
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
      {
        name: "修猫",
        id: 11,
        img: " https://i.imgtg.com/2022/05/23/hmaxi.jpg",
        number: 238,
      },
      {
        name: "奇观",
        id: 12,
        img: " https://i.imgtg.com/2022/05/23/hmopX.jpg",
        number: 2123,
      },
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
    ];
    return {
      hotgroup,
      maxgroup,
    };
  },
  components: {
    VueSlickCarousel,
    search,
    groupPerson,
  },
  methods: {},
  mounted() {
    window.onscroll = function (e) {
      console.log("slide");
      var vertical = document.getElementsByClassName("bookpage-vertical").item(0);
      var pos = vertical.getBoundingClientRect();
      console.log(pos.top);
      if (pos.top < 29) {
        var aside = document.getElementsByClassName("aside").item(0);
        if(aside!=null)
          aside.setAttribute("class", "aside-slide");
      }
      else{
        var aside = document.getElementsByClassName("aside-slide").item(0);
        if(aside!=null)
          aside.setAttribute("class", "aside");
      }
    };
  },
}
</script>

<style scoped>
.title{
  font-weight: bold;
  font-family: "Adobe 宋体 Std L",serif;
  font-size: 30px;
}
.body{
  width: 1600px;
  height: 1000px;
  position: absolute;
  padding-left: 100px;
}
.aside-left{
  float: left;
  position: relative;
  width: 1100px;
}
.bookpage-title img {
  height: 37px;
  vertical-align: -20%;
  margin-right: 5px;
}
.bookpage-hit {
  position: relative;
  float: left;
  width: 1000px;
  margin-top: 30px;
  margin-bottom: 50px;
}
.aside-right {
  position: relative;
  float: left;
  width: 400px;
  left: 10px;
}
.vertical {
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 35px;
  margin-top: 80px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.bookpage-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
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
.group_div_img{
  position: relative;
  float: left;
  top: 20px;
  left: 20px;
  height: 120px;
  width: 80px;
}
.group_div_m {
  position: relative;
  float: left;
  height: 150px;
  width: 180px;
  left: 20px;
  top: 20px;
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