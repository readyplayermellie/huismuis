import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OrganiseView from "@/views/OrganiseView.vue";
import MealView from "@/views/MealView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/recipes",
      name: "mealmouse",
      component: MealView,
    },
    {
      path: "/organiser",
      name: "organizemouse",
      component: OrganiseView,
    },
  ],
});

export default router;
