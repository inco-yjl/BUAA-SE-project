<template>
  <div id="groupdetail-page">
    <search></search>
    <div class="group-detail-body">
      <div id="groupdetail-vertical">
        <div class="group-intro">
          <div class="group-img"><img :src="group.image" /></div>
          <div class="group-info">
            <span class="group-title">{{ group.name }}</span>
            <br />
            <span class="member-num">{{ group.member }}人已加入</span>
            <br />
            <span class="passage-num">{{ passageNum }}篇发帖</span>
          </div>
          <div class="user-buttons">
            <div id="join-button">
              <button  @click="quit()">
                <img v-if="join === true" src="@/assets/group/quit.png" />
                <img v-else src="@/assets/group/join.png" />
              </button>
            </div>
            <div class="group-detail-interact">
              <button>
                <img src="@/assets/group/apply.png" /><span
                  >申请成为管理员</span
                >
              </button>
              <button class="share-topic">
                <img src="@/assets/guide/share.png" /><span>分享小组</span>
              </button>
              <button class="write-dt" @click="writeTopicDt">
                <img src="@/assets/guide/write_dt.png" /><span>发布帖子</span>
              </button>
            </div>
          </div>
        </div>
        <div class="group-passage">
          <div class="title diary-hit">
            <span
              ><img src="@/assets/group/passage.png" />

              <button
                class="selection_ed"
                id="select-hot-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="hotPassage()"
              >
                热门</button
              >/
              <button
                class="selection_un"
                id="select-new-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="newPassage()"
              >
                最新</button
              >/
              <button
                class="selection_un"
                id="select-star-topic-dt"
                onclick="this.className=this.className=='selection_un'?'selection_ed':'selection_un'"
                @click="starPassage()"
              >
                精华
              </button>
            </span>
          </div>
          <div class="display-passage">
            <div
              class="passage-block"
              v-for="passage in topPassage"
              :key="passage.id"
            >
              <hr />
              <div class="passage-display-body">
                <div class="display-publisher">
                  <a class="userOfdiary" href="/otherusers/1">
                    <img class="iconOfuser" :src="passage.usericon" /><span
                      class="nameOfuser"
                      >{{ passage.username }}</span
                    >
                  </a>
                  <span class="publishtime">{{ passage.date }}</span>
                </div>
                <div class="passage-content">
                  <a>{{ passage.title }}</a>
                </div>
                <div class="top-icon"><img src="@/assets/group/top.png" /></div>
              </div>
            </div>
            <!--上面的置顶帖部分可复用，而下面精华帖仅调整样式，实际展示按选择的排序顺序来-->
            <div
              class="passage-block"
            >
              <hr />
              <div class="passage-display-body">
                <div class="display-publisher">
                  <a class="userOfdiary" href="/otherusers/1">
                    <img class="iconOfuser" src="https://i.imgtg.com/2022/05/08/zDzsM.png" /><span
                      class="nameOfuser"
                      >yjl</span
                    >
                  </a>
                  <span class="publishtime">2002-1-1</span>
                </div>
                <div class="passage-content">
                  <a>精华帖例子</a>
                </div>
                <div class="star-icon"><img src="@/assets/group/star.png" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aside"></div>
    </div>
  </div>
</template>
<script>
import search from "@/components/SelectSearch.vue";
export default {
  components: {
    search,
  },
  data() {
    var group = {
      peoplenum: 20,
      name: "龙族",
      image: "https://i.imgtg.com/2022/05/23/hmqft.jpg",
      member: 10,
      join: false,
      manager: [
        {
          user_id: 1,
          user_name: "yjl",
        },
      ],
    };
    var topPassage = [
      {
        title: "体育网课！？",
        id: 2,
        userid: 1,
        username: "yjl",
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        date: "2022-4-13",
      },
      {
        title: "上午核酸人数查询",
        id: 2,
        userid: 1,
        username: "yjl",
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        date: "2022-4-13",
      },
      {
        title: "上午核酸人数查询",
        id: 2,
        userid: 1,
        username: "yjl",
        usericon: "https://i.imgtg.com/2022/05/08/zDzsM.png",
        date: "2022-4-13",
      },
    ];
    var allPassages = [];
    return {
      group,
      join:group.join,
      allPassages,
      topPassage,
      passageNum: 0,
    };
  },
  methods: {
    join() {
      this.join = ! this.join;
    },
    quit() {
      this.group.join = !this.group.join

    },
  },
};
</script>

<style scoped>
#groupdetail-page {
  width: 1600px;
  padding-left: 100px;
}
.group-detail-body {
  width: 1580px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
#groupdetail-vertical {
  padding-top: 50px;
  padding-left: 60px;
  padding-right: 35px;
  padding-bottom: 60px;
  margin-top: 80px;
  width: 1160px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
}
.group-intro {
  display: flex;
  width: 1100px;
  flex-wrap: wrap;
}
.group-img {
  height: 100px;
  width: 100px;
  overflow: hidden;
  border-radius: 5px;
}
.group-img > img {
  width: 100px;
}

.group-info {
  width: 200px;
  margin-left: 30px;
}
.group-title {
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
}
.member-num {
  line-height: 35px;
  color: rgb(179, 179, 179);
}
.passage-num {
  color: rgb(179, 179, 179);
}
.group-passage {
  margin-top: 50px;
}
.passage-block {
  width: 1040px;
}
.passage-display-body {
  display: flex;
}
.iconOfuser {
  height: 30px;
  width: 30px;
  vertical-align: -30%;
}
.nameOfuser {
  font-size: 17px;
  font-family: Source Han Sans CN Normal;
  margin-right: 10px;
}
.display-publisher {
  margin-right: 20px;
}
.passage-content {
  width: 600px;
  margin-top: 2px;
}
.top-icon img{
    height:28px;
}
.star-icon img{
    height:30px;
    margin-left: 8px;
}
.passage-content a {
  font-size: 20px;
  font-weight: 400;
  color: black;
  transition: 0.3s ease;
}
.passage-content a:hover {
  text-decoration: underline;
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
.aside {
  margin-top: 80px;
  margin-left: 10px;
  margin-right: 0;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  background-color: white;
  box-shadow: 0px 2px 3px #888888a6;
  height: 900px;
}

.user-buttons {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 500px;
  margin-left: 200px;
  margin-top: 70px;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.user-buttons img {
  height: 30px;
}
.user-buttons button {
  border-radius: 40px;
  background: none;
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
  margin-left: 20px;
}
.user-buttons button::before {
  position: absolute;
  content: "";
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: -1;
}
.user-buttons button:hover::before {
  top: 0;
  height: 100%;
}
.user-buttons button:active {
  top: 2px;
}
#join-button {
  position: absolute;
  left: 340px;
  top: 340px;
}
#join-button img {
  height: 40px;
}
.group-detail-interact button {
  position: relative;
  top: 0px;
  background: none;
  outline: none;
  font-size: 16px;
  border: none;
  transition: opacity 0.2s;
}
.group-detail-interact button :hover {
  text-decoration: underline;
}
button.selection_un {
  background: none;
  outline: none;
  color: rgb(96, 94, 94);
  font-size: 20px;
  border: none;
  transition: opacity 0.2s;
}

button.selection_ed {
  background: none;
  outline: none;
  font-size: 20px;
  border: none;
  color: black;
  font-weight: bold;
}
</style>