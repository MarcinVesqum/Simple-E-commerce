
<template>
    <div class="container mx-auto px-4 max-w-screen-lg ">
        <div class="w-100 text-center mt-20  font-extrabold">
            <h4 class="sm:text-3xl text-2xl mb-4 text-gray-900">Add New Product</h4>
        </div>
        <div class="columns-1">
            <div class="columns-3"></div>
            <div class="columns-6 flex flex-col">
                <form>
                    <div class="mb-4">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                    <input v-model="productData.name" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-4">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <input v-model="productData.description" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-4">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Image Url</label>
                        <input v-model="productData.imageURL" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                        <input v-model="productData.price" type="number" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="category" class="mb-2 text-sm font-medium text-gray-900">Product</label>
                        <select
                        v-model="productData.categoryId" 
                        id="category" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option
                            v-for="category in categories" 
                            :key="category.id"
                            :value="category.id">{{ category.categoryName }}</option>
                        </select>
                    </div>
                    <button @click="addProduct" 
                    type="submit" 
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
                </form>
                   
            </div>
            <div class="columns-3"></div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { reactive, inject } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

// sweet2
const swal = inject('$swal')

// Props
const props = defineProps({
    baseURL: String,
    categories: Array
})
//  Router
const router = useRouter()

const productData = reactive({
    id: null,
    categoryId: null,
    name: null,
    description: null,
    imageURL: null,
    price: null
})

const addProduct = () => {
    const newProduct = {
        categoryId: productData.categoryId,
        description: productData.description,
        name: productData.name,
        imageURL: productData.imageURL,
        price: productData.price
    }

    axios.post(props.baseURL + 'product/add', newProduct)
    .then(() => {
        router.push({ name: 'AdminProduct' })
        Swal.fire({
            text: 'Product added successfully',
            icon: 'success'
        })
    }).catch((err) => {
        console.log('error: ' + err)
    })
}
</script>

<style lang="scss" scoped>

</style>