<template>
  <div class="wrapper">
    <el-input v-model="keyword"></el-input>
    <!-- <div class="content" v-html="replaceHtml(keyword)"></div> -->
    <div class="content" v-dompurify-html="replaceHtml(keyword)"></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { filterHtml } from "@/utils/safe";
const keyword = ref();
const replaceHtml = (val) => {
  //   return filterHtml(val || "").replace(keyword.value, (v) => {
  //     return `<div style='color: var(--primary-color)'>${v}</div>`;
  //   });
  return filterHtml(val || "").replace(keyword.value, (v) => {
    // return `<div style='color: var(--primary-color)'>${v}</div>`;
    return `<div class='highlight' onclick='alert(1)'>${v}</div>`;
  });
};
</script>

<style scoped lang="less">
.wrapper {
  :deep(.content) {
    color: var(--primary-color);
    .highlight {
      color: var(--primary-color);
    }
  }
}
</style>
