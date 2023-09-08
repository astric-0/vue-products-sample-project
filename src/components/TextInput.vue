<script setup>
const props = defineProps({
    label: String,
    required: Boolean,
    error: {
        type: String,
        default: "Field is required"
    },
    addErrorCB: Function,
    removeErrorCB: Function,
    model: Object,
    field: String
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
    <div class="form-group mt-3">
        <label class="text-primary" >{{ label + (required === true ? '*' : '')}}</label>
        <input v-model="model[field]" type="text" class="form-control" @input="handleError()" />

        <p v-if="!model[field] && error && required" class="mt-2 text-center text-danger">
            {{ error }}
        </p>
    </div>
</template>