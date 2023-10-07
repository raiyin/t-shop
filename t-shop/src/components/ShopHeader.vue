<script setup lang="ts">
import ShopLogo from './icons/ShopLogo.vue';
</script>

<template>
    <div class="header">
        <div class="header__logo"><ShopLogo /></div>
        <div class="header__nav">
            <ul>
                <li class="nav__item-active">Главная</li>
                <li>Корзина</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
}

li {
    font-size: 14px;
    display: block;
    text-decoration: none;
    float: left;
}

ul li:not(:last-child) {
    margin-right: 24px;
}

.nav__item-active {
    color: #ba967d;
}
</style>
