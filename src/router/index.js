import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import EditUser from '@/components/EditUser'
import HelloYt from '@/components/HelloYt'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component: Login,
    },
    {
      path:'/helloYt',
      name:'helloYt',
      component: HelloYt,
    },
    {
      path: '/user/userList',
      name: 'userList',
      component: UserList
    },
    {
      path: '/editUser',
      name: 'editUser',
      component: EditUser,
    }
  ]
})
