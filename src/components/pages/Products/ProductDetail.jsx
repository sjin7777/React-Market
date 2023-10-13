import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { CartInsert } from "../../data/Cart";

const ReduxAction = (dispatch) => ({
    // CartInsert: (cartId) => {
    //     dispatch(CartInsert(cartId))
    // }
})

function ProductDetail({CartInsert}) {
    const {id, title, price, description, category, image, rating} = useLocation().state.item;
    const navigate = useNavigate();

    const onCartInsert = () => {
        // CartInsert(id);
        // if(window.confirm('장바구니로 가시겠습니까?')) {
        //     navigate('/user/basket')
        // }
    }
    return (
        <>
            <h1>상품 {id}번 상세페이지</h1>
            <div>
                <h3>{title}</h3>
                <button onClick={onCartInsert}>장바구니에 담기</button>
                <h5>{price}</h5>
                <p>{rating.rate}</p>
                <p>{rating.count}</p>
                <div>{category}</div>
                <p>{description}</p>
                <img src={image} alt={title}/>
            </div>
        </>
    )
}

export default connect(null, ReduxAction)(ProductDetail);
// export default ProductDetail;