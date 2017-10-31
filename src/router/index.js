import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home/HelloWorld'
import DogsContainer from '@/container/DogsContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/dogs',
      name: 'Dogs',
      component: DogsContainer
    }
  ]
})
