<!--
 * @Author: hy yinvia1018@163.com
 * @Date: 2023-12-06 10:06:07
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2023-12-06 10:50:54
 * @FilePath: \iframe-tree-demo\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <div class="left">
      <!-- <TableBar></TableBar> -->
      <TreeBar :datas="state.treeData" @on-click="change"></TreeBar>
    </div>
    <div class="right">
      <!-- <div @click="handleTest">这里是主页</div> -->
      <FunctionPage></FunctionPage>
    </div>
  </div>
</template>

<script setup lang="ts">
import TableBar from '@/components/TableBar.vue';
import { computed, reactive } from "vue";
import axios from 'axios';
import store from '@/store';
import FunctionPage from '@/components/FunctionPage.vue';
import TreeBar from '@/components/TreeBar.vue';
import router from '@/router';
// axios.post('/api/upload').then(res => {
//   console.log('res', res)
//   console.log('res.data',res.data)
//   // console.log('store',store)
//   // store.commit('setTree', res.data)
// }).catch(error => {
//   // 处理请求错误
//   console.log(error);
// });

//以下是tree的用法
type TreeList = {
  name: String;
  icon?: string;
  children?: TreeList[] | [];
  path?: string;
  fold?: boolean;
  id?: number;
};

const state = reactive({
  treeData: <TreeList[]>([])
})

axios.get('/public/tree_test.json').then(res => {
  let treeArray: any[] = []
  treeArray.push(res.data)
  console.log('treeArray:', treeArray)
  console.log('res', res)
  console.log('res.data', res.data)
  state.treeData = treeArray
}).catch(error => {
  // 处理请求错误
  console.log(error);
});

let TabNeedArray: any = reactive([])
const change = (e: any) => {
  console.log('68', e);
  TabNeedArray = store.state.clickRowArray
  TabNeedArray.push(e)
  const newTabNeedArray = [...new Set(TabNeedArray)]
  store.commit('setClickRowArray', newTabNeedArray)
  store.commit('setClickRow', e.path)
  console.log('开始点击的setClickRowArray', store.state.clickRowArray);
  console.log('开始点击的setClickRow', store.state.clickRow);
  // router.push(e.path);
  // store.commit('setTreeClicknode', e.name)
};

let test = computed(() => {
  return store.state.testData
})

let tabArray: any = []
tabArray.push(test)

function handleTest() {
  console.log('test', test)
  console.log('tabArray', tabArray)
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;

  .left {
    flex: 0 1 300px;
    background-color: white;
    border-right: rgb(230, 228, 228) solid 1px;
  }

  .right {
    flex: 1 1 auto;
    background-color: white;
  }

}
</style>
