import React from 'react';
import { Navbar, Nav, Form, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <div bg="white" className='background'>
        <Navbar bg="white" expand="lg" className='navbar'>
        <Navbar.Brand href="#home">GPTE-BR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <NavDropdown title="🪄 I.A." id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">⭐ Tendêcias</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">✏️ Escrita</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">💻 Código</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">🖼️ Imagem</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5">📽️ Video</NavDropdown.Item>

              <NavDropdown.Item eventKey="4.6">🔉 Audio</NavDropdown.Item>

              <NavDropdown.Item eventKey="4.7">🎨 Design</NavDropdown.Item>

              <NavDropdown.Item eventKey="4.8">💬 Assistente</NavDropdown.Item>

              <NavDropdown.Item eventKey="4.9">✅ Produtividade</NavDropdown.Item>

            </NavDropdown>

            <Nav.Link href="/noticias">Cursos I.A.</Nav.Link>
            <Nav.Link href="/noticias">📰 News I.A.</Nav.Link>
            {/* <Nav.Link href="/redes-sociais">💭 Redes Sociais</Nav.Link> */}
            <Nav.Link href="/redes-sociais">Sobre Nós</Nav.Link>
            <Nav.Link href="/redes-sociais">Política de privacidade</Nav.Link>
              
              {/* <Nav.Link as={Link} to="/enviar">📥 Enviar uma Ferramenta</Nav.Link> */}
              
          </Nav>
          {/* <Form>
            <Button variant="outline-success">Buscar</Button>
          </Form> */}
        </Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
        </Navbar>
        </div>
      <div className="headsup">
        <div className="widget-wrap left">
          <h3 className="gh-about-primary left">Descubra as ferramentas e tendências mais recentes em IA  🔮</h3>
          <p className="gh-about-secondary">Junte-se a mais de 20.000 assinantes, incluindo funcionários da Amazon, Apple, Google e Microsoft, lendo nosso boletim informativo.</p>

          <div className="gh-subscribe-input gh-portal-close left" data-portal="">
            <div>
              email@example.com</div>
            <span className="gh-btn gh-primary-btn">Subscribe</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;