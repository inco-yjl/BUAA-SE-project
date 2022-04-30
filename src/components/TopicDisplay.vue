<template>
  <div class="topicdiary">
    <hr />
    <a class="userOfdiary" href="/otherusers/1">
    <img class="iconOfuser" /><span class="nameOfuser"></span>
    </a>
    <br />
        <div class="diary-content">
            <div><a class="diary-origin" href="/book/1"><img class="diary-pic" src="@/assets/books/Zissc.jpg"></a></div>
            <div class="diarytext"><a class="diarylist" href="/book/1/comments/1"></a></div>
        </div>
    <div class="origin">
      <a href="http://localhost:8080/group"> ————查看原帖</a>
    </div>
  </div>
</template>
<style scoped>
.diary{
  width:95%;
}
.diary-pic{
  height:150px;
  width:110px;
}
.diary-content{
    display: flex;
    flex-wrap: nowrap;
}
.diary a {
  font-weight: 500;
  font-size: 22px;
  color: black;
  text-decoration: none;
}
.diary a:hover {
  color: rgb(0, 166, 255);
  text-decoration: underline;
}
div.origin {
  text-align: right;
}
.origin a {
  color: brown;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
}
.origin a:hover {
  text-decoration: none;
  color: burlywood;
}
.iconOfuser {
  height: 30px;
  margin-right: 5px;
  vertical-align: sub;
}
.diarytext{
  margin-left: 20px;
  margin-right: 10px;
}
a.diarylist{
    font-size: 17px;
    text-decoration: none;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight:600;
    color: black;
}
a.diarylist:hover{
  color:gray;
  text-decoration: none;
}
</style>