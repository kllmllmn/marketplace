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
</script>

<style scoped lang="less"></style>
