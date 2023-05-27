<template>
  <div>
    <el-drawer
      v-model="drawer"
      :with-header="false"
      :size="drawer_size"
      :before-close="handleClose"
      :destroy-on-close="true"
    >
      <div style="height: 32px">
        <el-icon @click="isFolded = !isFolded" size="32">
          <component :is="isFolded ? 'Fold' : 'Expand'"></component>
        </el-icon>
      </div>
      <component
        :is="curInstance"
        ref="component_ref"
        :img_src="img_src"
        :drawer="drawer"
      ></component>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from "vue";
import ImgDrawer from "./ImgDrawer.vue";
import PDFDrawer from "./PDFDrawer.vue";
import DocxDrawer from "./DocxDrawer.vue";
const component_ref = ref();
const props = defineProps(["drawer_type", "img_src"]);
const curInstance = computed(() => {
  let type = props.drawer_type;
  if (["img"].includes(type)) {
    return ImgDrawer;
  } else if (["pdf"].includes(type)) {
    return PDFDrawer;
  } else if (["docx", "doc"].includes(type)) {
    return DocxDrawer;
  }
  return null;
});
const isFolded = ref(true); // 已折叠

const drawer = ref(false);
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

<style scoped lang="less"></style>
