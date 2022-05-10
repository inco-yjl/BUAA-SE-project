<template>
  <div>
    <keep-alive>
      <router-view
        v-if="$route.meta.flag"
      />
    </keep-alive>
    <router-view
      v-if="!$route.meta.flag"
    />
  </div>
</template>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
<script>

// 设置用户权限
var isAdmin = false;
if (localStorage.getItem('adminTag')) {
    var adminTag = localStorage.getItem('adminTag');
    if (adminTag === '0') {
        isAdmin = true;
    }
}

export default {
    name: 'app',
    data() {
        return {
            isAdmin: isAdmin, // 是否有权限访问页面
            notLogin:true,
            msg:'',
        };
    }
};

</script>