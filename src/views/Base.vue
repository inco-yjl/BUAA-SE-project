<template>
  <div  id="base">
      <template v-if="navigate">
      <div  id="navigation">
        <router-link id="Tohome" to="/home"><span id="icon"><img id="sitelogo" alt="logo" src="@/assets/icon/logo.png" width=50px ></span></router-link>
        <router-link to="/book"><span  class="guide"><img id="bookimg" src="@/assets/icon/book.png" width=30px>图书</span></router-link>
        <router-link to="/video"><span  class="guide"><img id="videoimg" src="@/assets/icon/video.png" width=30px>影视</span></router-link>
        <router-link to="/GroupHome"><span  class="guide"><img id="videoimg" src="@/assets/icon/group.png" width=30px>小组</span></router-link>
        <router-link to="/topic"><span  class="guide"><img id="videoimg" src="@/assets/icon/topic.png" width=30px>话题</span></router-link>
        
        <span id="login">
             <el-col :span="25">
                <span class="demonstration"><img src="@/assets/user/int.png" width=30px></span>
                <el-dropdown trigger="click">
                     <span class="el-dropdown-link">用户名<i class="el-icon-arrow-down el-icon--right"></i></span>
                    <el-dropdown-menu slot="dropdown">
                        <a href = "/person"><el-dropdown-item icon="el-icon-user-solid">个人主页</el-dropdown-item></a>
                        <el-dropdown-item icon="el-icon-chat-line-round">我的消息</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-switch-button" @click="logout">退出账号</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </span> 
        </div>
        </template>
        <router-view :key="this.$route.path"></router-view>
  </div>
</template>

<script>
export default ({
   data () {
       var navigate=true;
    return {
      navigate,
    }
  },
  methods: {
    // 初始化
    isLogin (msg) {
      this.navigate=false;
    },
    logout(){
      this.$router.replace({path:'/login'});
    }
  }
}
)
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&display=swap');
#navigation{
    position: absolute;
    width:100%;
    height:70px;
    margin-bottom: 0px;
    padding-top:0,0,0,0;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    font-weight:bolder;
    box-shadow:0px 2px 4px #888888;
}
#line{
    position: absolute;
    top:65px;
    left: 0;
    right: 0;
}
#login{
    position: relative;
    top:20px;
    float:right;
    margin-right:0;
    padding-right: 0;
}
#icon{
    position: relative;
    top:15px;
    left:30px;
    margin-right:200px ;
    float:left;
}

span.guide{
    position: relative;
    top:14px;
    margin-right:200px ;
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
<style>
div{
  cursor:default;
}
a{
  cursor: pointer;
}
button{
  cursor: pointer;
}
</style>


