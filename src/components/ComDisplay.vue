<template>
  <div class="comment">
    <hr />
    <a class="userOfcomment" href="../views/user/otherusers.vue">
    <img class="iconOfuser" :src="comment.iconOfuser"/><span class="nameOfuser">{{comment.name}}</span>
    </a>
    <br />
        <div class="comments-content">
            <div><a class="comment-origin" href="/book/1"><img class="comments-pic" :src="comment.img"></a></div>
            <div class="comments-text"><a class="commentlist" href="/book/1/comments/1">{{comment.content}}</a></div> <!-- 路径问题 -->
        </div>
    <div class="origin">
      >><a href="http://localhost:8080/group">查看原帖</a>
    </div>
  </div>
</template>
<style scoped>
.comment{
  padding-bottom:0;
  margin-bottom: 0;
}
.nameOfuser{
  font-family: PingFang SC;
}
.comments-pic{
  height:120px;
  width:90px;
}
.comments-content{
    display: flex;
    flex-wrap: nowrap;
}
.comment a {
  font-weight: 500;
  font-size: 22px;
  color: rgb(0, 0, 0);
  text-decoration: none;
}
.comment a:hover {
  text-decoration: none;
  color: rgb(0, 166, 255);
}
div.origin {
  text-align: right;
}
.origin a {
  color: rgb(121, 121, 121);
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
}
.origin a:hover {
  text-decoration: underline;
  color: rgb(121, 121, 121);
}
.iconOfuser {
  height: 30px;
  margin-right: 5px;
  vertical-align: sub;
}
.comments-text{
  margin-left: 20px;
  margin-right: 10px;
}
a.commentlist{
    font-size: 16px;
    text-decoration: none;
    font-family:Helvetica, Arial, sans-serif;
    font-weight:500;
    color: black;
    transition:.2s ease;
}
a.commentlist:hover{
  color:gray;
  text-decoration: none;
}
</style>