<template>
  <div id="topicdetail">
    <search></search>
    <div class="body">
      <div class="flex_box">
        <div class="introOfTopic">
          <div class="title">
            <img src = "https://i.imgtg.com/2022/05/23/hmqft.jpg" alt="" style="height: 150px; width: 100px; position: relative; float: left; margin-right: 20px">
            <img src="@/assets/title/topic-intro.png" />
            <span class="topic-name">{{ group.name }}
            <button
                @click="favor"
                class="topic-button"
                :style="{ backgroundColor: bg_color, color: ft_color }"
                @mouseenter="change()"
                @mouseleave="goback()"
            >
                {{ content }}
            </button>
            <button v-if = " content == '已加入'"
                @click="favorthing"
                class="topic-button"
                :style="{ backgroundColor: bg_colordo, color: ft_colordo }"
                @mouseenter="changedo()"
                @mouseleave="qobackdo()"
            >
                {{ dothing }}
            </button>  
            </span>
          </div>
          <div class="boxesOfTopic">
            <p id="topic-intro-info">
              {{group.peoplenum}}人加入
            </p>
          </div>
          <div class="topic-detail-interact" style="float: left; position: relative; left: 200px">
            <button class="share-topic">
              <img src="@/assets/guide/share.png" /><span>分享小组</span>
            </button>
            <button class="write-dt" @click="writeTopicDt">
              <img src="@/assets/guide/write_dt.png" /><span>发布讨论</span>  <!--有问题，唉-->
            </button>
          </div>
        </div>

      </div>
      <div class="diarylist">
        <div class = "title diary-hit">
          <span class = "top_mes"><img src="@/assets/group/group-hit.png" />
            <button style="font-size: 26px"
                  class="selection_ed"
                  id="select-top-dt"
                  onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                  @click="topmesm()">
              置顶</button>/
            <button style="font-size: 26px"
                    class="selection_un"
                    id="select-value-dt"
                    onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                    @click="valmesm()"
            >精华
            </button>
          </span>
          <div  style="position:relative; float: left; width: 1450px; margin-top: 30px;">
            <div class = "m_div m_nothead " v-for="mes in heames" :key = "index">
              <span class = "title_l font_l " style="color: #444444;">{{mes.name}}</span>
              <span class = "res_l font_l">{{mes.replynumber}}回复</span>
              <span class = "time_l font_l">{{mes.time}}</span>
              <span class = "group-name_l font_l" style="color: #444444;">{{mes.groupname}}</span>
              <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
            </div>
            <span>&nbsp;</span>
          </div>
          <div><span>&nbsp;</span></div>
        </div>  
        
        <div class="title diary-hit">
          <span
          ><img src="@/assets/title/topic-hit.png" />

            <button style="font-size: 26px"
                class="selection_ed"
                id="select-hot-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="hotGroup()">
              热门讨论</button>/
            <button style="font-size: 26px"
                class="selection_un"
                id="select-new-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="newGroup()"
            >
              最新讨论
            </button>
          </span>
        <div  style="position:relative; float: left; width: 1450px; margin-top: 30px;">
          <div class = "m_div m_nothead " v-for="mes in nowmes" :key = "index">
            <span class = "title_l font_l" style="color: #444444;">{{mes.name}}</span>
            <span class = "res_l font_l">{{mes.replynumber}}回复</span>
            <span class = "time_l font_l">{{mes.time}}</span>
            <span class = "group-name_l font_l" style="color: #444444;">{{mes.groupname}}</span>
            <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
          </div>
          <span>&nbsp;</span>
        </div>
        <div><span>&nbsp;</span></div>
        </div>
        <div class="title diary-hit">
          <span
          ><img src="@/assets/group/all-message.png" />
            全部讨论
          </span>
          <div  style="position:relative; float: left; width: 1450px; margin-top: 30px;">
            <div class = "m_div m_nothead " v-for="mes in allmes" :key = "index">
              <span class = "title_l font_l" style="color: #444444;">{{mes.name}}</span>
              <span class = "res_l font_l">{{mes.replynumber}}回复</span>
              <span class = "time_l font_l">{{mes.time}}</span>
              <span class = "group-name_l font_l" style="color: #444444;">{{mes.groupname}}</span>
              <div style="border-top: 1px solid #d3dce6;width: 1000px;height: 0; float: left; position:relative; top: 3px"></div>
            </div>
            <span>&nbsp;</span>
          </div>
          <div><span>&nbsp;</span></div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.m_div{
  float: left;
  position: relative;
  height: 50px;
  top: 10px;
}
.top_mes {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 26px;
  font-weight: bold;
}
.topic-name {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
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
button.selection_un {
  background: none;
  outline: none;
  color: rgb(96, 94, 94);
  font-size: 20px;
  border: none;
  transition: opacity 0.2s;
}
.topic-detail-interact button {
  position: relative;
  left: 900px;
  background: none;
  outline: none;
  font-size: 18px;
  border: none;
  transition: opacity 0.2s;
}
.topic-detail-interact button :hover {
  text-decoration: underline;
}
button.selection_ed {
  background: none;
  outline: none;
  font-size: 20px;
  border: none;
  color: black;
  font-weight: bold;
}
.title img {
  vertical-align: -10px;
  margin-right: 5px;
  height: 40px;
}
#topicdetail {
  height:1600px;
  padding-left: 100px;
}
.hotlist a {
  color: rgb(2, 98, 182);
  font-weight: 500;
}

