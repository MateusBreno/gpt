import React from 'react';
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light">
      <Container>
        <Row>
          <Col md={3}>
            <h5>FERRAMENTAS</h5>
            <Nav className="flex-column">
              <Nav.Link href="#tendencias">Tendências</Nav.Link>
              <Nav.Link href="#escrita">Escrita</Nav.Link>
              <Nav.Link href="#codigo">Código</Nav.Link>
              <Nav.Link href="#imagem">Imagem</Nav.Link>
              <Nav.Link href="#video">Vídeo</Nav.Link>
              <Nav.Link href="#audio">Áudio</Nav.Link>
              <Nav.Link href="#projetar">Projetar</Nav.Link>
              <Nav.Link href="#assistente">Assistente</Nav.Link>
              <Nav.Link href="#produtividade">Produtividade</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>SOBRE</h5>
            <Nav className="flex-column">
              <Nav.Link href="#enviar-uma-ferramenta">ENVIAR UMA FERRAMENTA</Nav.Link>
              <Nav.Link href="#anunciar">ANUNCIAR</Nav.Link>
              <Nav.Link href="#contato">CONTATO</Nav.Link>
              <Nav.Link href="#termos-e-condicoes">TERMOS E CONDIÇÕES</Nav.Link>
            </Nav>
          </Col>
          <Col md={6}>
            <h5>BOLETIM INFORMATIVO</h5>
            <p>Tenha acesso exclusivo a notícias e atualizações diretamente na sua caixa de entrada.</p>
            <Form className="mb-3">
              <Form.Control type="email" placeholder="Seu email" className="mr-sm-2" />
              <Button variant="outline-success">Inscrever-se</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;