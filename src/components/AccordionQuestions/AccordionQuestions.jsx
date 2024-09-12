import { Accordion, Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./AccordionQuestions.css";

const AccordionQuestions = () => {
  return (
    <>
    <Container fluid className="Accordion-bg">
      <SectionTitle
        title="Frequently Asked Questions"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
        <Row>
          <Accordion className="d-flex align-items-center justify-content-center flex-column mb-5">
            <Col lg="10" sm="12">
            <Accordion.Item eventKey="0" className="mb-3">
              <Accordion.Header className="Accordion-Title">Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            </Col>
         <Col lg="10" sm="12">
         <Accordion.Item eventKey="1"  className="mb-3">
              <Accordion.Header className="Accordion-Title">Feugiat scelerisque varius morbi enim nunc faucibus?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
         </Col>

         <Col lg="10" sm="12">
         <Accordion.Item eventKey="2"  className="mb-3">
              <Accordion.Header className="Accordion-Title">Dolor sit amet consectetur adipiscing elit pellentesque?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
         </Col>

         <Col lg="10" sm="12">
         <Accordion.Item eventKey="3"  className="mb-3">
              <Accordion.Header className="Accordion-Title">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
         </Col>

         <Col lg="10" sm="12">
         <Accordion.Item eventKey="4"  className="mb-3">
              <Accordion.Header className="Accordion-Title">Tempus quam pellentesque nec nam aliquam sem et tortor?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
         </Col>

         <Col lg="10" sm="12">
         <Accordion.Item eventKey="5"  className="mb-3">
              <Accordion.Header className="Accordion-Title">Perspiciatis quod quo quos nulla quo illum ullam?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
         </Col>
          </Accordion>
        </Row>
      </Container>
    </>
  );
};

export default AccordionQuestions;
