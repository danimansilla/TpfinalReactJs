import React from 'react';
import {Alert, Row, Col} from 'react-bootstrap';

function Footer(){
    return(
        <div>

                <footer>
                    <Alert style={{backgroundColor:"#f58521", color:"white", marginTop:"10%"}}>
                      
                        <Row className="justify-content-md-center">
                            <Col xs={4}>   
                                <Alert.Heading style={{textAlign:"center"}}>Contacto</Alert.Heading>
                                <p style={{textAlign:"center", fontSize:"14px"}}>
                                Telefono: 011-78459632
                            </p>
                            <p style={{textAlign:"center", fontSize:"14px"}}>
                                WhatsApp: 616730353
                            </p>
                            <p style={{textAlign:"center", fontSize:"14px"}}>
                                Atencion al cliente: Lunes a Viernes de 08 a 20hs
                            </p>
                            </Col>

                            <Col xs={4}> 
                            <Alert.Heading style={{textAlign:"center"}}>Conocenos</Alert.Heading>
                            <p style={{textAlign:"center", fontSize:"14px"}}>
                                ¿Quienes Somos?
                            </p>
                            <p style={{textAlign:"center", fontSize:"14px"}}>
                                ¿Como Comprar?
                            </p>
                            <p style={{textAlign:"center", fontSize:"14px"}}>
                                Formas de Pago
                            </p>
                            </Col>
                        </Row>  
                    
               
                    </Alert>
                </footer>

        </div>
    );
}

export default Footer;