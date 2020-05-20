import { useHistory } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {Form, Button, Container, Row, Col, Card,Spinner} from 'react-bootstrap';
import frutas from '../img/frutas.jpg';
import Footer from '../componentes/Footer';
import firebase from '../componentes/Firebase';

const Registro = ()=>{
    const history = useHistory();
    const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''});
    const [spinner, setSpinner] = useState(false);
    const handleSubmit = (e)=>{
        setSpinner(true);
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
                    setSpinner(false);
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
    const handleChange = (e)=>{

        const target = e.target;
        const value = target.value
        const name = target.name;

      
        setForm({
            ...form,
            [name] : value});
        
    }
    return(
         <div>
            <Container> 
              <Row className="justify-content-md-center">  

                <Col xs={12} md={4} style={{marginTop:"8%"}}>

                    <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={frutas} width="290px" height="400px"/>
                    </Card>


                </Col>   

               <Col xs={12} md={6} style={{marginTop:"8%"}}>   
               <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Ingresar nombre" name="nombre" value={form.usuario} onChange={handleChange} />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Ingresar apellido" name="apellido" value={form.usuario} onChange={handleChange} />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="ciudad" placeholder="Ciudad" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" name="email" value={form.usuario} onChange={handleChange} />

                            <Form.Text className="text-muted">
                            Ingresar una cuenta valida
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />

                        </Form.Group>
                    
                        
                        <Button variant="primary" type="submit" style={{backgroundColor:"#FF650D" , borderStyle:"none"}}>
                            {
                                spinner && 
                                <Spinner animation="border" variant="light" size="sm" />
                            }
                            Registrarse
                        </Button>
                </Form>
            </Col>   

            </Row>   
         </Container>   
         <Footer/> 

        </div>
    );
}

export default Registro;