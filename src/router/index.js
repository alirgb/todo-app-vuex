import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateForm from "../views/CreateForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "CreateForm",
    component: CreateForm,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
