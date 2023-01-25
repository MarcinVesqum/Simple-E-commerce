<template>
    <div class="container mx-auto max-w-screen-md">
        <div class="text-xl text-center font-extrabold mt-20">
            <h4 class="sm:text-3xl text-2xl text-gray-900 mb-4">Edit Product</h4>
        </div>
        <div class="columns-1">
            <div class="columns-6 flex flex-col m-5">
                <form>
                    <div class="mb-6">
                        <label for="category" class="mb-2 text-sm font-medium text-gray-900">Product</label>
                        <select
                        v-model="productData.product.categoryId" 
                        id="category" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option
                            v-for="category in categories" 
                            :key="category.id"
                            :value="category.id">{{ category.categoryName }}</option>
                        </select>
                    </div>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input v-model="productData.product.name"  type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <input v-model="productData.product.description" type="text" id="description" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="imageURL" class="block mb-2 text-sm font-medium text-gray-900 ">Image</label>
                        <input v-model="productData.product.imageURL" type="text" id="imageURL" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                        <input v-model="productData.product.price" type="number" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <button 
                    @click.prevent="editProduct" 
                    type="submit" 
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Edit Product
                    </button>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import axios from 'axios'
import { onMounted, inject, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const productData = reactive({
    product: null || {},
    id: null
})


const swal = inject('$swal')
const router = useRouter()
const props = defineProps({
    products: Array,
    categories: Array,
    baseURL: String
})

const emit = defineEmits(['fetchData'])




const editProduct = async () => {
    console.log(productData.product);
    await axios.post(`${props.baseURL}product/update/${productData.id }`, productData.product)
    .then(() => {
        emit('fetchData')
        router.push({ name: 'AdminProduct' })
        swal.fire({
            icon: 'success',
            title: 'product has been updated successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }).catch((err) => console.log('err', err))
}

onMounted(() => {
    productData.id = useRoute().params.id
    productData.product = {...props.products.find(p => p.id == productData.id )}
    console.log(props.products, productData.id);
})
</script>

<style lang="scss" scoped>

</style>