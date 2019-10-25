import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views'
// import VueRouterMiddleware from 'vue-router-middleware'

Vue.use(Router)
// Vue.use(VueRouterMiddleware, { Router })

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home')
    },
    {
      path: '/swipe',
      name: 'swipe',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Views.Swipe,
      children: [
        {
          path: 'test',
          name: 'test',
          component: Views.test1
        },
        {
          path: 'test2',
          name: 'test2',
          component: Views.test2
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => Views.NotFound
    },
    {
      path: '/Capture',
      name: 'Capture',
      component: Views.Capture
    },
    {
      path: '/Nav',
      name: 'Nav',
      component: Views.Nav
    },
    {
      path: '/Splash',
      name: 'Splash',
      component: Views.Splash
    },
    {
      path: '/getYoutube',
      name: 'getYoutube',
      component: Views.getYoutube
    },
    {
      path: '/ocr',
      name: 'ocr',
      component: Views.Ocr
    },
    {
      path: '/filepond',
      name: 'filepond',
      component: Views.Filepond
    },
    {
      path: '/Chart',
      name: 'Chart',
      component: Views.Chart
    }
  ]
})
