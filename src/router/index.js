import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import Workouts from '@/components/pages/workouts/Workouts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Workouts',
      component: Workouts
    }
  ]
})
