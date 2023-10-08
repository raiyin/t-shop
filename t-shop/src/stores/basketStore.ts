import { defineStore } from 'pinia';
import { ref, watch, type Ref } from 'vue';
import { type IProduct } from '@/model/IProduct';

export const useBasketStore = defineStore('basketStore', () => {
    const basketProducts: Ref<IProduct[]> = ref([]);


    function addProduct(product: IProduct) {
        basketProducts.value = [...basketProducts.value, product];
        console.log(product);
    }

    function removeProduct(productId: number) {
        basketProducts.value = basketProducts.value.filter((product) => product.id != productId);
    }

    return {
        basketProducts, addProduct, removeProduct
    };
});
