<script setup lang="ts">
import BasketItem from '@/components/BasketItem.vue';
import { onMounted } from 'vue';
import { useBasketStore } from '@/stores/BasketStore';
const basketStore = useBasketStore();

onMounted(() => {
    basketStore.$subscribe((mutation, state) => {
        console.log(mutation, state.basketStore);
    });
});
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
