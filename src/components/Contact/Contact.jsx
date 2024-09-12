import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import { BsGeoAlt, BsTelephone } from "react-icons/bs";
import "./Contact.css";
import { FaRegEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <SectionTitle
        title="Contact"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3614657903986!2d-74.00356277588284!3d40.71005857139394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sar!2s!4v1726129963409!5m2!1sar!2s"
        width="100%"
        height="400px"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Downtown Conference Center"
      ></iframe>
      <Container fluid className="Contact-Section">
        <Row className="my-5 mx-5">
          <Col lg="6">
            <Row>
              <Col lg="12" className="d-flex flex-column justify-content-center align-items-center Card-Address p-5 my-5 ">
              <div className="Contact-Icon-Circle d-flex justify-content-center align-items-center rounded-circle border-2 mb-2">
              <BsGeoAlt className="Contact-Icon fs-2" />
              </div>
                <h4 className="Contact-Title mb-2">Address</h4>
                <p className="Contact-desc">A108 Adam Street, New York, NY 535022</p>
              </Col>
              </Row>
              <Row>
              <Col lg="6" className="d-flex flex-column justify-content-center align-items-center Card-Address p-5 mb-4">
              <div className="Contact-Icon-Circle d-flex justify-content-center align-items-center rounded-circle border-2 mb-2">
              <BsTelephone className="Contact-Icon fs-2" />
              </div>
                <h4 className="Contact-Title mb-2">Call Us</h4>
                <p className="Contact-desc">+1 5589 55488 55</p>
              </Col>

              <Col lg="6" className="d-flex flex-column justify-content-center align-items-center Card-Address p-5 mb-4">
              <div className="Contact-Icon-Circle d-flex justify-content-center align-items-center rounded-circle border-2 mb-2">
              <FaRegEnvelope className="Contact-Icon fs-2" />
              </div>
                <h4 className="Contact-Title mb-2">Email Us</h4>
                <p className="Contact-desc">info@example.com</p>
              </Col>
              </Row>
          </Col>

          <Col lg="6">
          <Form className="my-5 mx-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Row>
              <Col md="6" sm="12" className="mb-4">
                <Form.Control type="text" placeholder="Your Name" />
              </Col>

              <Col md="6" sm="12" className="mb-4">
                <Form.Control type="email" placeholder="Your Email" />
              </Col>
            </Row>

            <Row>
              <Col md="12" sm="12" className="mb-4">
              <Form.Control type="email" placeholder="Subject" />
              </Col>
            </Row>

            <Row>
                <Col md="12" sm="12" >
                <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={12}
                  placeholder="Message"
                />
              </Form.Group>
                </Col>
            </Row>
          </Form.Group>
          <div className="d-flex justify-content-center align-items-center mb-2">
          <Button variant="primary" className="bg-my-primary btn-hover">Send Message</Button>
          </div>
         
        </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
