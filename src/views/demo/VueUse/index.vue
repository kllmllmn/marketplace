<template>
  <div>
    <div class="tab-title">useClipboard</div>
    <Clipboard></Clipboard>
    <div class="tab-title">useSound</div>
    <Sound></Sound>
    <div class="tab-title">html2canvas</div>
    <Html2canvas></Html2canvas>
  </div>
</template>

<script setup>
import Clipboard from "./components/Clipboard.vue";
import Sound from "./components/Sound.vue";
import Html2canvas from "./components/Html2canvas.vue";
</script>

<style scoped lang="less"></style>
