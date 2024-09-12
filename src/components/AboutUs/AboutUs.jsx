import { Col, Container, Row } from "react-bootstrap";
import { FaCirclePlay } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <SectionTitle
        title="About Us"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <Container fluid>
        <Row className="mx-5 py-5">
          <Col lg="6">
            <div className="AboutUs-section position-relative">
              <FaCirclePlay className="position-absolute top-50 end translate-middle" />
              <img
                src="/assets/img/about.jpg"
                alt="About Image"
                className="w-100"
              />
            </div>
          </Col>
          <Col lg="6">
            <h3 className="About-Heading">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="About-description fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="ps-0 ">
              <li className="d-flex justify-content-start flex-row">
                <IoCheckmarkDone className="list-item me-1 mt-1" />
                <p className="About-description">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
              <li className="d-flex justify-content-start flex-row">
                <IoCheckmarkDone className="list-item me-1 mt-1" />
                <p className="About-description">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
              </li>
              <li className="d-flex justify-content-start flex-row">
                <IoCheckmarkDone className="list-item me-1 mt-1" />
                <p className="About-description">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
            </ul>
            <p className="About-description">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
