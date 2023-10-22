import { render } from '@testing-library/vue'
import { test } from '@jest/globals';
import BasketItem from './BasketItem.vue'

test('renders basket item', () => {
    const { debug } = render(BasketItem)
    debug()
})
