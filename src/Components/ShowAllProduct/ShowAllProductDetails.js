import React from 'react';

const ShowAllProductDetails = ({ product, handleDeleteProduct, handleEditProduct }) => {
    const { title, price, expiredate } = product;
    const id = product._id;
    return (
        <>
            <tr style={{ fontWeight: '400', }}>
                <td>{title}</td>
                <td>{price}</td>
                <td>{expiredate}</td>
                <td><button onClick={() => handleEditProduct(id)} className="btn btn-primary">Edit</button></td>
                <td><button onClick={() => handleDeleteProduct(id)} className="btn btn-danger">Delete</button></td>
            </tr>
        </>
    );
};

export default ShowAllProductDetails;