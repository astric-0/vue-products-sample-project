<script setup>
import store from '../store'

const props = defineProps({
    product: Object
});

</script>

<template>
    <li class="list-group-item border-0">
        <div class="row">
            <h4 class="col-8 p-2 shadow m-0 border rounded">{{ product.title }}</h4>
            <div class="col btn-group">
                <button 
                    class="btn btn-outline-danger" 
                    @click="store.actions.removeProduct(product.id)"
                >
                    <font-awesome-icon icon="fa-solid fa-trash"/>
                </button>
                <button class="btn btn-primary">
                    <font-awesome-icon icon="fa-solid fa-check" />
                </button>
            </div>
        </div>
    </li>
</template>