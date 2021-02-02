import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Navbar from './Components/Navbar/Navbar';
import AddProduct from './Components/AddProduct/AddProduct';
import ShowAllProduct from './Components/ShowAllProduct/ShowAllProduct';
import EditProduct from './Components/EditProduct/EditProduct';
import NotFound from './Components/NotFound/NotFound';
export const UserContext = createContext()


function App() {
  const [data, setData] = useState({});
  return (
    <UserContext.Provider value={[data, setData]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/product">
            <Product></Product>
          </Route>
          <Route path="/add-product">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/show-all-product">
            <ShowAllProduct></ShowAllProduct>
          </Route>
          <Route path="/edit-product">
            <EditProduct></EditProduct>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
