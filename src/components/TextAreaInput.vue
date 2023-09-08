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
        default: "Field is required"
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
    <div class="form-group mt-3">
        <label class="text-primary">{{ label + (required ? '*' : '')}}</label>
        <textarea v-model="model[field]" @input="handleError()" class="form-control" rows="4"></textarea>
        <p v-if="required && !model[field]" class="text-danger text-center mt-2">
            {{ error }}
        </p>
    </div>
</template>