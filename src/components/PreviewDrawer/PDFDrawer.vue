<template>
  <el-icon @click="mountPDF"><Refresh /></el-icon>
  <!-- 第1步：创建嵌入PDF的容器 -->
  <div id="pdf"></div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted, nextTick } from "vue";
import PDFObject from "pdfobject";
const mountPDF = () => {
  PDFObject.embed("./static/新建 DOCX 文档.pdf", "#pdf");
};
const props = defineProps(["drawer"]);
watchEffect(async () => {
  if (props.drawer) {
    await nextTick();
    mountPDF();
  }
});
</script>

<style scoped lang="less">
.pdfobject-container {
  height: calc(100% - 56px);
}
.pdfobject {
  border: 1px solid #ccc;
}
</style>
