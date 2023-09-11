<script setup>
import store from '../store';
import ProductListItem from './ProductListItem.vue';

defineProps({
    setUpdate: Function
})
</script>

<template>
    <div v-if="store.getters.getProducts().length == 0" class="container">
        <h1 class="text-danger text-center">Add Some Products</h1>
    </div>
    <div v-else class="container">
        <h1 class="text-primary text-center">Products</h1>
        <ul class="list-group">
            <ProductListItem 
                v-for="(product, index) in store.getters.getProducts()" 
                :setUpdate="setUpdate" 
                :index="Number(index)" 
                :key="product.id" 
                :product="product" 
            />
        </ul>
    </div>
</template>