import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export type CartItem = {
  productId: number;
  title: string;
  image: string;
  price: number;
  count: number;
};

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);

  const totalCount = computed(() =>
    items.value.reduce((sum, item) => sum + item.count, 0)
  );

  function setCart(newItems: CartItem[]): void {
    items.value = newItems;
  }

  function removeLocal(productId: number): void {
    items.value = items.value.filter((item) => item.productId !== productId);
  }

  return {
    items,
    totalCount,
    setCart,
    removeLocal,
  };
});
