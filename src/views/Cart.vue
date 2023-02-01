<template>
    <div class="container mx-auto py-2 px-4">
        <div class="text-center bg-blue-200">
            <h2 class="text-3xl font-extrabold">Shopping Cart</h2>
        </div>

        <!-- loop over the cart items and display -->
        <div 
        v-for="cartItem in cartItems"
        :key="cartItem.id" 
        class="flex flex-col items-center justify-center m-4">
            <div 
            
            class="flex flex-col w-full  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
    
                <img 
                :src="cartItem.product.imageURL" 
                alt="product"
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                >
                <div class="flex flex-col justify-between p-4 w-full leading-normal">
                    <router-link :to="{ name: 'ProductDetail', params: { id: cartItem.product.id } }">

                        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">{{ cartItem.product.name }}</h5>
                    </router-link>
                    <p class="mb-3 font-normal text-gray-700 ">{{ cartItem.product.price }} zł per unit</p>
                    <p class="mb-0">Quantity: {{ cartItem.quantity }}</p>
                    <p class="mb-0 text-right">
                        Total:
                        <span class="font-bold">{{ cartItem.product.price * cartItem.quantity }}zł</span>
                    </p>
                    <button @click="deleteItem(cartItem.id)" class="bg-red-400 items-end w-20 text-white rounded-xl py-2 hover:bg-red-600 overlin-none">Remove</button>
                </div>
                
            </div>
            
        </div>
        <hr>
        <!-- display total cost -->
       <div class="pt-2 text-right flex flex-col  items-center font-extrabold">
        <h4>Total Cost: {{ totalCost.toFixed(2) }} zł</h4>
        <button 
               class="text-white w-[150px] mt-3  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
               Confirm Order
         </button> 
       </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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

const deleteItem = (itemId) => {
    axios.delete(`${props.baseURL}cart/delete/${itemId}?token=${token.value}`)
    .then((res) => {
        if (res.status === 200) {
            router.go(0)
        }
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