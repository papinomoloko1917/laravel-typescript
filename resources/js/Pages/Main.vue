<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { index as indexProducts } from '../actions/App/Http/Controllers/ProductController';
</script>

<template>
    <div>
        <h1>MainPage</h1>
        <Link class="btn btn-primary" :href="(indexProducts())">Перейти к товарам</Link>
    </div>
</template>