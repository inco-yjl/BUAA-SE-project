<template>
  <div>
  <div style="border-top: 1px solid #d3dce6;width: 400px;height: 10px; float: left;top: 30px; position:relative;"></div>
  <div class = "groupusually">
    <h2 style="text-align: left" class = "title">常去的小组</h2>
    <div>
      <ul>
        <li>
          <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
            <div class="normal_active"> <span class="massage">能看看你的os吗</span> </div>
            <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/1.jpg"> </div>
          </div>
        </li>
        <li>
          <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
            <div class="normal_active"> <span class="massage">原神</span> </div>
            <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/2.jpg"> </div>
          </div>
        </li>
        <li>
          <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
            <div class="normal_active"> <span class="massage">龙斗士</span> </div>
            <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/3.jpg"> </div>
          </div>
        </li>
        <li>
          <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
            <div class="normal_active"> <span class="massage">双人成行</span> </div>
            <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/4.jpg"> </div>
          </div>
        </li>
        <li>
          <div onmouseout = "this.className = 'normal'" onmouseover="this.className = 'heigh'" class = "normal">
            <div class="normal_active"> <span class="massage">想养花花草草</span> </div>
            <div class="heigh_active"> <img class = "hidden_img" src = "@/assets/img/5.jpg"> </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div> 
</template>

<script>
export default {
  name: "GroupUsuallyCome"
}
</script>

<style scoped>
.groupusually{
  float: left;
  position: relative;
  top: 30px;
  width: 100%;
}
.normal_active{
  height: 40px;
  overflow: hidden;
  transition: 0.5s;
}
.heigh_active {
  height: 300px;
  overflow: hidden;
  transition: 0.5s;
}
.heigh{
  height: 300px;
  overflow: hidden;
  transition: 0.5s;
}
.normal {
  height: 40px;
  overflow: hidden;
  transition: 0.5s;
}
.massage{
  font-size: 25px;
  font-family: "Adobe 宋体 Std L",serif;
  font-weight: bold;
}
.hidden_img{
  height: 300px;
  width: 200px;
}
</style>