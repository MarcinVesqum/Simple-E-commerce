<template>
    <div class="container px-5 py-24 mx-auto">
        <h3 class="pt-3 text-center">Your WishList</h3>
            <div class="flex flex-wrap -m-4 justify-center">
              <div v-for="product of wishData.products" :key="product.id" class="flex flex-wrap -m-4">
    
                <ProductBox :product="product"/>
              </div>
            </div>
      </div>
</template>

<script setup>
import ProductBox from "../../components/ProductBox.vue"
import axios from 'axios'
import { onMounted, reactive } from 'vue'

const wishData = reactive({
    token: null,
    products: null || []
})

const props = defineProps({
    baseURL: String
})

const fetchWishList = () => {
    axios.get(`${props.baseURL}wishlist/${wishData.token}`)
    .then((resp) => {
        wishData.products = resp.data
    })
    .catch((err) => {
        console.log('error', err)
    })
}

onMounted(() => {
    wishData.token = localStorage.getItem('token')
    fetchWishList()
    console.log(wishData.token);
})

</script>

<style lang="scss" scoped>

</style>