import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Producto from './pages/Producto';
import DetalleProducto from './pages/DetalleProducto';

ReactDOM.render(

  <BrowserRouter>
 
               <App />
                <React.Fragment>
                    <Route path="/" exact component={Home} />
                    <Route path="/registro" component={Registro} />
                    <Route path="/login" component={Login} />
                    <Route path="/producto" component={Producto} />
                    <Route path="/detalleproducto" component={DetalleProducto} />
               </React.Fragment>

</BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
