import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../Componentes/Firebase';


function RegistroPage() {
    const history = useHistory();
    const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''});
    function handleClick(){
        
        history.push("/");
    }
    function handleSubmit(e){
        let email=form.email;
        let password=form.password;    
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario creado",data.user.uid)
            firebase.db.collection("usuarios").add({
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                userId: data.user.uid
              })
              .then((data)=>{
                  console.log(data)
                  history.push("/login");
              })
              .catch((err)=>{
                console.log(err)
                })
        })
        .catch((error)=>{
            console.log("Error",error)
        })
        e.preventDefault();
    }
    function handleChange(e){

        const target = e.target;
        const value = target.value
        const name = target.name;

      
        setForm({
            ...form,
            [name] : value});
        
    }
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                 <fieldset>
                 <h2 >Registro de Usuario</h2>   
                 <div className="form-group col-sm-12">
                        <label >Nombre</label>
                        <input type="nombre" className="form-control" id="nombre" aria-describedby="nombre" placeholder="Nombres"
                        name="nombre" value={form.nombre} onChange={handleChange}></input>
                       
                    </div>
                    <div className="form-group col-sm-12">
                        <label >Apellido</label>
                        <input type="apellido" className="form-control" id="apellido" aria-describedby="apellido" 
                        placeholder="Apellido" name="apellido" value={form.apellido} onChange={handleChange}></input>
                       
                    </div>
                    {/* <div className="form-group col-sm-12">
                        <label >Telefono</label>
                        <input type="telefono" className="form-control" id="telefono" aria-describedby="telefono" 
                        placeholder="Ingresar Email" name="telefono" value={this.state.telefono} onChange={this.handleChange}></input>
                       
                    </div> */}
                    <div className="form-group col-sm-12">
                        <label >Dirección de Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        placeholder="Ingresar Email" name="email" value={form.email} onChange={handleChange}></input>
                    </div>
                    <div className="form-group col-sm-12">
                        <label >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                        placeholder="Password" name="password" value={form.password} onChange={handleChange}></input>
                    </div>
                    {/* <div className="form-group col-sm-12">
                        <label >Confirme Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                        placeholder="Confirmar Password" name="repassword" value={this.state.repassword} onChange={this.handleChange}></input>
                    </div> */}
                    <div>
                         <button type="submit" className="btn btn-primary ">Guardar</button>
                    </div>
                </fieldset>  
            </form>        
            <button onClick={handleClick} >Ir a home</button>

        </div>
    )
   
}

export default RegistroPage;