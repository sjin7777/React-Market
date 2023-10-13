// url: https://fakestoreapi.com/products

const initialState = () => ({
    item: {
        itemId: 0,
        itemTitle: '',
        itemPrice: 0,
        itemCategory: '',
        itemDescription: '',
        itemImage: '',
        itemRating: {
            itemRate: 0,
            itemCount: 0
        }
    }
});

export const ProductInsert = (item) => ({
    type: 'PRODUCT_INSERT',
    item
})

export const ProductRemove = (itemId) => ({
    type: 'PRODUCT_REMOVE',
    item: {
        itemId
    }
})
export const ProductModify = (item) => ({
    type: 'PRODUCT_MODIFY',
    item
})



function Product(state = initialState, action) {
    switch(action.type) {
        case 'PRODUCT_INSERT':
            return {
                ...state,
                item: action.item
            }
        case 'PRODUCT_REMOVE':
            return {
                ...state,
                itemId: action.item.itemId 
            }
        case 'PRODUCT_MODIFY':
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default Product;

