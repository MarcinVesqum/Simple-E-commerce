<template>
    <div class="container px-5 py-24 mx-auto">
        <div class="flex-flex-col text-center mb-10">
            <h3 class="pt-2 mb-2 text-center uppercase text-black font-extrabold">{{ category.categoryName }}</h3>
            <h5 class="text-gray-300 ">{{ msg }}</h5>
        </div>
        <div v-for="product in category.products" :key="product.id" class="flex flex-wrap -m-4">
          <ProductBox :product="product" />

        </div>
      </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from 'vue-router'
import ProductBox from "../../components/ProductBox.vue";

const props = defineProps({
    categories: Array
})

const route = useRoute()

const category = ref({})
const id = ref(null)
const msg = ref(null || '')

onMounted(() => {
    id.value = route.params.id
    category.value = props.categories.find(c => c.id == id.value)
    if (category.value.products.length == 0) {
        msg.value = 'no products found'
    } else if (category.value.products.length == 1) {
        msg.value = 'Only 1 product found'
    } else {
        msg.value = 'products found'
    }

})
</script>

<style lang="scss" scoped>

</style>