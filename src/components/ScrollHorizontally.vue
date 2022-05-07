<template>  
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(img) in arr">
      <img :src = "img.url">
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel{
  width: 600px;
  height: 600px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
  height: 500px;
}
.el-carousel__item img{
  height: 600px;
  width: 500px;
}
.el-carousel__item:nth-child(2n) {
  width: 300px;
  height: 500px;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  width: 300px;
  height: 500px;
}
</style>

<script>
export default {

  data(){
    return{
      arr:[
        {
          url:require("../assets/img/1.jpg")
        },
        {
          url:require("../assets/img/2.jpg")
        },
        {
          url:require("../assets/img/3.jpg")
        },
        {
          url:require("../assets/img/4.jpg")
        },
        {
          url:require("../assets/img/5.jpg")
        }
      ]
    }
  },

}
</script>
