import React from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

const ContactPage = () => {
  return (
    <>
      <h1></h1>
    <Container >
      <Row>
        <Col>
            <Form>
            
            <Form.Group className="mb-3 mt-5" controlId="formBasicText">
              <Form.Label>Nombre Completo </Form.Label>
              <Form.Control placeholder="Ingresa tu nombre completo" />
            
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email aquí" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tu consulta</Form.Label>
              <Form.Control as="textarea" placeholder="Ingresa tu consulta aquí" style={{ height: '100px' }} />
              <Form.Text className="text-muted">
                Intenta ser conciso para darte la mejor solución.
              </Form.Text>
            </Form.Group>
            
            <Button variant="success" type="submit" className="mb-5">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
      
    </Container>
    
    </>
    
  )
}

export default ContactPage