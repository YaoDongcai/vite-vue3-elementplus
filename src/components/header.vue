<template>
    <div class="header">
        <div class="header-left">
            <div class="collapse-btn" @click="collapseChange">
                <!-- <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"></path></svg> -->
                <el-icon ><Expand /></el-icon>
                <!-- <el-icon v-else><Fold /></el-icon> -->
            </div>
        
            <div class="logo">后台管理系统</div>
        </div>
        <div class="header-right">
            <div class="header-user-con">
                消息中心
            </div>
            <!-- 用户图像 -->
            <el-avatar class="user-name" :size="30" :src="imgUrl">

            </el-avatar>
            <div class="header-loginout">
                退出登录
            </div>
        </div>    
    </div>
</template>

<script lang="ts" setup>
import imgUrl from '@/assets/img/avator.jpeg'

const collapseChange = () => {
    // sidebar collapse
    

}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  position: relative;
  height: 40px;
  width: 100%;

  color: #fff;
  box-sizing: border-box;
  background-color: #242f42;
  justify-content: space-between;
  .header-left {
    display: flex;
    align-items: center;
    padding-left: 16px; 
    padding-right: 16px;
    .collapse-btn {
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 10px;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    .header-user-con {
        margin-right: 10px;
    }
    .user-name {
        margin-right: 10px;
    }
    .header-loginout {

    }
  }

}
</style>