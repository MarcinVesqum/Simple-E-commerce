<template>

  <div class="container px-5 py-24 mx-auto">
    <h3 class="pt-3 text-center">Our Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button type="button" class="text-white bg-gradient-to-r ml-5 px-4 py-2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300" style="float:right">Add Category</button>
        </router-link>
        <div class="flex flex-wrap">
          <div v-for="category of categories" :key="category.id" class="flex flex-row flex-wrap -m-4 justify-center algin-center">

            <CategoryBox :category="category"/> 
          </div>
        </div>
    
  </div>
    
</template>

<script setup>
import CategoryBox from "../../components/Category/CategoryBox.vue"
import { ref } from 'vue'
const props = defineProps({
    categories: Array
})

const baseURL = "https://limitless-lake-55070.herokuapp.com"
</script>

<style lang="scss" scoped>

</style>