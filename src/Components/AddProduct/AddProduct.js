import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddProduct = () => {
    const history = useHistory();
    const [file, setFile] = useState(null);
    const [addProduct, setAddProduct] = useState({});
    const handleBlur = event => {
        const newAddProductInfo = { ...addProduct }
        newAddProductInfo[event.target.name] = event.target.value;
        setAddProduct(newAddProductInfo);
        console.log(newAddProductInfo)
    }
    const handleFileChange = event => {
        const newFileInfo = event.target.files[0];
        setFile(newFileInfo);
        console.log(newFileInfo)
    }

    const handleAddProduct = () => {

        const formData = new FormData()
        console.log(formData);
        formData.append('file', file);
        formData.append('title', addProduct.title);
        formData.append('price', addProduct.price);
        formData.append('expiredate', addProduct.expiredate);


        fetch('http://localhost:5000/add-product', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    history.push("/show-all-data");
                    alert("Product added successfully")
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
                        <h5>Add New Product</h5>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="exampleInpuTitle">Product Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="title" placeholder="Enter Product Name" />
                         
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPrice">Product Price</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="price" placeholder="Enter Product Price" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputExpiry">Expiry Date</label>
                            <input onBlur={handleBlur} type="date" class="form-control" name="expiredate" />
                        </div>
                        <div class="form-group">
                            <label for="file">Upload a Product Picture</label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPrice" />
                        </div>

                        <button onClick={handleAddProduct} type="submit" class="btn btn-success">ADD PRODUCT</button>
                    </form>
                </div>


            </div>
        </div>

    );
};

export default AddProduct;