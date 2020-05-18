import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import firebase from '../Componentes/Firebase';


class LoginPage extends Component{
    constructor(props){
    super(props);
    this.handleSubmit =  this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state={
        email:'',
        password:''
    }
}
handleSubmit(e){
    let email=this.state.email;
    let password=this.state.password;


    firebase.auth.signInWithEmailAndPassword(email, password)
    .then((data) => {
       console.log("Login")
       localStorage.setItem('login',JSON.stringify(data.user))
            const { history } = this.props;
            history.push('/');
        })
    .catch(error => {

        console.log("Error",error)

        alert(error);
    });

    e.preventDefault();
   

}
handleChange(e){
    
    const target = e.target;
    const value = target.value
  //  const value = target.type === 'checkbox' ? target.checked : target.value;

    const name = target.name;
    
    this.setState({
        [name]:value
    })
    e.preventDefault();
}
    render(){
 
    return(
       
        <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su usuario" 
                        name="email" value={this.state.email} onChange={this.handleChange} />
                       
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña"
                        name="password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Ingresar
                    </Button>
                </Form>

                
        </div>

    )
    }
}


export default LoginPage;