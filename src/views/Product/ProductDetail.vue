<template>
    <div class="container px-5 py-24 mx-auto overflow-hidden">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img 
          alt="ecommerce" 
          class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" 
          :src="product.imageURL">
          <div class="lg:w-1/2 w-full lg:pl-7 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.name }}</h1>
            <div class="flex mb-3">
              <span class="flex items-center">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span class="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p class="leading-relaxed"> {{ product.description }}</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div class="flex">
                <span class="mr-3">Category:</span>
                <p>{{ category.categoryName}}</p>
              </div>
            </div>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div class="flex bg-gray-200 p-2 rounded-lg">
                <span class="mr-3 flex justify-center items-center">Quantity:</span>
                <input v-model="quantity" type="number" class="w-12 h-7 px-2">
              </div>
            </div>
            <div class="flex justify-between">
              <span class="title-font font-medium text-2xl text-gray-900">{{ product.price }} zł</span>
              <button @click="addToCart" class="flex ml-auto md:ml-5 md:px-6 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add Cart</button>
              <button @click="addToWishList" class="rounded-full w-40 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                {{ wishListText }}
              </button>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref, inject } from 'vue'
import { useRoute } from 'vue-router'

const swal = inject('$swal')

const id = ref(null),
  token = ref(null),
  product = ref({}),
  category = ref({}),
  wishListText = ref('Add to wishlist'),
  quantity = ref(1)

const props = defineProps({
    products: Array,
    categories: Array,
    baseURL: String,
})

const addToWishList = () => {
  if (!token.value) {
    // user is not logged in
    swal.fire({
      icon: 'error',
      text: 'please login to add item in wishlist',
    })
    return 
  }
  // add item to wishlist
  axios.post(`${props.baseURL}wishlist/add?token=${token.value}`, {
    id: product.value.id,
  })
    .then((res) => {
      if (res.status == 201) {
        wishListText.value = 'Added to wishlist'
        swal.fire({
          icon: 'success',
          text: 'Added to wishlist',
          showConfirmButton: false,
          timer: 1500
        })
      }
      
    })
    .catch(error => {
      console.log('error: ' + error)
    })
}

const addToCart = () => {
  if (!token.value) {
    // user is not logged in
    swal.fire({
      icon: 'error',
      text: 'please login to add item in cart',
    })
    return 
  }
  // add item to wishlist
  axios.post(`${props.baseURL}cart/add?token=${token.value}`, {
    productId: product.value.id,
    quantity: quantity.value,
  })
    .then((res) => {
      console.log(res.data);
      if (res.status == 201) {
        swal.fire({
          icon: 'success',
          text: 'Product added to cart',
          showConfirmButton: false,
          timer: 1500
        })
      }
      
    })
    .catch(error => {
      console.log('error: ', error)
    })
}

onMounted(() => {
  id.value = useRoute().params.id
  product.value = props.products.find(product => product.id == id.value) 
  category.value = props.categories.find(category => category.id == product.value.categoryId) 

  token.value = localStorage.getItem('token')
  console.log(token.value);
})
</script>