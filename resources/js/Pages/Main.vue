<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Button from '../Components/Button.vue';
import { index as articlesIndex } from '../actions/App/Http/Controllers/ArticleController';


</script>

<template>
    <div class="flex justify-center">
        <div class="flex flex-col gap-5">
            <h1 class="text-2xl">Главная страница</h1>
            <Link :href="articlesIndex()">
                <Button>К статьям</Button>
            </Link>
        </div>


    </div>
</template>