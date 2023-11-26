<template>
  <van-button type="primary">234</van-button>
  <!-- F12 选择mobile模式可以签名 -->
  <van-signature ref="signatureRef" @submit="onSubmit" @clear="onClear" />
  <!-- <van-image v-if="image" :src="image" /> -->
  <div class="box"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { showToast } from "vant";

const signatureRef = ref();
const initCanvas = () => {
  const canvas = signatureRef.value.$el.querySelector("canvas");
  let parentEl = canvas.parentElement;
  let styleWidth = parentEl.clientWidth;
  let styleHeight = parentEl.clientHeight;
  const ctx = canvas.getContext("2d");
  ctx.width = styleWidth * devicePixelRatio; // 原始尺寸 = 样式尺寸 * 缩放倍率
  ctx.height = styleHeight * devicePixelRatio;
};
const onSubmit = (data) => {
  console.log("🚀 ~ file: index.vue:23 ~ onSubmit ~ data:", data);
};
const onClear = () => showToast("clear");
onMounted(() => {
  initCanvas();
});
</script>

<style scoped lang="less">
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>
