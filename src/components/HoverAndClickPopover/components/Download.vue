<template>
  <el-dialog
    v-model="centerDialogVisible"
    width="30%"
    center
    align-center
    :show-close="false"
    :modal="false"
  >
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
  </el-dialog>
</template>
<script setup>
import { ref } from "vue";

const centerDialogVisible = ref(false);
const changeVisible = (bool) => {
  if (bool !== null && bool !== undefined) {
    centerDialogVisible.value = bool;
  } else {
    centerDialogVisible.value = !centerDialogVisible.value;
  }
};
defineExpose({ changeVisible });
</script>
<style scoped lang="less"></style>
