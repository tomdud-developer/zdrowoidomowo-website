import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image1 from './images/offer-image1.jpg'
import image2 from './images/offer-image2.jpg'

export default function Offer() {
  return (
    <section className="offer" id="home">
        <Container>
            <Row className="align-center">
                <Col><h1>Nasza oferta obejmuje</h1></Col>
            </Row>
            <Row>
                <Col>
                    <img
                    className="offer-img"
                    src={image1}
                    alt="Oferta dla firm"
                    />
                </Col>
                <Col>
                    <h3>Dla firm i instytucji</h3>
                    <h5>Obiady Domowe</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img
                    className="offer-img"
                    src={image2}
                    alt="Organizacja przyjęć okolicznościowych"
                    />
                </Col>
                <Col>
                    <h3>Organizacja przyjęć okolicznościowych</h3>
                    <h5>Urodziny</h5>
                    <h5>Chrzciny</h5>
                    <h5>Komunie</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img
                    className="offer-img"
                    src={image1}
                    alt="Torty"
                    />
                </Col>
                <Col>
                    <h3>Torty na każdą okazję</h3>
                    <h5>Drukowane opłatki z dowolnej grafiki</h5>
                    <h5>Dekoracje owocowe</h5>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
