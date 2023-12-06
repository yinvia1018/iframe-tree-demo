/*
 * @Author: hy yinvia1018@163.com
 * @Date: 2023-12-05 15:20:56
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2023-12-06 10:49:02
 * @FilePath: \IFRAME-tree -使用本地的html\src\assets\UUIl.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import UInput from '/src/components/UInput.vue'
export default {
    install(V) {
        console.log(V)
        console.dir(V)
        V.component('u-input', UInput)
    }
}