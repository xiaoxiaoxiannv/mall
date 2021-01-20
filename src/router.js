import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/Home";
import Index from "@/pages/Index";
import Product from "@/pages/Product";
import Detail from "@/pages/Detail";
import Cart from "@/pages/Cart"
import Order from "@/pages/Order";
import OrderList from "@/pages/OrderList";
import OrderConfirm from "@/pages/OrderConfirm";
import OrderPay from "@/pages/OrderPay";
import Alipay from "@/pages/Alipay";
import Login from "@/pages/Login";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        redirect: '/index',
        children: [
            {path: '/index', component: Index},
            {path: '/product/:id', component: Product},
            {path: '/detail/:id', component: Detail},
        ]
    },
    {path: '/cart', component: Cart},
    {path: '/login', component: Login},
    {
        path: '/order',
        component: Order,
        children: [
            {
                path: 'list',
                component: OrderList
            },
            {
                path: 'confirm',
                component: OrderConfirm
            },
            {
                path: 'pay',
                component: OrderPay
            },
            {
                path: 'alipay',
                component: Alipay
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router