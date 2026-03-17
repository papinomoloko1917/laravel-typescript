<script setup lang="ts">
import { computed, ref } from 'vue';

const show = ref(false);
const added = ref(false);
const count = ref(1);

function upCount() {
    ++count.value;
}

function downCount() {
    if (count.value > 1) --count.value;
}

const addedProduct = computed(() => {
    return !added.value ? 'Добавить' : 'Добавлено <svg xmlns="http://www.w3.org/2000/svg" width = "24" height = "24" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="lucide lucide-check-icon lucide-check" > <path d="M20 6 9 17l-5-5" /> </svg>';
});

</script>

<template>
    <button @click="show = true" v-if="!show" class="btn btn-primary">В корзину</button>
    <div v-else class="flex">
        <div v-if="!added" class="flex gap-0.5">
            <button @click="upCount()" class="btn btn-primary">+</button>
            <button class="btn btn-primary cursor-default">{{ count }}</button>
            <button @click="downCount()" class="btn btn-primary">-</button>
        </div>
        <button @click="added = true" :class="!added ? 'btn btn-primary ml-3' : 'text-white btn btn-success ml-3'"
            v-html="addedProduct"></button>
    </div>
</template>