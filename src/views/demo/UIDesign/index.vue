<template>
  <div>
    {{ name }}
    <MyInput v-model="name" placeholder="1212">
      <template #prefix>姓名</template>
    </MyInput>
    {{ select }}
    <MySelect v-model="select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </MySelect>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MyInput from "./components/MyInput.vue";
import MySelect from "./components/MySelect.vue";

const name = ref("");
const select = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>

<style scoped lang="less"></style>
