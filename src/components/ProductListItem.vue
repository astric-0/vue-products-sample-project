<script setup>
import store from '../store'
import { productInfoAlert } from '../assets/alerts';

const props = defineProps({
    product: Object,
    setUpdate: Function,
    index: Number
});

</script>

<template>
    <li class="list-group-item border-0">
        <div class="row">
            <h4 class="col-8 text-break p-2 shadow m-0 border rounded">{{ product.title }}</h4>
            <div class="col btn-group">
                <button class="btn btn-outline-danger" @click="store.actions.removeProduct(product.id)">
                    <font-awesome-icon icon="fa-solid fa-trash" />
                </button>
                <button class="btn btn-outline-info" @click="productInfoAlert(product)">
                    <font-awesome-icon icon="fa-solid fa-info" />
                </button>
                <button class="btn btn-primary" @click="setUpdate(true, index, product)">
                    <font-awesome-icon icon="fa-solid fa-check" />
                </button>
            </div>
        </div>
    </li>
</template>