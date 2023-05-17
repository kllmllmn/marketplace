<template>
  <el-menu
    :default-active="defaultActive"
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    @select="handleSelect"
    unique-opened
    router
  >
    <MenuItem :menuList="menuStore.menuList"></MenuItem>
  </el-menu>
</template>

<script setup>
import useStore from "@/stores";
import MenuItem from "./MenuItem.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const { menuStore } = useStore();
// 默认高亮
const defaultActive = computed(() => {
  // console.log(route.fullPath);
  // if(route.fullPath=='/'){
  //   return '/home'
  // }
  return route.fullPath;
});
const handleSelect = (index, indexPath, item, routeResult) => {
  // console.log(index, indexPath, item, routeResult);
};
</script>

<style scoped lang="less"></style>
