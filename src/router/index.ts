import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router'
import { getToken } from '@/util/cookie'
const staticRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    // 这里后续可以进行修改 进入的时候去判断是否直接跳转到首页
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      // icon:'',
    },
    component: () => import('../views/Index/admin'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/Login/index'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/NotFind/index'),
  },
]

const router = createRouter({
  // 路由匹配采用api调用方式 此处采用hash路由
  history: createWebHashHistory(),
  routes: staticRoute,
})

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    // getToken()
    // 这里根据文档配置将登录信息暂时存储在localStorage中，判断登录信息是否需要设置在cookie中，以设置定时cookie
    const user = localStorage.getItem('token')
    // 判断是否已经登录过了
    if (to.name == 'login' && user) {
      next({ name: 'home' })
    }
    if (to.name == 'home' && !user) {
      next({ name: 'login' })
    }
    next()
  }
)

export default router
