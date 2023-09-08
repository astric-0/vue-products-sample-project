<script setup>
const props = defineProps({
    label: String,
    model: Object,
    field: String,
    error: {
        type: String,
        default: "Field is requird"
    },
    checks: Array,
    required: Boolean,
    addErrorCB: Function,
    removeErrorCB: Function
})

const btnStyle = (check) => `btn btn-outline-primary ${props.model[props.field].includes(check.value) ? 'active' : ''}`
const handleChecks = check => {
    const { field } = props;
    if (props.model[field].includes(check.value))
        props.model[field] = props.model[field].filter(item => item !== check.value)
    else
        props.model[field].push(check.value)
    handleError();
}

const handleError = _ => {
    if (props.required) {
        const value = (props.field + ' ' + props.error).toLowerCase();
        if (props.model[props.field].length == 0 && props?.addErrorCB)
            props.addErrorCB(value);
        else if (props?.removeErrorCB)
            props.removeErrorCB(value);
    }
}

handleError();
</script>

<template>
    <div class="form-group mt-3">
        <label class="text-primary">{{ label + (required === true ? '*' : '') }}</label>

        <div class="d-flex">
            <div class="w-100 btn-group">
                <button v-for="check in checks" :class="btnStyle(check)" @click="handleChecks(check)">
                    {{ check.title }}
                </button>
            </div>
        </div>

        <p v-if="required && model[field].length === 0" class="text-danger text-center mt-2">
            {{ error }}
        </p>
    </div>
</template>