import { createRouter, createWebHistory } from "vue-router";

import HomePage from './components/layout/HomePage.vue'
import ProductDetail from './components/products/ProductDetail.vue'
import CartItem from './components/products/CartItem.vue'
import CheckOut from './components/products/CheckOut.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/product/:id', component: ProductDetail, props: true, name: 'productDetail' },
        { path: '/cart', component: CartItem },
        { path: '/checkout', component: CheckOut },

    ]


})

export default router
