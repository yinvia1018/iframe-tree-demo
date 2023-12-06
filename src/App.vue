<!--
 * @Author: hy yinvia1018@163.com
 * @Date: 2023-11-02 13:57:01
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2023-12-06 10:32:15
 * @FilePath: \IFRAME-tree\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <nav>
    <router-link to="/login">登录</router-link>
  </nav>
  <RouterView />
</template>
<style lang="scss" scoped>
nav {
  float: inline-end;

  a {
    color: black;
  }
}
</style>
