 // src/components/Gallery.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
  // Array of image URLs for the gallery
  const images = [
    'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
    'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
    'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
    'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
    'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
    'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
    'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
    'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
    'https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
  ];

  return (
    <section id="gallery" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Gallery</h2>
        <Row>
          {images.map((url, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={url} alt={`Gallery image ${index + 1}`} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
    </section>
  );
};

export default Gallery;
