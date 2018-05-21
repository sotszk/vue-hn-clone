import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(Router)

export const createListView = id => () => require('../views/CreateListView')
  .then(m => m.default(id))

export const createRouter = () => {
  return new Router({
    mode: 'history',
    fallback: false,
    // TODO set `scrollBehavior`
    routes: [
      // { path: '/top:page(\\d+)?', component: createListView('top') },
      { path: '/', redirect: '/top' }
    ]
  })
}
