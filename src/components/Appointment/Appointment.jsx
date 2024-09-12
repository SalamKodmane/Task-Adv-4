import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Appointment.css";

const Appointment = () => {
  return (
    <>
      <Container fluid className="Appointment-bg">
        <SectionTitle
          title="MAKE AN APPOINTMENT"
          description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <Form className="my-5 mx-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Row>
              <Col md="4" sm="12" className="mb-4">
                <Form.Control type="text" placeholder="Your Name" />
              </Col>

              <Col md="4" sm="12" className="mb-4">
                <Form.Control type="email" placeholder="Your Email" />
              </Col>

              <Col md="4" sm="12" className="mb-4">
                <Form.Control type="tel" placeholder="Your Phone" />
              </Col>
            </Row>

            <Row>
              <Col md="4" sm="12" className="mb-4">
                <Form.Control type="datetime-local" />
              </Col>
              <Col md="4" sm="12" className="mb-4">
                <Form.Select aria-label="Default select example">
                  <option>Select Department</option>
                  <option value="1">Department One</option>
                  <option value="2">Department Two</option>
                  <option value="3">Department Three</option>
                </Form.Select>
              </Col>

              <Col md="4" sm="12" className="mb-4">
                <Form.Select aria-label="Default select example">
                  <option>Select Doctor</option>
                  <option value="1">Doctor One</option>
                  <option value="2">Doctor Two</option>
                  <option value="3">Doctor Three</option>
                </Form.Select>
              </Col>
            </Row>

            <Row>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message (Optional)"
                />
              </Form.Group>
            </Row>
          </Form.Group>
          <div className="d-flex justify-content-center align-items-center ">
          <Button variant="primary" className="bg-my-primary btn-hover mb-5">Make an Appointment</Button>
          </div>
         
        </Form>
       
      </Container>
    </>
  );
};

export default Appointment;
