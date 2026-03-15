<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { index as indexArticle, show as showArticles } from '../actions/App/Http/Controllers/ArticleController';
import { index as indexTest } from '../actions/App/Http/Controllers/TestController';


</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col gap-5">
      <h1 class="text-center text-2xl">Главная страница</h1>
      <Link class="btn btn-sm btn-neutral" :href="indexArticle()">Создать статью</Link>
      <Link class="btn btn-sm btn-neutral" :href="showArticles()">К статьям</Link>
      <Link class="btn btn-sm btn-neutral" :href="indexTest()">К тестовой странице</Link>
    </div>
  </div>
</template>
