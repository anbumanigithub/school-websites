import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PortfolioSection = () => {
  return (
    <section className="overflow-hidden py-5 py-md-6 py-lg-7">
      <Container>

        <Row id="filterable-content">
          <Col sm={6} xl={4} className="filter-item all web illustrator">
            <Card className="shadow border">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/626964604/photo/running-outside-during-recess.jpg?s=612x612&w=0&k=20&c=WOutW-I6xnkNu-WEB1ZPQZJw8i_5q8eYhytZXIeneBE="
                alt="work-thumbnail"
                style={{ transition: 'transform 0.3s ease-in-out' }}
              />
              <Card.Body>
                <h5 className="mt-0">2nd Standard</h5>
                <p className="text-muted mb-1">
                  In Sri Vijay Vidhyalaya Boys School - Dharmapuri, my school won second prize in cricket. I was the wicketkeeper for all matches.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} xl={4} className="filter-item all illustrator">
            <Card className="shadow border">
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1663047290215-ca30fdbd0423?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FyYXRlJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="work-thumbnail"
                style={{ transition: 'transform 0.3s ease-in-out' }}
              />
              <Card.Body>
                <h5 className="mt-0">5th Standard</h5>
                <p className="text-muted mb-1">
                  At Sri Vijay Vidhyalaya Boys School - Dharmapuri, my team won the first prize in throwball.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} xl={4} className="filter-item all web photography">
            <Card className="shadow border">
              <Card.Img
                variant="top"
                src="https://www.sjis.edu.in/wp-content/uploads/2019/11/International-Yoga-Day-1-compressed-1140x500.jpg"
                alt="work-thumbnail"
                style={{ transition: 'transform 0.3s ease-in-out' }}
              />
              <Card.Body>
                <h5 className="mt-0">8th standard</h5>
                <p className="text-muted mb-1">
                  At the college level, my department won first prize in cricket, and I was the finisher and captain of the team.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} xl={4} className="filter-item all graphic">
            <Card className="shadow border">
              <Card.Img
                variant="top"
                src="https://www.ihf.info/sites/default/files/images/2.jpg"
                alt="work-thumbnail"
                style={{ transition: 'transform 0.3s ease-in-out' }}
              />
              <Card.Body>
                <h5 className="mt-0">9th standard</h5>
                <p className="text-muted mb-1">
                  During the college volleyball tournament, I played well and won second prize.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={4} className="filter-item all graphic">
            <Card className="shadow border">
              <Card.Img
                variant="top"
                src="https://blog.khelomore.com/wp-content/uploads/2017/12/IMG_2326.jpg"
                alt="work-thumbnail"
                style={{ transition: 'transform 0.3s ease-in-out' }}
              />
              <Card.Body>
                <h5 className="mt-0">10th  standard</h5>
                <p className="text-muted mb-1">
                  During the college volleyball tournament, I played well and won second prize.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={4} className="filter-item all graphic">
            <Card className="shadow border">
              <Card.Img
                variant="top"
                src="https://c8.alamy.com/comp/2M4N9MM/school-students-playing-volleyball-in-playground-stock-photos-2M4N9MM.jpg"
                alt="work-thumbnail"
                style={{ transition: 'transform 0.3s ease-in-out' }}
              />
              <Card.Body>
                <h5 className="mt-0"> 12th standard</h5>
                <p className="text-muted mb-1">
                  During the college volleyball tournament, I played well and won second prize.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSection;
