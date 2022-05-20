<template>
  <div class="topicdiary">
    <hr />
    <div class="diary-display-body">
      <div class="display-publisher">
        <a class="userOfdiary" href="/otherusers/1">
          <img class="iconOfuser" /><span class="nameOfuser"></span>
        </a>
        <span class="publishtime"></span>
      </div>
      <div class="topic-origin">
        <button
          @click="favor"
          class="topic-button"
          :style="{ backgroundColor: bg_color, color: ft_color }"
          @mouseenter="change()"
          @mouseleave="goback()"
        >
          {{ content }}
        </button>
        来自话题<a class="topic-origin-name" href="javascript:void(0)"></a>
      </div>
      <div class="diary-origin-pic">
        <a class="diary-origin" href="javascript:void(0)"
          ><img class="diary-pic" />
        </a>
      </div>
      <div class="diarytext">
        <a class="diarytext-origin" href="/topic/1/comments/1"></a>
      </div>
    </div>
  </div>
</template>
<style scoped>

.topicdiary {
  width: 1200px;
  text-align: left;
}
.diary-display-body {
  padding-left: 30px;
  display: flex;
  flex-wrap: wrap;
}
.display-publisher {
  margin-top:0;
  padding-top:0;
  width: 820px;
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
.diary-pic{
  height:200px;
  align-content: middle;
}
div.diary-origin-pic{
  position: relative;
  left:0;
  margin-left: 20px;
  border-radius: 5px;
  height: 180px;
  width: 270px;
  overflow:hidden;
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
  position: relative;
  top:20px;
  width: 800px;
  margin-left: 30px;
}
a.diarytext-origin {
  font-size: 16px;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
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

</style>
<script>
export default {
  name: "topicdisplay",
  data() {

    return {
      liked: false,
      content: "+关注话题",
      bg_color: "#f2fef0",
      ft_color: "#47ff5d",
    };
  },
  methods: {

    favor(e) {
      this.liked = !this.liked;
      if (this.liked) {
        this.content = "已关注";
        this.bg_color = "#6cf57c";
        this.ft_color = "#f2fef0";
      } else {
        this.content = "+关注话题";
        this.bg_color = "#f2fef0";
        this.ft_color = "#6cf57c";
      }
    },
    change() {
      this.bg_color = "#45ff5b";
      this.ft_color = "#f2fef0";
    },
    goback() {
      if (this.liked) {
        this.bg_color = "#6cf57c;";
        this.ft_color = "#f2fef0";
      } else {
        this.bg_color = "#f2fef0";
        this.ft_color = "#6cf57c";
      }
    },
  },
};
</script>
