import { connect, shallowEqual, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CartCk, CartInsert, CartRemove } from "../../data/Cart";
import { useEffect } from "react";
import { useState } from "react";

const ReduxState = (state) => ({
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
    CartCk: (cartId) => {
        dispatch(CartCk(cartId))
    },

    CartInsert: (cartId) => {
        dispatch(CartInsert(cartId))
    },

    CartRemove: (cartId) => {
        dispatch(CartRemove(cartId))
    }
    
})

function ProductDetail({CartCk, CartInsert, CartRemove}) {
    const navigate = useNavigate();
    const {id, title, price, description, category, image, rating} = useLocation().state.item;
    const storeRes = useSelector((state) => ({ result: state.Cart.result }), shallowEqual ).result;
    const [ btnText, setBtnText ] = useState((storeRes) ? ("장바구니 삭제") : ("장바구니 추가"));

    useEffect(() => {
        CartCk(id);
    }, [CartCk, CartInsert, CartRemove, id, btnText])

    const onCartHandler = () => {
        if(btnText === '장바구니 추가') {
            CartInsert(id)
            if(window.confirm('장바구니에 추가되었습니다. 장바구니로 가시겠습니까?')) {
                navigate('/user/basket')
            }
            setBtnText("장바구니 삭제")
            
        } else {
            CartRemove(id)
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
                <button onClick={onCartHandler} >{btnText}</button>
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