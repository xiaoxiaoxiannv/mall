import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/Home";
import Index from "@/pages/Index";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        redirect: '/index',
        children: [
            {path: '/index', component: Index},
            {path: '/product/:id', component: ()=>import('./pages/Product.vue')},
            {path: '/detail/:id', component: ()=>import('./pages/Detail.vue')},
        ]
    },
    {path: '/cart', component: ()=>import('./pages/Cart.vue')},
    {path: '/login', component: ()=>import('./pages/Login.vue')},
    {
        path: '/order',
        component: ()=>import('./pages/Order.vue'),
        children: [
            {
                path: 'list',
                component: ()=>import('./pages/OrderList.vue')
            },
            {
                path: 'confirm',
                component: ()=>import('./pages/OrderConfirm.vue')
            },
            {
                path: 'pay',
                component: ()=>import('./pages/OrderPay.vue')
            },
            {
                path: 'alipay',
                component: ()=>import('./pages/Alipay.vue')
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router