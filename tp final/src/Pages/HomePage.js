import React, { Component } from 'react';
import firebase from '../Componentes/Firebase';
import ListaProductos from '../Componentes/ListaPerfiles';
import { Container,Col,Row,Spinner,Alert } from 'react-bootstrap';
import {Link} from "react-router-dom";
import EcommerceContext from '../Context/EcommerceContext';
import '../App.css';


class HomePage extends Component{
    static contextType = EcommerceContext;
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
                this.setState({
                    perfiles:querySnapshot.docs,
                    isLoaded:true
                })
            })
        }       
    }
    render(){
        if(!this.context.login){
            return (
                <Container>
                    <Alert variant={'info'}>
                        Debe autenticarse en el sistema    
                        <Link to={'/login'}>Ir a login</Link>        
                    </Alert>
                        
                </Container>
            )
        }else if(!this.state.isLoaded){
            return (
                <Container className="loader">

                    <Spinner  animation="grow" />
                    <Spinner  animation="grow" />
                    <Spinner  animation="grow" />                
                </Container>
            )
        }else{
            return(
                <Container>
                    <Row>
                        
                        {this.state.perfiles.map((doc)=><Col xs={6} key={doc.id}><ListaProductos datos={doc.data()} id={doc.id} context={this.context}/></Col>)}
                        
                    </Row>
                    
                    
                </Container>
            )
        }
        
    }
}

export default HomePage;