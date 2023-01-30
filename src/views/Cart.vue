<template>
    <div class="container mx-auto py-2 px-4">
        <div class="text-center bg-blue-200">
            <h2 class="text-3xl font-extrabold">Shopping Cart</h2>
        </div>

        <!-- loop over the cart items and display -->
        <div class="columns-1 flex justify-center m-4">
            <div 
            v-for="cartItem in cartItems"
            :key="cartItem.id"
            class="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
    
                <img 
                :src="cartItem.product.imageURL" 
                alt="product"
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                >
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">{{ cartItem.product.name}}</h5>
                    <p class="mb-3 font-normal text-gray-700 ">{{ cartItem.product.price }} zł per unit</p>
                    <p class="mb-0">Quantity: {{ cartItem.quantity }}</p>
                    <p class="mb-0 text-right">
                        Total:
                        <span class="font-bold">{{ cartItem.price * cartItem.quantity }}zł</span>
                    </p>
                </div>
            </div>
        </div>
        <hr>
        <!-- display total cost -->
       <div class="pt-2 text-right font-extrabold">
        <h4>Total Cost: {{ totalCost }} zł</h4>
       </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const props = defineProps({
    baseURL: String
})

const cartItems = ref(null || [])
const token = ref(null)
const totalCost = ref(0)

const listCartItems =  () => {
    axios.get(`${props.baseURL}cart/?token=${token.value}`)
    .then((res) => {
        const result = res.data
        cartItems.value = result.cartItems
        totalCost.value = result.totalCost
    })
    .catch((err) => {
        console.log('error', err)
    })
}

onMounted(() => {
    token.value = localStorage.getItem('token')
    listCartItems()

})
</script>

<style lang="scss" scoped>

</style>