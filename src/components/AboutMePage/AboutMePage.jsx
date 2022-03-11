import React from 'react'
import {Container, Row} from 'react-bootstrap'
import './AboutMePage.css'

const AboutMePage = () => {
  return (
    <>
    <Container>

      <h1 className="text-center">¿Quiénes somos?</h1>
      <div className="texto">
        <p>
        Nuestra historia comienza allá por 1970 con la inauguración de nuestra primera tienda física, El rey de las zapatillas. Con el correr de los años nos fuimos expandiendo cada vez más a través de la apertura de nuevas sucursales, hasta que en 1986 abrimos el primer local integral de deportes. Desde ese momento, todo fue crecimiento: realizamos alianzas estratégicas con otras marcas para ampliar nuestras redes e inauguramos un nuevo concepto de tienda deportiva.
      </p>

      <p>
          En movimiento constante y fusionando las últimas tendencias de la moda urbana y el deporte, en 2016 lanzamos Moov, una nueva propuesta orientada al público joven que incorpora nuevas marcas y diseños de vanguardia. Nos adaptamos a tiempos de cambios, a las nuevas generaciones, y por eso te traemos los más exclusivos productos de las mejores marcas para que crees tu propio estilo.
      </p>
      <p>
        <span>Misión:</span> 
        Vivimos entrenando para ganar y conquistar a los consumidores ofreciendo una experiencia premium. Hablamos a través del deporte y de la moda con el objetivo de acompañarlos en cada momento de sus vidas para que puedan competir, entrenar o lucir su estilo personal, transmitiendo inspiración e innovación.
      </p>
      <p>
        <span>Visión:</span>
        Ser el retailer líder en ventas y en servicio al cliente, siendo siempre cercano al consumidor.
        <br /> <br />
        <span>Nuestros Valores:</span> 
        <ul>
          <li>Cliente siempre primero.</li>
          <li>Compromiso.</li>
          <li>Pasión.</li>
          <li>Hacer lo correcto.</li>
          <li>Más que un equipo.</li>
          <li>Innovación.</li>
          <li>Comunicación.</li>
        </ul>
      </p>
      </div>
      
    </Container>
      
    </>
    
  )
}

export default AboutMePage