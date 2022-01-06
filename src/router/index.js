import Vue from 'vue'
import Router from 'vue-router'
import Flight from '@/components/Flight'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flight',
      component: Flight
    }
  ]
})
