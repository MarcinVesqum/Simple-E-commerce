<template>
    <div class="p-4 w-[300px] mt-20  border-current ml-2">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
        </a>
        <div class="mt-4">
          <router-link :to="{ name: 'ListProducts', params: { id: category.id }}">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ category.categoryName}}</h3>
          </router-link>
          <h2 class="text-gray-900 title-font text-lg font-medium">{{ category.description }}</h2>
          <router-link 
          :to="{ name: 'EditCategory', params: { id: category.id } }" 
          v-show="route.name == 'Category'"
          >
          <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button> 
        </router-link>
        </div>
      </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

const props = defineProps({
    category: Object
})

</script>

<style lang="scss" scoped>

</style>