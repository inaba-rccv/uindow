import { ref, watch, type Ref } from "vue";
import type { RadioGroup } from "./radio.type";

export const RadioKey = Symbol('RadioKey');

export const useRadio = (
    initialValue: Ref<string | number>,
    emit: (event: 'update:modelValue', value: string | number) => void    
): RadioGroup => {
    const radioGroupInstance = {
        currentValue: ref(initialValue.value),
        options: []
    }

    watch(() => radioGroupInstance.currentValue.value, (value) => {
        emit('update:modelValue', value);
    })
    watch(() => initialValue.value, (value) => {
        radioGroupInstance.currentValue.value = value
    })

    return radioGroupInstance
}