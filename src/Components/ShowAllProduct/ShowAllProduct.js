import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ShowAllProduct.css';
import ShowAllProductDetails from './ShowAllProductDetails';
import loader from '../../Images/loader.gif'
import { UserContext } from '../../App';



const ShowAllProduct = () => {
    const [data, setData] = useContext(UserContext)
    const [search, setSearch] = useState("")
    const history = useHistory();
    const [showAllProduct, setShowAllProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setShowAllProduct(data))
    }, [search])
    console.log('show all product', showAllProduct)

    const handleEditProduct = (id) => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(response => response.json())
            .then(result => setData(result))
        if (data) {
            history.push('/edit-product')
        }
    }
    const refreshPage = () => {
        window.location.reload(false);
      }

    const handleDeleteProduct = (id) => {
        console.log('delete product', id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    alert("Delete Succesfully");
                }
            })
            refreshPage()
    }



    return (
        <div className="container">
            <h2 className="mt-5">All Product List</h2>
            <div className="col-md-6 offset-md-3">
                <h6>Search Product By Price</h6>
                <input onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Serach Product By Price" />
            </div>
            <div className='mt-3' style={{ background: '#f1f6ff' }}>
                <Table responsive="xs" style={{ background: '#f1f6ff', textAlign: 'center' }} >
                    <thead>
                        <tr>
                            <th style={{ width: '25%' }}>Name</th>
                            <th style={{ width: '25%' }}>Price</th>
                            <th style={{ width: '20%' }}>Expire Date</th>
                            <th style={{ width: '15%' }}>Edit Product</th>
                            <th style={{ width: '15%' }}>Delete Product</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            showAllProduct.length < 1 && <div>
                                <img src={loader} alt="" style={{ width: '300px' }} />
                                <h6>Product Loading.....</h6>
                            </div>
                        }

                        {
                            showAllProduct.filter(sproduct => sproduct.price.includes(search)).map(product => <ShowAllProductDetails
                                key={product._id} product={product}
                                handleEditProduct={handleEditProduct}
                                handleDeleteProduct={handleDeleteProduct}>
                            </ShowAllProductDetails>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ShowAllProduct;