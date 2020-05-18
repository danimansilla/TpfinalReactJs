import React, { Component } from 'react';
import firebase from '../Componentes/Firebase';
import ListaProductos from '../Componentes/ListaPerfiles';

class HomePage extends Component{
    constructor(){
        super()
        this.state={
            perfiles:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        if(localStorage.getItem("login")){
            firebase.db.collection("Productos")
            .get()
            .then(querySnapshot=>{
                console.log("dsads",querySnapshot.docs)
                this.setState({
                    perfiles:querySnapshot.docs,
                    isLoaded:true
                })
                
                
            })
        }
        
    }
    render(){
        if(!this.state.isLoaded){
            return (
                <div>
                    Loading                
                </div>
            )
        }else{
            return(
                <div>
                    <div>
                           <img  fluid flex style={{marginTop: 30}} src= "../../img/carro.jpg"/> 
                    </div>
                    <h2>Productos Nuevos!</h2>
                    {this.state.perfiles.map((doc)=><ListaProductos datos={doc.data()} id={doc.id}/>)}
                    
                </div>
            )
        }
        
    }
}
export default HomePage ;