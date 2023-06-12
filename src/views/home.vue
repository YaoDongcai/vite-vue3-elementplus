<template>
  <div class="home-container">
    <d-header></d-header>
    <p>this is a sidebar</p>
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

</script>

<style lang="less" scoped>
.home-container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
