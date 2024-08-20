// src/components/SafetyStandards.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SafetyStandards = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#0033a0' }}>
      <Container>
        <Row>
          <Col md={12} className="text-center text-white">
            <h2 className="mb-4">Annual Progression</h2>
            <p className="lead">
              Our High Safety Standards
            </p>
            <p className="text-light">
              The primary school at our Hindusthan Garden campus are well-equipped with CCTV cameras and fire safety equipment. Our school buses also always have CCTV and GPRS with a female attendant on board. Our teaching staff is also trained in First Aid and can handle all kinds of emergencies.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SafetyStandards;
