import Vue from 'vue'
import Router from 'vue-router'
import Question from '@/components/Question'
import Search from '@/components/search'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Question',
      component: Question
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
