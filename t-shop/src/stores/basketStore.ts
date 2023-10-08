import { defineStore } from 'pinia';
import { ref, watch, type Ref } from 'vue';
import { type IProduct } from '@/model/IProduct';

export const useBasketStore = defineStore('basketStore', () => {
    const basketProducts: Ref<IProduct[]> = ref([]);

    function appendProducts(appendedProducts: IProduct[]) {
        basketProducts.value = [...basketProducts.value, ...appendedProducts];
    }

    return {
        basketProducts, appendProducts
    };
});
