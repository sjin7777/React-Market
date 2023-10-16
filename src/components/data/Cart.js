const initialState = {
    userId: 'admin',
    cartList: [
        {
            cartKey: 1,
            productId: 1,
            productCount: 1
        },
    ],
    cart: {
        cartKey: 0,
        productId: 0,
        productCount: 0
    },
    result: false
};

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
});


export const CartProductCountIncrement = (productId, productCount) => ({
    type: 'CART_PRODUCT_COUNT_INCREMENT',
    cart: {
        productId,
        productCount: Number(productCount)
    }
});


export const CartProductCountDecrement = (productId, productCount) => ({
    type: 'CART_PRODUCT_COUNT_DECREMENT',
    cart: {
        productId,
        productCount: Number(productCount)
    }
});


function Cart(state = initialState, action) {

    switch(action.type) {
        case 'CART_INSERT':
            return {
                ...state,
                userId: action.userId,
                cartKey: state.cartKey,
                cartList: state.cartList.concat(Object.assign({cartKey: state.cartList.length + 1}, action.cart))
            }
        case 'CART_CK':
            return {
                ...state,
                userId: action.userId,
                productId: action.cart.productId,
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
                cartList: state.cartList.filter(() => (state.userId === action.userId)),
            }
        case 'CART_PRODUCT_COUNT_INCREMENT':
            // const currentCartCk1 = state.cartList.filter((cart) => (cart.productId === action.cart.productId));
            console.log('%%%%%%%%%%%%%%%111 ', state.cart.productCount)
            console.log('%%%%%%%%%%%%%%%222 ', action.cart.productCount)
            return {
                ...state,
                productId: action.cart.productId,
                productCount: (state.cart.productCount) + 1,
                // cartList: currentCartCk1.map((cart) => (cart.productCount = action.cart.productCount))
            }
        
        case 'CART_PRODUCT_COUNT_DECREMENT':
            console.log('%%%%%%%%%%%%%%%111 ', state.cart.productCount)
            console.log('%%%%%%%%%%%%%%%222 ', action.cart.productCount)

            // const currentCartCk = state.cartList.filter((cart) => (cart.productId === action.cart.productId));

            // let b = currentCartCk.map((cart) => (cart.productCount = action.cart.productCount))

            // console.log('bbbbbbbbbbbbbbbb', b)
            // console.log(b)
            return {
                ...state,
                productId: action.cart.productId,
                productCount: (state.cart.productCount) - 1,
                // cartList: currentCartCk.map((cart) => (cart.productCount = action.cart.productCount))
                // cartList: state.cartList.filter((cart) => (cart.id === action.cart.id)).map((cart) => (cart.productCount = action.cart.productCount))
            }

        default:
            return state;
    }
}

export default Cart;