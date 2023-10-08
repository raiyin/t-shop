<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
import ShopLogo from './icons/ShopLogo.vue';

const route = useRoute();
let path = '';

onMounted(() => {
    path = route.path;
    console.log(path);
});
</script>

<template>
    <header class="header">
        <div class="header__logo"><ShopLogo /></div>
        <div class="header__nav">
            <ul>
                <li class="nav__item-active">
                    <RouterLink to="/" class="nav-link">Главная</RouterLink>
                </li>
                <li>
                    <RouterLink to="/basket" class="nav-link">Корзина</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
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

a {
    color: #333333;
    text-decoration: none;
}

.router-link-exact-active {
    color: #ba967d;
}
</style>
