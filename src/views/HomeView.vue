<template>
    <div id="home">
        <!-- Page wrapper -->
        <div id="background-div" class="page-holder">
            <div class="container mx-auto  py-5 h-[500px] w-full">
                <header class="text-left text-white  mt-[150px]">
                    <h3 class="mg-4 rounded text-black"><a href="#start-shopping" class="bg-white px-2 py-2 rounded" id="heading">
                        Star Shopping 
                    </a></h3>
                    <p id="content" class="mb-2 p-1 rounded w-[80%] md:w-[40%] text-xl">
                        Simple Coding Market is for educational purposes only.
                        It can be used by developers to learn about developing an ecommerce 
                        application complete with backend and frontend for Web and Android
                    </p>
                </header>
            </div>
        </div>
            <div class="container mx-auto px-5 py-5 mt-20" id="start-shopping">
                <div class="flex flex-wrap justify-center">
                    <div class="columns-12 text-center flex justify-center algin-center">
                        <h2 class="pt-3 text-black font-extrabold text-3xl uppercase">top Categoires</h2>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div v-for="index in category_size" :key="index" class="flex md:columns-6 xl:columns-4 columns-12 pt-3 justify-around">
                        <CategoryBox :category="categories[index-1]"></CategoryBox>
                    </div>
                </div>
            </div>
            <hr>
            <div class="container mx-auto px-5 py-5" id="start-shopping">
                <div class="flex flex-wrap justify-center">
                    <div class="columns-12 text-center flex justify-center ">
                        <h2 class="pt-3 text-black font-extrabold text-3xl text-center uppercase">Top Product</h2>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div v-for="index in product_size" :key="index" class="flex md:columns-6 xl:columns-4 columns-12 pt-3 justify-around">
                        <ProductBox :product="products[index-1]">
                        </ProductBox>
                    </div>
                </div>
            </div>
    </div>
    
</template>

<script setup>
import ProductBox from '../components/ProductBox.vue'
import CategoryBox from '../components/Category/CategoryBox.vue'
import { ref, onMounted } from 'vue'

const props = defineProps({
    baseURL: String,
    products: Array,
    categories: Array
})
console.log(props.categories);

const category_size = ref(0)
const product_size = ref(0)

onMounted(() => {
    category_size.value = props.categories.length
    category_size.value = Math.min(6, category_size.value)

    product_size.value = props.products.length
    product_size.value = Math.min(8, product_size.value)

    console.log(product_size.value, category_size.value);
})


</script>

<style scoped>
#background-div {
    background-size: cover !important;
    background-position: center;
    background: url('https://cdn.pixabay.com/photo/2016/12/25/22/08/christmas-1931054_960_720.jpg');
}
.page-holder {
}

#heading {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    opacity: 0.8;
    font-family: 'Josefin Sans', sans-serif;
    
}

#content {
    opacity: 0.8;
}

h2 {
    font-family: 'Josefin Sans', sans-serif;
}
</style>