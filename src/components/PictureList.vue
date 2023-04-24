<template>
  <el-upload
    v-model:file-list="fileList"
    action="/uploadImgs"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import imgs from "@/layout/components/avatar.js";

const fileList = ref([
  {
    name: "1.jpg",
    url: imgs["1.jpg"].src,
  },
  {
    name: "7.jpg",
    url: imgs["7.jpg"].src,
  },
  {
    name: "8.jpg",
    url: imgs["8.jpg"].src,
  },
  {
    name: "9.jpg",
    url: imgs["9.jpg"].src,
  },
]);

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePictureCardPreview = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url;
  dialogVisible.value = true;
};
</script>
