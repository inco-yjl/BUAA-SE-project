<template>
  <div id="bookpage">
    <search></search>
    <div id="book-page-hotbooks">
      <div class="bookpage-hit">
        <VueSlickCarousel
          :dots="true"
          :useCSS="true"
          :infinite="false"
          :speed="500"
          :slidesToShow="8"
          :slidesToScroll="8"
          :touchThreshold="5"
        >
          <div class="flex-book-display">
            <div>
              <img class="book-display" src="@/assets/img/1.jpg" />
                <div class="book-display-info">
                    <span class="book-display-title">《焦虑的人》</span><br>
                    <span class="book-display-writer">[瑞典]xxx·xxx</span>
                </div>
            </div>
             <div>
              <img class="book-display" src="@/assets/img/1.jpg" />
                <div class="book-display-info">
                    <span class="book-display-title">《焦虑的人》</span><br>
                    <span class="book-display-writer">[瑞典]xxx·xxx</span>
                </div>
            </div>
          </div>
          <div><img class="book-display" src="@/assets/img/1.jpg" /></div>
          <div><img class="book-display" src="@/assets/img/1.jpg" /></div>
          <div><img class="book-display" src="@/assets/img/1.jpg" /></div>
          <div><img class="book-display" src="@/assets/img/1.jpg" /></div>
          <div><img class="book-display" src="@/assets/img/1.jpg" /></div>
          <div><img class="book-display" src="@/assets/img/1.jpg" /></div>
          <div><img class="book-display" src="@/assets/img/1.jpg" /></div>
          <div><img class="book-display" src="@/assets/img/1.jpg" /></div>
          <div><img class="book-display" src="@/assets/img/1.jpg" /></div>
        </VueSlickCarousel>
      </div>
    </div>
    <div id="book-page-highbooks"></div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import search from "@/components/SelectSearch.vue";
export default {
  name: "MyComponent",
  components: {
    VueSlickCarousel,
    search,
  },
};
</script>

<style scoped>
#bookpage {
  width: 1600px;
  padding-left: 100px;
}
.bookpage-hit {
  width: 1070px;
  margin-top: 0;
  margin-bottom: 50px;
}
.flex-book-display{
    display: flex;
}
.book-display {
  height: 170px;
  width: 120px;
  border-style: solid;
  border-color: aliceblue;
  border-width: 3px;
}
</style>