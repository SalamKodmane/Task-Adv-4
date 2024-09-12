import { Card, Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Doctors.css";

const Doctors = () => {
  return (
    <>
      <SectionTitle
        title="Doctors"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Container fluid>
        <Row className=" my-2 mx-5">
          <Col lg="3" md="4" sm="12" className="my-5">
            <Card className="border-0 shadowCard-Doctor">
              <Card.Img variant="top" src="/assets/img/doctors/doctors-1.jpg" />
              <Card.Body>
                <Card.Title className="CardDoctor-Title">Walter White</Card.Title>
                <Card.Text className="CardDoctor-desc">Chief Medical Officer</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="4" sm="12" className="my-5">
            <Card className="border-0 shadowCard-Doctor">
              <Card.Img variant="top" src="/assets/img/doctors/doctors-2.jpg" />
              <Card.Body>
                <Card.Title className="CardDoctor-Title">Sarah Jhonson</Card.Title>
                <Card.Text className="CardDoctor-desc">Anesthesiologist</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="4" sm="12" className="my-5">
            <Card className="border-0 shadowCard-Doctor">
              <Card.Img variant="top" src="/assets/img/doctors/doctors-3.jpg" />
              <Card.Body>
                <Card.Title className="CardDoctor-Title">William Anderson</Card.Title>
                <Card.Text className="CardDoctor-desc">Cardiology</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="4" sm="12" className="my-5">
            <Card className="border-0 shadowCard-Doctor">
              <Card.Img variant="top" src="/assets/img/doctors/doctors-4.jpg" />
              <Card.Body>
                <Card.Title className="CardDoctor-Title">Amanda Jepson</Card.Title>
                <Card.Text className="CardDoctor-desc">Neurosurgeon</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Doctors;
