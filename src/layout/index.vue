<template>
  <!-- <div class="common-layout"> -->
  <el-container class="page-container">
    <el-aside width="200px">
      <div class="sider-top">T_T</div>
      <AsideMenu class="menu-wrap"></AsideMenu>
    </el-aside>
    <el-container>
      <el-header><Header /> </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <!-- <Transition name="slide-fade" mode="fade-in">
          <router-view></router-view>
        </Transition> -->
      </el-main>
    </el-container>
  </el-container>
  <!-- </div> -->
</template>

<script setup>
import AsideMenu from "./components/AsideMenu.vue";
import Header from "./components/Header.vue";
</script>

<style scoped lang="less">
.page-container {
  height: 100vh;
  .sider-top {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dd9715;
  }
  .menu-wrap {
    //   background-color: var(--aside-menu-bgcolor);
    height: calc(100vh - 50px);
    overflow: auto;
  }
  :deep(.el-header) {
    padding: 0;
    height: 90px;
  }
}
</style>
