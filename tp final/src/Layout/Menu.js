import React from 'react';
import {Link} from "react-router-dom";
import {Nav, Navbar,Alert, Container} from 'react-bootstrap'
import EcommerceContext from '../Context/EcommerceContext';
const Menu = ()=>{
    const mensajeLogin = (context)=>{
        setTimeout(()=>{context.setNewLogin(false)}, 5000)
    }
  
        return(
            <EcommerceContext.Consumer>
                {context =>(
                    
                    <>
                        <Navbar bg="dark" variant="dark" > 
                        <Navbar.Brand href="#home">
                        {/* <img className="foto" src= "../../img/logo.jpg"/> */}
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                        {!context.login && 
                            <>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </>
                        }
                         {context.login && 
                            <>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link onClick={context.logout}>Logout</Nav.Link>
                            </>
                        }
                     
                        </Nav>
                        </Navbar>
                                <Container>
                            
                                {context.newLogin && 
                                    <>
                                    <Alert variant={'info'}>
                                        Bienvenido/a        
                                    </Alert>
                                    {mensajeLogin(context)}
                                    </>
                                }
                                
                            </Container>
                        </>
                
                )}
           
            </EcommerceContext.Consumer>
          
          )
}

export default Menu;