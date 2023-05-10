<template>
  <div>
    <canvas ref="canvasRef"></canvas>
    <div>
      <button @click="cancel()">取消</button>
      <button @click="save()">保存</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
// import { useMouse } from "@vueuse/core";

// const { x, y } = useMouse();
const canvasRef = ref();
const config = {
  width: 400, // 宽度
  height: 200, // 高度
  lineWidth: 5, // 线宽
  strokeStyle: "skyblue", // 线条颜色
  lineCap: "round", // 设置线条两端圆角
  lineJoin: "round", // 线条交汇处圆角
};
const canvas = ref();
const ctx = ref();
onMounted(() => {
  canvas.value = canvasRef.value;
  canvas.value.width = config.width;
  canvas.value.height = config.height;
  canvas.value.style.border = "1px solid #000";
  ctx.value = canvas.value.getContext("2d");
  ctx.value.fillStyle = "transparent";
  ctx.value.fillRect(0, 0, config.width, config.height);
  // 创建鼠标/手势按下监听器
  window.addEventListener(mobileStatus ? "touchstart" : "mousedown", init);
  // 创建鼠标/手势 弹起/离开 监听器
  window.addEventListener(mobileStatus ? "touchend" : "mouseup", cloaseDraw);
});
// 判断是否为移动端
const mobileStatus = /Mobile|Android|iPhone/i.test(navigator.userAgent);
// console.log("mobileStatus 45", mobileStatus);
// 初始化后再监听鼠标的移动
const init = (event) => {
  // 获取偏移量及坐标
  // web端可以直接通过event中取到，而移动端则需要在event.changedTouches[0]中取到。
  const { offsetX, offsetY, pageX, pageY } = mobileStatus
    ? event.changedTouches[0]
    : event;
  // console.log(offsetX, offsetY, pageX, pageY);

  // 清除以上一次 beginPath 之后的所有路径，进行绘制
  ctx.value.beginPath();

  // 根据配置文件设置进行相应配置
  ctx.value.lineWidth = config.lineWidth;
  ctx.value.strokeStyle = config.strokeStyle;
  ctx.value.lineCap = config.lineCap;
  ctx.value.lineJoin = config.lineJoin;

  // 设置画线起始点位
  ctx.value.moveTo(offsetX, offsetY);

  // 监听 鼠标移动或手势移动
  window.addEventListener(mobileStatus ? "touchmove" : "mousemove", draw);
};
// draw方法，作为监听鼠标移动/触摸移动的回调方法
const draw = (event) => {
  //   console.log("eventeventevent 68", event);
  const { offsetX, offsetY, pageX, pageY } = mobileStatus
    ? event.changedTouches[0]
    : event;
  // 根据坐标点位移动添加线条
  // ctx.value.lineTo(pageX, pageY);
  ctx.value.lineTo(offsetX, offsetY);
  // 绘制
  ctx.value.stroke();
};
// 结束绘制
const cloaseDraw = () => {
  ctx.value.closePath();
  // 移除鼠标移动或手势移动监听器
  window.removeEventListener("mousemove", draw);
};

const cancel = () => {
  ctx.value.clearRect(0, 0, config.width, config.height);
};
const save = () => {
  // 将canvas上的内容转成blob流
  canvas.value.toBlob((blob) => {
    // 获取当前时间并转成字符串，用来当做文件名
    const date = Date.now().toString();
    // 创建一个a标签
    const a = document.createElement("a");
    // 设置a标签的下载文件名
    a.download = `${date}.png`;
    // 设置 a 标签的跳转路径为 文件流地址
    a.href = URL.createObjectURL(blob);
    // 手动触发 a 标签的点击事件
    a.click();
    // 移除 a 标签
    a.remove();
  });
};
</script>

<style scoped lang="less"></style>
