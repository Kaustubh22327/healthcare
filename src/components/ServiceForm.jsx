// src/components/ServiceForm.jsx
import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ServiceForm = ({ currentService, handleAddOrUpdate, isEdit }) => {
  const [service, setService] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    if (isEdit) {
      setService(currentService);
    }
  }, [currentService, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prevService) => ({ ...prevService, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (service.name && service.description && service.price) {
      handleAddOrUpdate(service);
      setService({ name: '', description: '', price: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">{isEdit ? 'Edit Service' : 'Add New Service'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formServiceName">
          <Form.Label>Service Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter service name"
            value={service.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formServiceDescription">
          <Form.Label>Service Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter service description"
            value={service.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formServicePrice">
          <Form.Label>Service Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter service price"
            value={service.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          {isEdit ? 'Update Service' : 'Add Service'}
        </Button>
      </Form>
    </Container>
  );
};

export default ServiceForm;
