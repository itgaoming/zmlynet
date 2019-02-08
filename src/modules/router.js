import Vue from 'vue';

import Index from '../components/index.vue';
import VueRouter from 'vue-router';
import login from '../components/login.vue';
import register from '../components/register.vue';
import assort from '../components/assort.vue';
import member from '../components/member.vue';
Vue.use(VueRouter);
var routes = [{

  path: "/",
  component: Index

},
{
  path:"/login",
  component:login
},
{
  path:"/register",
  component:register
}
,
{
  path:"/assort",
  component:assort
},
{
  path:"/member",
  component:member
}
]
var router = new VueRouter({
  routes,
  mode: 'history'
})
export default router;
