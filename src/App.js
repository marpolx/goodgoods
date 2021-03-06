import React from 'react';
import {Switch,Route} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Cart from './components/Cart/'
import Default from './components/Default'
import Details from './components/Details'
import ProductList from './components/ProductList'
import Modal from './components/Modal'
/*import from './components/'*/
function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/products" component={ProductList} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route component={Default} />
    </Switch>
    <Modal />
   </>
  );
}

export default App;
