import Vue from 'vue'
import Home from '../views/Home.vue'
import { IonicVueRouter } from '@ionic/vue';
Vue.use(IonicVueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/book/:id',
    name: 'book',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/viewBook.vue')
  },
  {
      path: '/preview',
      name: 'preview',
      component: () => import(/* webpackChunkName: "about" */ '../views/preview.vue'),
      props:true
  }
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
