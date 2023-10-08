<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import axios from 'axios';
import ShopItem from '@/components/ShopItem.vue';
import { type IProduct } from '@/model/IProduct';

let products: Ref<IProduct[]> = ref([]);
let page = ref(0);
let limit = ref(4);

onMounted(() => {
    axios
        .get('http://localhost:3001/product', {
            params: {
                _page: page.value,
                _limit: limit.value,
            },
        })
        .then((response) => {
            products.value = [...response.data];
            console.log(products);
        });
});
</script>

<template>
    <section>
        <div class="section-content">
            <template v-for="product in products" v-bind:key="product.id">
                <div class="column">
                    <ShopItem :product="product"></ShopItem>
                </div>
            </template>
        </div>
        <button>Показать ещё</button>
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
