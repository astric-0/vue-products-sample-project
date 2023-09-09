<script setup>
import InputProduct from '../components/InputProduct.vue';
import ProductList from '../components/ProductList.vue';
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-12 col-md-6">
            <InputProduct />
        </div>

        <div class="col-12 col-md-5">
            <ProductList />
        </div>
    </div>
</template>