<template>
    <div class = "book-detail">
        <div class="book-intro">
            <div class="intro-left">
                <div class="book-border">
                    <div class="book-title">    
                        <h1 class="book-title">《焦虑的人》</h1>
                    </div>
                    <div class="book-image">
                        <img class="book-img" src="../../assets/books/Jiaoldr.jpg">
                    </div>
                </div>
            </div>
            <div class="intro-middle">
                <div class="middle-init">
                    <div class="book-desc">
                        <span class="pl">作者：</span><span class="pl2">弗雷德里克·巴克曼</span>
                        <br><br>
                        <span class="pl">出版社：</span><span class="pl2">天津人民出版社</span>
                        <br><br>
                        <span class="pl">出品方：</span><span class="pl2">果麦文化</span>
                        <br><br>
                        <span class="pl">原作名：</span><span class="pl2">FOLK MED ÅNGEST</span>
                        <br><br>
                        <span class="pl">译者：</span><span class="pl2">孙璐</span>
                        <br><br>
                        <span class="pl">出版年：</span><span class="pl2">2021-8</span>
                        <br><br>
                        <span class="pl">页数：</span><span class="pl2">320</span>
                        <br><br>
                        <span class="pl">定价：</span><span class="pl2">49.8</span>
                        <br><br>
                        <span class="pl">ISBN：</span><span class="pl2">9787201175133</span>
                      <br>
                    </div>
                    <div class="book-rank">
                        <div class="rank-score">
                            评分
                            <div class="score"><strong class="num">8.9</strong><rankstar_ class="star"></rankstar_></div>
                            <div class="score-comment"><a href="#">123</a>人评价</div>
                        </div>
                    </div>
                    <div class="score-rate">
                        <div v-for="item in []" class="rate-item" :key="item.index">
                            <span>{{item.index}}星</span>
                            <span class="wline" :style="{width:1+'px'}"></span>
                            <span class="percent">1%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="intro-right">
                <div class="book-recommend">
                    <ul class="book-recommendlist">
                        <div class="recommend-title">书籍推荐</div>
                        <li id="book1">
                        <span>1.&ensp;</span
                        ><a href="../BookDetail">焦虑的人</a>
                        </li>
                        <li id="book2">
                        <span>2.&ensp;</span>
                        <a href="../BookDetail">焦虑的人</a>
                        </li>
                        <li id="book3">
                        <span>3.&ensp;</span>
                        <a href="../BookDetail">焦虑的人</a>
                        </li>
                        <li>
                        <span>4.&ensp;</span><a href="../BookDetail">焦虑的人</a>
                        </li>
                        <li>
                        <span>5.&ensp;</span>
                        <a href="../BookDetail">焦虑的人</a>
                        </li>
                        <li>
                        <span>6.&ensp;</span>
                        <a href="../BookDetail">焦虑的人</a>
                        </li>
                        <li>
                        <span>7.&ensp;</span><a href="../BookDetail">焦虑的人</a>
                        </li>
                        <li>
                        <span>8.&ensp;</span><a href="../BookDetail">焦虑的人 </a>
                        </li>
                        <li>
                        <span>9.&ensp;</span
                        ><a href="../BookDetail">焦虑的人</a>
                        </li>
                        <li>
                        <span>10.</span
                        ><a href="../BookDetail">焦虑的人</a>
                        </li>
                        <li>
                        <span>11.</span
                        ><a href="../BookDetail">焦虑的人</a>
                        </li>
                        <li><span>12.</span><a href="../BookDetail">焦虑的人</a></li>
                        <li><span>13.</span><a href="../BookDetail">焦虑的人</a></li>
                        <li><span>14.</span><a href="../BookDetail">焦虑的人</a></li>
                        <li>
                        <span>15.</span><a href="../BookDetail">焦虑的人</a>
                        </li>
                    </ul>
                </div>
                    
            </div>
        </div>

        <div class="book-content">
            <h2 class="content-title">
              <img style="height: 64px; width: 64px" src = "../../assets/books/book-content.png" alt="">
                内容简介
            </h2>
            <p class="content-intro">究竟是何种程度的无奈和绝望，迫使一个中年人在新年来临前的早晨，用一把玩具枪抢劫一家无现金银行。行动失败的劫匪仓皇之中逃进一间位于大楼顶层的待售公寓，里面全都是正在看房子的潜在买家。由此开始，抢劫案变成了劫持人质案。

                                    然而事情的发展出乎预料，没有警匪对峙、没有致命一击，漫长的一天过后，八名人质安然无恙得到释放，劫匪却完全不见踪影。警察对人质逐一展开讯问，却发现他们每个人都有一肚子的抱怨和疑问，可是谁也说不清楚并且不关心劫匪究竟去了哪里。</p>
        </div>
        
        <div class="opera-box">
            
            <div class="opera-title">
              <img class = "" src = "../../assets/books/book-mes.png" alt="">
                热门/最新
                <i class="el-icon-edit"></i>
                <a href="javascript:void(0)" class="comment-link" @click="goPublish">写书评</a>
            </div>
                <div class="comments"><a class="userOfcomment"><img class="iconOfuser"><span class="nameOfuser"></span></a><br><span class="commentlist"></span><div class="origin"><a href="">……</a></div></div>
                <hr>
                <div class="comments"><a class="userOfcomment"><img class="iconOfuser"><span class="nameOfuser"></span></a><br><span class="commentlist"></span><div class="origin"><a href="">……</a></div></div>
        </div>
    </div>
</template>

