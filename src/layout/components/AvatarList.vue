<template>
  <div class="wrap">
    <template v-if="!preview">
      <div class="cur-avatar">
        <AvatarItem :imgSrc="curImg.src"></AvatarItem>
        <!-- :imgContent="imgs['1.jpg'].content" -->
      </div>
      <div class="avatar-list">
        <div v-for="item in Object.keys(imgs)" :key="item.src">
          <AvatarItem class="avatar-item" :imgSrc="imgs[item].src">
            <div class="overlay">
              <div class="font" @click="handlePreview(imgs[item])">预览</div>
              <div class="font" @click="handleClick(imgs[item])">选择</div>
            </div>
          </AvatarItem>
        </div>
      </div>
    </template>
    <template v-else>
      <AvatarItem :imgSrc="previewImg.src" :imgSize="700"></AvatarItem>
      <div class="df">
        <el-button @click="preview = false">取消预览</el-button>
      </div>
    </template>
  </div>
</template>

<script setup>
import imgs from "./avatar";
import AvatarItem from "./AvatarItem.vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { ref, toRefs } from "vue";
const props = defineProps(["curImg"]);
const preview = ref(false); //预览状态
const emit = defineEmits(["update-avatar"]);
const previewImg = ref({});
const handlePreview = (item) => {
  previewImg.value = item;
  preview.value = true;
};
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
.wrap {
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
          transition: all 0.6s ease; // 重要-过渡
          opacity: 0.8;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: white;
          .font {
            margin: 5px;
            cursor: pointer;
            transition: font-size 0.5s ease; // 重要-过渡
            &:hover {
              font-size: 24px;
            }
          }
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
  .df {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
}
</style>
