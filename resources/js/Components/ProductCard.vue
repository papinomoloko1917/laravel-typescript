<script setup lang="ts">
import type { Product } from '../types/product';
import ButtonAddProduct from './ButtonAddProduct.vue';

const { product } = defineProps<{
    product: Product
}>();
</script>

<template>

    <div class="mt-7 card bg-base-100 w-96 shadow-sm">
        <figure class="h-56 w-full overflow-hidden bg-base-100">
            <img :src="`/${product.image}`" :alt="product.title"
                class="w-full h-full object-contain hover:scale-103 transition-all duration-300" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <div class="card-actions justify-end">
                <ButtonAddProduct />
            </div>
        </div>
    </div>

</template>