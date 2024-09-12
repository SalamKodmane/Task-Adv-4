import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="Footer-bg">
        <Row className="mx-5">
          <Col lg="4" md="6" className="my-5">
            <h4 className="Footer-Title">Medicio</h4>
            <div className="pt-3">
              <p className="List-Item">A108 Adam Street</p>
              <p className="List-Item">New York, NY 535022</p>
              <p className="pt-2 List-Item"><strong>Phone:</strong><span>+1 5589 55488 55</span></p>
              <p className="List-Item"><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div className="d-flex flex-row gap-2">
              <div className="d-flex justify-content-center align-items-center Footer-icon">
               <FaXTwitter className="fs-3" />
              </div>
              <div className=" d-flex justify-content-center align-items-center Footer-icon">
               <FaFacebook className="fs-3"/>
              </div>
              <div className=" d-flex justify-content-center align-items-center Footer-icon">
               <FaInstagram className="fs-3" />
              </div>
              <div className=" d-flex justify-content-center align-items-center Footer-icon">
               <FaLinkedin className="fs-3" />
              </div>
            </div>
          </Col>

          <Col lg="2" md="3" className="my-5">
          <h5 className="Footer-Title">Useful Links</h5>
          <ul className="pt-3 ps-0">
            <li className="List-Item"><p>Home</p></li>
            <li className="List-Item"><p>About us</p></li>
            <li className="List-Item"><p>Services</p></li>
            <li className="List-Item"><p>Terms of service</p></li>
            <li className="List-Item"><p>Privacy policy</p></li>
          </ul>
          </Col>

          <Col lg="2" md="3" className="my-5">
          <h5 className="Footer-Title">Our Services</h5>
          <ul className="pt-3 ps-0">
            <li className="List-Item"><p>Web Design</p></li>
            <li className="List-Item"><p>Web Development</p></li>
            <li className="List-Item"><p>Product Management</p></li>
            <li className="List-Item"><p>Marketing</p></li>
            <li className="List-Item"><p>Graphic Design</p></li>
          </ul>
          </Col>

          <Col lg="2" md="3" className="my-5">
          <h5 className="Footer-Title">Hic solutasetp</h5>
          <ul className="pt-3 ps-0">
            <li className="List-Item"><p>Molestiae accusamus iure</p></li>
            <li className="List-Item"><p>Excepturi dignissimos</p></li>
            <li className="List-Item"><p>Suscipit distinctio</p></li>
            <li className="List-Item"><p>Dilecta</p></li>
            <li className="List-Item"><p>Sit quas consectetur</p></li>
          </ul>
          </Col>

          <Col lg="2" md="3" className="my-5">
          <h5 className="Footer-Title">Nobis illum</h5>
          <ul className="pt-3 ps-0">
            <li className="List-Item"><p>Ipsam</p></li>
            <li className="List-Item"><p>Laudantium dolorum</p></li>
            <li className="List-Item"><p>Dinera</p></li>
            <li className="List-Item"><p>Trodelas</p></li>
            <li className="List-Item"><p>Flexo</p></li>
          </ul>
          </Col>
        </Row>

        <Container>
        <div className="Footer-Copyright border-top text-center pt-4">
           <p>© <span>Copyright</span> <strong className="px-1">Medicio</strong> <span>All Rights Reserved</span></p>
           <p> Designed by<span className="Footer-copy"> BootstrapMade</span></p>
        </div>
        </Container>

       
      </div>
    </>
  );
};

export default Footer;
