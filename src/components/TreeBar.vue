<template>
  <div class="tree" v-for="(item, index) in datas" :key="index" @click.stop="change(item)">
    <!--click.stop 阻止点击事件继续传播, 在table中使用，点击当前行，当前行被勾选，但是点击当前行中按钮或点击事件时，使用此方法，则在触发当前点击事件后，阻止行的选中事件 -->
    <div class="box" :class="item.name === clickNode ? 'active' : ''">
      <!-- 小三角 -->
      <div :class="[item.fold ? 'down' : 'right']" :style="notNull(item.children) ? 'display:block;' : 'display: none;'"
        @click="toggle(item)">
      </div>
      <div class="label">
        <!-- 每个页面前的小文件图标 -->
        <img src="../assets/outline.png" :style="notNull(item.children) ? 'display:inline-block;' : 'display: none;'">
        <img src="../assets/option.png" :style="notNull(item.children) ? 'display: none;' : 'display:inline-block;'">
        {{ item.name }}
      </div>
    </div>
    <div class="drop-list" v-show="item.fold">
      <TreeItem v-if="item?.children?.length" :datas="item.children" @on-click="change"></TreeItem>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { computed } from "vue";
import TreeItem from "./TreeBar.vue";
import store from "@/store";
let clickNode = computed(() => {
  return store.state.treeClicknode
})
//非空非未定义
function notNull(a: any) {
  return arguments[0] != undefined && arguments[0] != null
}
type TreeList = {
  name: string;
  icon?: string;
  children?: TreeList[] | [];
  path?: string;
  fold?: boolean;
  id?: number;
};
type Props = {
  datas: TreeList[];
};
//使用defineProps来定义父组件传递的props
defineProps<Props>();
//新增节点
const initParam = {// 新增参数
  name: '新增节点',
  path: '/',
  children: []
}
// 定义发射给父组件的方法
const emit = defineEmits(["on-click"]);
const change = (item: TreeList) => {
  // if (item.children === undefined) {
  emit("on-click", item);
  // }
  // console.log('点击', item)
  // console.log('itemList:', item.name)
};
//点击按钮切换小三角折叠
function toggle(item: any) {
  item.fold = !item.fold
}
</script>
  <!-- <script lang="ts">
  export default {
    name: "treeItem",
  };
  </script> -->
<style scoped lang="scss">
.tree {
  min-width: 150px;
  padding-left: 2px;
  margin-left: 6px;
  user-select: none;

  .box {
    :hover {
      background-color: #f3f5f5c4;
    }
  }

  .active {
    background-color: #deeefc;
  }

  .box::before {
    width: 0;
    height: 0;
    content: "";
    display: block;
    clear: both;
    cursor: pointer;
  }

  .drop-list {
    margin-left: 10px;
  }
}

.lt {
  float: left;
}

img {
  width: 13px;
  height: 13px;
  display: inline-block;
  margin-top: 7px;
  margin-left: 5px;
  margin-right: 3px;
}

.label {
  font-size: 1em;
  margin-left: 5px;
}

// 小三角的样式
@mixin triangle() {
  border: #a3a2a2 solid 5px;
  border-color: #a3a2a2 transparent transparent transparent;
  height: 0;
  width: 0;
  margin-top: 8px;
  margin-left: 13px;
  margin-right: -2.5px;
}

.down {
  float: left;
  @include triangle();
  transition: transform 0.2s ease-in-out;
  margin-right: 1px;
}

.right {
  float: left;
  @include triangle();
  transform: rotate(-90deg);
}</style>