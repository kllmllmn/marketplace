<template>
  <div>
    <VueOfficeDocx
      src="./static/test.docx"
      style="height: 100%"
      @rendered="rendered"
    ></VueOfficeDocx>
  </div>
</template>

<script setup>
//引入VueOfficeDocx组件
import VueOfficeDocx from "@vue-office/docx";
//引入相关样式
import "@vue-office/docx/lib/index.css";

const rendered = () => {
  console.log("渲染完成");
};
</script>
