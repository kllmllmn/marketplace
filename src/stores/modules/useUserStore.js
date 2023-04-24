import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => {
    return {
      name: "zs",
      age: 100,
      address: {
        country: "",
        city: "",
      },
    };
  },
  getters: {
    nameAge() {
      return this.name + this.age;
    },
  },
  actions: {
    changeName(name) {
      this.name = name;
    },
  },
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: "userStore",
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.sessionStorage,
    // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    paths: ["name", "age", "address.country"],
  },
});

export default useUserStore;
