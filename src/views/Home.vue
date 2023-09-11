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

const update = ref(false);

const componentKey = ref(1);

function setUpdate (value = false, product = { ...init }) { 
    update.value = value;
    initProduct.value = value ? { ...product } : { ...init }; 
    componentKey.value += 1;   
}
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-12 col-md-6">
            <InputProduct :init="initProduct" :update="update" :setUpdate="setUpdate" :key="componentKey" />
        </div>

        <div class="col-12 col-md-5">
            <ProductList :setUpdate="setUpdate" />
        </div>
    </div>
</template>