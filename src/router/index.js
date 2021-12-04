import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Addresses from '@/views/Addresses.vue'
import AddressForm from '@/views/AddressForm.vue'
import Todo from '@/views/Todo.vue'
import Pokedex from '@/views/Pokedex.vue'
import VeeValidate from '@/views/VeeValidate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home', desc: 'My first vue-cli app' }
  },
  {
    path: '/addresses',
    name: 'addresses',
    component: Addresses,
    meta: { title: 'Adresses', desc: 'My first vue-cli app' }
  },
  {
    path: '/addresses/:address_id?/edit',
    name: 'address_edit',
    component: AddressForm,
    meta: { title: 'Address Form', desc: 'My first vue-cli app' }
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo,
    meta: { title: 'Todo', desc: 'My first vue-cli app' }
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: Pokedex,
    meta: { title: 'Pokedex', desc: 'My first vue-cli app' }
  },
  {
    path: '/veevalidate',
    name: 'veevalidate',
    component: VeeValidate,
    meta: { title: 'VeeValidate', desc: 'My first vue-cli app' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
