<template>
    <div class="container px-5 py-24 mx-auto flex flex-col">
        <pre>{{ categoryData.id }}</pre>

        <div class="flex flex-col">
            <div class="w-100 text-center">
                <h4 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Edit Category</h4>
            </div>
        </div>
        <div  class="columns-1">
            <div class="columns-3"></div>
            <div  class="columns-6 flex flex-col">
                <form >
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input v-model="categoryData.category.categoryName"   type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <input v-model="categoryData.category.description" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Image</label>
                        <input v-model="categoryData.category.imageUrl" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    
                    <button 
                    @click="editCategory" 
                    type="submit" 
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Edit Category</button>
                </form>
                   
            </div>
            <div class="columns-3"></div>
        </div>
    </div>
</template>

<script async setup>
import axios from 'axios'
import { inject, onMounted, reactive, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const swal = inject('$swal')
// Props
const props = defineProps({
    baseURL: String,
    categories: Array
})
// Emits
const emit = defineEmits(['fetchData'])

// Router 
const router = useRouter()

// Category actions
const categoryData = reactive({
    category: null || {},
    id: null
})

onMounted(() => {
    categoryData.id = useRoute().params.id
    categoryData.category = props.categories.find(c => c.id == categoryData.id)  
})

const editCategory = async () => {
    delete categoryData.category["products"]
    console.log('category', categoryData.category);
    await axios.post(`${props.baseURL}category/update/${categoryData.id}`, categoryData.category)
    .then((res) => {
        emit('fetchData')
        router.push({ name: 'Category' })
        swal.fire({
            icon: 'success',
            title: 'category has been updated successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }).catch((err) => {
        console.log('error', err);
    })
}



</script>
<style lang="scss" scoped>

</style>