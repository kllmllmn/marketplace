import { Buffer } from "buffer";

/**
 *@description 图片转base64
 *@param {Blob} blob
 */
export const toBase64 = (blob) => {
  // 可以在回调中return
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      // console.log(reader.result);
      resolve(reader.result); //--
    };
  });
};
export const downloadFile = (url, fileName) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
export const downloadBlob = (blobData, filename) => {
  var url = window.URL.createObjectURL(blobData);
  downloadFile(url, filename);
  window.URL.revokeObjectURL(url);
};
// /**
//  * 分片获取md5值
//  * @param {*} file 文件对象
//  * @param {*} chunkSize 分片大小
//  * @param {*} progressCallback 进度修改回调
//  * @returns
//  */
// function md5WithChunk(file, chunkSize, progressCallback = console.log) {
//     return new Promise((resolve, reject) => {
//       const blobSlice =
//         File.prototype.slice ||
//         File.prototype.mozSlice ||
//         File.prototype.webkitSlice
//       let chunks = Math.ceil(file.size / chunkSize)
//       let currentChunk = 0
//       let spark = new SparkMD5.ArrayBuffer()
//       let fileReader = new FileReader()
//       fileReader.onerror = reject
//       fileReader.onload = (e) => {
//         processCallback(currentChunk / chunks)
//         spark.append(e.target.result)
//         currentChunk++
//         if (currentChunk < chunks) {
//           loadNext()
//         } else {
//           resolve(spark.end())
//         }
//       }
//       function loadNext() {
//         let start = currentChunk * chunkSize
//         let end = start + chunkSize >= file.size ? file.size : start + chunkSize
//         fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
//       }
//       loadNext()
//     })
//   }
export const base64DataURLToArrayBuffer = (dataURL) => {
  const base64Regex = /^data:image\/(png|jpg|svg|svg\+xml);base64,/;
  if (!base64Regex.test(dataURL)) {
    return false;
  }
  const stringBase64 = dataURL.replace(base64Regex, "");
  let binaryString;
  if (typeof window !== "undefined") {
    binaryString = window.atob(stringBase64);
  } else {
    // binaryString = new Buffer(stringBase64, "base64").toString("binary");
    binaryString = Buffer.from(stringBase64, "base64").toString("binary");
  }
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    const ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes.buffer;
};
