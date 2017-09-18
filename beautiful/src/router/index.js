import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Cart from '@/components/Cart/Cart'
import Detail from '@/components/Detail/Detail'
import List from '@/components/List/List'
import Mine from '@/components/Mine/Mine'
import Activity from '@/components/Activity/Activity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    }
    
  ]
})
