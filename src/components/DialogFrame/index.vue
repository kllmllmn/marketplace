<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="Warning"
    width="50%"
    align-center
    center
    draggable
    :before-close="handleClose"
    style="min-width: 700px"
  >
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleClose"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref } from "vue";

const centerDialogVisible = ref(false);

const changeVisible = () => {
  centerDialogVisible.value = !centerDialogVisible.value;
};
const handleClose = () => {
  changeVisible();
};
defineExpose({ changeVisible });
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
