<template>
  <el-dialog
    v-model="centerDialogVisible"
    title="切换头像"
    width="50%"
    align-center
    center
    draggable
    :before-close="handleClose"
    style="min-width: 800px"
  >
    <AvatarList @update-avatar="handleUpdate"></AvatarList>
    <!-- <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleClose"> 确定 </el-button>
      </span>
    </template> -->
  </el-dialog>
</template>
<script setup>
import { ref } from "vue";
import AvatarList from "./AvatarList.vue";
const centerDialogVisible = ref(false);

const changeVisible = () => {
  centerDialogVisible.value = !centerDialogVisible.value;
};
const handleClose = () => {
  changeVisible();
};
const emit = defineEmits(["update-avatar"]);

const handleUpdate = (item) => {
  emit("update-avatar", item);
};
defineExpose({ changeVisible });
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
