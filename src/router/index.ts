import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const makeTitle = (title: string) => `${title} | Taillow`

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/components',
    name: 'Components',
    component: () =>
      import(/* webpackChunkName: "components" */ '../views/Components.vue'),
    redirect: '/components/buttons',
    children: [
      {
        path: '/components/cards',
        name: 'Cards',
        component: () =>
          import(/* webpackChunkName: "cards" */ '../views/Cards.vue'),
        meta: {
          title: 'Cards',
        },
      },
      {
        path: '/components/footers',
        name: 'Footers',
        component: () =>
          import(/* webpackChunkName: "footers" */ '../views/Footers.vue'),
        meta: {
          title: 'Footers',
        },
      },
      {
        path: '/components/heroes',
        name: 'Heroes',
        component: () =>
          import(/* webpackChunkName: "heroes" */ '../views/Heroes.vue'),
        meta: {
          title: 'Heroes',
        },
      },
      {
        path: '/components/buttons',
        name: 'Buttons',
        component: () =>
          import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue'),
        meta: {
          title: 'Buttons',
        },
      },
      {
        path: '/components/navs',
        name: 'Navs',
        component: () =>
          import(/* webpackChunkName: "navs" */ '../views/Navs.vue'),
        meta: {
          title: 'Navs',
        },
      },
      {
        path: '/components/skeletons',
        name: 'Skeletons',
        component: () =>
          import(/* webpackChunkName: "skeletons" */ '../views/Skeletons.vue'),
        meta: {
          title: 'Skeletons',
        },
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, _, next) => {
  const title = to.meta.title ? makeTitle(to.meta.title as string) : 'Taillow'

  document.title = title
  next()
})

export default router
