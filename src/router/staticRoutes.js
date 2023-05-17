import { menuList } from "@/assets/menuList";
// 懒加载 动态导入组件
let modules = import.meta.glob("../views/**/*.vue");
// console.log(modules, "modules");
let routes = [
  {
    path: "/",
    name: "/",
    component: () => import("@/layout/index.vue"),
    meta: {},
    children: [],
    redirect: "/home",
  },
];
const generateRoutes = (menuList) => {
  menuList.forEach((item) => {
    // 只有叶子节点有路由
    if (!item.children || !item.children.length) {
      const route = {
        path: item.path,
        name: item.name,
        // component: () => import(`@/views/${item.path}/index.vue`),
        component: modules[`../views/${item.path}/index.vue`],
        meta: { text: item.text },
      };
      // console.log(route, `../views/${item.path}/index.vue`, "++");
      routes[0].children.push(route);
    } else {
      let subList = item.children;
      generateRoutes(subList);
    }
  });
};

generateRoutes(menuList);

export default routes;
