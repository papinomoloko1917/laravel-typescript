<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import MainController from '../actions/App/Http/Controllers/MainController';
import Paginator from '../Components/Paginator.vue';
import ProductCard from '../Components/ProductCard.vue';
import type { Pagination } from '../types/pagination';
import type { Product } from '../types/product';

const { products } = defineProps<{
  products: Pagination<Product>;
}>();

const activeProductId = ref<number | null>(null);

function handleAdd(payload: { productId: number, count: number }): void {
  console.log(payload.productId, payload.count)
}

</script>

<template>
  <div>
    <h1>Products</h1>
    <Link class="btn btn-primary" :href="MainController()">На главную</Link>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      <ProductCard v-for="product in products.data" :key="product.id" :product="product"
        :is-active="activeProductId === product.id" @activate="activeProductId = product.id"
        @deactivate="activeProductId = null" @add="handleAdd" />
    </div>
    <Paginator :links="products.links" />
  </div>
</template>
