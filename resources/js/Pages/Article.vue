<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Button from '../Components/Button.vue';
import MainController from '../actions/App/Http/Controllers/MainController';


</script>

<template>
    <div class="flex justify-center">
        <div class="flex flex-col gap-5">
            <h1 class="text-2xl">Страница статей</h1>
            <Link :href="MainController()">
                <Button>На главную</Button>
            </Link>
        </div>


    </div>
</template>