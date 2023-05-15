<template>
  <component :is="curInstance" ref="component_ref"></component>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from "vue";
import ImgDrawer from "./ImgDrawer.vue";
import pdfDrawer from "./pdfDrawer.vue";
const component_ref = ref();
const props = defineProps(["drawer_type"]);
const curInstance = computed(() => {
  switch (props.drawer_type) {
    case "img":
      return ImgDrawer;
    case "pdf":
      return pdfDrawer;
    default:
      return null;
  }
});

const changeVisible = async () => {
  await nextTick();
  component_ref.value.changeVisible();
};
defineExpose({
  changeVisible,
});
</script>

<style scoped lang="less"></style>
