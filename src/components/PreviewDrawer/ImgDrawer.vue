<template>
  <div class="toolbar">
    <el-button @click="scale_size *= 2" class="btn" type="primary">
      放大<el-icon class="icon"><Plus /></el-icon>
    </el-button>
    <el-button @click="scale_size /= 2" class="btn" type="info">
      缩小<el-icon class="icon"><Minus /></el-icon>
    </el-button>
    <el-button @click="rotate_deg += 90" class="btn" type="success">
      旋转90°<el-icon class="icon"><RefreshRight /></el-icon>
    </el-button>
  </div>
  <div class="img-wrap flx-center">
    <img :src="img_src" class="img" />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";

defineProps(["img_src"]);

const scale_size = ref(1); // 放大倍数
const rotate_deg = ref(0); // 旋转度数
</script>

<style scoped lang="less">
.toolbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  .btn {
    margin-left: 15px;
  }
  .icon {
    margin-left: 5px;
  }
}
.img-wrap {
  height: calc(100% - 87px);
  overflow: auto;
  .img {
    transform: scale(v-bind(scale_size)) rotate(v-bind("rotate_deg+'deg'"));
    transition: all 0.5s linear;
    transform-origin: center;
    // object-fit: contain; /* 缩放后保持图片完整 */
  }
}
</style>
