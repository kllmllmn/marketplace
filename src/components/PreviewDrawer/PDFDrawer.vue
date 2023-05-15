<template>
  <div>
    <el-drawer
      v-model="drawer"
      :with-header="false"
      :size="drawer_size"
      :before-close="handleClose"
    >
      <el-icon @click="mountPDF"><Refresh /></el-icon>
      <!-- 第1步：创建嵌入PDF的容器 -->
      <div id="pdf">11</div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from "vue";
import PDFObject from "pdfobject";
onMounted(() => {
  PDFObject.embed("./static/新建 DOCX 文档.pdf", "#pdf");
});
const mountPDF = () => {
  PDFObject.embed("./static/新建 DOCX 文档.pdf", "#pdf");
};
const drawer = ref(false);
const isFolded = ref(true); // 已折叠

const drawer_size = computed(() => {
  return isFolded.value ? "80%" : "100%";
});
const handleClose = () => {
  changeVisible();
};
const changeVisible = () => {
  drawer.value = !drawer.value;
};

defineExpose({
  changeVisible,
});
</script>

<style scoped lang="less">
.pdfobject-container {
  height: 500px;
}
.pdfobject {
  border: 1px solid #ccc;
}
</style>
