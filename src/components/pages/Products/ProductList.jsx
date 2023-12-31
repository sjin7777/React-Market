import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const url = `https://fakestoreapi.com/products`;

function ProductList() {
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(true);
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch(url, {method: "GET"})
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setLoading(false)
            })
            .catch((error) => console.log(error));
    }, [])

    const productList = items.map((item) => (
        <div key={item.id} onClick={() => navigate(`/product/detail/${item.id}`, {state: {item}})} style={{border: "2px solid black"}}>
            <img src={item.image} alt={item.title} style={{width: "50px", height: "50px"}}/>
            <h3>{item.title}</h3>
            <h5>{item.price}</h5>
        </div>
    ));

    return (
        <>
            {loading ? <h1>loading.... </h1> : productList}
        </>
    )
}

export default ProductList;