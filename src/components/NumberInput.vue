<script setup>
const props = defineProps({
    label: String,
    required: Boolean,
    model: Object,
    field: String,
    addErrorCB: Function,
    removeErrorCB: Function,
    error: {
        type: String,
        default: 'Field is required'
    }
})

const handleError = _ => {
    if (props.required) {
        const value = (props.field + ' ' + props.error).toLowerCase()
        if(!props.model[props.field] && props?.addErrorCB)
            props.addErrorCB(value);
        else if (props?.removeErrorCB)
            props.removeErrorCB(value);
    }
}

handleError();
</script>

<template>
    <div class="mt-3 form-group">
        <label class="text-primary">{{ label + (required === true ? '*' : '') }}</label>
        <input type="number" v-model="model[field]" @input="handleError()" class="form-control" />

        <p v-if="!model[field] && error && required" class="mt-2 text-center text-danger">
            {{ error }}
        </p>
    </div>
</template>