import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const[products,setproduct] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setproduct(data))
    },[])
    return (
        <div>
            <h1>Products: {products.length}</h1>
        </div>
    );
};

export default AllProducts;