import axios from "axios"
export default {
    async getProducts(context) {
        await axios.get('https://fakestoreapi.com/products/')
            .then(response => {
                context.commit('setProducts', response.data)
            })
    },
    async getProduct(context, productId) {
        await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                context.commit('setProduct', response.data)
            })
    },

    addProductToCart(context, { product, quantity }) {
        context.commit('addToCart', { product, quantity })

    },
    removeProductFromCart(context, product) {
        context.commit('removeProductFromCart', product)
    },
    clearCart(context) {
        context.commit('clearCart')
    }
}