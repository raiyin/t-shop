<script setup lang="ts">
import { useBasketStore } from '@/stores/BasketStore';
import { useShopStore } from '@/stores/shopStore';
import BasketItem from '@/components/BasketItem.vue';
const basketStore = useBasketStore();
</script>

<template>
    <div class="section-content">
        <template v-for="product in basketStore.basketProducts" v-bind:key="product.id">
            <BasketItem :product="product"></BasketItem>
        </template>
    </div>
</template>

<style>
.section-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 20px;
    column-gap: 20px;
    flex-wrap: wrap;
}
</style>
