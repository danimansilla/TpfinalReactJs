import React,{Component} from 'react';
import {Form, Button, Container, Row, Col, Card, Alert, Spinner} from 'react-bootstrap';
import ciruelas from '../img/ciruelas.jpg';
import Footer from '../componentes/Footer';
import EcommerceContext from '../Context/EcommerceContext';
import firebase from '../componentes/Firebase';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';

class Login extends Component{
    static contextType = EcommerceContext;
    constructor(props){
        super(props);
        this.state={
            spinner:false,
            error:false
        }
    }
    render(){
    return(
        <>

        <div>
            <Container> 
              <Row className="justify-content-md-center">  

                <Col xs={12} md={4} style={{marginTop:"8%"}}>

                    <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={ciruelas} width="290px" height="400px"/>
                    </Card>


                </Col>   

               <Col xs={12} md={6} style={{marginTop:"8%"}}>   
                <Formik
                      initialValues={{ email: '', password: '' }}
                      validate={values => {
                        const errors = {};
                        if (!values.password) {
                            
                            errors.password = 'Es requerido';
                        }
                        if (!values.email) {
                            errors.email = 'Es requerido el email';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        this.setState({
                            spinner:true
                        })
                        console.log(values.email, values.password)
                        firebase.auth.signInWithEmailAndPassword(values.email, values.password)
                        .then((data) => {
                            this.setState({
                                spinner:false
                            })
                            setSubmitting(false);
                            this.context.loginUser(JSON.stringify(data.user))
                            const { history } = this.props;
                            history.push('/');
                        })
                        .catch(error => {
                            console.log("Error",error)
                            if(error.code=="auth/user-not-found"){
                                this.state.error=true;
                                this.setState({
                                    spinner:false,
                                    error:true
                                })
                                setSubmitting(false);
                            }
                        });
                        
                    }}
                    >
                            {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Ingresar Usuario" 
                            name="email" value={values.email} onChange={handleChange} />
                            {errors.email && touched.email && errors.email}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" 
                             name="password" value={values.password} onChange={handleChange} />
                             {errors.password && touched.password && errors.password}
                        </Form.Group>
                    
                        <Button variant="primary" type="submit" style={{backgroundColor:"#FF650D" , borderStyle:"none"}}
                        disabled={isSubmitting}>
                        {
                            this.state.spinner && 
                            <Spinner animation="border" variant="light" size="sm" />
                        }
                        
                        Ingresar
                        </Button>
                        
                        </Form>
                          )}
                </Formik>
                {this.state.error && 
                    <>
                    Hola
                    <Alert variant={'danger'}>
                        Usuario y/o contraseña incorrecto   
                             
                    </Alert>
                    </>
                }
            </Col>   

            </Row>   
         </Container>   
         <Footer/> 
        </div>
        </>
    );
    }
}

export default withRouter(Login);