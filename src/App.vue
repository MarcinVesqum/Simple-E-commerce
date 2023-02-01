<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'


const baseURL = 'https://limitless-lake-55070.herokuapp.com/'
const categories = ref(null)
const products = ref(null)
const token = ref(null)
const cartCount = ref(0)

const fetchData = async () => {
    // api call to get all the categories
    await axios.get(baseURL + 'category/')
    .then(res => {
        categories.value = res.data
    }).catch((err) => { throw err })

      // api call to get the products

    await axios.get(baseURL + 'product/')
    .then(res => {
        products.value = res.data
    }).catch((err) => { throw err })
    // fetch cart item if token is present i. e logged in
    if (token.value) {
        axios.get(`${baseURL}cart/?token=${token.value}`)
        .then((res) => {
            const result = res.data
            cartCount.value = result.cartItems.length
            console.log(cartCount.value);
        }).catch((err) => console.log('err', err))
    }
}

const resetCartCount = () => {
    cartCount.value = 0
}

onMounted(() => {
    token.value = localStorage.getItem("token")
    fetchData();
})
</script>

<template>
    <Navbar :cartCount="cartCount" :resetCartCount="resetCartCount"/>
    <div class="text-gray-600 body-font flex justify-center items-center ">
        <router-view
        v-if="products && categories"
        :baseURL="baseURL"
        :categories="categories"
        :products="products"
        @fetchData="fetchData" 
        v-slot="{ Component }"
        >
        <suspense>
            <component
            :is="Component" 
            />
        </suspense>
    </router-view>
    </div>
    <Footer/>
</template>

<style>
*,
*::after,
*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
}
#app {
    width: 100%;
}
</style>
