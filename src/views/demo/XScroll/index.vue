<template>
  <div class="tab-title">鼠标滚轮控制横向滚动</div>
  <div class="x-scroll">
    <XScroll>
      <div class="flx-align-center list">
        <img src="./imgs/--0.jpg" class="img" />
        <img src="./imgs/--0.jpg" class="img" />
        <img src="./imgs/--0.jpg" class="img" />
        <img src="./imgs/--0.jpg" class="img" />
      </div>
    </XScroll>
  </div>
</template>

<script setup>
import XScroll from "@/components/XScroll/index.vue";
</script>

<style scoped lang="less">
.x-scroll {
  height: 50vh;
  border: 1px solid rgb(66, 64, 64);
  margin: 20px;
  border-radius: 8px;
  padding: 15px;
  .list {
    height: 100%;
    .img {
      height: 100%;
      object-fit: cover;
      & + .img {
        margin-left: 10px;
      }
    }
  }
}
</style>
