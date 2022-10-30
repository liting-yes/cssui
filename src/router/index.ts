import { createRouter, createWebHistory } from "vue-router";
import IntroVue from "@/views/intro.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/intro",
    },
    {
      path: "/intro",
      component: IntroVue,
    },
  ],
});

export default router;
