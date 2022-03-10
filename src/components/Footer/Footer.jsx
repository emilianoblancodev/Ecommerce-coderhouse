import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Footer.css'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'
import youtube from '../../img/youtube.png'
import instagram from '../../img/instagram.png'
import whatsapp from '../../img/whatsapp.png'
import react from '../../img/react.gif'



const Footer = () => {
  return (
    <>
        <Container fluid className="footer">
            <Row>
                <Col className="text-center mt-5">
                <h4>Podes seguirnos en nuestras redes sociales</h4>
                <div className="redes">
                    <img src={facebook}/>
                    <img src={instagram}/>
                    <img src={twitter}/>
                    <img src={youtube}/>
                
                </div>
                
                </Col>
                <Col className="text-center mt-5">
                <h4>Contactanos para cualquier consulta</h4>
                <div className="redes">
                    <img src={whatsapp} />
                </div>
                
                </Col>
            </Row>
            <Row className="text-center mt-5">
                <h6>Hecho en <img src={react} width='30px'/> </h6>
            </Row>
            
        </Container>
    </>
    
    
  )
}

export default Footer