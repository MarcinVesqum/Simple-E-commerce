<template>
    
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://flowbite.com/" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap">E-commerce</span>
      </a>
      <div class="flex order-3">
        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="click" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Accounts<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <!-- Dropdown menu -->
        <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul v-if="!token" class="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
              <li>
                <router-link :to="{ name: 'Signup'}" class="block px-4 py-2 hover:bg-gray-100 ">Sign up</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Signin'}" class="block px-4 py-2 hover:bg-gray-100">Sign in</router-link>
              </li>

            </ul>
            <ul v-else class="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
              <li>
                <router-link :to="{ name: 'Admin'}" class="block px-4 py-2 hover:bg-gray-100">Admin</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'WishList'}" class="block px-4 py-2 hover:bg-gray-100">WishList</router-link>
              </li>
              <li>
                <router-link @click="signout" :to="{ name: 'home'}" class="block px-4 py-2 hover:bg-gray-100">Sing Out</router-link>
              </li>
            </ul>
            
        </div>
      </div>
      <div class="flex order-5">
        <router-link :to="{ name: 'ShopingCart'}">
          <button type="button" class="bg-transparent  focus:outline-none relative">
            <svg aria-hidden="true" class="w-8 h-8 mr-2 -ml-1 hover:h-9 hover:w-9 position duration-500 ease-in-out" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            <span class="absolute -top-1 text-white bg-blue-500 w-5 h-5 rounded-full">1</span>
          </button>
        </router-link>
        
      </div>
      
   
      <div class="flex md:order-2">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1" >
          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Search</span>
        </button>
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search...">
        </div>
        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search...">
        </div>
        
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          <li>
            <router-link :to="{ name: 'home' }" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'AdminProduct'}" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Product</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Category'}" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Category</router-link>
          </li>

          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref, inject } from 'vue'
import { 
    initAccordions, 
    initDropdowns, 
    initTabs,
    initCollapses} from 'flowbite'

const swal = inject('$swal')

let token = ref(null)

// signout
const signout = () => {
  localStorage.removeItem('token')
  token.value = null
  swal.fire({
    icon: 'success',
    text: 'Logged you out. Visit Again',
    closeOnClickOutside: false,

  })

}

// initialize components based on data attribute selectors
onMounted(() => {
    token.value = localStorage.getItem('token')
    initAccordions();
    initCollapses();
    initDropdowns();
    initTabs();

})
</script>

<style lang="scss" scoped>

</style>