import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory'
import Category from '../views/Category/Category'
import Product from '../views/Product/Product'
import Admin from "../views/Admin";
import AddProduct from "../views/Product/AddProduct";


const routes = [
    { 
        path: '',
        name: 'home',
        component: HomeView
    },
    {
        path: '/admin/category/add',
        name: 'AddCategory',
        component: AddCategory
      },
      {
        path: '/admin/category',
        name: 'Category',
        component: Category
      },
        // admin home page
      {
        path: '/admin',
        name: 'Admin',
        component: Admin
      },
      {
        path: '/admin/product',
        name: 'AdminProduct',
        component: Product
      },
        // add product
      {
        path: '/admin/product/new',
        name: 'AddProduct',
        component: AddProduct
      }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router