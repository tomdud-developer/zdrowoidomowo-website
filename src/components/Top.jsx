import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'

export default function Top() {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Zdrowo</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Pysznie</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Domowo</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
