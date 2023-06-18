import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const NewsForm = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    content: '',
    email: '',
    website: '',
    category: '',
    subscribe: false,
    description: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="fullName">
        <Form.Label>Nome completo</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          value={formState.fullName}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="content">
        <Form.Label>Conteúdo/Notícia</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="content"
          value={formState.content}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="website">
        <Form.Label>Endereço do site</Form.Label>
        <Form.Control
          type="url"
          name="website"
          value={formState.website}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="category">
        <Form.Label>Categoria</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={formState.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Selecione uma categoria</option>
          <option value="tendencias">Tendências</option>
          <option value="assistente">Assistente</option>
          <option value="escrita">Escrita</option>
          <option value="codigo">Código</option>
          <option value="projetar">Projetar</option>
          <option value="imagem">Imagem</option>
          <option value="video">Vídeo</option>
          <option value="audio">Áudio</option>
          <option value="produtividade">Produtividade</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="subscribe">
        <Col sm={12}>
            <Form.Check 
              type={"checkbox"}
              label={"Inscrever-se no subscribe"}
              name={"subscribe"}
              checked={formState.subscribe}
              onChange={handleCheckboxChange}
            />
        </Col>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Descrição da notícia/conteúdo</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={formState.description}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default NewsForm;