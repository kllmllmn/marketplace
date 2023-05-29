<template>
  <div>
    <SFileUpload @blob="handleBlob"></SFileUpload>
    <el-form-item label="base64内容"> </el-form-item>
    <el-form-item>
      <el-input type="textarea" :value="base64D" :rows="6"></el-input>
    </el-form-item>
    <el-form-item label="ArrayBuffer内容"> </el-form-item>
    <el-form-item>
      <el-input type="textarea" :value="arrayBuffer" :rows="6"></el-input>
    </el-form-item>
  </div>
</template>

<script setup>
import SFileUpload from "@/components/SFileUpload/index.vue";
import { toBase64, base64DataURLToArrayBuffer } from "@/utils/file";
import { ref } from "vue";
const base64D = ref("");
const arrayBuffer = ref("");
const handleBlob = async (blob) => {
  let base64Data = await toBase64(blob);
  // console.log(blob, base64Data, "--");
  base64D.value = base64Data;
  arrayBuffer.value = base64DataURLToArrayBuffer(base64Data);
};
</script>

<style scoped lang="less"></style>
