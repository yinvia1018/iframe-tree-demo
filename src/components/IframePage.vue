<!--
 * @Author: hy yinvia1018@163.com
 * @Date: 2023-11-07 14:15:31
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2023-12-06 10:49:16
 * @FilePath: \FEDA\src\components\IframePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <iframe id="iframe" :src="props.data" name="sendMessage" width="1000" height="900"></iframe>
</template>
  
<script lang="ts" setup>
const props = defineProps({
  data: { type: String, required: true },
})

var iframe: any = document.getElementById("iframe");
console.log('iframe', iframe)

</script>
<style scoped></style>
  