import { connect, shallowEqual, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CartCk, CartInsert, CartRemove } from "../../data/Cart";
import { useEffect } from "react";
import { useState } from "react";
import { Hidden } from "@mui/material";

const ReduxState = (state) => ({
    userId: state.userId,
    cartList: [
        {
            cartId: state.cartId
        }
    ],
    cart: {
        cartId: state.cartId
    }
})


const ReduxAction = (dispatch) => ({
    CartCk: (userId, cartId) => {
        dispatch(CartCk(userId, cartId))
    },

    CartInsert: (userId, cartId) => {
        dispatch(CartInsert(userId, cartId))
    },

    CartRemove: (userId, cartId) => {
        dispatch(CartRemove(userId, cartId))
    }
    
})

function ProductDetail({CartCk, CartInsert, CartRemove}) {
    const navigate = useNavigate();
    const {id, title, price, description, category, image, rating} = useLocation().state.item;
    const storeRes = useSelector((state) => ({ result: state.Cart.result }), shallowEqual).result;
    const storeToken = useSelector((state) => ({ token: state.Token.token}), shallowEqual).token;
    const userId = (storeToken) ? storeToken.userId : ""
    const isToken = (storeToken) ? storeToken.isToken : false
    console.log(userId)
    const [ btnText, setBtnText ] = useState((storeRes) ? ("장바구니 삭제") : ("장바구니 추가"));

    useEffect(() => {
        CartCk(userId, id);
    }, [CartCk, CartInsert, CartRemove, userId, id, btnText])

    const onCartHandler = () => {
        if(btnText === '장바구니 추가') {
            CartInsert(userId, id)
            if(window.confirm('장바구니에 추가되었습니다. 장바구니로 가시겠습니까?')) {
                navigate('/user/cartlist')
            }
            setBtnText("장바구니 삭제")
            
        } else {
            CartRemove(userId, id)
            alert('장바구니에서 삭제되었습니다');
            setBtnText("장바구니 추가")
        }
    }
    return (
        <>
            <h1>상품 {id}번 상세페이지</h1>
            <div>
                <h3>{title}</h3>
                <img src={image} alt={title} style={{width: "200px", height: "200px"}}/>
                <button onClick={onCartHandler} style={isToken ? null : {display: "none"}}>{btnText}</button>
                <h5>{price}</h5>
                <p>{rating.rate}</p>
                <p>{rating.count}</p>
                <div>{category}</div>
                <p>{description}</p>
            </div>
        </>
    )
}

export default connect(ReduxState, ReduxAction)(ProductDetail);