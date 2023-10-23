import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BasketItem from '../BasketItem.vue'
import type { IProduct } from '@/model/IProduct'

describe('BasketItem test', () => {

    const product: IProduct = {
        id: 1,
        title: 'title',
        price: '34',
        old_price: 'old_price',
        description: 'description',
        category: 'category',
        size: 'size',
        count: 'count'
    }
    const wrapper = mount(BasketItem, { props: { product } })

    it('should render properly', () => {
        expect(wrapper.html()).toContain('18800')
    })
})
