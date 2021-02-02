import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const EditProduct = () => {
    const history = useHistory()
    const [data, setData] = useContext(UserContext)
    // const [file, setFile] = useState(null);
    const [updateProduct, setUpdateProduct] = useState({});

    const handleBlur = event => {
        const productInfo = { ...updateProduct }
        productInfo[event.target.name] = event.target.value;
        setUpdateProduct(productInfo);
        // console.log(newAddProductInfo)
    }
    // const handleFileChange = event => {
    //     const newFileInfo = event.target.files[0];
    //     setFile(newFileInfo);
    //     console.log(newFileInfo)
    // }

    const handleUpdateProduct = (id) => {

        const formData = new FormData()
        console.log(formData);
        // formData.append('file', file);
        formData.append('title', updateProduct.title);
        formData.append('price', updateProduct.price);
        formData.append('expiredate', updateProduct.expiredate);


        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    history.push(`/show-all-product`);
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 bg-primary text-white p-5" >
                    <div className="text-center">
                        <h5>Update Product</h5>
                    </div>
                    <form>
                        <div class="form-group">
                            <h6>Product ID: {data._id}</h6>
                            <label for="exampleInpuTitle">Product Name</label>
                            <input onChange={handleBlur} value={data.title} type="text" class="form-control" name="title" placeholder="Enter Product Name" />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputPrice">Product Price</label>
                            <input onChange={handleBlur} value={data.price} type="text" class="form-control" name="price" placeholder="Enter Product Price" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputExpiry">Expiry Date</label>
                            <input onChange={handleBlur} value={data.expiredate} type="date" class="form-control" name="expiredate" />
                        </div>
                        {/* <div class="form-group">
                            <label for="file">Upload a Product Picture</label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPrice" />
                        </div> */}


                        <button onClick={handleUpdateProduct(data._id)} type="submit" class="btn btn-success">Update Product</button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default EditProduct;