import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lorem from '@/components/Lorem'
import Words from '@/components/Words'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lorem',
      name: 'Lorem',
      component: Lorem
    },
    {
      path: '/words',
      name: 'Words',
      component: Words
    }
  ]
})
