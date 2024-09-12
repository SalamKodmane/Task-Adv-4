import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <Container fluid>
        <SectionTitle
          title="Pricing"
          description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <Row className=" my-2 mx-5 mb-5">
          <Col lg="3" md="4" sm="12" className="my-5">
            <Card className="PriceCard border-0 text-center">
              <Card.Body>
                <Card.Title className="PriceCard-Title p-3">Free</Card.Title>
                <Card.Subtitle className="text-muted  PriceCard-Subtitle my-4">
                  <h4 className="fs-3 fw-bold">
                    <sup className="fs-4">$</sup>0
                    <span className="fs-6"> / month</span>
                  </h4>
                </Card.Subtitle>
                <Card.Text className="PriceCard-Text">
                  <p>Aida dere</p>
                  <p>Nec feugiat nisl</p>
                  <p>Nulla at volutpat dola</p>
                  <p className="Text-Line">Pharetra massa</p>
                  <p className="Text-Line">Massa ultricies mi</p>
                </Card.Text>
                <div className="bg-button p-3">
                <Button variant="primary" className="bg-my-primary order-md-1 btn-hover">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="4" sm="12" className="my-5">
            <Card className="PriceCard border-0 text-center">
              <Card.Body>
                <Card.Title className="PriceCard-Title p-3">Business</Card.Title>
                <Card.Subtitle className="text-muted  PriceCard-Subtitle my-4">
                  <h4 className="fs-3 fw-bold">
                    <sup className="fs-4">$</sup>19
                    <span className="fs-6"> / month</span>
                  </h4>
                </Card.Subtitle>
                <Card.Text className="PriceCard-Text">
                  <p>Aida dere</p>
                  <p>Nec feugiat nisl</p>
                  <p>Nulla at volutpat dola</p>
                  <p>Pharetra massa</p>
                  <p className="Text-Line">Massa ultricies mi</p>
                </Card.Text>
                <div className="bg-button p-3">
                <Button variant="primary" className="bg-my-primary order-md-1 btn-hover">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="4" sm="12" className="my-5">
            <Card className="PriceCard border-0 text-center">
              <Card.Body>
                <Card.Title className="PriceCard-Title p-3">Developer</Card.Title>
                <Card.Subtitle className="text-muted  PriceCard-Subtitle my-4">
                  <h4 className="fs-3 fw-bold">
                    <sup className="fs-4">$</sup>29
                    <span className="fs-6"> / month</span>
                  </h4>
                </Card.Subtitle>
                <Card.Text className="PriceCard-Text">
                  <p>Aida dere</p>
                  <p>Nec feugiat nisl</p>
                  <p>Nulla at volutpat dola</p>
                  <p>Pharetra massa</p>
                  <p>Massa ultricies mi</p>
                </Card.Text>
                <div className="bg-button p-3">
                <Button variant="primary" className="bg-my-primary order-md-1 btn-hover">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="4" sm="12" className="my-5">
            <Card className="PriceCard border-0 text-center ">
              <Card.Body>
                <Card.Title className="PriceCard-Title p-3">Ultimate</Card.Title>
                <Card.Subtitle className="text-muted  PriceCard-Subtitle my-4">
                  <h4 className="fs-3 fw-bold">
                    <sup className="fs-4">$</sup>49
                    <span className="fs-6"> / month</span>
                  </h4>
                </Card.Subtitle>
                <Card.Text className="PriceCard-Text">
                  <p>Aida dere</p>
                  <p>Nec feugiat nisl</p>
                  <p>Nulla at volutpat dola</p>
                  <p>Pharetra massa</p>
                  <p>Massa ultricies mi</p>
                </Card.Text>
                <div className="bg-button p-3">
                <Button variant="primary" className="bg-my-primary order-md-1 btn-hover">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
