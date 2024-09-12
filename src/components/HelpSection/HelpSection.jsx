import { Container, Button } from "react-bootstrap";
import "./HelpSection.css";

const HelpSection = () => {
  return (
    <>
      <section className="Help-Section w-100 ">
        <Container fluid>
          <div className="d-flex justify-content-center align-items-center flex-column text-center py px-5">
            <h2 className="text-white fs-3">In an emergency? Need help now?</h2>
            <p className="text-white px-text fw-medium">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <Button className="bg-button border-2 px-4 py-2">
              Make an Appointment
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HelpSection;
