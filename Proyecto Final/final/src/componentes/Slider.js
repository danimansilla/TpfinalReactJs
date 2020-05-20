import React from 'react';
import {Carousel} from 'react-bootstrap';
import arandanos from '../img/arandanos.jpg';
import citricos from '../img/citricos.jpg';
import pera from '../img/pera.jpg';




function Slider() {
  return (
    <div>
         <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={arandanos}
                  alt="First slide"
                  style={{width:"100px", height:"400px"}}
                />
                <Carousel.Caption>
                  <h3>Bienvenido a disFrutable</h3>
                  <p>Donde podes encontrar, productos frescos con calidad certificada.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={citricos}
                  alt="Third slide"
                  style={{width:"100px", height:"400px"}}
                />

                <Carousel.Caption>
                  <h3>Frutas de Estación</h3>
                  <p>Come sano, cuidate, hace de las Frutas tus snack Preferidos</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={pera}
                  alt="Third slide"
                  style={{width:"100px", height:"400px"}}
                />

                <Carousel.Caption>
                  <h3>Frutas de Estación</h3>
                  <p>Te enviamos a tu domicilio, si tu compra supera los $1000.</p>
                </Carousel.Caption>
              </Carousel.Item>
        </Carousel>
      
    </div>
  );
}

export default Slider;
