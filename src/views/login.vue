<template>
    <div class="login-wrapp">
        <div class="center-login">
            <div class="login-title">
                后台管理系统
            </div>
            <el-form :model="param" :rules="rules" ref="loginForm" class="login-form">
                <el-form-item prop="username">
                    <el-input clearable v-model="param.username" placeholder="username">
                        <template #prepend>
                            <el-button :icon="User"></el-button>
                        </template>
                    </el-input>                
                </el-form-item>
                <el-form-item prop="password">
                    <el-input clearable v-model="param.password" placeholder="password">
                        <template #prepend>
                            <el-button :icon="Lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-form-submit-btn" type="primary" @click="submitForm(loginForm)">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Lock, User } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router' 
import {
    FormRules,
    FormInstance,
ElMessage
} from 'element-plus'
interface LoginInfo {
    username: string;
    password: string;
}
const loginForm = ref<FormInstance>();
const rules: FormRules = {
    username: [{
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
    }],
    password: [{
        required: true,
        message: "请输入密码",
        trigger: 'blur'
    }]
}
const param = reactive<LoginInfo>({
    username: "admin",
    password: "123456",
})
const router = useRouter();
// 登录提交
const submitForm = (formEl: FormInstance | undefined) => {
    if(!formEl) return;
    formEl.validate(valid => {
        if(valid) {
            ElMessage.success('登录成功');
            localStorage.setItem('ms_username', param.username);

            router.push('/home')
        }else {
            ElMessage.error('登录失败')
            return false;
        }
    })
}
</script>

<style lang="less" scoped>
.login-wrapp {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/login-bg.jpg);
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .center-login {
        padding: 10px 10px;
        width: 300px;
        display: flex;
        flex-direction: column;
        .login-title {
            text-align: center;
            font-size: 28px;

        }
        .login-form {
            padding-top: 23px;
            width: 100%;
            .login-form-submit-btn {
                width: 100%;
            }
        }
    }
}
</style>