<template>
    <div id="navigation">
        <hr id="line"> 
        <router-link id="Tohome" to="/"><span id="icon"><img alt="Vue logo" src="../assets/logo.png" width=40px ></span></router-link>
        <router-link to="/book"><span  class="guide"><img id="bookimg" src="../assets/icon/book.png" width=30px>图书</span></router-link>
        <router-link to="/video"><span  class="guide"><img id="videoimg" src="../assets/icon/video.png" width=30px>影视</span></router-link>
        <router-link to="/group"><span  class="guide"><img id="videoimg" src="../assets/icon/group.png" width=30px>小组</span></router-link>
        <router-link to="/topic"><span  class="guide"><img id="videoimg" src="../assets/icon/topic.png" width=30px>话题</span></router-link>
        
        <span id="login">
             <el-col :span="25">
                <span class="demonstration"><img src="../assets/int.png" width=30px></span>
                <el-dropdown trigger="click">
                     <span class="el-dropdown-link">用户名<i class="el-icon-arrow-down el-icon--right"></i></span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-user-solid">个人主页</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-chat-line-round">我的消息</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-switch-button">退出账号</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </span> 
        <router-view/>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&display=swap');
#navigation{
    width:100%;
    height:50px;
    margin: 0,0,0,auto;
    padding-top:0,0,0,auto;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    font-weight:bolder;
}
#line{
    position: absolute;
    top:65px;
    left: 0;
    right: 0;
}
#login{
    float:right;
    margin-right:0;
    padding-right: 0;
}
#icon{
    margin-right:10vw ;
    float:left;
}

span.guide{
    margin-right:10vw ;
    float:left;
    font-family: 'Noto Serif SC', serif;
    font-size: 30px;
    transition: opacity 0.2s;
}
a{
    color:black;
    transition: all .5s ease;  
}
a.router-link-active{
    color:rgb(130, 130, 130);
}



a:hover{
    color:rgb(111, 184, 186);
}
a:hover::after {
  opacity: 1;
}
img{
    vertical-align:-10%;
}
</style>


