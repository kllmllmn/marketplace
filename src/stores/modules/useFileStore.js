import { defineStore } from "pinia";

const useFileStore = defineStore("file", {
  state: () => {
    return {
      avatarList: [],
    };
  },
  getters: {},
  actions: {
    test(m) {
      console.log(m, "++");
    },
    setList(obj) {
      for (let [key, val] of Object.entries(obj)) {
        console.log(obj, key, val);
        this[key] = val;
      }
    },
    unshiftList(obj) {
      for (let [key, val] of Object.entries(obj)) {
        this[key].unshift(val);
        console.log(obj, key, val, this[key]);
      }
    },
  },
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: "fileStore",
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.sessionStorage,
  },
});

export default useFileStore;
