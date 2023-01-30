import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admin from '../views/Admin.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import ListProducts from '../views/Category/ListProducts.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import ProductDetail from '../views/Product/ProductDetail.vue'
import WishList from '../views/Product/WishList.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import Cart from '../views/Cart.vue'


const routes = [
    { 
        path: '/',
        name: 'home',
        component: HomeView
    },
    // category detail page
    {
      path: '/category/show/:id',
      name: 'ListProducts',
      component: ListProducts
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
      },
      // show the product details
      { 
        path: '/product-detail/:id',
        name: 'ProductDetail',
        component: ProductDetail
      },
      { 
        path: '/wishlist',
        name: 'WishList',
        component: WishList
      },
      // Singup
      {
        path: '/signup',
        name: 'Signup',
        component: Signup
      },
      {
        path: '/signin',
        name: 'Signin',
        component: Signin
      },
      // Shoping CART
      {
        path: '/cart',
        name: 'ShopingCart',
        component: Cart
      }
      
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router