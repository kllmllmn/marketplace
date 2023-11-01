<template>
  <div class="flx-align-center">
    <div @click="handlePlay" class="img">🙎‍♀️</div>
    <img v-if="isPlaying" class="microphone" src="@/assets/img/gif/sound.gif" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSound } from "@vueuse/sound";
import MUSIC from "@/assets/music/2.mp3";

const { play, stop, isPlaying } = useSound(MUSIC, {
  onend: () => {
    console.info("Sound ended!");
  },
});
const handlePlay = () => {
  if (!isPlaying.value) {
    play();
  } else {
    stop();
  }
};
</script>

<style scoped lang="less">
.img {
  cursor: pointer;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 100px;
  // transform: scale(2, 2);
}
.microphone {
  color: var(--primary-color);
  margin-left: 20px;
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
