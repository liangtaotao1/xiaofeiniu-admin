import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import GlobalSettions from './views/GlobalSettions.vue'
import TableList from './views/TableList.vue'
import TableAdd from './views/TableAdd.vue'
import TableDelete from './views/TableDelete.vue'
import Category from './views/Category.vue'
import DishList from './views/DishList.vue'
import DishAdd from './views/DishAdd.vue'
import DishDelete from './views/DishDelete.vue'
import DishUpdate from './views/DishUpdate.vue'
import OrderList from './views/OrderList.vue'
import Security from './views/Security.vue'

Vue.use(Router)
//整个项目的路由词典：访问路经<=>视图组件
export default new Router({
  routes: [
    {path:'/',redirect:'/Login'},
    {path:'/login',component:Login},
    {path:'/main',
    component:Main,
    children:[
      {path:'',redirect:'/table/list'},
      {path:'/settions',component:GlobalSettions},
      {path:'/table/list',component:TableList},
      {path:'/table/add',component:TableAdd},
      {path:'/table/delete',component:TableDelete},
      {path:'/category',component:Category},
      {path:'/dish/list',component:DishList},
      {path:'/dish/add',component:DishAdd},
      {path:'/dish/delete',component:DishDelete},
      {path:'/dish/update',component:DishUpdate},
      {path:'/order/list',component:OrderList},
      {path:'/security',component:Security},
    ]},
    {path:'*',component:NotFound},

  ]
})
