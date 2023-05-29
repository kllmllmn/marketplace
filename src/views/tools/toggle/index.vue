<template>
  <el-tabs v-model="activeName" type="border-card" class="tabs">
    <el-tab-pane label="图片转Base64" name="ImageToBase64"></el-tab-pane>
    <el-tab-pane label="rgb与16进制互转" name="Rgb216"></el-tab-pane>
    <el-tab-pane label="3" name="3"></el-tab-pane>
    <el-tab-pane label="4" name="4"></el-tab-pane>
    <component :is="curInstance"></component>
  </el-tabs>
</template>
<script setup>
import ImageToBase64 from "./components/ImageToBase64.vue";
import Rgb216 from "./components/Rgb216.vue";
import { ref, watchEffect, shallowRef } from "vue";
const curInstance = shallowRef("");
const activeName = ref("ImageToBase64");

const toggleObj = {
  ImageToBase64,
  Rgb216,
};
watchEffect(() => {
  curInstance.value = toggleObj[activeName.value];
});
</script>
<style scoped lang="less">
.tabs {
  height: 100%;
}
</style>
