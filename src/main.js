import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueLazyload from "vue-lazyload";
import VueCookie from 'vue-cookie'
import store from './store'
// import env from './env'

const mock = false;
if (mock) {
    require('./mock/api')
}

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// axios.defaults.baseURL = env.baseURL

axios.interceptors.response.use(function (response) {
    let res = response.data;
    let path = location.hash
    if (res.status === 0) {
        return res.data
    } else if (res.status === 10) {
        if (path !== '#/index') {
            window.location.href = '/#/login'
        }
        return Promise.reject(res)
    } else {
        alert(res.msg);
        return Promise.reject(res)
    }
})

Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(VueLazyload, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
