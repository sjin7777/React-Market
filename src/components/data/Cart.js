const initialState = {
    cartList: [
        [
            {
                userId: 'admin'
            },
            {
                cartKey: 1,
                productId: 1,
                productCount: 1
            },
        ]
    ],

    cart: [
        {
            userId: 'admin'
        },
        {
            cartKey: 0,
            productId: 0,
            productCount: 0
        }
    ],
    result: false
};


export const CartInit = (userId) => ({
    type: 'CART_INIT',
    cart: [
        {
            userId
        }
    ]
})
export const CartCk = (userId, productId) => ({
    type: 'CART_CK',
    cart: [
        {
            userId
        },
        {
            productId
        }
    ]
})
export const CartInsert = (userId, productId) => ({
    type: 'CART_INSERT',
    cart: [
        {
            userId
        },
        {
            productId
        }
    ]
});

export const CartRemove = (userId, productId) => ({
    type: 'CART_REMOVE',
    cart: [
        {
            userId
        },
        {
            productId
        }
    ]
});

export const CartSelect = (userId) => ({
    type: 'CART_SELECT',
    cart: [
        {
            userId
        }
    ]
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
        case 'CART_INIT':
            // console.log('>>>>>>>>>> ', state.cartList.concat([[{userId: action.cart[0].userId}]]))
            return {
                ...state,
                cart: [
                    {
                        userId: action.cart[0].userId
                    }
                ],
                cartList: state.cartList.concat([[{userId: action.cart[0].userId}]])
            }
        case 'CART_INSERT':
            let storeUserCart = state.cartList.filter((cart) => cart = cart[0].userId === action.cart[0].userId);
            // storeUserCart[0].push({cartKey: storeUserCart[0].length, productId: action.cart[1].productId, productCount: 1});
            state.cartList.map((cart) => (cart[0].userId === action.cart[0].userId) && cart.push({cartKey: storeUserCart[0].length, productId: action.cart[1].productId, productCount: 1}))
            // console.log('111111111111111111111111   ', state.cartList)

            return {
                ...state,
                userId: action.userId,
                cart: storeUserCart,
                cartList: state.cartList
            }
        case 'CART_CK':
            let a = state.cartList.filter((cart) => cart = cart[0].userId === action.cart[0].userId);
            console.log('a >>>>>> ',a);
            console.log('len >> ', a[0].length)
            // let b = a.findIndex((item) => {
            // });
            // console.log('b >>>>>>>> ',b)

            // console.log('id>>>>>>>>>>', stateUserCart.findIndex((cart) =>  (cart.productId === action.cart.productId)) > -1)
            return {
                ...state,
                userId: action.userId,
                productId: action.cart.productId,
                // result: ((state.cartList.findIndex((cart) => (cart.productId === action.cart.productId)) > -1)) 
            }
        case 'CART_REMOVE':
            return {
                // ...state,
                // userId: action.userId,
                // cartList: (state.cartList.filter((cart) => (cart.productId !== action.cart.productId)))
            }
        case 'CART_SELECT':
            return {
                ...state,
                userId: action.cart[0].userId,
                cart: state.cartList.filter((cart) => cart[0].userId === action.cart[0].userId ),
                cartList: state.cartList
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