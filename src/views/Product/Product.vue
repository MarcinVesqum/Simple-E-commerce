<template>
    <div class="container px-5 py-24 mx-auto">
        <h3 class="pt-3 text-center">Our Products</h3>
            <router-link :to="{ name: 'AddProduct' }">
              <button type="button" class="text-white bg-gradient-to-r ml-5 px-4 py-2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300" style="float:right">Add Product</button>
            </router-link>
            <div class="flex flex-wrap -m-4">
              <div v-for="product of products" :key="product.id" class="flex flex-wrap -m-4">
    
                <ProductBox :product="product"/>
              </div>
            </div>
        
      </div>
</template>

<script setup>
import ProductBox from '../../components/ProductBox.vue'

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>

</style>