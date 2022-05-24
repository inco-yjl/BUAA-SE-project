import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './styles/font.less'
import user from "./store/user";
import './styles/globalbackground.css'
import axios from 'axios'
Vue.use(ElementUI);


Vue.config.productionTip = false

Vue.prototype.$axios = axios;
axios.defaults.baseURL = "";

// add token into headers
axios.interceptors.request.use(
    config => {
      const userInfo = user.getters.getUser(user.state());
      if (userInfo) {
        config.headers.Authorization = userInfo.user.Authorization;
      }
      return config;
    },
    error => {
      console.log("error");
      return Promise.reject(error);
    }
);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

