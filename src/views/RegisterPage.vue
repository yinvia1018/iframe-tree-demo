<!--
 * @Author: hy yinvia1018@163.com
 * @Date: 2023-11-10 09:41:20
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2023-11-15 15:08:10
 * @FilePath: \IFRAME\src\views\LoginPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <el-form :model="formData" status-icon class="login-container" ref="formRef">
            <h3 class="login-title">注册</h3>
            <el-form-item label="账户" prop="username" label-width="80px">
                <el-input type="input" auto-complete="off" placeholder="请输入用户名" v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" label-width="80px">
                <el-input type="password" auto-complete="off" placeholder="请输入密码" v-model="formData.password"></el-input>
            </el-form-item>
            <el-form-item label="确认" prop="isPassword" label-width="80px">
                <el-input type="password" auto-complete="off" placeholder="请再次输入密码"
                    v-model="formData.isPassword"></el-input>
            </el-form-item>
            <el-form-item class="login-submit">
                <!--这里通过@click绑定onLogin函数，用于点击的时候触发登录功能 -->
                <el-button type="primary" class="login-submit" @click="onRegister">注册</el-button>
                <h6><router-link to="/login">已有账号？去登录</router-link></h6>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import router from '@/router';
import axios from 'axios';
import { reactive } from 'vue';
const formData = reactive({
    username: '',
    password: '',
    isPassword: ''
})
const onRegister = () => {
    console.log('formData', formData)
    console.log('register!')
    if (formData.username === '' || formData.password === '') {
        alert('用户名和密码不能为空！')
    } else if (formData.password !== formData.isPassword) {
        alert('两次密码不一致！')
    } else {
        axios.post('/api/login', { "username": formData.username, "password": formData.password }, { headers: { 'Content-Type': 'application/json;charset=UTF-8' } })
            .then(res => {
                // 处理响应数据
                console.log('请求响应的res:', res.data);
                //回调信息
                // if(res.code == '200'){
                //     alert(res.msg);
                //     router.push("/");
                //     let token = res.result.token;
                //     //console.log(res.result.token);
                //     localStorage.setItem("token",token);
                // }
            })
            .catch(error => {
                // 处理请求错误
                console.log(error);
            });
    }
}
</script>
<style lang="scss" scoped>
.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.login-title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}

.login-submit {
    margin: 10px 5px 0 55px;
    justify-content: center;

    h6 {
        margin: 20px 0 0 0;
    }
}</style>