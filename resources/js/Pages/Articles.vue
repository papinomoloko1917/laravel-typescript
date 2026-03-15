<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import { destroy, update } from '../actions/App/Http/Controllers/ArticleController';
import MainController from '../actions/App/Http/Controllers/MainController';

interface Article {
  id: number,
  title: string,
  content: string
};

const props = defineProps<{
  articles: Article[]
}>();

const editingId = ref<number | null>(null);
const editTitle = ref('');
const editContent = ref('');


function startEdit(article: Article) {
  editingId.value = article.id;
  editTitle.value = article.title;
  editContent.value = article.content;
}

function cancelEdit() {
  editingId.value = null;
  editTitle.value = '';
  editContent.value = '';
}

function updateArticle(article: Article) {
  router.put(update(article.id), {
    title: editTitle.value,
    content: editContent.value
  }, {
    preserveScroll: true,
    onSuccess: () => {
      cancelEdit();
      router.reload();
    }
  });
}

function deleteArticle(article: Article) {
  if (confirm('Вы точно хотите удалить статью?')) {
    router.delete(destroy(article.id), {
      preserveScroll: true,
      onSuccess: () => router.reload()
    });
  }
}

const showEdit = ref(false);
</script>

<template>
  <div class="flex flex-col text-center text-2xl">
    <h1>Все статьи</h1>

    <ul class="text-xl mt-5 text-start mx-90">
      <li v-for="(article, index) in props.articles" :key="article.id" class="mb-4">
        <template v-if="editingId === article.id">
          <div class="flex flex-col gap-2">
            <input v-model="editTitle" type="text" class="input input-bordered" placeholder="Название статьи" />

            <textarea v-model="editContent" class="textarea textarea-bordered" placeholder="Текст статьи"></textarea>

            <div class="flex gap-3 text-sm">
              <span @click="updateArticle(article)"
                class="cursor-pointer hover:text-blue-700 transition-all duration-200">
                Сохранить
              </span>

              <span @click="cancelEdit" class="cursor-pointer hover:text-gray-700 transition-all duration-200">
                Отмена
              </span>
            </div>
          </div>
        </template>

        <template v-else>
          {{ index + 1 }}. {{ article.title }} - {{ article.content }}

          <span @click="deleteArticle(article)"
            class="cursor-pointer text-sm hover:text-red-700 transition-all duration-200 mx-3">
            Удалить
          </span>

          <span @click="startEdit(article)"
            class="cursor-pointer text-sm hover:text-blue-700 transition-all duration-200 mx-3">
            Редактировать
          </span>
        </template>
      </li>
    </ul>

    <div class="mt-5">
      <Link class="btn btn-sm btn-neutral" :href="MainController()">На главную</Link>
    </div>
  </div>
</template>
