<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    default-active="in_CYgw6LDwzoefyKStjO"
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
const { menuStore } = useStore();

const handleSelect = (index, indexPath, item, routeResult) => {
  // console.log(index, indexPath, item, routeResult);
};
</script>

<style scoped lang="less"></style>
