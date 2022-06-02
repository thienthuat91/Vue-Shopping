import { createStore } from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

let cart = window.localStorage.getItem('cart')

const store = createStore({
    state: {
        products: [],
        product: null,
        cart: cart ? JSON.parse(cart) : [],
    },
    getters,
    mutations,
    actions

})

export default store