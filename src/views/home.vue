<template>
  <div class="home-container">
    <!--  header -->
    <d-header></d-header>
    <!-- sidebar -->
    <d-sidebar></d-sidebar>
    <!--  this is a content-box  -->
    <div class="content-box">
      <!-- tags -->
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DHeader from "@/components/header.vue"
import DSidebar from "@/components/sidebar.vue"
</script>

<style lang="less" scoped>
.home-container {
  position: relative;
  height: 100%;
  width: 100%;
  .content-box {
    position: absolute;
    top: 70px;
    left: 250px;
    width: calc(100% - 250px);
    height: calc(100% - 70px );
    background-color: white;
  }
}
</style>
