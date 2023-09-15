<template>
  <div class="wrapper">
    <el-input v-model="keyword"></el-input>
    <!-- <div class="content" v-html="replaceHTML(keyword)"></div> -->
    <div class="content" v-dompurify-html="replaceHTML(keyword)"></div>
    <div class="box-wrap">
      <div v-for="i in 10" :key="i" class="box">
        <div
          v-dompurify-html="
            replaceHtml(`<h1 onclick='alert(${i})'>${i}</h1`, keyword)
          "
        ></div>
        <!-- {{ `
        <h1 onclick="alert(${i})">${i}</h1>
        ` }} -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { filterHtml, replaceHtml } from "@/utils/safe";
const keyword = ref();
const replaceHTML = (val) => {
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
  .box-wrap {
    display: flex;
    flex-wrap: wrap;
    .box {
      padding: 10px;
    }
    .box + .box {
      margin-left: 10px;
    }
  }
}
</style>
