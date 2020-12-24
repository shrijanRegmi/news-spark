import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewsView from "../views/News_View.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "गुनासो चौतारी",
    },
  },
  {
    path: "/news-view/:id",
    name: "NewsView",
    component: NewsView,
    meta: {
      title: "गुनासो चौतारी",
    },
    props: true,
  },
  {
    path: "*",
    redirect: "/",
    meta: {
      title: "गुनासो चौतारी",
    },
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  var myTitle = to.meta.title;
  document.title = myTitle;
  next();
});

export default router;
