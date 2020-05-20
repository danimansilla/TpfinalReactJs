
import { Card,Row, Container, Col} from 'react-bootstrap';
import granada from '../img/granada.jpg';
import kiwi from '../img/kiwi.jpg';
import banana from '../img/banana.jpg';
import '../pages/Home.css';
import Footer from '../componentes/Footer';
import Slider from '../componentes/Slider';
import firebase from '../componentes/Firebase';
import React,{Component} from 'react';
import Producto from './Producto';


class Home extends Component{

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

  return (
    <div >
          <Slider/>
        
        <Container>
          <Row className="justify-content-md-center">
                <Card style={{marginTop:"40px"}}>
                    <Card.Header style={{color:"#FF650D", fontSize:"25px"}}>disFrutable - ecommerce</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Somos expertos en la comercialización y distribución de fruta y verdura para hostelería y restauración. 

                             Nos avalan cerca de 100 años de trayectoria en el sector de la venta a través de nuestras tiendas y con más de 20 años de experiencia en la distribución especializada en el sector profesional horeca, dando servicio a más de 1000 clientes entre hoteles,
                             restaurantes, catering y colectividades, convirtiéndonos en la empresa líder del sector en la comunidad de Madrid.{' '}
                        </p>
                        <footer className="blockquote-footer">
                           Somos una familia <cite title="Source Title">Dedicada a Brindar los mejores Productos</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
           </Row>

           <Row className="justify-content-md-center" style={{marginTop:"20px"}}>
               
                    <Col xs lg="3" style={{marginRight:"20px"}}>
                            <Card style={{ width: '18rem', marginTop:"10px"}}>
                                    <Card.Img variant="top" src={granada} />
                                    <Card.Body style={{backgroundColor:"#db2860", color:"white"}}>
                                       
                                        <Card.Text>
                                        Las frutas son perfectas en nuestra dieta diaria, pero sobre todo su aporte es de vitaminas,
                                        minerales, fitoquímicos, fibra y agua orgánica.
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>    

                        <Col xs lg="3" style={{marginRight:"20px"}}>
                            <Card style={{ width: '18rem',  marginTop:"10px" }}>
                                    <Card.Img variant="top" src={kiwi}/>
                                    <Card.Body style={{backgroundColor:"#b7c015", color:"white"}}>                         
                                        <Card.Text>
                                        La riqueza de este alimento se debe en su mayoría a su composición, 
                                        dado que está formada en su mayoría por agua.
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>    

                        <Col xs lg="3" style={{marginRight:"20px"}}>
                            <Card style={{ width: '18rem', marginTop:"10px"}}>
                                    <Card.Img variant="top" src={banana} />
                                    <Card.Body style={{backgroundColor:"#f3ad31", color:"white"}}>
                                        
                                        <Card.Text>
                                        Las frutas son una de las mejores fuentes de antioxidantes
                                        que puede brindarte la naturaleza, por lo que ayudan de a reducir 
                                        el envejecimiento.
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>    
           </Row>
           <hr style={{marginTop:"10%", marginBottom:"5%"}}></hr>
           <div>
           {this.state.perfiles.map((doc)=><Producto datos={doc.data()} id={doc.id}/>)}
           </div>
        </Container> 
        <Footer/>
        
       
    </div>
  );
    }
}
}

export default Home ;