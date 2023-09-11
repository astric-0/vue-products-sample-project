<script setup>
import { ref } from 'vue';

import InputProduct from '../components/InputProduct.vue';
import ProductList from '../components/ProductList.vue';

const init = {
    id: '',
    title: '',
    description: '',
    brand: '',
    category: '',
    color: 'Blue',
    size: []
}

const initProduct = ref({ ...init });

const update = ref({
    check: false,
    index: -1
});

function setUpdate (check = false, index, product = {}) { 
    update.value = { check, index: (check ? index : -1) };
    initProduct.value = check ? { ...product } : { ...init }; 
}
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-12 col-md-6">
            <InputProduct :init="initProduct" :update="update" :setUpdate="setUpdate" :key="update" />
        </div>

        <div class="col-12 col-md-5">
            <ProductList :setUpdate="setUpdate" />
        </div>
    </div>
</template>