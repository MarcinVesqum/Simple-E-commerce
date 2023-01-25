<template>
    <div class="p-4 w-full mt-20 ml-20 sm:w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ product.name}}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{{ product.description }}</h2>
          <p class="mt-1">{{ product.price }}zł</p>
          <router-link 
          :to="{ name: 'EditProduct', params: { id: product.id } }" 
          >
          <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button> 
        </router-link>
        </div>
      </div>
</template>

<script setup>
const props = defineProps({
    product: Object
})
</script>

<style lang="scss" scoped>

</style>