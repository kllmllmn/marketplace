<template>
  <div class="wrapper">
    {{ $slots }}
    <el-select v-bind="$attrs">
      <template v-for="(value, name) in $slots" #[name]="scope">
        <slot :name="name" :="scope"></slot>
      </template>
    </el-select>
  </div>
</template>

<script setup></script>

<style scoped lang="less"></style>
