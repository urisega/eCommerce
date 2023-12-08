import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../src/assets/tortugalogo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MiECommerce
          </Navbar.Brand>
        
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Buscar</Nav.Link>
            <Nav.Link to="/carrito">Detalle</Nav.Link>
            <Nav.Link href="#link">Confirmación</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/1">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="/category/2">Buzos</NavDropdown.Item>
              <NavDropdown.Item href="/category/3">Pantalones</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <ul class="navbar-nav d-flex flex-row me-1">
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i>0</a>
            </li>
          </ul>
      </Container>
    </Navbar>
  );
}

export default NavBar;