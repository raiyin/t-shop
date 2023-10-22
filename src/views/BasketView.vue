<script setup lang="ts">
import BasketItem from '@/components/BasketItem.vue';
import { useBasketStore } from '@/stores/BasketStore';
const basketStore = useBasketStore();
</script>

<template>
    <div class="basket">
        <template v-for="product in basketStore.basketProducts" v-bind:key="product.id">
            <BasketItem :product="product"></BasketItem>
        </template>
    </div>
</template>

<style scoped>
.basket {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 20px;
    column-gap: 20px;
    flex-wrap: wrap;
}
</style>
