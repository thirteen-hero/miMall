import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            redirect:'/index',
            component:Home,
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index
                },
                {
                    path:'/product/:id',
                    name:'product',
                    component:(resolve=>require(['./pages/product.vue']),resolve)
                },
                {
                    path:'/detail/:id',
                    name:'detail',
                    component:resolve=>require(['./pages/detail.vue'],resolve)
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component:resolve=>require(['./pages/login.vue'],resolve)
        },
        {
            path:'/cart',
            name:'cart',
            component:resolve=>require(['./pages/cart.vue'],resolve)
        },
        {
            path:'/order',
            name:'order',
            component:resolve=>require(['./pages/order.vue'],resolve),
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:resolve=>require(['./pages/orderList.vue'],resolve)
                },
                {
                    path:'confirm',
                    name:'order-confirm',
                    component:resolve=>require(['./pages/orderConfirm.vue'],resolve)
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:resolve=>require(['./pages/orderPay.vue'],resolve)
                },
                { 
                    path:'alipay',
                    name:'alipay',
                    component:resolve=>require(['./pages/aliPay.vue'],resolve)
                }
            ]
        }
    ]
})