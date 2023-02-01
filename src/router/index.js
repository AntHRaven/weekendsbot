import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import regionsView from "@/views/regionsView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/regions",
    name: "regions",
    component: regionsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
