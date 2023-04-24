import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./staticRoutes";

// console.log(routes, "+++");
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
