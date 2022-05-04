<template>  
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(img) in arr">
      <img :src = "img.url">
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel{
  width: 1200px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item img{
  height: 300px;
  width: 300px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  width: 600px;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  width: 600px;
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
