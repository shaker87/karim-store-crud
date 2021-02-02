import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="bg-primary text-white navbar-area">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand" to="/">Karim Store</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add-product">Add-Product</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/show-all-product">ShowAllProduct</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;