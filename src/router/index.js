import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import Product from '../views/Product/Product.vue'
import Admin from "../views/Admin.vue";
import AddProduct from "../views/Product/AddProduct.vue";
import EditProduct from "../views/Product/EditProduct.vue";


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
      {
        path: '/admin/categor/:id',
        name: 'EditCategory',
        component: EditCategory,
        props: true
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
      },
      {
        path: '/admin/product/:id',
        name: 'EditProduct',
        component: EditProduct,
        props: true
      }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router