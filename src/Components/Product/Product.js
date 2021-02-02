import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import loader from '../../Images/loader.gif'


const Product = () => {
    const [product, setProduct] = useState([])
    
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [search])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h6>Search Product By Price</h6>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Serach Product By Price" />
                </div>
             
                {
                    product.length < 1 && <div>
                        <img src={loader} alt="" style={{ width: '300px', margin: 'auto' }} />
                        <h6>Product Loading.....</h6>
                    </div>
                }
                {
                    product.filter(sproduct => sproduct.price.includes(search)).map(pd => <ProductDetails pd={pd} key={pd._id}></ProductDetails>)
                }
            </div>

        </div>
    );
};

export default Product;