<script>
import usericon from '../../assets/user/int.png' 
//import rankstar_ from './rankstar.vue'
export default {
    name:'BookDetail',
    components:{
  //      rankstar_
    },
    setup() {
        const goPublish = ()=>{}
        return{
            goPublish
        }
    },
    methods:{
      UpdateComments(){
        document.getElementsByClassName("iconOfuser").item(0).setAttribute('src',usericon);
        document.getElementsByClassName("nameOfuser").item(0).innerHTML="lbtest1"+":";
        document.getElementsByClassName("commentlist").item(0).innerHTML="这是一个测试\
        软工好难啊\
        学不明白\
        生活充满黑暗";
        document.getElementsByClassName("iconOfuser").item(1).setAttribute('src',usericon);
        document.getElementsByClassName("nameOfuser").item(1).innerHTML="lbtest2"+":";
        document.getElementsByClassName("commentlist").item(1).innerHTML="为什么要选这个专业";
      }
    },
    mounted(){
      this.UpdateComments();
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
    }
}
</script>

<style scoped>
.book-detail{
    float: left;
    width: 1600px;
    margin-top: 40px;
    padding: 15px;
}
.book-intro{
    width: 1600px;
    margin-left: 150px;
    margin-top: 100px;
}
.intro-left{
    width: 400px;
    height: 532px;
    float: left;
    margin-left: -100px;
    padding: 20px ;
    padding-top: 30px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(181, 181, 181);
    background-color: white;
    box-shadow: 0px 2px 3px #888888a6;
}
.book-border{
    width: 350px;
    height: 450px;
    border-radius: 20px;
    border-width: 4px;
    background-color: rgb(249, 245, 200);
    border-top-color: rgb(249, 242, 197);
    border-left-color: rgb(249, 239, 197);
    border-bottom-color: rgb(215, 228, 250);
    border-right-color: rgb(215, 228, 250);
    border-style: solid;
    box-shadow: 0px 1px 1px #888888a6;
}
.book-title{
    margin-left: 25px;
    font-weight:1000;
    font-family: 'Noto Serif SC', serif;
    margin-top: 20px;
}
.book-img{
    float: left;
    width: 200px;
    height: 300px;
    margin-left: 70px;
    margin-top: 40px;
}
.intro-middle{
    width: 650px;
    height: 532px;
    float: left;
    margin-left: 50px;
    padding-left: 20px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(181, 181, 181);
    background-color: white;
    box-shadow: 0px 2px 3px #888888a6;
}
.middle-init{
    width: 600px;
    height: 460px;
    margin-top: 40px;
    border-radius: 20px;
    border-width: 4px;
    background-color: rgb(244, 250, 255);
    border-top-color: rgb(244, 247, 249);
    border-left-color: rgb(244, 243, 249);
    border-bottom-color: rgb(215, 228, 250);
    border-right-color: rgb(215, 228, 250);
    border-style: solid;
    box-shadow: 0px 1px 1px #888888a6;
}
.book-desc{
    height: 460px;
    width: 350px;
    font-size: 15px;
    margin-left: 30px;
    margin-top: 5px;
    padding: 5px;
    float: left;
}
.pl{
    margin-top: 1px;
    display: inline;
    color: rgb(124, 124, 124);
    font-size: 0.5cm;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.pl2{
    display: inline;
    font-size: 0.5cm;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.book-rank{
    float: left;
    width: 200px;
    margin-top: 40px;
    display: inline;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.num{
    font-size: 1cm;
}
.score-rate{
    float: left;
    width: 400px;
}
.score{
    display: inline;
}
.star{
    display: inline;
}
.intro-right{
    width: 400px;
    float: left;
    position: relative;
    margin-left: 50px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(181, 181, 181);
    background-color: white;
    box-shadow: 0px 2px 3px #888888a6;
}
.intro-right-slide{
    width: 400px;
    float: left;
    margin-left: 150px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(181, 181, 181);
    background-color: white;
    box-shadow: 0px 2px 3px #888888a6;
    position: fixed;
    left:1260px;
    top: -50px;
}
.recommend-title{
    font-family: 'Noto Serif SC', serif;
    font-weight:1000;
    font-size: 0.7cm;
    margin-left: 70px;
}
.book-content{
    margin-top: 70px;
    float: left;
    position: relative;
    left: 50px;
    width: 1400px;
    text-align: left;
    padding: 20px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(181, 181, 181);
    background-color: white;
    box-shadow: 0px 2px 3px #888888a6;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
.book-recommendlist{
    font-size: 0.5cm;
    margin-left: 40px;
    margin-top: 10px;
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
.book-detail li {
  list-style: none;
}
#book1 span {
  color: red;
}
#book2 span {
  color: rgb(255, 128, 0);
}
#book3 span {
  color: rgb(255, 195, 44);
}
.content-intro{
  text-indent:2em;
  font-size: 16px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.content-title{
    font-weight:1000;
    font-family: 'Noto Serif SC', serif;
    font-size: 24px;
}
.el-icon-edit{
    float: right;
    margin-top: 5px;
    color: rgb(0, 140, 255);
}
.comment-link{
    float: right;
}
.opera-box{
    width: 1400px;
    float: left;
    position: relative;
    left: 50px;
    margin-top: 30px;
    padding: 20px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(181, 181, 181);
    background-color: white;
    box-shadow: 0px 2px 3px #888888a6;
}
.opera-title{
    text-align: left;
    font-size: 0.6cm;
    font-weight:1000;
    font-family: 'Noto Serif SC', serif;
}
.comments{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;
}
.iconOfuser{
    margin-top: 20px;
    height:30px;
    vertical-align:sub;
}
</style>