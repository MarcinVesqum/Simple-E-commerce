<template>
    <div class="container mx-auto max-w-screen-md">
        <div class="text-xl text-center font-extrabold mt-20">
            <h4 class="sm:text-3xl text-2xl text-gray-900 mb-4">Edit Product</h4>
        </div>
        <div class="columns-1">
            <div class="columns-6 flex flex-col m-4 sm:m-2">
                <form>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input   type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Image</label>
                        <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required>
                    </div>
                    <button 
                    @click="editProduct" 
                    type="submit" 
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Edit Category
                    </button>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script setup>
const props = defineProps({
    products: Array,
    baseURL: String
})

console.log(props.products, props.baseURL);
</script>

<style lang="scss" scoped>

</style>