.hotlist a:hover {
  background-color: rgb(213, 230, 245);
  font-weight: 600;
}
.flex_box {
  display: flex;
}
.aside {
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 0;
  padding-left: 20px;
  padding-right: 40px;
  padding-top: 25px;
  padding-bottom: 20px;
  width: 250px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
div.title {
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-left: 20px;
  font-size: 25px;
  color: rgb(52, 52, 52);
}
.introOfTopic {
  margin-left: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  width: 1460px;
  margin-top: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
#topic-intro-content {
  margin-top: 15px;
  margin-left: 20px;
  flex-wrap: wrap;
  width: 1150px;
  font-family: Source Han Sans CN Normal;
  font-size: 20px;
  position: relative;
  float: left;
}
#topic-intro-info {
  margin-left: 25px;
  margin-top: 10px;
  font-size: 18px;
  color: rgb(179, 179, 179);
}
.collection {
  text-align: left;
  padding-bottom: 30px;
}
.collection img {
  height: 30px;
  vertical-align: -20%;
}
.collection .title a {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection .title a:hover {
  color: rgb(2, 98, 182);
}
.collection a:hover::after {
  opacity: 1;
}
.collection a:active {
  color: rgb(0, 166, 255);;
}
.collection-list a {
  font-size: 18px;
  font-family: Source Han Sans CN Normal;
}
.collection-list a:hover {
  font-weight: 600;
  color: rgb(2, 98, 182);
}
#more-collection-topic {
  position: absolute;
  line-height: 40px;
  top: 440px;
  left: 1380px;
}
.topic_page.title img {
  height: 35px;
  margin-left: 27px;
}
.topic_page.hotlist {
  line-height: 28px;
  font-size: 17px;
  text-align: left;
  border-radius: 20px;
  border-width: 4px;
  padding: 15px;
  width: 310px;
  background-color: rgb(255, 250, 244);
  border-top-color: rgb(255, 247, 238);
  border-left-color: rgb(255, 247, 238);
  border-bottom-color: antiquewhite;
  border-right-color: antiquewhite;
  border-style: solid;
  box-shadow: 0px 1px 1px #888888a6;
}
.topic_page.title {
  padding-bottom: 10px;
  font-size: 23px;
}
.topic_page.hotlist ol {
  margin: 0;
  padding: 0;
  list-style-position: inside;
}
.diarylist {
  position: absolute;
  padding-left: 100px;
  padding-top: 50px;
  width: 1460px;
  margin-left: 20px;
  margin-top: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
}
.topic-display {
  margin-left: 20px;
  margin-bottom:50px;
}
.diary-hit {
  margin-top: 10px;
}
.diary-hit img {
  height: 45px;
}
.topic-detail-interact img {
  height: 20px;
}
.topic-page-number {
  margin-left: 400px;
  padding-bottom: 40px;
}

