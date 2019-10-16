import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import EditUser from '@/components/EditUser'
import HelloYt from '@/components/HelloYt'
import Login from '@/components/Login'
import Index from '@/components/helloYt/index'

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
      redirect:'/helloYt/index',
      children:[
        {
          path: 'index',
          name: 'helloYtIndex',
          component: Index,
        },
        {
          path: 'sys/user',
          component: UserList,
          name:'sysUserList',
        },
        {
          path: 'sys/editUser',
          component: EditUser,
          name: 'sysEditUser',
        },

      ]
    },
    {
      path: '/user/userList',
      name: 'userList',
      component: UserList
    },
  ]
})
