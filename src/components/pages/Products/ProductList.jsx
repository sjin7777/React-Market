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
            .then((response) => {
                setItems(response);
                setLoading(false)
            })
            .catch((error) => console.log(error));
    }, [])

    const productList = items.map((item) => (
        <div key={item.id} onClick={() => navigate(`/product/detail/${item.id}`, {state: {item}})} style={{border: "2px solid black"}}>
            <h3>{item.title}</h3>
            <h5>{item.price}</h5>
            <p>{item.description}</p>
        </div>
    ));

    return (
        <>
            {loading ? <h1>loading.... </h1> : productList}
        </>
    )
}

export default ProductList;