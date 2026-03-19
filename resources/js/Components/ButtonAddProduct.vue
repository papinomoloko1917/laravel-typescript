<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';

const props = defineProps<{
  isActive: boolean;
}>();

const emit = defineEmits<{
  (e: 'activate'): void;
  (e: 'deactivate'): void;
  (e: 'add', count: number): void;
}>();

const isAdded = ref(false);
const count = ref(1);
let timer: ReturnType<typeof setTimeout> | null = null;

function resetCount() {
  count.value = 1;
}

function upCount(): void {
  count.value++;
}

function downCount(): void {
  if (count.value > 1) count.value--;
}

function openControls(): void {
  emit('activate');
}

function handleAdd(): void {

  emit('add', count.value);

  isAdded.value = true;

  resetCount();

  if (timer) clearTimeout(timer);

  timer = setTimeout((): void => {
    isAdded.value = false;
    emit('deactivate')
  }, 700)
}

onBeforeUnmount((): void => {
  if (timer) clearTimeout(timer);
});

const addButtonClass = computed(() =>
  isAdded.value
    ? 'text-white btn btn-success ml-3'
    : 'btn btn-outline ml-3'
);

function cancelSelection() {
  emit('deactivate')
  resetCount();
}
</script>

<template>
  <button @click="openControls" v-if="!props.isActive" class="btn btn-outline">В корзину</button>
  <div v-else class="flex">
    <div v-if="!isAdded" class="flex gap-0.5">
      <button @click="upCount()" class="btn btn-outline">+</button>
      <span class="btn btn-outline cursor-default pointer-events-none">
        {{ count }}
      </span>
      <button @click="downCount()" class="btn btn-outline">-</button>
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
  <button @click="cancelSelection" v-if="props.isActive && !isAdded" class="btn btn-error">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path
        d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
    </svg>
  </button>
</template>
