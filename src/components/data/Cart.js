const initialState = {
    cartList: [
        {
            id: 0,
            cartId: 0,
        },
    ],
    cart: {
        id: 0,
        cartId: 0
    },
    result: false
};

let id = 1;
export const CartCk = (cartId) => ({
    type: 'CART_CK',
    cart: {
        cartId
    }
});

export const CartInsert = (cartId) => ({
    type: 'CART_INSERT',
    cart: {
        id: id++,
        cartId
    }
});

export const CartRemove = (cartId) => ({
    type: 'CART_REMOVE',
    cart: {
        cartId
    }
});


function Cart(state = initialState, action) {
    // console.log(' state.cartList >> ', state.cartList)
    switch(action.type) {
        case 'CART_INSERT':
            return {
                ...state,
                cart: action.cart,
                cartList: state.cartList.concat(action.cart)
            }
        case 'CART_CK':
            return {
                ...state,
                cart: action.cart,
                result: (state.cartList.findIndex((cart) => (cart.cartId === action.cart.cartId)) > -1) 
            }
        case 'CART_REMOVE':
            return {
                ...state,
                cartList: (state.cartList.filter((cart) => (cart.cartId !== action.cart.cartId)))
            }

        default:
            return state;
    }
}

export default Cart;