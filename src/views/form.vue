<template>
    <div class="container">
        <div class="form-box">
            <el-form class="form-wrap" ref="formRef" :rules="rules" :model="formModel" label-width="80px">

                <el-form-item label="表单名称" prop="name">

                    <el-input v-model="formModel.name" placeholder="请输入名称" style="width: 220px;"></el-input>

                </el-form-item>

                <el-form-item label="选择器" prop="region">

                    <el-select v-model="formModel.region" placeholder="请选择" style="width: 220px;">
                        <el-option key="北京" label="北京" value="北京"></el-option>
                        <el-option key="上海" label="上海" value="上海"></el-option>
                        <el-option key="安徽" label="安徽" value="安徽"></el-option>
                    </el-select>

                </el-form-item>


                <el-form-item label="时间选择" prop="time">


                    <el-date-picker style="width: 100%; box-sizing: border-box;" class="form-date-picker" type="date" placeholder="选择日期" v-model="formModel.time"></el-date-picker>

                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="submit(formRef)">表单提交</el-button>
                    <el-button @click="reset(formRef)">重置表单</el-button>
                </el-form-item>
            </el-form>

        </div>

    </div>
</template>


<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
interface IFormModel {
    name: string,
    region: string,
    time: string
}
let formModel = reactive<IFormModel>({
    name: '',
    region: '小明',
    time: ""
})
const formRef = ref<FormInstance>();
const rules: FormRules = {
    name: [{ required: true, message: '请输入表单名称', trigger: 'blur' }]
}

const submit = (formRef: FormInstance) => {
    if (!formRef) return;
    formRef.validate((valid) => {
        if (valid) {
            ElMessage.success("ok");
            return;
        } else {
            ElMessage.error("error");
        }
    })
}
const reset = (formRef: FormInstance) => {
    formRef.resetFields();
}
</script>


<style lang="less" scoped>
.form-date-picker:deep(.el-input_wrapper) {
    width: 220px;
    box-sizing: border-box;
}
</style>