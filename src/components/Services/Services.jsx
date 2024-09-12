import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaHeartbeat } from "react-icons/fa";
import "./Services.css";
import { FaDna, FaHospitalUser, FaNotesMedical, FaPills, FaWheelchair } from "react-icons/fa6";


const Services = () => {
  return (
    <>
      <SectionTitle
        title="Services"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <Container fluid className="Services-Section">
        <Row className="my-5 mx-5">
        <Col lg="4" md="6" sm="12" className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
            <div className="bg-white d-flex justify-content-center align-items-center Services-icon p-4 rounded-circle mb-3">
                <FaHeartbeat className="fs-3" />
            </div>
           <div>
           <h4 className="position-relative ServiceCard-Title pb-3">Nesciunt Mete</h4>
            <p className="px-1 ServiceCard-desc">
            Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.
            </p>
           </div>
          </Col>

          <Col lg="4" md="6" sm="12" className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
            <div className="bg-white d-flex justify-content-center align-items-center Services-icon p-4 rounded-circle mb-3">
                <FaPills className="fs-3" />
            </div>
           <div>
           <h4 className="position-relative ServiceCard-Title pb-3">Eosle Commodi</h4>
            <p className="px-1 ServiceCard-desc">
            Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
            </p>
           </div>
          </Col>

          <Col lg="4" md="6" sm="12" className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
            <div className="bg-white d-flex justify-content-center align-items-center Services-icon p-4 rounded-circle mb-3">
                <FaHospitalUser className="fs-3" />
            </div>
           <div>
           <h4 className="position-relative ServiceCard-Title pb-3">Ledo Markt</h4>
            <p className="px-1 ServiceCard-desc">
            Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
            </p>
           </div>
          </Col>

          <Col lg="4" md="6" sm="12" className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
            <div className="bg-white d-flex justify-content-center align-items-center Services-icon p-4 rounded-circle mb-3">
                <FaDna className="fs-3" />
            </div>
           <div>
           <h4 className="position-relative ServiceCard-Title pb-3">Asperiores Commodit</h4>
            <p className="px-1 ServiceCard-desc">
            Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.
            </p>
           </div>
          </Col>

          <Col lg="4" md="6" sm="12" className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
            <div className="bg-white d-flex justify-content-center align-items-center Services-icon p-4 rounded-circle mb-3">
                <FaWheelchair className="fs-3" />
            </div>
           <div>
           <h4 className="position-relative ServiceCard-Title pb-3">Velit Doloremque</h4>
            <p className="px-1 ServiceCard-desc">
            Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.
            </p>
           </div>
          </Col>

          <Col lg="4" md="6" sm="12" className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
            <div className="bg-white d-flex justify-content-center align-items-center Services-icon p-4 rounded-circle mb-3">
                <FaNotesMedical className="fs-3" />
            </div>
           <div>
           <h4 className="position-relative ServiceCard-Title pb-3">Dolori Architecto</h4>
            <p className="px-1 ServiceCard-desc">
            Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
            </p>
           </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
