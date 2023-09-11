<script>
const initReset = {
    id: '',
    title: '',
    description: '',
    brand: '',
    category: '',
    color: 'Blue',
    size: []
}
</script>

<script setup>
import { ref } from 'vue';

import store from '../store';
import { errorAlert, errorListAlert, successAlert } from '../assets/alerts';
import TextInput from './TextInput.vue';
import ColorInput from './ColorInput.vue';
import NumberInput from './NumberInput.vue';
import CheckBoxInput from './CheckBoxInput.vue';
import TextAreaInput from './TextAreaInput.vue';

const props = defineProps({
    init: {
        type: Object,
        default: { ...initReset }
    },

    update: {
        type: Object,
        default: {}
    },

    setUpdate: Function
})

const product = ref({ ...props.init })

const errorList = ref([]);

const pushErrorList = error => !errorList.value.includes(error) && errorList.value.push(error);

const removeError = error => {
    errorList.value = errorList.value.includes(error)
        ? errorList.value.filter(item => item !== error)
        : errorList.value;
}

const colors = [
    {
        title: 'Blue',
        class: 'primary'
    },
    {
        title: 'Red',
        class: 'danger'
    },
    {
        title: 'Green',
        class: 'success'
    },
    {
        title: 'Dark',
        class: 'dark'
    }
]

const sizes = [
    {
        title: 'Small',
        value: '1x'
    },
    {
        title: 'Medium',
        value: '2x'
    },
    {
        title: 'Big',
        value: '3x'
    },
    {
        title: 'Large',
        value: '4x'
    }
]

const handleSubmit = _ => {
    if (errorList.value.length > 0)
        return errorListAlert(undefined, errorList.value);

    if (!props.update.check && store.getters.getProducts().find(item => item.id == product.value.id))
        return errorAlert('Product ID already exists',);

    if (props.update.check === true) {
        store.mutations.updateProduct(product, props.update.index);
        successAlert('Product Updated');
        props.setUpdate();
    }
    else {
        store.mutations.addProduct(product.value);
        successAlert('Product Saved');
    }

    product.value = { ...initReset };
}

const handleReset = _ => {
    product.value = { ...initReset };
    props.update.check && setUpdate();
}

</script>

<template>
    <div class="container bg-light rounded shadow-lg p-4 mt-4">
        <h2 class="text-center text-primary">Product Form</h2>

        <TextInput label="Product Title" :model="product" field="title" :addErrorCB="pushErrorList"
            :removeErrorCB="removeError" required />

        <NumberInput label="Product Number" :model="product" field="id" :addErrorCB="pushErrorList"
            :removeErrorCB="removeError" required />

        <TextInput label="Product Brand" :model="product" field="brand" :addErrorCB="pushErrorList"
            :removeErrorCB="removeError" required />

        <TextInput label="Product Category" :model="product" field="category" :addErrorCB="pushErrorList"
            :removeErrorCB="removeError" required />

        <div class="row">
            <div class="col">
                <ColorInput label="Product Color" :model="product" field="color" :colors="colors"
                    :addErrorCB="pushErrorList" :removeErrorCB="removeError" required />
            </div>

            <div class="col">
                <CheckBoxInput label="Product Size" :model="product" field="size" :addErrorCB="pushErrorList"
                    :removeErrorCB="removeError" :checks="sizes" required />
            </div>
        </div>

        <TextAreaInput label="Product Description" :model="product" field="description" :addErrorCB="pushErrorList"
            :removeErrorCB="removeError" required />

        <button class="mt-3 w-100 btn btn-outline-primary" @click="handleSubmit()">
            {{ update.check ? 'Update Product' : 'Add Product' }}
        </button>
        <button class="mt-2 w-100 btn btn-outline-danger" @click="handleReset()">
            Reset
        </button>
    </div>
</template>