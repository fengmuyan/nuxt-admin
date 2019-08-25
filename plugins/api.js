import Vue from 'vue'
import axios from '@/axios/index.js'
Vue.prototype.$axios = axios
Vue.use(axios)
export default axios