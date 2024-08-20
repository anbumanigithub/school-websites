import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const newsItems = [
  {
    image: 'https://img.freepik.com/free-photo/schoolkids-having-science-experiment_23-2149211614.jpg',
    title: "Science Fair 2024: Students Showcase Innovative Projects",
    date: "August 18, 2024"
  },
  {
    image: 'https://img.freepik.com/free-photo/group-diverse-young-students-celebrating-graduation_53876-102695.jpg',
    title: "Annual Graduation Day: Celebrating Academic Achievements",
    date: "August 10, 2024"
  },
  {
    image: 'https://img.freepik.com/free-photo/teacher-students-school_53876-93019.jpg',
    title: "Interactive Learning Sessions: New Approaches to Education",
    date: "July 28, 2024"
  },
  {
    image: 'https://img.freepik.com/free-photo/kids-studying-science-experiment-lab_53876-91029.jpg',
    title: "Hands-On Learning: Exploring Science Through Experiments",
    date: "July 15, 2024"
  },
  {
    image: 'https://img.freepik.com/free-photo/kids-playing-sports-field_53876-74616.jpg',
    title: "Sports Day 2024: Encouraging Physical Fitness and Teamwork",
    date: "June 30, 2024"
  },
  {
    image: 'https://img.freepik.com/free-photo/indian-school-students-group-sitting-classroom_130568-392.jpg',
    title: "Cultural Fest 2024: A Celebration of Diversity and Talent",
    date: "June 23, 2024"
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
