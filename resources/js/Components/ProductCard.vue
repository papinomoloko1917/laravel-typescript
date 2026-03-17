<script setup lang="ts">
import type { Product } from '../types/product';

const { product } = defineProps<{
    product: Product
}>();
</script>

<template>

    <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="h-56 w-full overflow-hidden bg-base-200">
            <img :src="`/${product.image}`" :alt="product.title" class="w-full h-full object-contain" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">В корзину</button>
            </div>
        </div>
    </div>

</template>