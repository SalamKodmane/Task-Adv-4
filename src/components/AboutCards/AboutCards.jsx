import { Card, Col, Container, Row } from "react-bootstrap";
import { FaAward, FaFlask, FaRegHospital, FaUserDoctor } from "react-icons/fa6";
import "./AboutCards.css";

const AboutCards = () => {
  return (
    <>
      <section className="AboutCards-section">
        <Container fluid>
          <Row className=" my-5 mx-5">
            <Col lg="3" md="4" sm="12" className="my-5">
              <Card className="shadow p-3 border-0">
                <Card.Body className="About-card d-flex flex-row">
                  <FaUserDoctor className="fs-1 me-3 mt-2" id="color-icon" />
                  <div className="d-flex flex-column">
                  <Card.Title className="CardTitle-About fs-2 fw-bold">25</Card.Title>
                  <Card.Text className="Carddesc-About">Doctors</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="3" md="4" sm="12" className="my-5">
              <Card className="shadow p-3 border-0">
                <Card.Body className="About-card d-flex flex-row">
                  <FaRegHospital className="fs-1 me-3 mt-2" id="color-icon" />
                  <div className="d-flex flex-column">
                  <Card.Title className="CardTitle-About fs-2 fw-bold">15</Card.Title>
                  <Card.Text className="Carddesc-About">Departments</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="3" md="4" sm="12" className="my-5">
              <Card className="shadow p-3 border-0">
                <Card.Body className="About-card d-flex flex-row">
                  <FaFlask className="fs-1 me-3 mt-2" id="color-icon" />
                  <div className="d-flex flex-column">
                  <Card.Title className="CardTitle-About fs-2 fw-bold">8</Card.Title>
                  <Card.Text className="Carddesc-About">Research Labs</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="3" md="4" sm="12" className="my-5">
              <Card className="shadow p-3 border-0">
                <Card.Body className="About-card d-flex flex-row">
                  <FaAward className="fs-1 me-3 mt-2" id="color-icon" />
                  <div className="d-flex flex-column">
                  <Card.Title className="CardTitle-About fs-2 fw-bold">150</Card.Title>
                  <Card.Text className="Carddesc-About">Awards</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutCards;
