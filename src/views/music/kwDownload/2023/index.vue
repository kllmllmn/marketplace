<template>
  <div class="layout">
    <el-container>
      <el-header class="layout-header flex-center">观海</el-header>
      <el-container>
        <el-aside class="layout-aside">
          <div v-for="i in 100" :key="i">目录</div>
        </el-aside>
        <el-main>
          <MusicTable style="height: calc(100vh - 260px)"></MusicTable>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import MusicTable from "./components/MusicTable.vue";
</script>

<style scoped lang="less">
.layout {
  height: 100%;
  background-color: rgb(204, 228, 228);
  &-header {
    border: 1px solid #b5aeae;
  }
  :deep(&-aside) {
    width: 200px;
    // height: 100%;
    height: calc(100vh - 220px);
    padding: 15px;
    border-right: 1px solid #b5aeae;
  }
}
</style>
