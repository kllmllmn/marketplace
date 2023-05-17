<template>
  <div class="wrap flex-center">
    <h1>background animation</h1>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.wrap {
  background-image: linear-gradient(
    135deg,
    rgb(189, 106, 178),
    rgb(135, 106, 189),
    rgb(106, 186, 189),
    rgb(181, 189, 106),
    rgb(189, 116, 106)
  );
  background-size: 400%;
  height: 100%;
  animation: bgmove 20s infinite;
}
@keyframes bgmove {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
