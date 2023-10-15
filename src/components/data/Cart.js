const initialState = {
    userId: '',
    cartList: [
        {
            id: 0,
            productId: 0,
            productCount: 1
        },
    ],
    cart: {
        id: 0,
        productId: 0,
        productCount: 1
    },
    result: false
};

let id = 1;
export const CartCk = (userId, productId) => ({
    type: 'CART_CK',
    userId,
    cart: {
        productId
    }
});

export const CartInsert = (userId, productId) => ({
    type: 'CART_INSERT',
    userId,
    cart: {
        id: id++,
        productId,
        productCount: 1
    }
});

export const CartRemove = (userId, productId) => ({
    type: 'CART_REMOVE',
    userId,
    cart: {
        productId
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
                result: (state.cartList.findIndex((cart) => (cart.productId === action.cart.productId)) > -1) 
            }
        case 'CART_REMOVE':
            return {
                ...state,
                userId: action.userId,
                cartList: (state.cartList.filter((cart) => (cart.productId !== action.cart.productId)))
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