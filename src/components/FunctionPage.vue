<!--
 * @Author: hy yinvia1018@163.com
 * @Date: 2023-11-07 13:57:01
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2023-11-17 18:20:04
 * @FilePath: \IFRAME\src\components\FunctionPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @tab-remove="removeTab"
    @tab-click="handleTabClick">
    <el-tab-pane v-for="item in editableTabs" :key="item.name" :name="item.name" :label="item.name">
      <!-- {{ item.url }} -->
      <IframePage :data="item.path"></IframePage>
    </el-tab-pane>

  </el-tabs>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import store from '@/store';
import IframePage from './IframePage.vue';
// 计算属性的完整写法，set函数用于修改vuex中的数据
const editableTabsValue = computed({
  get: () => store.state.clickRow,
  set: (value) => {
    store.commit('setClickRow', value);
  }
})

const editableTabs = computed({
  get: () => store.state.clickRowArray,
  set: (value) => {
    store.commit('setClickRowArray', value);
  }
})

const removeTab = (targetName: string) => {
  console.log('targetName', targetName);
  let tabs = store.state.clickRowArray
  let activeName = editableTabsValue.value
  console.log('开始移除editableTabs', editableTabs);
  console.log('开始移除editableTabsValue', editableTabsValue);
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }
  store.commit('setClickRow', activeName)
  const x = tabs.filter((tab) => tab.name !== targetName)
  store.commit('setClickRowArray', x)
}

function handleTabClick(pane: any, ev: any) {
  console.log('handleTabClick')
}
</script>
<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>

