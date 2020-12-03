import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/views/layout/index';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    redirect: 'home',
    component: Layout,
    children:[
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/index')
      }

    ]
  },
  {
    path: "",
    name: "About-firstLevel",
    component: Layout,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
       {
         path: 'about',
         name: 'About',
         component: () => import(/* webpackChunkName: "about" */ "@/views/about/index.vue")
       }
    ]

  },
  {
    path: '',
    name: 'Book-firstLevel',
    component: Layout,
    children: [
      {
        path: 'book',
        name: 'Book',
        component: () => import (/* webpackChunkName: "layout" */'@/views/book/index')
      }
   ]

  },
  {
    path: '',
    name: 'Page-firstLevel',
    component: Layout,
    children: [
      {
        path: 'page',
        name: 'Page',
        component: () => import (/* webpackChunkName: "page" */'@/views/page/index')
      }
    ]    

  }
];

const router = new VueRouter({
  routes
});

export default router;
