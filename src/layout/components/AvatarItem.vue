<template>
  <div class="wrap">
    <!-- <el-tooltip effect="light" :content="imgContent" v-if="imgContent">
      <el-avatar :src="imgSrc" shape="square" :size="imgSize" />
    </el-tooltip> -->
    <el-avatar :src="imgSrc" shape="square" :size="imgSize" class="avatar" />
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  imgSrc: String,
  imgContent: String,
  imgSize: {
    type: Number,
    default: 200,
  },
});
</script>

<style scoped lang="less">
.wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar {
    cursor: pointer;
  }
}
</style>