.topicdiary {
  width: 1200px;
  text-align: left;
}
.diary-display-body {
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
}
.display-publisher {
  margin-top: 0;
  padding-top: 0;
  width: 920px;
}
.publishtime {
  padding-left: 20px;
  font-weight: 400;
  color: rgb(157, 157, 157);
}
.topic-origin {
  position: relative;
  font-size: 18px;
  text-align: left;
  width: 1000px;
}
.topic-origin a {
  font-family: Source Han Sans CN Normal;
  color: black;
  text-decoration: none;
  padding-left: 5px;
  text-decoration: none;
}
.topic-origin a:hover {
  font-family: Source Han Sans CN Normal;
  color: rgb(31, 169, 255);
}
.diary-pic {
  height: 200px;
  align-content: middle;
}
div.diary-origin-pic {
  position: relative;
  left: 0;
  top:20px;
  margin-left: 20px;
  border-radius: 5px;
  height: 180px;
  width: 270px;
  overflow: hidden;
}
.diary-content {
  display: flex;
  flex-wrap: row;
}
.display-publisher a {
  font-weight: 500;
  font-size: 22px;
  color: black;
  text-decoration: none;
}
.display-publisher a:hover {
  color: rgb(0, 166, 255);
}
.iconOfuser {
  height: 30px;
  margin-right: 5px;
  vertical-align: sub;
}
.nameOfuser{
  font-size: 17px;
  font-family: Source Han Sans CN Normal;
}
.diarytext {
  width: 800px;
  margin-left: 30px;
}
a.diarytext-origin {
  position: relative;
  top:36px;
  font-size: 17px;
  text-decoration: none;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: 600;
  color: black;
  transition: 0.3s ease;
}
a.diarytext-origin:hover {
  color: gray;
  text-decoration: none;
}
button {
  outline: none;
  margin-right: 0;
}
.topic-button {
  width: 150px;
  color: #47ff5d;
  background: #f2fef0;
  border: #c4fbc9 solid;
  border-radius: 20px;
  padding: 10px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  -webkit-transform: scale(0.7);
}
div.body{
  padding-bottom: 100px;
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
</style>
<style>
.el-pager li {
  font-size: 20px;
}
.el-pagination button,
.el-pagination span:not([class*="suffix"]) {
  font-size: 18px;
}
</style>
<script>
import search from "@/components/SelectSearch.vue";
import diary from "@/components/TopicDisplay.vue";
import App from "@/App.vue";
export default {
  name: "groupinit",
  components: {
    search,
    diary,
    App,
  },
  data() {
    var id = this.$route.params.id; //根据id来询问
    var group = {
      name: "龙族",
      peoplenum: 22,
    };
    var topmes = [
      {
        name: "体育网课！？",
        id: 2,
        replynumber: 47,
        time: "2022-4-13",
        groupname: "体育场",
      },
      {
        name: "上午核酸人数查询",
        id: 2,
        replynumber: 66,
        time: "2022-4-18",
        groupname: "校医院",
      },
      {
        name: "软工进度？？？",
        id: 2,
        replynumber: 56,
        time: "2022-4-10",
        groupname: "se学习小组",
      },
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
    var valmes = [
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
    var hotmes = [
      {
        name: "这个bug是因为什么呢",
        id: 2,
        replynumber: 23,
        time: "2022-4-13",
        groupname: "se学习小组",
      },
      {
        name: "体育网课！？",
        id: 2,
        replynumber: 47,
        time: "2022-4-13",
        groupname: "体育场",
      },
      {
        name: "上午核酸人数查询",
        id: 2,
        replynumber: 66,
        time: "2022-4-18",
        groupname: "校医院",
      },
      {
        name: "软工进度？？？",
        id: 2,
        replynumber: 56,
        time: "2022-4-10",
        groupname: "se学习小组",
      },
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
    var newmes = [
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
    var allmes = [
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
    var nowmes = hotmes;
    var heames = topmes;
    return {
      heames,
      valmes,
      topmes,
      hotmes,
      newmes,
      nowmes,
      allmes,
      group,
      liked: false,
      do:false,
      content: "加入小组",
      dothing: "申请成为管理员",
      bg_color: "#f2fef0",
      ft_color: "#47ff5d",
      bg_colordo: "#f2fef0",
      ft_colordo: "#47ff5d",
    };
  },
  methods: {
    favor(e) {
      this.liked = !this.liked;
      if (this.liked) {
        this.content = "已加入";
        this.bg_color = "#6cf57c";
        this.ft_color = "#f2fef0";
        this.group.peoplenum++;
      } else {
        this.content = "+加入小组";
        this.bg_color = "#f2fef0";
        this.ft_color = "#6cf57c";
        this.group.peoplenum--;
      }
    },
    favorthing(e) {
      this.do = !this.do;
      if (this.do) {
        this.dothing = "等待审批";
        this.bg_colordo = "#6cf57c";
        this.ft_colordo = "#f2fef0";
      } else {
        this.dothing = "申请成为管理员";
        this.bg_colordo = "#f2fef0";
        this.ft_colordo = "#6cf57c";
      }
    },
    changedo() {
      this.bg_colordo = "#45ff5b";
      this.ft_colordo = "#f2fef0";
    },
    change() {
      this.bg_color = "#45ff5b";
      this.ft_color = "#f2fef0";
    },
    
    qobackdo() {
      if (this.do) {
        this.bg_colordo = "#6cf57c";
        this.ft_colordo = "#f2fef0";
      } else {
        this.bg_colordo = "#f2fef0";
        this.ft_colordo = "#6cf57c";
      }
    },
    goback() {
      if (this.liked) {
        this.bg_color = "#6cf57c";
        this.ft_color = "#f2fef0";
      } else {
        this.bg_color = "#f2fef0";
        this.ft_color = "#6cf57c";
      }
    },
    hotGroup() {
      document
          .getElementById("select-new-topic-dt")
          .setAttribute("class", "selection_un");
      this.nowmes = this.hotmes;
    },
    newGroup() {
      document
          .getElementById("select-hot-topic-dt")
          .setAttribute("class", "selection_un");
      this.nowmes = this.newmes;
    },
    topmesm() {
      document
          .getElementById("select-value-dt")
          .setAttribute("class", "selection_un");
      this.heames = this.topmes;
    },
    valmesm() {
      document
          .getElementById("select-top-dt")
          .setAttribute("class", "selection_un");
      this.heames = this.valmes;
    },
    //this is the function to update the images of books
    updateButton() {
      document
          .getElementsByClassName("selection_un")
          .item(4)
          .setAttribute("class", "selection_ed");
    },
    writeTopicDt(){ //zhe li you dian wen ti deng deng
      this.$router.push({
        name:"topicDtEditor",
        params:{
          group_name:this.group.name,
          group_intro:this.group.intro,
          id:this.id
        }
      })
    },
    changeTopicdt() {},
  },
  mounted() {
    this.$parent.navigate = true;
    this.Updatediary();
    this.updateButton();
  },
};
</script>
