import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Footer.css'
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import youtube from '../../assets/img/youtube.png'
import instagram from '../../assets/img/instagram.png'
import whatsapp from '../../assets/img/whatsapp.png'
import react from '../../assets/img/react.gif'



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