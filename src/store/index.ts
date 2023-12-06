import { createStore } from "vuex";
export default createStore({
    state: {
        testData: {},
        clickRow: '',
        clickRowArray: [],
    },
    getters: {},
    mutations: {
        setTestData(state: any, data: any) {
            state.testData = data
        },
        setClickRow(state: any, data: any) {
            state.clickRow = data
        },
        setClickRowArray(state: any, data: any) {
            state.clickRowArray = data
        },
    },
    actions: {},
    modules: {}
})