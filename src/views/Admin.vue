<template>
    <div class="container mx-auto px-5  max-w-screen-lg">
        <router-link :to="{name: 'AddCategory'}" >
        
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Admin Category
            </button>
    
        </router-link>
        <br />
        <router-link :to="{name: 'AddProduct'}" >
    
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Admin Product
            </button>
        </router-link>
    </div>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>