import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OrganizeMouse from "@/views/OrganizeMouse.vue";
import MealMouse from "@/views/MealMouse.vue";

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
      component: MealMouse,
    },
    {
      path: "/organizer",
      name: "organizemouse",
      component: OrganizeMouse,
    },
  ],
});

export default router;
