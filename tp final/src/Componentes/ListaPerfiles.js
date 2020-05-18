import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './../Componentes/Estilo.css'
function ListaProductos({datos,id}){
  
        return(
<div className="row">



            <div className="col-md-3">
            <div className="card card-product-gried">
            <p className="campo">Nombre de producto: {datos.nombre}</p>
            <p className="campo">Descripcion: {datos.descripcion}</p>
          

            <div className="divBtnDetalle">
                
                <Link to={'/producto/' + id}>Ver detalle</Link>
            </div>
            <div className="divFoto">
                <img className="fotoProducto" src= "../../img/barbijo.jpg"/>
            </div>
            </div>
            </div>
            </div>
        ) 
}
export default ListaProductos;