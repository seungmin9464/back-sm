import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/seungmin9464/",
    name: "app",
    component: () =>
      import(/* webpackChunkName: "intro" */ "../views/PortFolio.vue"),
  },
  {
    path: "/seungmin9464/intro",
    name: "intro",
    component: () =>
      import(/* webpackChunkName: "intro" */ "../components/IntroView.vue"),
  },
  {
    path: "/seungmin9464/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "intro" */ "../components/AboutView.vue"),
  },
  {
    path: "/seungmin9464/career",
    name: "career",
    component: () =>
      import(/* webpackChunkName: "career" */ "../components/CareerView.vue"),
  },
  {
    path: "/seungmin9464/work",
    name: "work",
    component: () =>
      import(/* webpackChunkName: "work" */ "../components/WorkView.vue"),
  },
  {
    path: "/seungmin9464/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../components/ContactView.vue"),
  },
  {
    path: "/seungmin9464/404",
    name: "notFound",
    component: NotFound,
    // 404 페이지 링크
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    // 404 페이지 redirect
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
