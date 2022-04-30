<template>
  <div class="comment">
    <a class="userOfcomment" href="/otherusers/1">
    <img class="iconOfuser" /><span class="nameOfuser"></span>
    </a>
    <br />
        <div class="comments_content">
            <div><a class="comment-origin"><img class="comments_pic" src="../assets/books/Zissc.jpg"></a></div>
            <div class="commentlist"></div>
        </div>
    <div class="origin">
      <a href="http://localhost:8080/group"> ————查看原帖</a>
    </div>
  </div>
</template>
<style scoped>
.comments_pic{
  height:8vw;
  width:6vw;
}
.comments_content{
    display: flex;
    flex-wrap: nowrap;
}
.comment a {
  font-weight: 500;
  font-size: 22px;
  color: black;
  text-decoration: none;
}
.comment a:hover {
  color: rgb(0, 166, 255);
}
div.origin {
  text-align: right;
}
.origin a {
  color: brown;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
  font-style: italic;
  font-size: 16px;
}
.origin a:hover {
  text-decoration: none;
  color: burlywood;
}
.iconOfuser {
  height: 30px;
  vertical-align: sub;
}
.commentlist{
    margin-left: 20px;
    margin-right: 10px;
    font-size: 17px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight:600;
    color: black;
}
</style>