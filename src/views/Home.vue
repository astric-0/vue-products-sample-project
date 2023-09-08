<script setup>
import InputProduct from '../components/InputProduct.vue';
import ProductList from '../components/ProductList.vue';
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-12 col-md-7">
            <InputProduct />
        </div>

        <div class="col-12 col-md-3">
            <ProductList />
        </div>
    </div>
</template>