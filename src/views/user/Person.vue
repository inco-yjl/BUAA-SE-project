<style xmlns="http://www.w3.org/1999/html" xmlns="">
.个人主页{
  width: 100%;
  height: 1000px;
}
.round_icon{
  width: 34px;
  height: 34px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.head-img{
  float: left;
  height: 100px;
  width: 100px;
  position: relative;
  left: 100px;
}

.id-second{
  float: left;
  width: 60%;
  font-size: 20px;
  margin-bottom: 80px;
  bottom: 10px;
}
.body-message{
  width: 1800px;
  height: 1000px;
  position: relative;
  left: 100px;
  right: 100px;
}

.left{
  float: left;
  position: relative;
  height: 1000px;
  width: 300px;
}
.right{
  float: right;
  position: relative;
  width: 300px;
  right: 100px;
}
.midden{
  position: relative;
  width: 1000px;
  float: left;
  margin-left: 30px;
}
.massage{
  height: 30px;
  text-align: left;
  font-family: massage,serif;
  margin-top:6px;
  display:block;
  font-size:25px;
  margin-left: 10px;
}
.mid{
  position: relative;
  float: left;
  align-content: center;
  width: 1200px;
}
.midrecent{
  position: relative;
  float: left;
  margin-left: 20px;
}
.mid_message{
  float: left;
  position: relative;
  text-align: left;
  text-indent:2em;
  margin-top: 50px;
  width: 1000px;
}
.mid_message_font{
  display:table-cell;
  position: relative;
  height:100px;
  font-size: 18px;
  vertical-align:middle;
  text-align:left;
  float: left;
  left: 70px;
  margin-top: 20px;
  width: 600px;
}
.head-second{
  height: 240px;
  width: 1700px;
  overflow: hidden;
  position: relative;
  margin-top: 5px;
}

.title{
  height: 30px;
  margin-top: 50px;
  font-size:25px;
  text-align: left;
  margin-left: 10px;
}

.b_radius{
  border-radius: 3px
}

@font-face {
  font-family: 'massage_font';
  src: url('../../assets/fonts/思源黑体CN-Medium.otf');
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
.hidden_img{
  height: 200px;
  overflow: hidden;
  transition: 0.5s;
  width: 200px;
  margin-top: 10px;
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
.recent{
  float: left;
  position: relative;
  width: 400px;
  
}


.showImg{
  height: 240px;
  width: 200px;
  position: relative;
  float: left;
  left: 50px;
}
.mylove {
  position: relative;
  float: left;
  margin-top: 40px;
}
.text1{
  position:absolute;
  z-index:1;
  left:42%;
  top:42px;
  font-family: massage,serif;
  font-size: 20px;
}
</style>


<template>

  <div class="个人主页">
    <search></search>
    <div class = "head-second">
      <img class = "head-img round_icon" src = "@/assets/user/int.jpg">
      <div class = "id-second">
        <span style="float: right;width: 80%;margin-top:10px; display:block; text-align: left;font-size: 25px">TheSleepGod</span>
        <span style="float: right;width: 80%;margin-top:10px; display:block; font-size: 18px;text-align: left">睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉睡觉</span>
      </div>
      <el-button plain style = "float: right; position: relative; right: 100px">编辑资料</el-button>  <!--未绑定跳转-->
    </div>
    <div class = "body-message">
      <div class = "left b_radius">
        <div style="margin-top: 40px;">
            <span class="title">
              <img class="hot" src="@/assets/title/groups.png" />我的小组
            </span>
        </div>
        <div>
          <ul>
            <li>
          <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
            <div class="normal_active"> <span class="massage">fgo</span> </div>
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
            <div class="normal_active"> <span class="massage">lol</span> </div>
            <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/5.jpg"> </div>
          </div>
            </li>
            <li>  
          <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
            <div class="normal_active"> <span class="massage">NoManSky</span> </div>
            <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/6.jpg"></div>
          </div>
            </li>
            <li>
              <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
                <div class="normal_active"> <span class="massage">Gta</span> </div>
                <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/1.jpg"> </div>
              </div>
            </li>
            <li>
              <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
                <div class="normal_active"> <span class="massage">csgo</span> </div>
                <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/2.jpg"></div>
              </div>
            </li>
            <li>
              <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
                <div class="normal_active"> <span class="massage">Wild</span> </div>
                <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/3.jpg"> </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div style="border-left: 3px solid #d3dce6;width: 0;height: 750px; float: left; position:relative;"></div>
      
      <div class = "midrecent">
            <span class="title recent">
              <img class="hot recent" style="height: 30px; width: 30px;" src="@/assets/img/RecentRead.png" />&nbsp;最近在看
            </span>
      </div>

      <div style = "position: relative; float: left; left: 40px; margin-top: 40px">
        <scroll></scroll>
      </div>
      <el-divider style="margin-top: 0; margin-bottom: 0;"></el-divider>

      <div style="border-top: 3px solid #d3dce6;width: 500px;height: 0; float: left; position:relative;"></div>
      
      <div class = "midden">
        <span v-if = "false" class = "mid">你还没有发表任何评论哦，快去试试吧</span>
        <div v-else>
          <div>
            <span class="title recent">
              <img class="hot recent" style="height: 30px; width: 30px;" src="@/assets/img/Comments.png" />&nbsp;我的评论
            </span>
          </div>
          <div class = "mid_message ">
            <img class = "showImg" src="@/assets/img/1.jpg">
            <el-button plain style = "text-align: right; float: right">删除</el-button>
            <span class = "mid_message_font">
              “我在那之前从来没有为死亡而哀悼过，也从没有因死亡而恐惧。甚至都不曾意识。”“但是，拥有着和自己对等力量的生命在我眼前消失了。即便我同所有人一样，最初就知道有“死”存在，那却是我第一次真正的感受到它。”吉尔伽美什所说的“对等的生命”是指恩奇都吧。叙事诗上说，吉尔伽美什亲眼目睹了恩奇都的死亡，察觉到自己终有一日也会如此死去。他对这样的命运惶惶不安，所以才会为了挣脱死的束缚、为了克服死而去拜访贤者。英雄王最后的冒险。前往冥界奇修迦尔|Kishgal|展开的探寻永生之路。
            </span> 
          </div>
          <div class = "mid_message ">
            <img class = "showImg" src="@/assets/img/6.jpg">
            <el-button plain style = "text-align: right; float: right">删除</el-button>
            <span class = "mid_message_font">
             故事的最后，雪停了，二人来到室外，玛修生平第一次，在她熟悉的世界看到了晴朗的天空。
            </span>
          </div>
          <div class = "mid_message ">
            <img class = "showImg" src="@/assets/img/5.jpg">
            <el-button plain style = "text-align: right; float: right">删除</el-button>
            <span class = "mid_message_font">
             欧嘉斯特生来具有既不属于光明也不属于黑暗的强大魔力，其魔力庞大程度及强度质量在十二盾中最高，被马卡洛夫称为“其他十二盾根本无法相提并论的大魔力之主”。他精通了古今中外的一切魔法，这就是他“魔法王"称号的由来。
            </span>
          </div>
          <div class = "mid_message ">
            <img class = "showImg" src="@/assets/img/4.jpg">
            <el-button plain style = "text-align: right; float: right">删除</el-button>
            <span class = "mid_message_font">
             如果那一天真的来了，橘子花洁白如雪，新娘的裙子也洁白如雪，骏马拉着的婚车从古堡中驶出，而你握着冰冷的狙击枪等候在那片必经的森林里，请瞄准车轴，安静地激发，做你一生中最大胆也最冒险的事……即使我不在你的身边
            </span>
          </div>
        </div>
      </div>
      <div style="border-left: 3px solid #d3dce6;width: 0;height: 500px; float: left;left: 25px; position:relative;"></div>
      <div class = "right b_radius">
        <div>
            <span class="title recent">
              <img class="hot recent" style="height: 30px; width: 30px;" src="@/assets/img/Like.png" />&nbsp;我的收藏
            </span>
        </div>
        <div class = "mylove">
          <img style="height: 400px; width: 300px; filter:blur(1px)" src = "@/assets/img/3.jpg">
          <div class="text1">
            <p>红楼梦</p>
          </div>
          <span>&nbsp;</span>
          <el-progress :percentage="72" :format="format"></el-progress>
        </div>
        <div class = "mylove">
          <img style="height: 400px; width: 300px; filter:blur(1px)" src = "@/assets/img/4.jpg">
          <div class="text1">
            <p>龙族</p>
          </div>
          <span>&nbsp;</span>
          <el-progress :percentage="40" :format="format"></el-progress>
        </div>
      </div>
    </div>
  </div>
  
</template>


<script>
// @ is an alias to /src
import search from '@/components/SelectSearch.vue'
import Scroll from '@/components/ScrollHorizontally.vue'
export default {
  name: 'HomeView',
  components: {
    search,
    Scroll,
  }
}
</script>
