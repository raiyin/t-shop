<script setup lang="ts">
import { type IProduct } from '@/model/IProduct';
import { useBasketStore } from '@/stores/basketStore';
const basketStore = useBasketStore();

const props = defineProps<{
    product: IProduct
}>()

function removeProductFromBasket() {
    basketStore.removeProduct(props.product.id);
}
</script>

<template>
    <div class="basketItem">
        <img src="./images/camera.png" width="200" height="200" />
        <div class="basketItem__info">
            <button class="basketItem__close" @click="removeProductFromBasket">
                <img src="./images/close.png" width="15" height="15" />
            </button>

            <div class="basketItem__title">
                <div class="basketItem__name">{{ product.title }}</div>
                <div class="basketItem__desc">{{ product.description }}</div>
            </div>
            <div class="basketItem__price">
                <span>{{ product.price }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.basketItem {
    display: flex;
}

.basketItem__info {
    height: 200px;
    width: 600px;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 20px 20px;
    justify-content: space-between;
    position: relative;
}

.basketItem__close {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 15px;
    height: 15px;
    border: none;
    background-color: white;
    cursor: pointer;
}

.basketItem__title {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
}

.basketItem__name {
    font-size: 24px;
    line-height: 28px;
}

.basketItem_desc {
    font-size: 14px;
    line-height: 26px;
    display: flex;
    align-items: center;
    opacity: 0.5;
}

.basketItem__price {
    display: flex;
    justify-content: space-between;
}
</style>
