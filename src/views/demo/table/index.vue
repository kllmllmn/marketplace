<template>
  <el-button @click="onClick">对象问题</el-button>
</template>

<script setup>
const onClick = () => {
  let param = {
    a: 1,
    b: 2,
    c: [1, 2, 3],
    d: {
      a: 111,
    },
  };
  delete param.a;
  console.log("🚀 ~ file: index.vue:16 ~ onClick ~  param.a:", param.a);
  console.log("🚀 ~ file: index.vue:16 ~ onClick ~ param:", param);
  param.a = "hvjn";
};
// 默认查询，不展开
let data = [
  {},
  {
    projectCode: "a",
    allTotal: 100,
    中心1: 20,
    中心2: 30,
  },
  {
    projectCode: "b",
    allTotal: 100,
    中心1: 40,
    中心2: 40,
  },
];
// 展开中心1
let data2 = [
  {
    中心1: ["部门1", "部门2"],
  },
  {
    projectCode: "a",
    allTotal: 100,
    中心1: [20, 0],
    中心2: 30,
  },
  {
    projectCode: "b",
    allTotal: 100,
    中心1: [20, 20],
    中心2: 40,
  },
];
</script>

<style scoped lang="less"></style>
