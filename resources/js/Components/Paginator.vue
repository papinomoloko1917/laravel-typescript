<script setup lang="ts">
import type { PaginationLink } from '../types/pagination';
import { Link } from '@inertiajs/vue3';

const props = defineProps<{
    links: PaginationLink[];
}>();

function translateButton(text: string) {
    if (text == '&laquo; Previous') return 'Назад';
    if (text == 'Next &raquo;') return 'Вперед';
    else return text;
}

function isDisabled(link: PaginationLink) {
    if (link.url == null) return !link.url;
}

</script>

<template>
    <div class="join mt-5">
        <Link preserve-scroll v-for="(link, index) in links" :disabled="isDisabled(link)" :key="index"
            :href="link.url || undefined" :class="link.active ? 'join-item btn btn-active' : 'join-item btn'">{{
                translateButton(link.label) }}</Link>
    </div>
</template>