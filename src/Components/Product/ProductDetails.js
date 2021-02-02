import React from 'react';

const ProductDetails = ({ pd }) => {
    return (
        <div className="col-md-4">
            <div className="card mt-3" style={{ width: '20rem' }}>
                <img style={{ height: '250px'}} className="card-img-top" src={`data:${pd.img.contentType};base64,${pd.img.img}`} alt="" />
                <div className="card-body">
                    <h6>{pd.title}</h6>
                    <h6>Price: {pd.price}</h6>
                    <h6>Expire Date: {pd.expiredate}</h6>
                </div>

            </div>
        </div>

    );
};

export default ProductDetails;