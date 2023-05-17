<script setup>
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { useRouter } from "vue-router";
import useStore from "@/stores";
import { menuList } from "@/assets/menuList";
const router = useRouter();
const { menuStore } = useStore();
menuStore.setMenuList(menuList);
// console.log(import.meta.env, router.getRoutes(), "routes ----");
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
