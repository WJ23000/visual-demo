import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const staticRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      index: 0,
      needlogin: false
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/login/login.vue'], resolve)
  },
  {
    path: '/error',
    name: 'error',
    meta: {
      index: 0,
      needlogin: false
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/error/error.vue'], resolve)
  },
]

export const constantRoutes = [
  ...staticRoutes,
  {
    path: '/',
    name: 'index',
    meta: { 
      index: 0,
      needlogin: false 
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/index/index.vue'],resolve)
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ x: 0,y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router