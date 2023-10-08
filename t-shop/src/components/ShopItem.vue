<script setup lang="ts">
import { type IProduct } from '@/model/IProduct';
defineProps<{
    product?: IProduct
  }>()
</script>

<template>
    <div class="item">
        <img src="./images/camera.png" class="camera" />
        <div class="item__info">
            <div class="item__title">
                <div class="item__name">{{ product?.title }}</div>
                <div class="item_desc">{{ product?.description }}</div>
            </div>
            <div class="item__price">
                <span>{{ product?.price }}</span>
                <img src="./images/basket.png" width="16.55" height="20" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
@import '../assets/styles.less';

.item {
    display: flex;
    flex-direction: column;
    border-radius: 10px 10px 10px 10px;
    overflow: hidden;
    box-shadow: 4px 4px 10px 0px #00000033;
    height: 100%;
}

.item .camera {
    width: 100%;
    height: auto;
}

.item__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    height: 100%;
}

.item__title {
    display: flex;
    flex-direction: column;
}

.item__name {
    font-size: 24px;
    line-height: 28px;
}

.item_desc {
    font-size: 14px;
    line-height: 26px;
    display: flex;
    align-items: center;
    opacity: 0.5;
}

.item__price {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
</style>
