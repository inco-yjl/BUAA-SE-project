<template>
  <div>
    <div>
    <img src="../assets/user/int.jpg" id = "head_img" alt="">
    <div class = "personG">
        <span>&nbsp;</span>
        <a href="../group/main"> <!--用相对路径跳转，不是文件路径，所以有警告，有空我试试消除0.0-->
        <h2 id = "mypersonworld">我的个人主页</h2>
        </a>  
        <span class = "smallword">&nbsp;发起(3)</span>
        <span class = "smallword">&nbsp;|&nbsp;</span>
        <span class = "smallword">回复(4)</span>
    </div>  
    </div>
  </div> 
</template>
<style>
#head_img {
  height: 120px;
  width: 120px;
  float: left;
  position: relative;
}
#mypersonworld {
  font-style: initial;
  font-weight: bold;
  font-family: "Adobe 宋体 Std L",serif;
  font-size: 30px;
}
.smallword {
  font-size: 18px;
  color: #aaaaaa;
}
.personG{
  position: relative;
  float: left;
  left: 10px;
}
</style>
<script>
export default {
  name: "GroupPerson"
}
</script>

<style scoped>

</style>