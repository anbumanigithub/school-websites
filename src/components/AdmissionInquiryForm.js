
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AdmissionInquiryForm = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Enquiry Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formChildName">
            <Form.Label>Child's Name</Form.Label>
            <Form.Control type="text" placeholder="Enter child's name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formChildAge">
            <Form.Label>Child's Age</Form.Label>
            <Form.Control type="number" placeholder="Enter child's age" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formParentName">
            <Form.Label>Parent's Name</Form.Label>
            <Form.Control type="text" placeholder="Enter parent's name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter contact number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLocality">
            <Form.Label>Locality</Form.Label>
            <Form.Control type="text" placeholder="Enter your locality" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessageBox">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdmissionInquiryForm;
