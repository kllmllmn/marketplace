import useUserStore from "./modules/useUserStore";
import useCounterStore from "./modules/useCounterStore";
import useMenuStore from "./modules/useMenuStore";

// 统一导出useStore方法 方便引入
export default function useStore() {
  return {
    userStore: useUserStore(),
    counterStore: useCounterStore(),
    menuStore: useMenuStore(),
  };
}
