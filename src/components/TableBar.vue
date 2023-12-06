<!--
 * @Author: hy yinvia1018@163.com
 * @Date: 2023-11-02 13:57:01
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2023-11-08 15:59:38
 * @FilePath: \IFRAME\src\components\TableBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <el-row>
        <el-table class="down" :data="fileList" stripe style="width:300px;margin-top: 20px;" @row-click="rowClick">
            <el-table-column prop="name" label="文件名称"></el-table-column>
        </el-table>
    </el-row>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { type UploadUserFile } from 'element-plus'
import store from '@/store';
const dataList = reactive([])
const fileList = ref<UploadUserFile[]>([
    {
        name: '1_iframe',
        url: 'https://nj.58.com/',
    },
    {
        name: '2_iframe',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: '3_iframe',
        url: 'https://element-plus.org/images/element-plus-logo.svg',
    },
    {
        name: '4_iframe',
        url: 'http://www.cctv.com/',
    },
])

let TabNeedArray: any = reactive([])
function rowClick(row: any, column, event) {
    TabNeedArray = store.state.clickRowArray
    TabNeedArray.push(row)
    const newTabNeedArray = [...new Set(TabNeedArray)]
    store.commit('setClickRowArray', newTabNeedArray)
    store.commit('setClickRow', row.url)
    console.log('开始点击的setClickRowArray', store.state.clickRowArray);
    console.log('开始点击的setClickRow', store.state.clickRow);
}
</script>
<style scoped lang="scss">
.toolbar {
    display: flex;
    margin-top: 2.5px;
    margin-right: 5px;
}

.toolbar div {
    margin-left: 8px;

    :hover {
        border-radius: 3px;
    }
}

.svgIcon {
    margin-top: 2.5px;
    margin-left: 3px;

    :hover {
        border-radius: 3px;
    }
}

.upload-demo {
    display: inline-block;
}

:deep(.el-upload-list) {
    width: 250px;
}</style>