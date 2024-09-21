// src/components/ServiceList.jsx
import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

const ServiceList = ({ services, handleDelete, handleEdit }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Healthcare Services</h2>
      {services.length === 0 ? (
        <p className="text-center">No services available</p>
      ) : (
        <Row>
          {services.map((service, index) => (
            <Col sm={12} md={6} lg={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Card.Text>
                    <strong>Price: </strong>${service.price}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ServiceList;
