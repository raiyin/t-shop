<script setup lang="ts"></script>

<template>
    <div class="item">
        <img src="./images/camera.png" width="200" height="200" />
        <div class="item__info">
            <div class="item__title">
                <div class="item__name">Cashmere II</div>
                <div class="item_desc">Покрывало</div>
            </div>
            <div class="item__price">
                <span>219000Р</span>
                <img src="./images/basket.png" width="16.55" height="20" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    border-radius: 10px 10px 10px 10px;
    overflow: hidden;
    box-shadow: 4px 4px 10px 0px #00000033;
}

.item__info {
    height: 170px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
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
    /* or 186% */
    display: flex;
    align-items: center;
    opacity: 0.5;
}

.item__price {
    display: flex;
    justify-content: space-between;
}
</style>
