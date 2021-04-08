import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Gallery from "@/components/Gallery.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Payment from "@/components/Payment.vue";
import Store from "@/views/Store.vue";
import About from "@/views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/payment",
    name: "payment",
    component: Payment,
  },
  {
    path: "/store",
    name: "store",
    component: Store,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
