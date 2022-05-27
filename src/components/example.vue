<hr />
                <div class="comment-display-body">
                  <div class="display-publisher">
                    <a class="userOfcomment" href="/otherusers/1">
                      <img class="iconOfuser" :src="dt1.usericon"/><span class="nameOfuser">{{dt1.user}}</span>
                    </a>
                    <span class="publishtime">{{dt1.date}}</span>
                  </div>
                  <div class="comment-origin-pic">
                    <a class="comment-origin" href="javascript:void(0)"
                      ><img class="diary-pic" :src="dt1.img"/>
                    </a>
                  </div>
                  <div class="commenttext">
                    <a class="commenttext-origin" href="/topic/1/comments/1">{{dt1.passage}}</a>
                  </div>
                </div>

.comment-display-body {
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
.comment-pic {
  height: 200px;
  align-content: middle;
}
div.comment-origin-pic {
  position: relative;
  left: 0;
  top:20px;
  margin-left: 20px;
  border-radius: 5px;
  height: 180px;
  width: 270px;
  overflow: hidden;
}
.comment-content {
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
.commenttext {
  width: 800px;
  margin-left: 30px;
}
a.commenttext-origin {
  position: relative;
  top:36px;
  font-size: 17px;
  text-decoration: none;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: 600;
  color: black;
  transition: 0.3s ease;
}
a.commenttext-origin:hover {
  color: gray;
  text-decoration: none;
}