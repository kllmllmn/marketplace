import axios from "axios";

// 创建axios实例
const request = axios.create({
  baseURL: "",
  timeout: 10000,
});
//请求拦截器:在发请求之前，请求拦截器可以检测到,可以在请求发出去之前做一些事情
request.interceptors.request.use(
  (config) => {
    //config是个配置对象，对象里面有一个属性很重要，headers请求头
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

//响应拦截器：包含两个函数（一个是成功返回的函数，一个是失败的返回的函数）
request.interceptors.response.use(
  (res) => {
    //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情。
    return res.date;
  },
  (error) => {
    return Promise.reject(new Error("fail"));
  }
);
//对外暴露requests(axios的二次封装)
export default request;
