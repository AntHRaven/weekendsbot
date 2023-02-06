import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import regionsView from "@/views/regions/regionsView";
import oneRegionView from "@/views/regions/oneRegionView";
import attractionsView from "@/views/attractions/attractionsView";

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
  {
    path: "/regions/:title",
    name: "one-region",
    component: oneRegionView,
  },
  {
    path: "/attractions",
    name: "attractions",
    component: attractionsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
