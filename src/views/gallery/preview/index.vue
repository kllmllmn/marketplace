<template>
  <div>
    <h1>预览图片、PDF</h1>
    <h3>图片预览</h3>
    <img src="@/assets/img/1.jpg" @click="handlePreview($event, 'img')" />
    <h3>PDF预览</h3>
    <div>
      <ol>
        因为 IDM 会拦截可下载的资源，会导致页面无法预览。因此需要禁用
        <li>iframe</li>
        <iframe src="./static/新建 DOCX 文档.pdf"></iframe>
        <li>object</li>
        <object
          data="./static/新建 DOCX 文档.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        ></object>
        <li>embed</li>
        <embed
          src="./static/新建 DOCX 文档.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
        <li>
          <el-link type="primary" @click="handlePreview($event, 'pdf')"
            >pdfObject</el-link
          >
        </li>
      </ol>
    </div>
    <PreviewDrawer
      ref="preview_drawer_ref"
      :img_src="img_src"
      :drawer_type="drawer_type"
      width="100%"
      height="100%"
    ></PreviewDrawer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PreviewDrawer from "@/components/PreviewDrawer/index.vue";

const img_src = ref();
const preview_drawer_ref = ref();
const drawer_type = ref();
const handlePreview = (e, type) => {
  switch (type) {
    case "img":
      img_src.value = e.target.src;
      break;
    case "pdf":
      break;
    default:
      return;
  }
  drawer_type.value = type;
  preview_drawer_ref.value.changeVisible();
};
</script>

<style scoped lang="less"></style>
