import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
   routes:[
       {   
           name:'home',
           path:'/',
           component:()=>import('./pages/home.vue'),
           redirect:'/index',
           children:[
               {
                   name:indexedDB,
                   path:'/index',
                   component:()=>import('./pages/index.vue')
               },
               {
                    name:'product',
                    path:'/product/:id',
                    component:()=>import('./pages/product.vue')
               },
               {    
                   name:'detail',
                   path:'/detail/:id',
                   component:()=>import('./pages/detail.vue')
               }
           ]
       },
       {
           name:'login',
           path:'/login',
           component:()=>import("./pages/login.vue")
       }
   ]
})