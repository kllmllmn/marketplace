<template>
  <div class="wrap">
    <div class="cur-avatar">
      <AvatarItem :imgSrc="imgs['1.jpg'].src"></AvatarItem>
      <!-- :imgContent="imgs['1.jpg'].content" -->
    </div>
    <div class="avatar-list">
      <div v-for="item in Object.keys(imgs)" :key="item.src">
        <AvatarItem
          class="avatar-item"
          :imgSrc="imgs[item].src"
          @click="handleClick(imgs[item])"
        >
          <div class="overlay"></div>
        </AvatarItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgs from "./avatar";
import AvatarItem from "./AvatarItem.vue";
import { ElMessage, ElMessageBox } from "element-plus";

const emit = defineEmits(["update-avatar"]);
const handleClick = (item) => {
  console.log(item);
  ElMessageBox.confirm("确认切换头像吗", "系统消息", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "info",
  })
    .then(() => {
      emit("update-avatar", item);
      ElMessage({
        type: "success",
        message: "已切换头像",
      });
    })
    .catch(() => {
      //   ElMessage({
      //     type: 'info',
      //     message: 'Delete canceled',
      //   })
    });
};
</script>

<style scoped lang="less">
.cur-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.avatar-list {
  display: flex;
  overflow: auto;
  .avatar-item {
    margin: 10px;
    &:hover {
      .overlay {
        opacity: 0.8;
        transition: all 0.6s ease;
      }
    }
    .overlay {
      background-color: rgba(0, 0, 0, 0.6);
      width: 200px;
      height: 200px;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
}
</style>
