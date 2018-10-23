import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/layout'
import Index from '@/components/index/index'
import Cockpit from '@/components/cockpit/cockpit'
import NewsCenter from '@/components/newsCenter/newsCenter'
import MsgCenter from '@/components/msgCenter/msgCenter'
import WaitDoCenter from '@/components/waitDoCenter/waitDoCenter'
import NoticesCenter from '@/components/noticesCenter/noticesCenter'
import NoticeDetail from '@/components/noticesCenter/noticeDetail'
import SelfService from '@/components/selfService/selfService'
import SalaryDetail from '@/components/selfService/salaryDetail'
import Theme from '@/components/theme/theme'
import Login from '@/components/login/login'
import NewsDetail from '@/components/newsCenter/newsDetail'
import MsgDetail from '@/components/msgCenter/msgDetail'

import store from '@/store/store'
import * as types from '@/store/types'

Vue.use(Router)

// export default new Router({
  const routes=[
      {
          path:'/',
          redirect: '/layout'
      },
      {
          path: '/layout',
          component: Layout,
          redirect:'/layout/index',
          meta: {
              requireAuth: true,
          },
        children:[
          {
              path:'index',
              component:Index
          },
          {
            path:'cockpit',
            component:Cockpit
          },
          {
            path:'newsCenter',
            component:NewsCenter
          },
          {
            path:'msgCenter',
            component:MsgCenter
          },
          {
            path:'waitDoCenter',
            component:WaitDoCenter
          },
          {
            path:'noticesCenter',
            component:NoticesCenter
          },
          {
            path:'selfService/:name',
            component:SelfService
          },
          {
            path:'salaryDetail',
            component:SalaryDetail
          },
          {
            path:'theme',
            component:Theme
          },
          {
            path:'newsDetail/:id',
            component:NewsDetail
          },
          {
            path:'msgDetail',
            component:MsgDetail
          },
          {
            path:'noticeDetail',
            component:NoticeDetail
          }
        ]
      },
      {
        path:'/login',
        component:Login
      }
  ]
// })
// 椤甸潰鍒锋柊鏃讹紝閲嶆柊璧嬪�紅oken
if (window.sessionStorage.getItem('token')) {
  store.commit(types.LOGIN, window.sessionStorage.getItem('token'))
}
if (window.sessionStorage.getItem('title')) {
  store.commit(types.TITLE, window.sessionStorage.getItem('title'))
}

const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/login',
            })
        }
    }
    else {
        next();
    }
})

export default router;
