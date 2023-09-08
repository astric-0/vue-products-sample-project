<script setup>
    const props = defineProps({
        label: String,
        colors: Array,
        model: Object,
        field: String,
        error: {
            type: String,
            default: "Field is required"        
        },
        addErrorCB: Function,
        removeErrorCB: Function,
        required: Boolean
    })

    const btnStyle = color => "btn btn-outline-" + color.class + ' ' + (props?.model?.[props?.field] === color.title ? 'active' : '')

    const handleColor = color => {
        const { title } = color;
        props.model[props.field] = props.model[props.field] === title ? '' : title;
        handleError();
    } 

    const handleError = _ => {
        if (props.required) {
            const value = (props.field + ' ' + props.error).toLowerCase();
            if(!props.model[props.field] && props?.addErrorCB)
                props.addErrorCB(value);
            else if (props?.removeErrorCB)
                props.removeErrorCB(value);
        }
    }

handleError();
</script>

<template>
    <div v-if="colors" class="form-group mt-3">
        <label class="text-primary">{{ label + (required === true ? '*' : '') }}</label>
        <div class="d-flex">
            <div  class="w-100 btn-group" role="group">
                <button 
                    v-for="color in colors" 
                    :class="btnStyle(color)"
                    @click="handleColor(color)"
                >
                        {{ color.title }}
                </button>
            </div>
        </div>
        <p v-if="required && !model[field]" class="mt-2 text-danger text-center">
            {{ error }}
        </p>
    </div>
</template>