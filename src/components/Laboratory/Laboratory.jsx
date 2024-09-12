import { Col, Container, Row } from "react-bootstrap";
import { FaHandHoldingMedical } from "react-icons/fa";
import "./Laboratory.css";
import { FaLungs, FaStaffSnake, FaSuitcaseMedical } from "react-icons/fa6";

const Laboratory = () => {
  return (
    <>
      <Container fluid>
        <Row className="mx-5 py-5">
          <Col lg="6">
            <img
              src="/assets/img/features.jpg"
              alt=""
              className="w-100 h-100"
            />
          </Col>

          <Col lg="6">
            <div className="Lab-Section position-relative d-flex flex-column">
              <h2 className="Lab-Title position-relative pb-3">
                Enim quis est voluptatibus aliquid consequatur fugiat
              </h2>
              <p className="Lab-desc pt-2">
                Esse voluptas cumque vel exercitationem. Reiciendis est hic
                accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
                voluptate sed facere corporis dolores excepturi
              </p>
            </div>

            <div className="d-flex flex-row flex-grow-0 flex-shrink-0 mt-3">
              <div className="w-icon bg-white me-3 d-flex justify-content-center align-items-center flex-grow-0 flex-shrink-0 ">
                <FaHandHoldingMedical className="color-LabIcon fs-3 " />
              </div>
              <div className="d-flex flex-column">
                <h6 className="Lab-Title">Lorem Ipsum</h6>
                <p className="Lab-desc">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>

            <div className="d-flex flex-row flex-grow-0 flex-shrink-0 mt-3">
              <div className="w-icon bg-white me-3 d-flex justify-content-center align-items-center flex-grow-0 flex-shrink-0 ">
                <FaSuitcaseMedical className="color-LabIcon fs-3 " />
              </div>
              <div className="d-flex flex-column">
                <h6 className="Lab-Title">Nemo Enim</h6>
                <p className="Lab-desc">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>

            <div className="d-flex flex-row flex-grow-0 flex-shrink-0 mt-3">
              <div className="w-icon bg-white me-3 d-flex justify-content-center align-items-center flex-grow-0 flex-shrink-0 ">
                <FaStaffSnake className="color-LabIcon fs-3 " />
              </div>
              <div className="d-flex flex-column">
                <h6 className="Lab-Title">Dine Pad</h6>
                <p className="Lab-desc ">
                  Explicabo est voluptatum asperiores consequatur magnam. Et
                  veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                </p>
              </div>
            </div>

            <div className="d-flex flex-row flex-grow-0 flex-shrink-0 mt-3">
              <div className="w-icon bg-white me-3 d-flex justify-content-center align-items-center flex-grow-0 flex-shrink-0 ">
                <FaLungs className="color-LabIcon fs-3 " />
              </div>
              <div className="d-flex flex-column">
                <h6 className="Lab-Title">Tride clov</h6>
                <p className="Lab-desc">
                  Est voluptatem labore deleniti quis a delectus et. Saepe
                  dolorem libero sit non aspernatur odit amet. Et eligendi
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Laboratory;
