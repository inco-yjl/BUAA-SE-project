<template>
<div id="hit">
     <VueSlickCarousel  :dots="true" :useCSS="true" :infinite="false" :speed=500 :slidesToShow=8 :slidesToScroll=8 :touchThreshold=5>
  <span><img class="item1" src="../assets/img/1.jpg">1</span>
  <span><img class="item2" src="../assets/img/2.jpg">2</span>
  <span><img class="item3" src="../assets/img/3.jpg">3</span>
  <span><img class="item4" src="../assets/img/4.jpg">4</span>
  <span><img class="item5" src="../assets/img/5.jpg">5</span>
  <span><img class="item6" src="../assets/img/1.jpg">6</span>
  <span><img class="item7" src="../assets/img/2.jpg">7</span>
  <span><img class="item8" src="../assets/img/3.jpg">8</span>
  <span><img class="item9" src="../assets/img/4.jpg">9</span>
  <span><img class="item10" src="../assets/img/5.jpg">10</span>
</VueSlickCarousel>
</div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
}


</script>
<style scoped>
#hit img{
  height:20vh;
  width:15vh;
  border-style:solid;
  border-color:aliceblue;
  border-width:3px;
}
#hit{
  width:70vw;
  margin-right: 0;
  margin-top:0;
}
button.slick-prev:before, button.slick-next:before {
  color:rgb(90, 87, 87)!important;
  margin:0,10px!important;
}
</style>