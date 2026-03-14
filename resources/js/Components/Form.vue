<script setup>
import { useArticleForm } from '../composables/useArticleForm';

const { form, closeForm, clearForm } = useArticleForm();



</script>

<template>
    <form class="flex flex-col gap-5">
        <label for="title">Название статьи</label>
        <input name="title" v-model="form.title" class="input input-sm input-neutral" type="text">
        <label for="content">Содержание статьи</label>
        <textarea v-model="form.content" class="textarea textarea-sm textarea-neutral" name="content"
            id="content"></textarea>
        <div class="flex gap-3">
            <button type="submit" class="btn btn-sm btn-primary">+ Отправить</button>
            <button @click="clearForm()" type="button" class="btn btn-sm btn-neutral">- Очистить форму</button>
            <button @click="closeForm()" type="button" class="btn btn-sm btn-error">Отменить</button>
        </div>
    </form>
</template>