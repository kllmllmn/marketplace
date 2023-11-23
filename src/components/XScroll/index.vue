<!-- 横向滚动 -->
<template>
  <div ref="scrollRef" class="scroll-container">
    <div class="v-scroll">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useElementSize } from "@vueuse/core";

const scrollRef = ref(null);
const { width, height } = useElementSize(scrollRef);
</script>

<style scoped lang="less">
.scroll-container {
  height: 100%;
  --w: calc(v-bind("width") * 1px);
  --h: calc(v-bind("height") * 1px);
  .v-scroll {
    position: relative;
    width: var(--h);
    height: var(--w);
    // border: solid 1px red;
    overflow-y: auto;
    transform-origin: top left;
    transform: translateY(var(--h)) rotate(-90deg);
    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }
    .content {
      position: absolute;
      top: 0;
      left: var(--h);
      width: var(--w);
      height: var(--h);
      transform-origin: top left;
      transform: rotate(90deg);
    }
  }
}
</style>
