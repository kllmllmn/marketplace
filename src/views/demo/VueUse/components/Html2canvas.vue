<template>
  <div ref="html2canvasRef" class="img-wrapper">
    <img
      style="width: 100px; height: 100px"
      src="@/assets/img/gif/sound.gif"
      :fit="cover"
    />
    <div class="some-text">some-text--一段文字</div>
    <div class="circle-wrapper flx-center" @click="screenshot">
      <div class="screenshot flx-center">
        <el-icon><CameraFilled class="camera" /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import html2canvas from "html2canvas";
import { ref } from "vue";

const html2canvasRef = ref();
const dataURLToBlob = (dataurl) => {
  let arr = dataurl.split(",");
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

const screenshot = () => {
  html2canvas(html2canvasRef.value).then(function (canvas) {
    // canvasDom
    let dom = document.body.appendChild(canvas);
    dom.style.display = "none";
    let a = document.createElement("a");
    a.style.display = "none";
    document.body.removeChild(dom);
    let blob = dataURLToBlob(dom.toDataURL("image/png"));
    a.setAttribute("href", URL.createObjectURL(blob));
    //这块是保存图片操作  可以设置保存的图片的信息
    a.setAttribute("download", "Capture" + ".png");
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(blob);
    document.body.removeChild(a);
  });
};
</script>

<style scoped lang="less">
.img-wrapper {
  position: relative;
  border: 1px solid rgb(92, 87, 87);
  border-radius: 8px;
  padding: 10px;
  &:hover {
    .circle-wrapper {
      visibility: unset;
    }
  }
  .some-text {
    font-size: 18px;
  }
  .circle-wrapper {
    visibility: hidden;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 50px;
    height: 50px;
    background-color: #52993e;
    border-radius: 100%;
    .screenshot {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      background-color: rgb(255, 255, 255);
      .camera {
        color: rgb(77, 53, 53);
      }
    }
  }
}
</style>
