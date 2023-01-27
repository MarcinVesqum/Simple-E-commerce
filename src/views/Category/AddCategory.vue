<template>
    <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="flex flex-col">
            <div class="w-100 text-center">
                <h4 class="sm:text-3xl text-2xl mb-4 text-gray-900 font-extrabold">Add New Category</h4>
            </div>
        </div>
        <div class="columns-1">
            <div class="columns-3"></div>
            <div class="columns-6 flex flex-col">
                <form>
                    <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                    <input v-model="categoryData.categoryName" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required>
                    </div>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <input v-model="categoryData.description" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Description" required>
                    </div>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Image</label>
                        <input v-model="categoryData.imageUrl" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Image" required>
                    </div>
                    
                    <button @click="addCategory" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
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



const categoryData = reactive({
    categoryName: null,
    description: null,
    imageUrl: null,
})

const addCategory = () => {
    const newCategory = {
        categoryName: categoryData.categoryName,
        description: categoryData.description,
        imageUrl: categoryData.imageUrl,
    }

    const baseURL = 'https://limitless-lake-55070.herokuapp.com'

    axios({
        method: 'POST',
        url: `${baseURL}/category/carete`,
        data: JSON.stringify(newCategory),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(() => {
        Swal({
            text: 'Category added successfully',
            icon: 'success'
        })
    }).catch((err) => {
        console.log(err)
    })
}

</script>
<style lang="scss" scoped>

</style>