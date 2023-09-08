<script setup>
import store from '../store';
import ProductListItem from './ProductListItem.vue';
// const products = store.getters.getProducts();
</script>

<template>
    <div v-if="store.getters.getProducts().length == 0" class="container">
        <h1 class="text-danger text-center">Add Some Products</h1>
    </div>
    <div v-else class="container">
        <h1 class="text-primary text-center">Products</h1>
        <ul class="list-group">
            <ProductListItem v-for="product in store.getters.getProducts()" :product="product" />
        </ul>
    </div>
</template>