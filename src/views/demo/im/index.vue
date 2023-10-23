<template>
  <div class="im">
    <div class="im-header">
      <h1>Chat Room</h1>
      <input id="sendTxt" type="text" />
      <button id="sendBtn">发送</button>
      <span>{{ tmp }}</span>
    </div>
    <div class="im-content"></div>
  </div>
</template>

<script setup>
import io from "socket.io-client";
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import VConsole from "vconsole";

const vConsole = new VConsole();
let socket = null;
let tmp = ref();
const createConnect = () => {
  socket = io("ws://192.168.0.102:4090/");
  console.log("🚀 ~ file: index.vue:19 ~ createConnect ~ socket:", socket);
  tmp.value = socket.id;
  function showMessage(str, type) {
    let div = document.createElement("div");
    div.innerHTML = str;
    if (type == "enter") {
      div.style.color = "blue";
    } else if (type == "leave") {
      div.style.color = "red";
    }
    let content = document.querySelector(".im-content");
    content.appendChild(div);
  }

  document.getElementById("sendBtn").onclick = function () {
    let txt = document.getElementById("sendTxt").value;
    if (txt) {
      console.log(txt);
      socket.emit("message", txt);
    }
  };

  socket.on("enter", function (data) {
    showMessage(data, "enter");
  });

  socket.on("message", function (data) {
    showMessage(data, "message");
  });

  socket.on("leave", function (data) {
    showMessage(data, "leave");
  });
};
onMounted(() => {
  // createConnect();
});
</script>

<style scoped lang="less">
.im {
  height: 100%;
  .im-header {
    height: 59px;
  }
  .im-content {
    height: calc(100% - 59px);
    overflow: auto;
    border: solid 2px #bbb0b0;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
  }
}
</style>
