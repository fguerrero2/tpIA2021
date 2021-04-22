import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Login from './FPages/Login';
import Nosotros from './FPages/Nosotros';
import Home from './FPages/Home';
import Registrarse from './FPages/Registrarse';
import Shop from './FPages/Shop';
import Carrito from './FPages/Carrito';
import AdminOrden from './FPages/AdminOrden';
import AdminProductos from './FPages/AdminProductos';


class App extends Component {
  render() {
    return (
        <BrowserRouter  >
            <Switch>
               <Redirect from="/" exact to="/home"/ > 
               <Route path="/home" exact component={Home}/>
               <Route path="/login" exact component={Login}/>
               <Route path="/nosotros" exact component={Nosotros}/>
               <Route path="/registrarse" exact component={Registrarse}/>
               <Route path="/shop" exact component={Shop}/>
               <Route path="/carrito" exact component={Carrito}/>
               <Route path="/Admin_OrdenesCompra" exact component={AdminOrden}/>
               <Route path="/Admin_Productos" exact component={AdminProductos}/>
           </Switch>
          
        </BrowserRouter>
    );
  }
}

export default App;


