// import Img1 from "@/assets/img/1.jpg";
// import Img2 from "@/assets/img/2.webp";
// import Img7 from "@/assets/img/7.jpg";
// import Img8 from "@/assets/img/8.jpg";
// import Img9 from "@/assets/img/9.jpg";
// 批量获取图片路径
const modules = import.meta.globEager("../../assets/img/**/*.*");
console.log(modules, modules["../../assets/img/2.webp"].default, "imggg");
// export const Imgs = {
//   Img1: modules["../../assets/img/dance1.webp"].default,
//   // Img2,
//   // Img7,
//   // Img8,
//   // Img9,
// };

const getFilename = (str) => {
  if (!str) throw new Error("需要输入 string");
  str = str.split("/").reverse()[0];
  let arr = str.split(".");
  arr.pop();
  str = arr.join(".");
  return str;
};
const getFullFilename = (str) => {
  if (!str) throw new Error("需要输入 string");
  str = str.split("/").reverse()[0];
  return str;
};
let imgs = {};
for (let [key, val] of Object.entries(modules)) {
  // console.log(key, val);
  // 文件名不能包含 '/',但是可以包含 '.'
  // console.log(getFilename(key));
  // 文件名不能重名，否则会覆盖
  imgs[getFullFilename(key)] = {
    src: val.default,
    content: getFullFilename(key),
  };
}
console.log(imgs);
export default imgs;
