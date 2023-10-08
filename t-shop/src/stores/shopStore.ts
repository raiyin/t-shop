import { defineStore } from 'pinia';
import { ref, watch, type Ref } from 'vue';
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
                shopProducts.value = [...shopProducts.value, ...response.data];
                page.value = page.value + 1;
            });
    }

    return {
        shopProducts, appendProducts
    };
});
