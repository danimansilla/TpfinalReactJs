import React from 'react';
import {Navbar, Form, FormControl, Button, Nav,Container, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import EcommerceContext from '../Context/EcommerceContext';

const Menu = ()=>{
  const mensajeLogin = (context)=>{
      setTimeout(()=>{context.setNewLogin(false)}, 5000)
  }
  return (
    <EcommerceContext.Consumer>
        {context =>(
                    
                    <>
    <div >
           
                <Navbar bg="light" expand="lg" style={{backgroundColor:"white"}}> 
                      <Navbar.Brand href="#home" style={{color:"#FF650D", fontSize:"25px"}}>disFrutable</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {!context.login && 
                            <>
                          <Link to='/' style={{fontSize:"18px", color:"black", marginRight:"10px"}}>Home</Link>
                          <Link  to='login' style={{fontSize:"18px", color:"black", marginRight:"10px"}}>Login</Link>
                          <Link  to='registro' style={{fontSize:"18px", color:"black", marginRight:"10px"}}>Registrate</Link>
                          </>
                        }
                           {context.login && 
                            <>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link onClick={context.logout}>Logout</Nav.Link>
                            </>
                          }
                        </Nav>
                        
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
                    

                        <Form inline>
                          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                          <Button style={{backgroundColor:"#FF650D", borderStyle:"none", marginRight:"10px"}}>Buscar</Button>
                        </Form> 
                        <Nav>
                          <Nav.Link href="#deets">CARRITO</Nav.Link>
                        </Nav>                           
                      </Navbar.Collapse>
              </Navbar>

    </div>
    </>
     )}
                    
     </EcommerceContext.Consumer>
  );
}

export default Menu;
