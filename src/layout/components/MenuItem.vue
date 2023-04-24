<template>
  <div>
    <template v-for="(item, index) in menuList">
      <template v-if="!item.children || !item.children.length">
        <el-menu-item :key="'/' + item.path" :index="'/' + item.path">
          <!-- {{ item.icon }} -->
          {{ item.text }}
        </el-menu-item>
      </template>
      <template v-else-if="item.children && item.children.length">
        <el-sub-menu :key="'/' + item.path" :index="'/' + item.path">
          <template #title>
            <!-- {{ item.icon }} -->
            {{ item.text }}
          </template>
          <!-- 组件递归调用自身 -->
          <MenuItem :menuList="item.children"></MenuItem>
        </el-sub-menu>
      </template>
    </template>
  </div>
</template>

<!-- <script>
export default {
  name: "MenuItem", //给组件命名
};
</script> -->

<script setup>
defineProps(["menuList"]);
</script>

<style scoped lang="less"></style>
