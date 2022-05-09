<template>
<div class = "body">
  <div class="head_title"><span style="text-align: left; background: yellow">我的小组</span></div>
  
  <div class = "left">
  </div>
  <div style="border-left: 3px solid #d3dce6;width: 0;height: 500px; float: left;left: 25px; position:relative;"></div>
  <div class = "right">
  </div>  
</div>
</template>

<script>
export default {
  name: "group"
}
</script>

<style>
.body{
  position: absolute;
  top: 150px;
  height: 1600px;
  width: 1690px;
  left: 100px;
}
.head_title{
  position: relative;
  left: -100px;
  width: 1690px;
  height: 200px;
  background: #2C8DF4;
  text-align: left;
}
.left{
  float: left;
  position: relative;
  width: 875px;
  height: 100%;
}
.right{
  float: left;
  position: relative;
  width: 575px;
  height: 100%;
  left: 50px;
}
</style>