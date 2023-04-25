<template>
  <el-upload
    action="/xxx"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
    :on-error="handleError"
    :before-remove="beforeRemove"
  >
    <el-button type="primary">上传</el-button>
    <!-- <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template> -->
  </el-upload>
</template>
<script setup>
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { toBase64 } from "@/utils/file";
import useStore from "@/stores";
const { fileStore, menuStore } = useStore();
// console.log(fileStore, menuStore, "---");
const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview = (uploadFile) => {
  console.log(uploadFile);
};
const handleSuccess = (response, uploadFile, uploadFiles) => {
  console.log(response, uploadFile, uploadFiles);
};
const emit = defineEmits(["blob"]);
const handleError = (error, uploadFile, uploadFiles) => {
  try {
    console.log(error, uploadFile, uploadFiles);
    // 保存上传的文件blob
    emit("blob", uploadFile.raw);
  } catch (error) {
    console.log(error, "error");
  }
};

const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};
</script>
