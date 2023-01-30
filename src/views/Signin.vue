<template>
  <div class="container md:w-1/2 px-5 py-24 mx-auto">
    <div class="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-900 text-lg mb-2 title-font text-center font-extrabold uppercase">SingUp</h2>
        <p class="leading-relaxed mb-5 text-gray-600"></p>
        <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input v-model="userData.email" type="email" id="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
            <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
            <input v-model="userData.password" type="password" id="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>

        <button @click.prevent="signin" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Signup</button>
    </div>
</div>
</template>

<script setup>
import { reactive, inject } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const swal = inject('$swal')

const router = useRouter()

const props = defineProps({
    baseURL: String
})

const userData = reactive({
    email: '',
    password: ''
})

const signin = async () => {
  let body = {
    email: userData.email,
    password: userData.password
  }
  await axios.post(`${props.baseURL}user/signIn`, body)
  .then(() => {
    router.replace('/')
    swal.fire({
        icon: 'success',
        text: 'Login successful',
        showConfirmButton: false,
        timer: 1500
    })
  }).catch((err) => {
    console.log('error: ' + err.message)
    swal.fire({
      icon: 'error',
      text: 'check your email or password',
      showConfirmButton: false,
      timer: 1500
    })
  })
}
</script>

<style lang="scss" scoped>

</style>