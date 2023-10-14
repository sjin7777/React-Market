import { connect, shallowEqual, useSelector } from "react-redux";
import { CartSelect } from "../../data/Cart";
import { useEffect } from "react";
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
    const storeCartList = useSelector((state) => ({ cartList: state.Cart.cartList }), shallowEqual).cartList;
    const [ items, setItems ] = useState([]);

    console.log(storeCartList)
    useEffect(() => {
        fetch(url, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            setItems(data)
            // data.filter()
            // console.log('>>>>>>>>>>>>>> ', data)
            // console.log(JSON.stringify(data))
            // storeCartList.map((storeCart) => {
                // if(response.id === storeCart.cartId) {
                //     setItems(response)
                // }
                // console.log(storeCart.cartId)
            // })
        })
    })
    
    console.log(items);
    return (
        <>
            <h1>장바구니</h1>
            <div>
                <input type="checkbox"/>
                <span>상품명</span>
            </div>
            <div>
                <img alt="" src=""/>
                <span>가격</span>
                <select>
                    <option>수량</option>
                </select>
            </div>
        </>
    )
}
export default connect(ReduxState, ReduxAction)(CartList);