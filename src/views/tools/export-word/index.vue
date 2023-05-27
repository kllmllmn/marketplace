<template>
  <div>
    <button @click="exportFile">导出</button>
  </div>
</template>

<script setup>
import Docxtemplater from "@/utils/Docxtemplater";
const exportFile = () => {
  const promise = new Promise((resolve, reject) => {
    let data = { signImg: "111" };
    Docxtemplater.exportWordAndImage(
      data,
      "./static/test_template.docx",
      resolve
    );
  });
};
</script>

<style scoped lang="less"></style>
