export default {
    setProducts(state, payload) {
        state.products = payload
    },
    setProduct(state, payload) {
        state.product = payload
    },
    addToCart(state, { product, quantity }) {
        let productInCart = state.cart.find(item => {
            return item.product.id === product.id
        })
        if (productInCart) {
            productInCart.quantity += quantity;
            return;
        }
        else {
            state.cart.push({ product, quantity })
        }
        this.commit('saveData')
    },
    saveData(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeProductFromCart(state, product) {
        state.cart = state.cart.filter(item => {
            return item.product.id !== product.id
        })
        this.commit('saveData')
    },
    clearCart(state) {
        state.cart = []
        this.commit('saveData')
    }
}