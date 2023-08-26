<template>
  <div class="header">
    <div>面包屑</div>
    <!-- <HoverAndClickPopover></HoverAndClickPopover> -->
    <div>
      <!-- src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" -->
      <el-tooltip effect="light" content="切换头像" placement="left">
        <el-avatar
          :src="curImg.src"
          shape="circle"
          :size="80"
          @click="handleClick"
        />
      </el-tooltip>
    </div>
    <AvatarDialog
      :curImg="curImg"
      ref="avatarDialogRef"
      @update-avatar="handleUpdate"
    ></AvatarDialog>
  </div>
</template>

<script setup>
import AvatarDialog from "./AvatarDialog.vue";
import { ref } from "vue";
import imgs from "./avatar";
import HoverAndClickPopover from "@/components/HoverAndClickPopover/index.vue";
const avatarDialogRef = ref();
const curImg = ref({});
curImg.value = imgs["1.jpg"];

const handleClick = () => {
  avatarDialogRef.value.changeVisible();
};

const handleUpdate = (item) => {
  curImg.value = item;
  avatarDialogRef.value.changeVisible();
};
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #a79797;
  padding: 0 20px;
}
</style>
