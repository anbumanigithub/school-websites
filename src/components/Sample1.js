// src/components/NewsNotifications.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const newsItems = [
  {
    image: 'https://via.placeholder.com/150?text=gallery18',
    title: "Institute of Technology’s Annual Cultural Meet held on 24th February 2023.",
    date: "June 23"
  },
  {
    image: 'https://via.placeholder.com/150?text=gallery7',
    title: "Institute of Technology’s Annual Cultural Meet held on 24th February 2023.",
    date: "June 23"
  },
  {
    image: 'https://via.placeholder.com/150?text=gallery30',
    title: "Institute of Technology’s Annual Cultural Meet held on 24th February 2023.",
    date: "June 23"
  },
  {
    image: 'https://via.placeholder.com/150?text=gallery28',
    title: "Institute of Technology’s Annual Cultural Meet held on 24th February 2023.",
    date: "June 23"
  },
  {
    image: 'https://via.placeholder.com/150?text=gallery18',
    title: "Institute of Technology’s Annual Cultural Meet held on 24th February 2023.",
    date: "June 23"
  },
  {
    image: 'https://via.placeholder.com/150?text=gallery7',
    title: "Institute of Technology’s Annual Cultural Meet held on 24th February 2023.",
    date: "June 23"
  }
];

const NewsNotifications = () => {
  return (
    <section style={{ padding: '3rem 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center mb-4">Latest News & Notifications</h2>
        <Row>
          {newsItems.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card style={{ border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <Card.Img variant="top" src={item.image} style={{ height: '180px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{item.title}</Card.Title>
                  <Card.Text style={{ color: '#6c757d', marginBottom: '1.5rem' }}>{item.date}</Card.Text>
                  <a href="!#" style={{ color: '#007bff', textDecoration: 'none' }}>Read more</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <button className="btn btn-primary me-2">Previous</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </Container>
    </section>
  );
};

export default NewsNotifications;
