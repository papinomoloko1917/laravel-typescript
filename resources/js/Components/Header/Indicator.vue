<script setup lang="ts">
import { useCartStore } from '../../stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <span v-if="cartStore.totalCount > 0" class="badge badge-xs badge-primary indicator-item">{{ cartStore.totalCount
  }}</span>
</template>
