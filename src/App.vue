<script setup>
import Navbar from './components/Navbar.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'


const baseURL = 'https://limitless-lake-55070.herokuapp.com/'
const categories = ref([])
const products = ref([])

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
    fetchData()
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
</template>

<style scoped>

</style>
