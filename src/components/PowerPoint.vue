
<template>
  <div id="demo" class="carousel slide" data-ride="carousel">
    <!-- 指示符 -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item active"><a @click="ToBookDetail(9)">
        <transition name="ppt-intro">
          <div v-show="showHover1 === true" class="title">
            热门剧集 高分原著
            <p>“爱死机”</p>
          </div>
        </transition>
        <img
          @mouseover="showHover1 = true"
          @mouseout="showHover1 = false"
          src="@/assets/ppt/book1.png"
        />
      </a></div>
      <div class="carousel-item">
        <transition name="ppt-intro">
          <div v-show="showHover2 === true" class="title">
            星球大战
            <p>与今日科幻</p>
          </div>
        </transition>
        <img
          @mouseover="showHover2 = true"
          @mouseout="showHover2 = false"
          src="@/assets/topic/starwar.jpg"
        />
      </div>
      <div class="carousel-item">
        <img
          @mouseover="showHover3 = true"
          @mouseout="showHover3 = false"
          src="@/assets/topic/street.jpg"
        />
      </div>
    </div>

    <!-- 左右切换按钮 -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon" id="leftarrow"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon" id="rightarrow"></span>
    </a>
  </div>
</template>
<style scoped>
#demo {
  top: 30px;
  width: 1500px;
  height: 540px;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 20px;
}
#demo .carousel-item.active {
  border-radius: 20px;
}
#demo .carousel-inner {
  width: 100%;
  border-radius: 20px;
}
#demo .carousel-inner img {
  width: 100%;
}

#leftarrow {
  position: absolute;
  left: 2vw;
}
#rightarrow {
  position: absolute;
  right: 2vw;
}
.title {
  position: absolute;
  margin-left: 0;
  height: 162px;
  margin-top: 400px;
  color: white;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  padding-left: 50px;
  background-color: rgba(255, 255, 255, 0.219);
  background-image: linear-gradient(
    to right,
    #0fc2ef00,
    rgba(255, 255, 255, 0.219)
  );
  width: 1500px;
}
.ppt-intro-enter-active {
  transition: opacity 0.3s;
}
.ppt-intro-enter {
  opacity: 0;
}
.ppt-intro-leave-active {
  transition: opacity 0.3s;
}
.ppt-intro-leave-to {
  opacity: 0;
}
</style>
<script>
export default {
  setup() {},
  data() {
    var showHover1 = false;
    var showHover2 = false;
    var showHover3 = false;
    return {
      showHover1,
      showHover2,
      showHover3,
    };
  },
  methods:{
    ToBookDetail(id) {
      this.$router.push({
        name: "bookdetail",
        query: { id: id },
      });
    },
  }
};
</script>
