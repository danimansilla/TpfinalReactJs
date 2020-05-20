import React from 'react';
import { Card,Row, Container, Col, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";




function Producto({datos,id}){
    return(
        <div>
    
            <Container>

                <Row  style={{marginTop:"40px"}}>
                    <Col xs={12} md={3} style={{marginRight:"20px"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://storage.cloud.google.com/tpfinal-e4dfa.appspot.com/Productos/${datos.foto}?authuser=0`}/>
                        <Card.Body>
                         <Card.Title>{datos.name}</Card.Title>
                            <Card.Text>
                           <p>Sku: {datos.sku}</p>
                            <p>Precio: {datos.precio}</p>
                            </Card.Text>
                          <Col>  <Link style={{color:"#FF650D", marginBottom:"5px"}} to={'detalleproducto/'+id}>Ver Detalle</Link></Col>
                           <Col> <Button variant="success">Agregar al Carrito</Button></Col>
                        </Card.Body>
                    </Card>
                   </Col> 
                  
                </Row>    
                {/* <Row className="justify-content-md-center"  style={{marginTop:"20px"}}>
                    <Col xs={12} md={3} style={{marginRight:"20px"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button style={{backgroundColor:"#FF650D", borderStyle:"none", marginBottom:"5px"}}>Ver Detalle</Button>
                            <Button variant="success">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                   </Col> 
                   <Col xs={12} md={3} style={{marginRight:"20px"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button style={{backgroundColor:"#FF650D", borderStyle:"none", marginBottom:"5px"}}>Ver Detalle</Button>
                            <Button variant="success">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                   </Col> 
                   <Col xs={12} md={3} style={{marginRight:"20px"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button style={{backgroundColor:"#FF650D", borderStyle:"none", marginBottom:"5px"}}>Ver Detalle</Button>
                            <Button variant="success">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                   </Col>
                </Row> */}
            </Container>
        </div>
    );
}

export default Producto; 