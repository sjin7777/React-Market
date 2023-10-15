import { connect, shallowEqual, useSelector } from "react-redux";
import { CartSelect } from "../../data/Cart";
import { useEffect, useRef } from "react";
import { useState } from "react";

const url = `https://fakestoreapi.com/products`;

const ReduxState = (state) => ({
    userId: state.userId,
    cartList: state.cartList
});

const ReduxAction = (dispatch) => ({
    // CartSelect: (userId, cartList) => {
    //     dispatch(CartSelect(userId, cartList))
    // }
})

function CartList({CartSelect}) {
    const storeCart = useSelector((state) => ({ cart: state.Cart }), shallowEqual).cart;
    const storeUserId = storeCart.userId;
    const storeCartList = storeCart.cartList;
    // console.log('scl >>>> ',storeCartList);

    const isChecked = useRef();
    const counter = useRef();
    // const counterVal = counter.current.value;
    // console.log('counter >>>>>>>>>> ', (counter.current) ? counter.current.id : null)
    
    // useEffect(())

    const [ items, setItems ] = useState([]);
    const [ counterValue, setCounterValue ] = useState((counter.current) ? counter.current.id : 0)
    const onDecrement = () => setCounterValue(counterValue - 1);
    const onIncrement = () => setCounterValue(counterValue + 1);
    const onChangeHandler = (e) => {

        // e.target.value = counter.current.value;
        // console.log(e.target.value)
        // number.value = counterValue;
    }


    useEffect(() => {
        fetch(url, {method: "GET"})
        .then((response) => response.json())
        .then((dataArr) => {
            
            // console.log(dataArr)
            // 카드에 담긴 제품 정보 얻기
            dataArr = dataArr.filter((data) => storeCartList.some((storeCart) => (data.id === storeCart.productId)) );

            // 두 배열 합치기
            dataArr = dataArr.map((data) => Object.assign(data, storeCartList.find((storeCart) => storeCart.id === data.id)))

            setItems(dataArr)
        })

    }, [setItems, storeCartList, counter, storeCart, storeUserId, counterValue])


    console.log(items)
    
    
    const onCartHandler = () => {

    }

    return (
        <>
            <h1> {storeUserId}의 장바구니</h1>
            <button onClick={onCartHandler}>삭제하기</button>
            
            {items.map((item) => (
                <div key={item.cartId} style={{border: "1px solid black"}}>
                    <div>
                        <input key={item.cartId} ref={isChecked} type="checkbox"/>
                        <span>{item.title}</span>
                    </div>
                    <div>
                        <img alt={item.title} src={item.image} style={{width: "50px", height: "50px"}}/>
                        <span>가격: {item.price}</span>
                        <button onClick={onDecrement}>-</button>
                        <input type="number" id={item.productCount} ref={counter} value={counterValue} onChange={onChangeHandler} style={{width: "30px"}}/>
                        <button onClick={onIncrement}>+</button>
                        <button>변경하기</button>
                    </div>
                </div>
            ))}
        </>
    )
}
export default connect(ReduxState, ReduxAction)(CartList);