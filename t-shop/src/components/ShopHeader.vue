<script setup lang="ts">
import ShopLogo from './icons/ShopLogo.vue';

// export default {
//     name: 'ShopHeader',
// };
</script>

<template>
    <div class="header">
        <div class="header__logo"><ShopLogo /></div>
        <div class="header__nav">links</div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>
