import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import JSZipUtils from "jszip-utils";
import ImageModule from "docxtemplater-image-module-free";
import { downloadBlob } from "./file";
import { Buffer } from "buffer";

function fileToBase64(file, resolve) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    // e.target.result 即为base64结果
    clearblankimg(e.target.result, resolve);
  };
}

//签名图片处理
function clearblankimg(imgData, resolve) {
  var img = new Image(); //创建图片对象
  img.src = imgData;
  img.onload = function () {
    var c = document.createElement("canvas"); //创建处理画布对象
    var ctx = c.getContext("2d");
    c.width = img.width;
    c.height = img.height;
    ctx.drawImage(img, 0, 0); //绘制
    var imgData = ctx.getImageData(0, 0, c.width, c.height).data; //读取图片数据
    var lOffset = c.width,
      rOffset = 0,
      tOffset = c.height,
      bOffset = 0;
    for (var i = 0; i < c.width; i++) {
      for (var j = 0; j < c.height; j++) {
        var pos = (i + c.width * j) * 4;
        if (
          imgData[pos] == 255 ||
          imgData[pos + 1] == 255 ||
          imgData[pos + 2] == 255 ||
          imgData[pos + 3] == 255
        ) {
          bOffset = Math.max(j, bOffset); // 找到有色彩的最下端
          rOffset = Math.max(i, rOffset); // 找到有色彩的最右端
          tOffset = Math.min(j, tOffset); // 找到有色彩的最上端
          lOffset = Math.min(i, lOffset); // 找到有色彩的最左端
        }
      }
    }
    lOffset++;
    rOffset++;
    tOffset++;
    bOffset++;
    var x = document.createElement("canvas"); //创建处理后画布对象
    x.width = rOffset - lOffset;
    x.height = bOffset - tOffset;
    var xx = x.getContext("2d");
    xx.drawImage(
      img,
      lOffset,
      tOffset,
      x.width,
      x.height,
      0,
      0,
      x.width,
      x.height
    ); //绘制
    resolve(x.toDataURL());
    console.log(x.toDataURL()); //得到最终裁剪出来的base64
  };
}

function base64DataURLToArrayBuffer(dataURL) {
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
}
// function base64ToArrayBuffer(base64) {
//   const binaryStr = atob(base64);
//   const len = binaryStr.length;
//   const bytes = new Uint8Array(len);

//   for (let i = 0; i < len; i++) {
//     bytes[i] = binaryStr.charCodeAt(i);
//   }

//   return bytes.buffer;
// }

const editer = {
  exportWordAndImage(docxOptionsData, url, resolve3, exportFilename) {
    JSZipUtils.getBinaryContent(url, (error, content) => {
      if (error) {
        console.error(error);
        return;
      }

      const promise = new Promise((resolve, reject) => {
        // fileToBase64(docxOptionsData.signImg, resolve);
        resolve(docxOptionsData.signImg);
      });
      promise.then((base64N) => {
        let signImg = base64N;

        // 图片处理
        let opts = {};
        // opts.centered = true; // 图片居中，在word模板中定义方式为{%src}
        opts.fileType = "docx";
        opts.getImage = function (chartId) {
          return base64DataURLToArrayBuffer(chartId);
        };
        opts.getSize = function () {
          return [100, 50];
        };
        // 避免图片覆盖同行文字,模板中图片占位符需要空出前面文字（包括空格）相应的宽度-----------------
        opts.getDPI = function () {
          return 72;
        };
        opts.applyStyle = function (image) {
          // 样式数组中包含了当前字符的样式信息，例如字体大小、行高等
          const width = `11Tw`; // 获取当前字符宽度
          return {
            width: width,
            height: "auto",
            floating: {
              horizontalPosition: {
                offset: -88, // 将图片向右移动88个像素
              },
              verticalPosition: {
                offset: 0,
              },
            },
          };
        };
        // -----------------

        const imageModule = new ImageModule(opts);

        const zip = new PizZip(content);
        const doc = new Docxtemplater()
          .loadZip(zip)
          .setOptions({ paragraphLoop: true, linebreaks: true }) // 换行确认，如果你有的文本中有换行符的话，可以选择它导入到word起不起作用
          .attachModule(imageModule)
          .compile();

        doc
          .resolveData({
            // 这是你导入的数据，这个数据体中的属性或对象一定要和word模板中的插值一样
            ...docxOptionsData,
            // signImg,
          })
          .then(() => {
            console.log("Export...");
            doc.render();
            const blobData = doc.getZip().generate({
              type: "blob",
              mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });

            let file = new window.File([blobData], `${exportFilename}.docx`, {
              type: "docx",
            });
            //弹出下载
            downloadBlob(blobData, `${exportFilename || "导出文件"}.docx`);
            // console.log(file);
            resolve3(file); // 直接返回生成file
            // 输出文档，可以自定义自己的文档名
            //
          });
      });
    });
  },
};

export default editer;
