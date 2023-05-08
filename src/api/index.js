import request from "./request";

// 扫描api，一键挂载全局
const convertObj = {
  get: (url, params = {}, config = {}) => {
    request.get(url, { params });
  },
  post: (url, params = {}, config = {}) => {
    request.post(url, params);
  },
};
let Api = {};
const allApi = import.meta.globEager("./modules/*.js");
// console.log(allApi);
for (let [key, value] of Object.entries(allApi)) {
  //   console.log(key, value);
  key = key.replace(/\.\/|modules\/|\.js$/g, "");
  value = value.default;
  Api[key] = {};
  //   console.log(key, value);
  for (let [k, v] of Object.entries(value)) {
    // console.log(k, v)
    Api[key][k] = (params, config) => convertObj[v.type](v.url, params, config);
  }
}
export default Api;
