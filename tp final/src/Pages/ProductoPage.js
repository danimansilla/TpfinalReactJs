import React, {useEffect,useState, Component } from 'react';
import firebase from '../Componentes/Firebase';
import { useHistory } from "react-router-dom";

function ProductoPage(props){
    const history = useHistory();

    const [datos, setDatos] = useState({});

     useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("Productos/"+id)
            .get()
            .then(doc=>{
                setDatos( doc.data() )
                console.log(doc.data())
            })
    }, []); 
    const handleClick = ()=>{
        const id = props.match.params.id;
        firebase.db.doc("Productos/"+id)
        .delete()
        .then(doc=>{
            console.log(doc)
            history.push("/");
        })
    }
    const handleClickUpdate = ()=>{
        const id = props.match.params.id;
        firebase.db.doc("Productos/"+id)
        .set({
            nombre:datos.nombre,
            descripcion:datos.descripcion
        },{merge:true})
        .then(doc=>{
            console.log(doc)
            history.push("/");
        })
    }
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name;

      
        setDatos({
            ...datos,
            [name] : value});
    }  
        
 

       
            return(

            //     <div>

            //     <div>
            //         <label>Nombre</label>
            //         <input type="text" name="nombre" value={datos.nombre} onChange={handleChange}></input>
            //     </div>
            //     <div>
            //         <label>Descripcion</label>
            //         <input type="text" name="apellido" value={datos.descripcion} onChange={handleChange}></input>
            //     </div>
            //     {/* <div>{datos.email}</div> */}
            //     <button onClick={handleClick}>Eliminar</button>
            //     <button onClick={handleClickUpdate}>Actualizar</button>
            // </div>
                <div>
                    <h3>Detalle de perfil de:   {datos.nombre} {datos.descripcion} </h3>
                    <div>
                         <p>Nombre del producto: {datos.nombre}</p>
                        <p> Descripcion: {datos.descripcion}</p> 
                        <p>Precio: {datos.precio}</p> 
                        <p>Sku: {datos.sku}</p> 

                    </div>
                   <div className="divFoto">
                   
                        <img className="fotoProducto" src= "../../img/barbijo.jpg"/>
                   </div>
                </div>
            )
        
      
    
}

export default ProductoPage;