<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'


const baseURL = 'https://limitless-lake-55070.herokuapp.com/'
const categories = ref(null)
const products = ref(null)

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
}

onMounted(() => {
    fetchData();
})
</script>

<template>
    <Navbar/>
    <div class="text-gray-600 body-font">
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
