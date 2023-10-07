<script setup lang="ts"></script>

<template>
    <div class="basketItem">
        <img src="./images/camera.png" width="200" height="200" />
        <div class="basketItem__info">
            <div class="basketItem__close">
                <img src="./images/close.png" width="15" height="15" />
            </div>
            <div class="basketItem__title">
                <div class="basketItem__name">Cashmere II</div>
                <div class="basketItem__desc">Покрывало</div>
            </div>
            <div class="basketItem__price">
                <span>219000Р</span>
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
    width: 300px;
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
    /* or 186% */
    display: flex;
    align-items: center;
    opacity: 0.5;
}

.basketItem__price {
    display: flex;
    justify-content: space-between;
}
</style>
