<script setup lang="ts">
import { onMounted } from 'vue';
import ShopItem from '@/components/ShopItem.vue';
import { useShopStore } from '@/stores/shopStore';

const shopStore = useShopStore();

onMounted(() => {
    shopStore.appendProducts();
});
</script>

<template>
    <section>
        <div class="section-content">
            <template v-for="product in shopStore.shopProducts" v-bind:key="product.id">
                <div class="column">
                    <ShopItem :product="product"></ShopItem>
                </div>
            </template>
        </div>
        <button @click="shopStore.appendProducts">Показать ещё</button>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
}

.section-content {
    display: flex;
    justify-content: space-between;
    row-gap: 20px;
    column-gap: 20px;
    flex-wrap: wrap;
}

button {
    width: 142px;
    height: 25px;
    border: none;
    margin-top: 20px;
    text-decoration: none;
    display: inline-block;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: 0px 4px 4px 0px #00000040;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    align-self: self-end;
}
</style>
