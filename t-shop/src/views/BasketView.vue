<script setup lang="ts">
import { useBasketStore } from '@/stores/BasketStore';
const basketStore = useBasketStore();
</script>

<template>
    <div class="about">
        <h1>basketStore.basketProducts</h1>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
@/stores/basketStore
