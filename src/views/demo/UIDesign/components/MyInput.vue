<template>
  <div class="wrapper">
    <el-input v-bind="$attrs">
      <template v-for="(value, name) in $slots" #[name]="scope">
        <slot :name="name" :="scope"></slot>
      </template>
    </el-input>
  </div>
</template>

<script setup></script>

<style scoped lang="less"></style>
