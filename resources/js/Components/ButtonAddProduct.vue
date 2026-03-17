<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';

const isControlsVisible = ref(false);
const isAdded = ref(false);
const count = ref(1);
let timer: ReturnType<typeof setTimeout> | null = null;

function upCount(): void {
  count.value++;
}

function downCount(): void {
  if (count.value > 1) count.value--;
}

const addedProduct = computed(() => {
  return !isAdded.value
    ? 'Добавить'
    : 'Добавлено <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>';
});

onBeforeUnmount((): void => {
  if (timer) clearTimeout(timer);
});

function handleAdd(): void {
  isAdded.value = true;

  if (timer) clearTimeout(timer);

  timer = setTimeout((): void => {
    isAdded.value = false;
    isControlsVisible.value = false;
  }, 700)
}

const addButtonClass = computed(() =>
  isAdded.value
    ? 'text-white btn btn-success ml-3'
    : 'btn btn-primary ml-3'
);
</script>

<template>
  <button @click="isControlsVisible = true" v-if="!isControlsVisible" class="btn btn-primary">В корзину</button>
  <div v-else class="flex">
    <div v-if="!isAdded" class="flex gap-0.5">
      <button @click="upCount()" class="btn btn-primary">+</button>
      <button class="btn btn-primary cursor-default">{{ count }}</button>
      <button @click="downCount()" class="btn btn-primary">-</button>
    </div>
    <button @click="handleAdd" :class="addButtonClass">
      <template v-if="!isAdded">
        Добавить
      </template>
      <template v-else>
        Добавлено
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="inline-block ml-1">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </template>
    </button>
  </div>
</template>
