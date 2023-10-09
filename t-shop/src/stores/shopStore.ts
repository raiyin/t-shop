import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';
import { type IProduct } from '@/model/IProduct';
import axios from 'axios';

export const useShopStore = defineStore('shopStore', () => {
    const shopProducts: Ref<IProduct[]> = ref([]);
    const page = ref(1);
    const limit = ref(4);

    function appendProducts() {
        axios.get('http://localhost:3001/product', {
            params: {
                _page: page.value,
                _limit: limit.value,
            },
        })
            .then((response) => {
                shopProducts.value = [
                    ...shopProducts.value,
                    ...response.data.map(product => Object.assign({}, product, { count: +product.count || 0 }))];
                page.value = page.value + 1;
            });
    }

    function takeProduct(productId: number) {
        shopProducts.value =
            shopProducts.value.map(product =>
                product.id == productId ?
                    Object.assign({}, product, { count: +product.count - 1 }) :
                    product
            );
    }

    function returnProduct(productId: number) {
        shopProducts.value =
            shopProducts.value.map(product =>
                product.id == productId ?
                    Object.assign({}, product, { count: +product.count + 1 }) :
                    product
            );
    }

    return {
        shopProducts, appendProducts, takeProduct, returnProduct
    };
});
