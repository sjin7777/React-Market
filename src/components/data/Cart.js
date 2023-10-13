const initialState = () => ({
    cartList: [
        {
            cartId: 0,
        }
    ],
    cart: {
        cartId: 0
    }
});

export const CartInsert = (cartId) => ({
    type: 'CART_INSERT',
    cartId
})

export const CartRemove = (cartId) => ({
    type: 'CART_REMOVE',
    cartId
})


function Cart(state = initialState, action) {
    switch(action.type) {
        case 'CART_INSERT':
            return {
                ...state,
                cartList: state.cartList.concat(action.cart)
            }
        case 'CART_REMOVE':
            return {
                ...state,
                cartId: action.cart.cartId
            }

        default:
            return state;
    }
}

export default Cart;