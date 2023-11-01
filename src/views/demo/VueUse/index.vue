<template>
  <div>
    <div class="tab-title">cliboard</div>
    <el-input v-model="inputVal">
      <template #suffix>
        <el-icon @click="handleCopy(inputVal)"><CopyDocument /></el-icon>
      </template>
    </el-input>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useClipboard } from "@vueuse/core";

const inputVal = ref();
const { text, copy, copied } = useClipboard({ legacy: true });
const handleCopy = async (v) => {
  v = v ?? "";
  await copy(v);
  if (copied.value) {
    ElMessage.success(`复制成功，${text.value}`);
  } else {
    ElMessage.error("复制失败");
  }
};
</script>

<style scoped lang="less"></style>
