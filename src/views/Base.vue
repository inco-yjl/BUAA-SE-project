<template>
  <div id="base">
    <navigation v-if="notLogin"></navigation>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>

<script>
import navigation from '@/components/Navigation'
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// 设置用户权限
var isAdmin = false;
if (localStorage.getItem('adminTag')) {
    var adminTag = localStorage.getItem('adminTag');
    if (adminTag === '0') {
        isAdmin = true;
    }
}

export default {
    name: 'base',
    components: {
        navigation
    },
    provide() {
        // 父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
        return {
            reload: this.reload
        };
    },

    setup() {
        const route = useRoute();
        const currentTab = ref([route.path]);
        return {
            currentTab
        };
    },
    data() {
        return {
            isRouterAlive: true, // 控制视图是否显示的变量
            currentScreenWidth: window.screen.availWidth - 17,
            currentScreenHeight: window.screen.availHeight,
            currentScaleRatio: 1.0,
            currentLeftOffset: '0%',
            currentTopOffset: '0px',
            isAdmin: isAdmin, // 是否有权限访问页面
            notLogin:true,
            msg:'',
        };
    },
    mounted() {
        // 根据网页可见区域宽自动缩放屏幕
        window.onresize = () => {
            return (() => {
                this.currentScreenWidth = window.screen.availWidth - 17;
                this.currentScreenHeight = window.screen.availHeight;
            })()
        }
    },
    watch: {
        currentScreenWidth: {
            handler: function (val, oldVal) {
                console.log('检测到屏幕分辨率发生变化，当前宽度：', val);
                if (val <= 1920) { // 小于设计稿尺寸的屏幕大小
                    // 第一步：通过scale改变整个页面的尺寸
                    this.currentScaleRatio = val / 1920;
                    // 第二步：解决横向偏移量问题
                    // 注意，默认存在右侧的纵向滚动条，因此可显示区域实际宽度为 val =（window.screen.availWidth - 17）px
                    this.currentLeftOffset = '-' + ((1920 - val) / 2 / val * 100) + '%';
                    // 第三步：解决纵向偏移量问题
                    this.currentTopOffset = '-' + ((1080 - 1080 * this.currentScaleRatio) / 2) + 'px';
                } else { // 大于设计稿尺寸的屏幕大小
                    // 第一步：通过scale改变整个页面的尺寸
                    this.currentScaleRatio = val / 1920;
                    // 第二步：解决横向偏移量问题
                    this.currentLeftOffset = ((val - 1920) / 2 / val * 100) + '%';
                    // 第三步：解决纵向偏移量问题
                    this.currentTopOffset = ((1080 * this.currentScaleRatio - 1080) / 2) + 'px';
                }
                // console.log('检测到屏幕尺寸发生变化', val, this.currentScaleRatio, this.currentLeftOffset, this.currentTopOffset);
            },
            immediate: true
        },
         '$route':function(){
        if((this.$route.name=='login') ||(this.$route.name=='register')){
          this.notLogin=false;
        }
        else{
          this.notLogin=true;
        }
      }
    },
    methods: {
        reload() {
            console.log('come in2');
            this.isRouterAlive = false; // 先关闭，
            this.$nextTick(function () {
                this.isRouterAlive = true; // 再打开
            });
        },

        // 点击菜单，路由跳转,注意的是当点击MenuItem才会触发此函数
        menuClick({ item, key, keyPath }) {
            // 获取到当前的key,并且跳转
            this.$router.push({
                path: item.index
            });
            console.log(item.index);
        }
    }
};

</script>