import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory()
    const backToHome = () => {
        history.push("/home")
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-md-2 text-center">
                    <h1 className="text-center">Page Not Found</h1>
                    <button className="btn btn-primary" onClick={backToHome}>Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;