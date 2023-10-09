import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';
import { type IProduct } from '@/model/IProduct';
import { useShopStore } from '@/stores/shopStore';

export const useBasketStore = defineStore('basketStore', () => {

    const shopStore = useShopStore();
    const basketProducts: Ref<IProduct[]> = ref([]);

    function addProduct(product: IProduct) {

        if (basketProducts.value.filter(p => p.id === product.id).length === 0) {
            basketProducts.value = [...basketProducts.value, product];
            console.log('0');
            console.log(basketProducts.value);
        }
        else {
            const index = basketProducts.value.findIndex(p => {
                return p.id === product.id;
            });

            basketProducts.value[index].count += 1;
            console.log('!0');
            console.log(basketProducts.value);
        }

        console.log('!0');
        shopStore.takeProduct(product.id);
    }

    function removeProduct(productId: number) {

        if (+basketProducts.value.filter(p => p.id == productId)[0].count === 1) {
            basketProducts.value = basketProducts.value.filter((product) => product.id !== productId);
        }
        else {
            basketProducts.value =
                basketProducts.value.map(p =>
                    p.id == productId ? Object.assign({}, p, { count: +p.count - 1 }) : p);
        }

        shopStore.returnProduct(productId);
    }

    return {
        basketProducts, addProduct, removeProduct
    };
});
