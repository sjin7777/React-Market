const initialState = {
    userId: '',
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
export const CartCk = (userId, cartId) => ({
    type: 'CART_CK',
    userId,
    cart: {
        cartId
    }
});

export const CartInsert = (userId, cartId) => ({
    type: 'CART_INSERT',
    userId,
    cart: {
        id: id++,
        cartId
    }
});

export const CartRemove = (userId, cartId) => ({
    type: 'CART_REMOVE',
    userId,
    cart: {
        cartId
    }
});

export const CartSelect = (userId, cartList) => ({
    type: 'CART_SELECT',
    userId,
    cartList
})


function Cart(state = initialState, action) {
    // console.log(' state.cartList >> ', state.cartList)
    switch(action.type) {
        case 'CART_INSERT':
            return {
                ...state,
                userId: action.userId,
                cart: action.cart,
                cartList: state.cartList.concat(action.cart)
            }
        case 'CART_CK':
            return {
                ...state,
                userId: action.userId,
                cart: action.cart,
                result: (state.cartList.findIndex((cart) => (cart.cartId === action.cart.cartId)) > -1) 
            }
        case 'CART_REMOVE':
            return {
                ...state,
                userId: action.userId,
                cartList: (state.cartList.filter((cart) => (cart.cartId !== action.cart.cartId)))
            }
        case 'CART_SELECT':
            return {
                ...state,
                userId: action.userId,
                cartList: state.cartList
            }
        default:
            return state;
    }
}

export default Cart;