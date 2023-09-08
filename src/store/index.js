import { reactive } from 'vue'
import { getProducts, setProducts } from '../assets/product-keeper'

const store = ({
    state: reactive({ products: [] }),

    getters: {
        getProducts() {
            return store.state.products;
        }
    },

    mutations: {
        addProduct(value) {
            if (value) {
                store.state.products.push(value)
                setProducts(store.state.products)
            }
        }
    },

    actions: {
        initaliseProducts() { 
            store.state.products = getProducts();
        },

        resetProducts() {
            store.state.products = {};
            setProducts(store.state.products)
        }
    }
})

export default store;