import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import UserListView from '@/views/UserListView.vue'
import PurchaseListView from '@/views/PurchaseListView.vue'
import BookListView from '@/views/BookListView.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserListView
  },
  {
    path: '/purchases',
    name: 'PurchaseList',
    component: PurchaseListView
  },
  {
    path: '/books',
    name: 'BookList',
    component: BookListView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
