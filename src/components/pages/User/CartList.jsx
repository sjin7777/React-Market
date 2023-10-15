import { connect, shallowEqual, useSelector } from "react-redux";
import { CartSelect } from "../../data/Cart";
import { useEffect, useRef } from "react";
import { useState } from "react";

const url = `https://fakestoreapi.com/products`;

const ReduxState = (state) => ({
    // cartList: state.cartList
});

const ReduxAction = (dispatch) => ({
    // CartList: () => {
    //     dispatch(CartList())
    // }
})

function CartList() {
    const isChecked = useRef();
    const storeCart = useSelector((state) => ({ cart: state.Cart }), shallowEqual).cart;
    const storeUserId = storeCart.userId;
    const storeCartList = storeCart.cartList;
    const storeProductCount = storeCart.productCount;
    console.log(storeProductCount)
    

    
    console.log(storeCart)
    const [ items, setItems ] = useState([]);
    const [ count, setCount ] = useState(1)

    useEffect(() => {
        fetch(url, {method: "GET"})
        .then((response) => response.json())
        .then((dataArr) => {
            setItems(dataArr.filter((data) => storeCartList.some((storeCart) => data.id === storeCart.cartId)))
        })
    }, [setItems, storeCartList])

    const onCountHandler = () => {
        setCount()
    }
    const onCartHandler = () => {

    }

    return (
        <>
            <h1> {storeUserId}의 장바구니</h1>
            <button onClick={onCartHandler}>삭제하기</button>
            {items.map((item) => (
                <div key={item.id} style={{border: "1px solid black"}}>
                    <div>
                        <input ref={isChecked} type="checkbox"/>
                        <span>{item.title}</span>
                    </div>
                    <div>
                        <img alt={item.title} src={item.image} style={{width: "50px", height: "50px"}}/>
                        <span>가격: {item.price}</span>
                        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
                        <input type="number" value={count} onChange={onCountHandler} style={{width: "30px"}}/>
                        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                        <button>변경하기</button>
                    </div>
                </div>
            ))}
        </>
    )
}
export default connect(ReduxState, ReduxAction)(CartList);