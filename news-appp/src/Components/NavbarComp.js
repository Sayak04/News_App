import {Navbar,Container,Nav, NavDropdown} from "react-bootstrap";
function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NewsSeeker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Music
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Cinema
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Politics
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#support">Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarComp;
