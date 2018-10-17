import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/layout'
import Index from '@/components/index/index'
import Cockpit from '@/components/cockpit/cockpit'
import NewsCenter from '@/components/newsCenter/newsCenter'
import MsgCenter from '@/components/msgCenter/msgCenter'
import WaitDoCenter from '@/components/waitDoCenter/waitDoCenter'
import SelfService from '@/components/selfService/selfService'
import SalaryDetail from '@/components/selfService/salaryDetail'
import Theme from '@/components/theme/theme'
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path:'/',
          redirect: '/layout'
      },
      {
          path: '/layout',
          component: Layout,
          redirect:'/layout/index',
          // meta: {
          //     requireAuth: true,
          // },
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
          }
        ]
      },
      {
        path:'/login',
        component:Login
      }
  ]
})
