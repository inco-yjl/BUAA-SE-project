<template>
<div class = "body">
  <a href="../admin/uploadbook"
  ><span class="guide" style="margin-right: 50px"
  ><img class = "img"
      alt="logo" style="margin-right: 5px"
      src="@/assets/icon/upload1.png"
      width="50px" />上传图书</span
  ></a>
  
  <a href="../admin/uploadmovie"
  ><span class="guide" style="margin-right: 50px"
  ><img class = "img" style="margin-right: 5px"
      id="bookimg"
      src="@/assets/icon/upload2.png"
      width="30px"
  />上传电影</span
  ></a>
  
  <a href="../admin/uploadtele"
  ><span class="guide" style="margin-right: 50px"
  ><img class = "img" style="margin-right: 5px" src="@/assets/icon/upload3.png" width="30px" />上传电视剧</span
  ></a>
  
  <a href="../admin/uploadtopic" 
  ><span class="guide" style="margin-right: 50px"
  ><img class = "img" style="margin-right: 5px" src="@/assets/icon/uoload4.png" width="30px" />上传话题</span
  ></a>
  
  <a href="../admin/uploadgroup"
  ><span class="guide" style="margin-right: 50px"
  ><img class = "img"
      id="videoimg"
      src="@/assets/icon/upload5.png"
      width="30px"
  />新建小组</span
  ></a>
</div>
</template>

<script>
export default {
  name: "admin"
}
</script>

<style scoped>
.img {
  width: 50px;
  height: 50px;
}
.body {
  position: absolute;
  width: 100%;
  height: 60px;
  margin-bottom: 0px;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  font-weight: bolder;
  box-shadow: 0px 2px 4px #888888;
}
.guide {
  position: relative;
  top: 5px;
  margin-right: 200px;
  float: left;
  font-family: "Noto Serif SC", serif;
  font-size: 20px;
  transition: opacity 0.2s;
}
a {
  color: black;
  transition: all 0.5s ease;
}
a.router-link-active {
  color: rgb(130, 130, 130);
}
a:hover {
  color: rgb(111, 184, 186);
}
a:hover::after {
  opacity: 1;
}
</style>