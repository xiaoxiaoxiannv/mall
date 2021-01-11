import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000

axios.interceptors.response.use(function (response){
  let result = response.data;
  if(result.status === 0){
    return result.data
  }else if(result.status === 10){
    window.location.href = '/#/login'
  }else{
    alert(result.message)
  }
})
//Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
