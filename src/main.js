import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import FormValidation from './components/FormValidation.vue'
import Login from './components/Login.vue'



Vue.use(VueRouter)


Vue.config.productionTip = false

const router=new VueRouter({
  routes:[
    {name:'FormValidation' ,   path: '/' , component:FormValidation},

    {name:'Home' ,path: '/Home' , component:Home},
    {name:'Login' ,path: '/login' , component:Login},



 

  ],
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
