<!--
 * @Author: hy yinvia1018@163.com
 * @Date: 2023-11-27 14:11:07
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2023-12-06 10:50:18
 * @FilePath: \IFRAME-tree -使用本地的html\src\components\CustomInput.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <input :value="modelValue" @input="updateModelValue" :required="required" :readonly="readonly">
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    props: {
        modelValue: {
            type: String,
            default: undefined,
        },
        required: {
            type: Boolean,
            default: undefined,
        },
        readonly: {
            type: Boolean,
            default: undefined
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const inputValue = ref(props.modelValue);
        const updateModelValue = (event) => {
            inputValue.value = event.target.value;
            emit('update:modelValue', inputValue.value);
        };
        return {
            inputValue,
            updateModelValue,
        };
    },
});
</script>
  
<style scoped>
/* 可以添加一些样式 */
</style>