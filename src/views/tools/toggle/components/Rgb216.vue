<template>
  <div>
    <el-form-item label="rgb">
      <el-input
        :value="rgbV"
        v-if="v161"
        placeholder="请输入格式为 rgb(255,221,221) "
      ></el-input>
      <el-input
        v-model="rgb1"
        @input="handleRgb216"
        v-else
        placeholder="请输入格式为 rgb(255,221,221) "
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label="16进制">
      <el-input
        :value="v16"
        v-if="rgb1"
        placeholder="请输入格式为 #ffdddd "
      ></el-input>
      <el-input
        v-model="v161"
        @input="handle162Rgb"
        v-else
        placeholder="请输入格式为 #ffdddd "
        clearable
      ></el-input>
    </el-form-item>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { set16ToRgb, setRgbTo16 } from "@/utils/toggle";
const rgbV = ref("");
const v16 = ref("");
const rgb1 = ref("");
const v161 = ref("");
const handleRgb216 = (val) => {
  v16.value = setRgbTo16(val);
};
const handle162Rgb = (val) => {
  rgbV.value = set16ToRgb(val);
};
</script>

<style scoped lang="less"></style>
