<template>
  <div id="ckvideo" style="width: 100%; height: 500px; max-width: 800px">
    播放容器
  </div>
</template>

<script setup>
import Video1 from "@/assets/videos/1.mp4";
import { onMounted } from "vue";
import { newModules } from "@/utils/readFile";

const generateVideoArr = () => {
  return Object.entries(newModules).map((arr) => {
    return [arr[1], "video/mp4"];
  });
};
//调用开始
var videoObject = {
  container: "#ckvideo", //视频容器
  // video: Video1, //视频地址
  // video: "/src/assets/videos/1.mp4", //视频地址
  video: generateVideoArr(), //视频地址    // 设置视频来源和类型 ['path/to/video.mp4', 'video/mp4']
  next: true,
  plug: "",
};
console.log("🚀 ~ file: index.vue:23 ~ videoObject:", videoObject, Video1);
onMounted(() => {
  var player = new window.ckplayer(videoObject); //调用播放器并赋值给变量player
  console.log("🚀 ~ file: index.vue:29 ~ onMounted ~ player:", player);
  player.next();
});
</script>

<style scoped lang="less"></style>
