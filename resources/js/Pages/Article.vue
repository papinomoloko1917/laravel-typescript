<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Button from '../Components/Button.vue';
import MainController from '../actions/App/Http/Controllers/MainController';
import Form from '../Components/Form.vue';
import { useArticleForm } from '../composables/useArticleForm';

const { formStatus, showForm } = useArticleForm();

</script>

<template>
    <div class="flex justify-center">
        <div class="flex flex-col gap-5">
            <h1 class="text-center text-2xl">Страница статей</h1>
            <Button class="btn-primary" @click="showForm()" v-if="!formStatus">+ Добавить статью</Button>
            <Form v-else />
            <Link class="btn btn-sm btn-neutral" :href="MainController()">На главную</Link>
        </div>
    </div>
</template>