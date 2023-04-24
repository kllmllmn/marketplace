<script setup>
import { useRouter } from "vue-router";
import useStore from "@/stores";
import { menuList } from "@/assets/menuList";
const router = useRouter();
const { menuStore } = useStore();
menuStore.setMenuList(menuList);
console.log(import.meta.env, router.getRoutes(), "routes ----");
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
