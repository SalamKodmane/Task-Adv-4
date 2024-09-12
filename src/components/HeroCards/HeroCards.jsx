import { Container, Row , Col , Card } from "react-bootstrap";
import { FaHeartbeat } from "react-icons/fa";
import { FaPills } from "react-icons/fa";
import { FaThermometer } from "react-icons/fa";
import { FaDna } from "react-icons/fa";


import "./HeroCards.css";

const HeroCards = () => {
  return (
    <>
     <section className="HeroCards-section">
     <Container fluid>
      <Row className=" my-5 mx-5">
        <Col lg="3" md="4" sm="12" className="my-5" >
        <Card className="shadowCard p-1 border-0">
      <Card.Body>
        <FaHeartbeat className="HeroCards-Icon fs-2 mb-3 mt-4"/>
        <Card.Title className="HeroCards-title mb-3">Lorem Ipsum</Card.Title>
        <Card.Text className="fs-text mb-4">
        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

        <Col lg="3" md="4" sm="12" className="my-5" >
        <Card className="shadowCard p-1 border-0">
      <Card.Body>
        <FaPills className="HeroCards-Icon fs-2 mb-3 mt-4" />
        <Card.Title className="HeroCards-title mb-3">Sed ut perspici</Card.Title>
        <Card.Text className="fs-text mb-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        
        <Col lg="3" md="4" sm="12" className="my-5">
        <Card className="shadowCard p-1 border-0">
      <Card.Body>
        <FaThermometer className="HeroCards-Icon fs-2 mb-3 mt-4" />
        <Card.Title className="HeroCards-title mb-3">Magni Dolores</Card.Title>
        <Card.Text className="fs-text mb-4">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>

        
        <Col lg="3" md="4" sm="12" className="my-5" >
        <Card className="shadowCard p-1 border-0">
      <Card.Body>
        <FaDna className="HeroCards-Icon fs-2 mb-3 mt-4" />
        <Card.Title className="HeroCards-title mb-3">Nemo Enim</Card.Title>
        <Card.Text className="fs-text mb-4">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      
    </Container>

     </section>
    </>
  )
}

export default HeroCards
