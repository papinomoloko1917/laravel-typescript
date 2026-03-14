<script setup>
import { useArticleForm } from '../composables/useArticleForm';

const { form, closeForm, cleanForm, send } = useArticleForm();

</script>

<template>
  <form class="flex flex-col gap-5" @submit.prevent="send()">
    <label for="title">Название статьи</label>
    <input name="title" v-model="form.title" class="input input-sm input-neutral" type="text">
    <div v-if="form.errors.title" class="text-error text-sm">
      {{ form.errors.title }}
    </div>
    <label for="content">Содержание статьи</label>
    <textarea v-model="form.content" class="textarea textarea-sm textarea-neutral" name="content"
      id="content"></textarea>
    <div v-if="form.errors.content" class="text-error text-sm">
      {{ form.errors.content }}
    </div>
    <div class="flex gap-3">
      <button type="submit" class="btn btn-sm btn-primary">+ Отправить</button>
      <button @click="cleanForm()" type="button" class="btn btn-sm btn-neutral">- Очистить форму</button>
      <button @click="closeForm()" type="button" class="btn btn-sm btn-error">Отменить</button>
    </div>
  </form>
</template>
