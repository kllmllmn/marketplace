<template>
  <el-upload action="" multiple :http-request="changeFile">
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
const changeFile = (uploadOptions) => {
  console.log(uploadOptions);
  const { file } = uploadOptions;
  // 上传操作
};
</script>
