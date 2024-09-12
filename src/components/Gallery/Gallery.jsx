import { Carousel, Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <SectionTitle
        title="Gallery"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <Container fluid className="Gallery mb-5">
      <Carousel>
        <Carousel.Item>
            <Row>
                <Col>
                <img src="/assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid " />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                </Col>

            </Row>
            </Carousel.Item>
            <Carousel.Item>
            <Row>
                <Col>
                <img src="/assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid " />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                </Col>
            </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row>
                <Col>
                <img src="/assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid " />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                </Col>
            </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row>
                <Col>
                <img src="/assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid " />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                </Col>
            </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row>
                <Col>
                <img src="/assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid " />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                </Col>
            </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row>
                <Col>
                <img src="/assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid " />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                </Col>
            </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row>
                <Col>
                <img src="/assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
                </Col>

                <Col >
                <img src="/assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid " />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                </Col>

                <Col >
                <img src="/assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                </Col>
            </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row>
                <Col>
                <img src="/assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid"/>
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid " />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                </Col>

                <Col>
                <img src="/assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                </Col>
            </Row>
            </Carousel.Item>


     
      </Carousel>




      </Container>
    </>
  );
};

export default Gallery;
