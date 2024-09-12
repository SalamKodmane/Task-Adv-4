import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./NavBar.css";
import { useRef } from "react";

const NavBar = ({ logo, items, btn }) => {
  const nav = useRef(null);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.current.style.backgroundColor = "white";
    } else {
      nav.current.style.backgroundColor = "none";
    }
  });
  return (
    <>
      <Navbar expand="lg" ref={nav} className="position-fixed top-0 w-100  z-3">
        <Container fluid className="justify-content-evenly">
          <Navbar.Brand href="#" className="logo me-280">
            <img src={logo?.img} alt="" />
          </Navbar.Brand>
          <Button variant="primary" className="bg-my-primary order-md-1 btn-hover">{btn}</Button>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="flex-grow-0">
            <Nav
              className="me-auto my-2 my-lg-0 gap-4"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {items?.map((element, index) => {
                return (
                  <Nav.Link
                    key={index}
                    href={`#${element.id}`}
                    className="link-Color link-nav"
                  >
                    {element.name}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
