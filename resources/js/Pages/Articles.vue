<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { destroy } from '../actions/App/Http/Controllers/ArticleController';
import MainController from '../actions/App/Http/Controllers/MainController';

interface Article {
  id: number,
  title: string,
  content: string
};

const props = defineProps<{
  articles: Article[]
}>();

function deleteArticle(article: Article) {
  router.delete(destroy(article.id), {
    preserveScroll: true,
    onSuccess: () => router.reload()
  });
}

</script>

<template>
  <div class="flex flex-col text-center text-2xl">
    <h1>Все статьи</h1>
    <ul class="text-xl mt-5 text-start mx-90">
      <li v-for="(article, index) in props.articles" :key="article.id">{{ index + 1 }}. {{ article.title }} - {{
        article.content }}
        <span @click="deleteArticle(article)"
          class="cursor-pointer text-sm hover:text-red-700 transition-all duration-200 mx-3">Удалить</span>
      </li>
    </ul>
    <div class="mt-5">
      <Link class="btn btn-sm btn-neutral" :href="MainController()">На главную</Link>
    </div>

  </div>
</template>
