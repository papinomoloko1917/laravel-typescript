<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import MainController from '../actions/App/Http/Controllers/MainController';
import ProductCard from '../Components/ProductCard.vue';
import type { Pagination } from '../types/pagination';
import { Product } from '../types/product';
import Paginator from '../Components/Paginator.vue';

const { products } = defineProps<{
    products: Pagination<Product>;
}>();
</script>

<template>
    <div>
        <h1>Products</h1>
        <Link class="btn btn-primary" :href="MainController()">На главную</Link>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <ProductCard v-for="product in products.data" :key="product.id" :product="product" />
        </div>
        <Paginator :links="products.links" />
    </div>
</template>