import { connect, shallowEqual, useSelector } from "react-redux";
import { CartProductCountIncrement, CartProductCountDecrement } from "../../data/Cart";
import { useEffect, useRef } from "react";
import { useState } from "react";

const url = `https://fakestoreapi.com/products`;

const ReduxState = (state) => ({
    userId: state.userId,
    cartList: state.cartList,
    cart: {
        productId: state.productId,
        productCount: Number(state.productCount)
    }
});

const ReduxAction = (dispatch) => ({
    CartProductCountIncrement: (productId, productCount) => {
        dispatch(CartProductCountIncrement(productId, productCount))
    },
    CartProductCountDecrement: (productId, productCount) => {
        dispatch(CartProductCountDecrement(productId, productCount))
    }

})

function CartList({CartProductCountIncrement, CartProductCountDecrement}) {
    const isChecked = useRef();
    const isCounter = useRef();

    const storeUserId = useSelector((state) => ({ token: state.Token }), shallowEqual).token.token.userId;
    const storeCart = useSelector((state) => ({ cart: state.Cart }), shallowEqual).cart;
    const storeCartList = Array.isArray(storeCart.cartList) ? (storeCart.cartList) : null;
    
    
    const [ items, setItems ] = useState([]);
    const [ counter, setCounter ] = useState( 0);

    useEffect(() => {
        fetch(url, {method: "GET"})
        .then((response) => response.json())
        .then((dataArr) => {                
            dataArr = dataArr.filter((data) => storeCartList.some((storeCart) => (data.id === storeCart.productId)) );
            dataArr = dataArr.map((data) => Object.assign(data, storeCartList.find((storeCart) => storeCart.productId === data.id)))
            setItems(dataArr)
        })
    }, [setItems, storeCartList, storeUserId, isCounter, CartProductCountIncrement, CartProductCountDecrement])


    
    const onDecrement = (id, storeCnt, cnt) => {
        setCounter((prev) => prev - 1);
        // (isCounter.current) = (isCounter.current) && Number(isCounter.current.value) - 1
        
        CartProductCountDecrement(id, storeCnt + cnt)
        console.log('id >>>>>>>> ', id, ', storeCnt >>>>>>>>> ', storeCnt, ',     cnt >>>>>>>> ', cnt, );
    }
    
    const onIncrement = (id, storeCnt, cnt) => {
        setCounter((prev) => prev + 1);
        
        CartProductCountIncrement(id, storeCnt + cnt);
        console.log('id >>>>>>>> ', id, ', storeCnt >>>>>>>>> ', storeCnt, ',     cnt >>>>>>>> ', cnt, );
    }

    
    const onChangeHandler = (id, storeCnt, cnt) => {
        onIncrement(id, storeCnt, cnt);
        onDecrement(id, storeCnt, cnt);
    }

    
    console.log((isCounter.current) ? Number(isCounter.current.value) : null)



    console.log(items)
    
    
    const onRemoveHandler = () => {

    }

    return (
        <>
            <h1> {storeUserId}의 장바구니</h1>
            <button onClick={onRemoveHandler}>삭제하기</button>
            
            {items.map((item) => (
                <div key={item.cartKey} style={{border: "1px solid black"}}>
                    <div>
                        <input key={item.cartKey} ref={isChecked} type="checkbox"/>
                        <span>{item.title}</span> 
                    </div>
                    <div>
                        <img alt={item.title} src={item.image} style={{width: "50px", height: "50px"}}/>
                        <span>가격: {item.price}</span>
                        {/* <button onClick={() => CartProductCountDecrement(item.id, Number(item.productCount))}>-</button> */}
                        <button onClick={() => onDecrement(item.id, item.productCount, counter)}>-</button>
                        <input type="number" ref={isCounter} value={item.productCount + counter} onChange={() => onChangeHandler(item.id, item.productCount, counter)} style={{width: "50px"}}/>
                        <button onClick={() => onIncrement(item.id, item.productCount, counter)}>+</button>
                        {/* <button onClick={() => CartProductCountIncrement(item.id, Number(item.productCount))}>+</button> */}

                    </div>
                </div>
            ))}
        </>
    )
}
export default connect(ReduxState, ReduxAction)(CartList);