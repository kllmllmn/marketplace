import { defineStore } from "pinia";

const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      menuList: [],
    };
  },
  getters: {
    // 面包屑
    breadcrumbList() {
      return this.menuList;
    },
  },
  actions: {
    setMenuList(list) {
      this.menuList = list;
    },
  },
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: "menuStore",
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.sessionStorage,
    // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    // paths: ["name", "age", "address.country"],
  },
});

export default useMenuStore;
