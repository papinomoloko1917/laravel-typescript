<script setup lang="ts">
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <ul class="list bg-base-100 rounded-box shadow-md">

    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">{{ count }}</li>

    <li class="list-row">
      <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
      <div>
        <div>Dio Lupa</div>
        <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
      </div>
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

      </button>
    </li>
  </ul>
</template>
