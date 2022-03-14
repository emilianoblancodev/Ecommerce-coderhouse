import React from 'react'
import {Carousel} from 'react-bootstrap'
import hero from '../../assets/img/hero.png' 
import hero2 from '../../assets/img/hero2.jpeg'
import hero3 from '../../assets/img/hero3.jpeg'

const Carrousel = () => {
  
    return (
    <>
        

    <div className="container-fluid my-3">
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hero}
                    alt="First slide"
                />
                    
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hero2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hero3}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    </div>
        
    </>
    
  )
}

export default Carrousel