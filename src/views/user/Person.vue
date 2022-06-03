<template>
  <div id="personpage">
    <div class="body">
      <div class="infopanel">
        <div class="icon">
          <img src="https://i.imgtg.com/2022/05/08/zDzsM.png" />
        </div>
        <div class="username">IntP</div>
      </div>
      <div class="collection">
        <div class="book-collection collection-1">
          <div class="title">
            <img src="@/assets/guide/book_collection.png" />已收藏书籍
          </div>
          <div
            class="collection-list"
            v-for="book in collections"
            :key="book.id"
          >
            <a class="collection-item">
              <img class="collection-img" :src="book.image" />
              <div class="collection-info">
                《{{ book.name }}》
                <el-rate
                  v-model="book.star"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  disabled-void-color="ffffff"
                >
                </el-rate>
                {{ book.author }}
              </div>
            </a>
          </div>
          <div class="page-number">
            <el-pagination
              @next-click="changeBook()"
              :page-size="9"
              layout="prev, pager, next, jumper"
              :total="30"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
  data() {
    var book = {
      id: 1,
      name: "焦虑的人",
      star: 5.0,
      author: "xxxxx",
      image: "https://i.imgtg.com/2022/05/12/zl9oa.jpg",
    };

    var collections = [];
    var i = 0;
    for (i = 0; i < 9; i++) collections.push(book);
    return {
      collections,
    };
  },
};
</script>

<style scoped>
#personpage {
  width: 1600px;
  padding-left: 100px;
}
.body {
  width: 1580px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
}
.infopanel {
  margin-top: 100px;
  margin-left: 100px;
  width: 1200px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
  display: flex;
}
.icon img {
  width: 100px;
}
.icon {
  width: 110px;
  height: 110px;
  overflow: hidden;
  border-style: solid;
  border-color: rgb(244, 244, 244);
  border-radius: 120px;
}
.username {
  font-size: 30px;
  position: absolute;
  left: 420px;
  top: 170px;
}
.collection {
  margin-top: 20px;
  margin-left: 100px;
  width: 1200px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 30px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(181, 181, 181);
  box-shadow: 0px 2px 3px #888888a6;
  display: flex;
}
.collection-1 {
  display: flex;
  flex-wrap: wrap;
}
.title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
  width: 1200px;
}
.title img {
  height: 37px;
  vertical-align: -20%;
  margin-right: 5px;
}
.collection-list a {
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: #dfdede55;
  margin-top: 10px;
  width: 300px;
}
.collection-list a:hover {
  background-color: #91919155;
}
.collection .title {
  font-family: "Noto Serif SC", serif;
  color: black;
  transition: all 0.1s ease;
  text-decoration: none;
  font-size: 22px;
}
.collection-img {
  width: 85px;
  margin-right: 20px;
}
.collection-item {
  display: flex;
}
.collection-info {
  margin-top: 20px;
  font-size: 16px;
  line-height: 30px;
  font-family: Source Han Sans CN Normal;
}
.page-number{
  margin-left: 300px;
}
</style>