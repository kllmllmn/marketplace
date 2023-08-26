<template>
  <div>
    <!-- @mouseleave="onClick('leave', false)" -->
    <el-button
      @click="onClick('click', true)"
      @mouseenter="onClick('enter', true)"
      >Hover And Click Popover</el-button
    >
    <Download ref="downloadRef"></Download>
  </div>
</template>

<script setup>
import { ref, unref } from "vue";
import Download from "./components/Download.vue";
const downloadRef = ref();
const onClick = (type, bool) => {
  console.log("🚀 ~ file: index.vue:15 ~ onClick ~ type:", type);
  downloadRef.value.changeVisible(bool);
};
</script>

<style scoped lang="less"></style>
