<template>
    
    <div class="p-4 w-full mt-20 ml-20 sm:w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ category.categoryName}}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{{ category.description }}</h2>
          <p class="mt-1">category</p>
        </div>
      </div>
</template>

<script setup>
const props = defineProps({
    category: Object
})

// const imageUrl  = (path) => {
//     const image = new URL(`https://limitless-lake-55070.herokuapp.com/images/${path}/`, import.meta.url)
//     return image
// }
</script>

<style lang="scss" scoped>

</style>