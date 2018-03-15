import App from '../App'

const index = r => require.ensure([], () => r(require('../pages/home/index.vue')), 'index')
const home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home')
const lan = r => require.ensure([], () => r(require('../pages/lan.vue')), 'lan')
const about = r => require.ensure([], () => r(require('../pages/about.vue')), 'about')

export default [
  {
    path: '/',
    component: index,
    meta: {
      order: 0
    }
  },
  {
    path: '*',
    component: home,
    meta: {
      order: 1
    }
  },
  {
    path: '/home',
    component: home,
    meta: {
      order: 1
    }
  },
  {
    path: '/lan',
    component: lan,
    meta: {
      order: 2
    }
  },
  {
    path: '/about',
    component: about,
    meta: {
      order: 3
    }
  }
]