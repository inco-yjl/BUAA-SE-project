import axios from 'axios'
import router from '@/router'

axios.defaults.baseURL = 'api/'
// 如果请求话费了超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = 10800000;
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false;
// 允许跨域


export default axios
