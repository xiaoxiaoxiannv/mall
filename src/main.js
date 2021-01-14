import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
// import env from './env'

const mock = false;
if(mock){
  require('./mock/api')
}

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// axios.defaults.baseURL = env.baseURL

axios.interceptors.response.use(function (response){
  let res = response.data;
  if(res.status === 0){
    return res.data
  }else if(res.status === 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})

Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
